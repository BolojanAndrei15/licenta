import bcrypt from "bcryptjs";
import { PrismaClient } from "@/lib/generated/prisma";
import { NextResponse } from "next/server";
import axios from "axios";
import webdavClient from "@/lib/webdavClient";
const prisma = new PrismaClient();

// GET: Lista utilizatori (toți sau doar dintr-un departament dacă se trimite departament_id)
export async function GET(request) {
  try {
    const departament_id = request?.nextUrl?.searchParams?.get("departament_id");
    const where = departament_id ? { departament_id } : {};
    const utilizatori = await prisma.utilizatori.findMany({
      where,
      include: {
        departamente: { select: { nume: true } },
        roluri: {
          select: {
            id: true,
            nume: true,
            culoare: true,
          },
        },
      },
      orderBy: { nume: "asc" },
    });
    return NextResponse.json({ utilizatori });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

// POST: Creare utilizator
export async function POST(request) {
  try {
    const body = await request.json();

    // Verifică dacă rolul există
    const rol = await prisma.roluri.findUnique({ where: { id: body.rol_id } });
    if (!rol) {
      return NextResponse.json({ error: "Rolul nu există." }, { status: 400 });
    }

    // Verifică dacă departamentul există
    const departament = await prisma.departamente.findUnique({ where: { id: body.departament_id } });
    if (!departament) {
      return NextResponse.json({ error: "Departamentul nu există." }, { status: 400 });
    }

    // Hash-uiește parola
    const hashedPassword = await bcrypt.hash(body.password_hash, 10);

    // Creează utilizator în baza de date
    const utilizator = await prisma.utilizatori.create({
      data: {
        email: body.email,
        password_hash: hashedPassword,
        nume: body.nume,
        departament_id: body.departament_id,
        rol_id: body.rol_id,
      },
    });

    // Creează utilizator în Nextcloud în fundal
    (async () => {
      try {
        await webdavClient.createUser({
          userid: body.nume,
          password: body.password_hash,
          email: body.email,
        });
        if (rol.nume === "Administrator") {
          await webdavClient.addUserToGroup(body.nume, "admin");
        }
      } catch (e) {
        console.error("Error creating user in Nextcloud:", e.response?.data || e.message);
      }
    })();

    return NextResponse.json({ utilizator }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

// PUT: Editare utilizator
export async function PUT(request) {
  try {
    const body = await request.json();
    if (!body.id) return NextResponse.json({ error: "ID lipsă" }, { status: 400 });

    // Actualizează utilizatorul în baza de date
    const utilizator = await prisma.utilizatori.update({
      where: { id: body.id },
      data: {
        email: body.email,
        nume: body.nume,
        departament_id: body.departament_id,
        rol_id: body.rol_id,
        password_hash: body.password_hash ? await bcrypt.hash(body.password_hash, 10) : undefined,
      },
    });

    // Actualizează utilizatorul în Nextcloud în fundal
    (async () => {
      try {
        if (body.email) {
          await webdavClient.updateUserEmail(body.nume, body.email);
        }
        if (body.password_hash) {
          await webdavClient.updateUserPassword(body.nume, body.password_hash);
        }
      } catch (e) {
        console.error("Error updating user in Nextcloud:", e.response?.data || e.message);
      }
    })();

    return NextResponse.json({ utilizator });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

// DELETE: Stergere utilizator
export async function DELETE(request) {
  try {
    const body = await request.json();
    if (!body.id) return NextResponse.json({ error: "ID lipsă" }, { status: 400 });

    // Șterge utilizatorul din baza de date
    const utilizator = await prisma.utilizatori.delete({ where: { id: body.id } });

    // Șterge utilizatorul din Nextcloud în fundal
    (async () => {
      try {
        await webdavClient.deleteUser(utilizator.nume);
      } catch (e) {
        console.error("Error deleting user in Nextcloud:", e.response?.data || e.message);
      }
    })();

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
