import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

export async function POST(request) {
  const data = await request.json();
  try {
    const registru = await prisma.registre.create({ data });
    return Response.json(registru, { status: 201 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}

export async function PUT(request) {
  const data = await request.json();
  const { id, ...updateData } = data;
  // Elimină orice cheie care nu există în modelul Prisma
  delete updateData.key; // elimină cheia invalidă dacă există
  // Nu permite modificarea min_val și max_val
  delete updateData.min_val;
  delete updateData.max_val;
  try {
    const registru = await prisma.registre.update({
      where: { id },
      data: updateData,
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
      },
      orderBy: { nume: "asc" },
    });
    // Adaugă numărul de înregistrări pentru fiecare registru
    const result = registre.map(reg => ({
      ...reg,
      numar_inregistrari: reg.documente.length,
    }));
    return Response.json(result, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}
