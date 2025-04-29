import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

export async function POST(request) {
  const data = await request.json();
  try {
    // Asigură-te că tip_registru_id este prezent
    if (!data.tip_registru_id) {
      return Response.json({ error: 'tip_registru_id este obligatoriu' }, { status: 400 });
    }
    // Setează valori implicite pentru min_val și max_val dacă lipsesc
    if (data.min_val === undefined) data.min_val = 1;
    if (data.max_val === undefined) data.max_val = 999999;
    const registru = await prisma.registre.create({
      data,
      include: { tip_registru: true },
    });
    return Response.json(registru, { status: 201 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}

export async function PUT(request) {
  const data = await request.json();
  const { id, ...updateData } = data;
  delete updateData.key;
  delete updateData.min_val;
  delete updateData.max_val;
  try {
    // Asigură-te că tip_registru_id nu lipsește dacă se trimite
    if (updateData.tip_registru_id === undefined) {
      return Response.json({ error: 'tip_registru_id este obligatoriu' }, { status: 400 });
    }
    // Conversie sigură pentru an (dacă există)
    if (updateData.an !== undefined) {
      updateData.an = Number(updateData.an);
    }
    const registru = await prisma.registre.update({
      where: { id },
      data: updateData,
      include: { tip_registru: true },
    });
    return Response.json(registru);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(request) {
  const { id } = await request.json();
  try {
    await prisma.registre.delete({ where: { id } });
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const departament_id = searchParams.get("departament_id");
  const where = departament_id ? { departament_id } : {};
  try {
    const registre = await prisma.registre.findMany({
      where,
      include: {
        departamente: true,
        documente: true,
        tip_registru: true,
      },
      orderBy: { nume: "asc" },
    });
    const result = registre.map(reg => ({
      ...reg,
      numar_inregistrari: reg.documente.length,
      an: reg.an,
      tip_registru: reg.tip_registru // include tipul de registru în răspuns
    }));
    const ani = await prisma.registre.findMany({
      select: { an: true },
      distinct: ['an'],
      orderBy: { an: 'desc' },
    });
    const aniUnici = Array.from(new Set(ani.map(a => a.an)));
    // Fetch tipuri_registru pentru dropdown
    const tipuri_registru = await prisma.tipuri_registru.findMany({
      select: { id: true, nume: true },
      orderBy: { nume: "asc" }
    });
    return Response.json({ registre: result, ani: aniUnici, tipuri_registru }, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}
