import { PrismaClient } from "@prisma/client";
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
