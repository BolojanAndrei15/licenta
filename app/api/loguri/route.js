import { PrismaClient } from "@/lib/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request) {
  const url = new URL(request.url);
  const severitate = url.searchParams.get("severitate");
  const actiune = url.searchParams.get("actiune");
  const utilizator_id = url.searchParams.get("utilizator_id");
  const data = url.searchParams.get("data");
  const page = parseInt(url.searchParams.get("page") || "1", 10);
  const pageSize = parseInt(url.searchParams.get("pageSize") || "10", 10);
  const skip = (page - 1) * pageSize;

  const where = {};
  if (severitate) where.severitate = severitate;
  if (actiune) where.actiune = actiune;
  if (utilizator_id) where.utilizator_id = utilizator_id;
  if (data) {
    const start = new Date(data + "T00:00:00.000Z");
    const end = new Date(data + "T23:59:59.999Z");
    where.timestamp = { gte: start, lte: end };
  }

  const [loguri, total, totalError, totalWarning, totalInfo] = await Promise.all([
    prisma.audit_logs.findMany({
      where,
      include: { utilizatori: { select: { nume: true } } },
      orderBy: { timestamp: "desc" },
      skip,
      take: pageSize,
    }),
    prisma.audit_logs.count({ where }),
    prisma.audit_logs.count({ where: { ...where, severitate: "ERROR" } }),
    prisma.audit_logs.count({ where: { ...where, severitate: "WARNING" } }),
    prisma.audit_logs.count({ where: { ...where, severitate: "INFO" } }),
  ]);

  return NextResponse.json({ loguri, total, totalError, totalWarning, totalInfo });
}
