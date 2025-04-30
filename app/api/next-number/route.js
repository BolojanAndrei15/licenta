import { PrismaClient } from "@/lib/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request) {
  const url = new URL(request.url);
  const registruId = url.searchParams.get("registru_id");
  if (!registruId) return NextResponse.json({ error: "registru_id lipsă" }, { status: 400 });
  const max = await prisma.documente.aggregate({
    where: { registru_id: registruId },
    _max: { numar_inregistrare: true }
  });
  const registru = await prisma.registre.findUnique({ where: { id: registruId } });
  const minVal = registru?.min_val ?? 1;
  const nextNumber = Math.max(minVal, (max._max.numar_inregistrare ?? (minVal - 1)) + 1);
  return NextResponse.json({ nextNumber });
}
