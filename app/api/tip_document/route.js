import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const tipuri = await prisma.tipuri_documente.findMany({
      orderBy: { nume: "asc" }
    });
    return Response.json(tipuri, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}
