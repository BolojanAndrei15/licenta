import { PrismaClient } from "@/lib/generated/prisma";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

// Creare document cu numar_inregistrare primit din body
export async function POST(request) {
  try {
    const body = await request.json();
    const doc = await prisma.documente.create({
      data: {
        registru_id: body.registru_id,
        numar_inregistrare: body.numar_inregistrare, // acum se preia din body
        numar_document: body.numar_document,
        data_document: new Date(body.data_document),
        sursa: body.sursa,
        rezumat: body.rezumat,
        departament_adresat: body.departament_adresat,
        destinatar_id: body.destinatar_id,
        tip_document_id: body.tip_document_id,
        data_expedierii: new Date(body.data_expedierii),
        inregistrat_de: body.inregistrat_de,
        preluat_de: body.preluat_de,
        stadiu: body.stadiu || undefined,
      },
    });
    return NextResponse.json({ document: doc }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

// Editare document
export async function PUT(request) {
  try {
    const body = await request.json();
    if (!body.id) return NextResponse.json({ error: "ID lipsă" }, { status: 400 });
    const doc = await prisma.documente.update({
      where: { id: body.id },
      data: {
        registru_id: body.registru_id,
        numar_inregistrare: body.numar_inregistrare,
        numar_document: body.numar_document,
        data_document: body.data_document ? new Date(body.data_document) : undefined,
        sursa: body.sursa,
        rezumat: body.rezumat,
        departament_adresat: body.departament_adresat,
        destinatar_id: body.destinatar_id,
        tip_document_id: body.tip_document_id,
        data_expedierii: body.data_expedierii ? new Date(body.data_expedierii) : undefined,
        inregistrat_de: body.inregistrat_de,
        preluat_de: body.preluat_de,
        stadiu: body.stadiu,
      },
    });
    return NextResponse.json({ document: doc });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

// Ștergere document
export async function DELETE(request) {
  try {
    const body = await request.json();
    if (!body.id) return NextResponse.json({ error: "ID lipsă" }, { status: 400 });
    await prisma.documente.delete({ where: { id: body.id } });
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

// Preluare toate documentele
export async function GET(request) {
  try {
    const registruId = request.nextUrl.searchParams.get("registru_id");
    let documente;
    if (registruId) {
      // Doar documentele dintr-un registru selectat
      documente = await prisma.documente.findMany({
        where: { registru_id: registruId },
      });
    } else {
      // Toate documentele
      documente = await prisma.documente.findMany();
    }
    return NextResponse.json({ documente });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
