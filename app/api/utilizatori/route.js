import bcrypt from "bcryptjs";
import { PrismaClient } from "@/lib/generated/prisma";
import { NextResponse } from "next/server";
import axios from "axios";
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
    let nextcloudError = null;
    // Creează utilizator în Nextcloud
    try {
      await axios.post(
        "http://localhost:8080/ocs/v1.php/cloud/users",
        new URLSearchParams({
          userid: body.nume, // folosește câmpul Nume ca username în Nextcloud
          password: body.password_hash, // parola necriptată pentru Nextcloud
          email: body.email,
        }),
        {
          headers: {
            "OCS-APIRequest": "true",
            "Content-Type": "application/x-www-form-urlencoded",
          },
          auth: {
            username: "bolojanandrei539@gmail.com",
            password: "1234",
          },
        }
      );
      // Dacă rolul este Administrator, adaugă userul în grupul 'admin' din Nextcloud
      if (rol.nume === "Administrator") {
        await axios.post(
          `http://localhost:8080/ocs/v1.php/cloud/users/${encodeURIComponent(body.nume)}/groups`,
          new URLSearchParams({ groupid: "admin" }),
          {
            headers: {
              "OCS-APIRequest": "true",
              "Content-Type": "application/x-www-form-urlencoded",
            },
            auth: {
              username: "bolojanandrei539@gmail.com",
              password: "1234",
            },
          }
        );
      }
    } catch (e) {
      // Dacă utilizatorul există deja în Nextcloud, continuă
      if (!e.response || e.response.status !== 409) {
        const ncMsg = e.response?.data?.ocs?.meta?.message || "";
        nextcloudError =
          "Utilizatorul nu a putut fi creat în Nextcloud, te rugăm să-l creezi manual. " + ncMsg;
      }
    }
    const utilizator = await prisma.utilizatori.create({
      data: {
        email: body.email,
        password_hash: hashedPassword,
        nume: body.nume,
        departament_id: body.departament_id,
        rol_id: body.rol_id,
      },
    });
    return NextResponse.json({ utilizator, nextcloudError }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

// PUT: Editare utilizator
export async function PUT(request) {
  try {
    const body = await request.json();
    if (!body.id) return NextResponse.json({ error: "ID lipsă" }, { status: 400 });
    let nextcloudError = null;
    // Update utilizator în Nextcloud (parolă și email)
    try {
      if (body.email) {
        await axios.put(
          `http://localhost:8080/ocs/v1.php/cloud/users/${body.email}`,
          new URLSearchParams({
            key: "email",
            value: body.email,
          }),
          {
            headers: {
              "OCS-APIRequest": "true",
              "Content-Type": "application/x-www-form-urlencoded",
            },
            auth: {
              username: "bolojanandrei539@gmail.com",
              password: "1234",
            },
          }
        );
      }
      if (body.password_hash) {
        await axios.put(
          `http://localhost:8080/ocs/v1.php/cloud/users/${body.email}/password`,
          new URLSearchParams({
            password: body.password_hash,
          }),
          {
            headers: {
              "OCS-APIRequest": "true",
              "Content-Type": "application/x-www-form-urlencoded",
            },
            auth: {
              username: "bolojanandrei539@gmail.com",
              password: "1234",
            },
          }
        );
      }
    } catch (e) {
      const ncMsg = e.response?.data?.ocs?.meta?.message || "";
      nextcloudError =
        "Utilizatorul nu a putut fi actualizat în Nextcloud, te rugăm să-l actualizezi manual. " + ncMsg;
    }
    const utilizator = await prisma.utilizatori.update({
      where: { id: body.id },
      data: {
        email: body.email,
        nume: body.nume,
        departament_id: body.departament_id,
        rol_id: body.rol_id,
        password_hash: body.password_hash,
      },
    });
    return NextResponse.json({ utilizator, nextcloudError });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

// DELETE: Stergere utilizator
export async function DELETE(request) {
  try {
    const body = await request.json();
    if (!body.id) return NextResponse.json({ error: "ID lipsă" }, { status: 400 });
    let nextcloudError = null;
    // Șterge utilizatorul și din Nextcloud
    try {
      // Caută emailul utilizatorului
      const user = await prisma.utilizatori.findUnique({ where: { id: body.id } });
      if (user?.email) {
        await axios.delete(
          `http://localhost:8080/ocs/v1.php/cloud/users/${user.email}`,
          {
            headers: {
              "OCS-APIRequest": "true",
            },
            auth: {
              username: "bolojanandrei539@gmail.com",
              password: "1234",
            },
          }
        );
      }
    } catch (e) {
      const ncMsg = e.response?.data?.ocs?.meta?.message || "";
      nextcloudError =
        "Utilizatorul nu a putut fi șters din Nextcloud, te rugăm să-l ștergi manual. " + ncMsg;
    }
    await prisma.utilizatori.delete({ where: { id: body.id } });
    return NextResponse.json({ success: true, nextcloudError });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
