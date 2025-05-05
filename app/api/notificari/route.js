import { PrismaClient } from "@/lib/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// GET: Notificari pentru un destinatar (destinatar_id ca query param)
export async function GET(request) {
  const destinatar_id = request.nextUrl.searchParams.get("destinatar_id");
  if (!destinatar_id) {
    return NextResponse.json({ error: "destinatar_id lipsă" }, { status: 400 });
  }
  const notificari = await prisma.notificari.findMany({
    where: { destinatar_id },
    orderBy: { created_at: "desc" },
    include: {
      documente: {
        select: { numar_document: true, rezumat: true }
      }
    }
  });
  return NextResponse.json({ notificari });
}

// DELETE: Șterge o notificare după id sau toate pentru un destinatar
export async function DELETE(request) {
  try {
    const body = await request.json();
    if (body.id) {
      await prisma.notificari.delete({ where: { id: body.id } });
      return NextResponse.json({ success: true });
    }
    if (body.destinatar_id) {
      await prisma.notificari.deleteMany({ where: { destinatar_id: body.destinatar_id } });
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ error: "ID notificare sau destinatar_id lipsă" }, { status: 400 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

// PATCH: Marchează o notificare ca citită/necitată sau toate pentru un destinatar
export async function PATCH(request) {
  try {
    const { id, citita, destinatar_id } = await request.json();
    if (id) {
      await prisma.notificari.update({ where: { id }, data: { citita: citita === undefined ? true : citita } });
      return NextResponse.json({ success: true });
    }
    if (destinatar_id && citita !== undefined) {
      await prisma.notificari.updateMany({ where: { destinatar_id }, data: { citita } });
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ error: "ID sau destinatar_id și citita lipsă" }, { status: 400 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}