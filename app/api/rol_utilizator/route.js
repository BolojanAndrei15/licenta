import { PrismaClient } from "@/lib/generated/prisma";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET() {
  try {
    const roluri = await prisma.roluri.findMany({
      orderBy: { nume: "asc" }
    });
    return NextResponse.json(roluri, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    if (!body.nume) {
      return NextResponse.json({ error: "Numele rolului este obligatoriu." }, { status: 400 });
    }
    const rol = await prisma.roluri.create({
      data: {
        nume: body.nume,
        descriere: body.descriere || null,
      },
    });
    return NextResponse.json(rol, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    if (!body.id) {
      return NextResponse.json({ error: "ID lipsă" }, { status: 400 });
    }
    const rol = await prisma.roluri.update({
      where: { id: body.id },
      data: {
        nume: body.nume,
        descriere: body.descriere || null,
      },
    });
    return NextResponse.json(rol);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

export async function DELETE(request) {
  try {
    const body = await request.json();
    if (!body.id) {
      return NextResponse.json({ error: "ID lipsă" }, { status: 400 });
    }
    await prisma.roluri.delete({ where: { id: body.id } });
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}