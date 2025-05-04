import { PrismaClient } from "@/lib/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// Creare document cu destinatar opțional (poate fi null)
export async function POST(request) {
  try {
    const body = await request.json();
    if ("numar_inregistrare" in body) delete body.numar_inregistrare;
    let doc;
    try {
      doc = await prisma.documente.create({
        data: {
          registru_id: body.registru_id,
          numar_document: body.numar_document,
          data_document: new Date(body.data_document),
          sursa: body.sursa,
          rezumat: body.rezumat,
          departament_adresat: body.departament_adresat,
          destinatar_id: body.destinatar_id || null,
          tip_document_id: body.tip_document_id,
          data_expedierii: new Date(body.data_expedierii),
          inregistrat_de: body.inregistrat_de,
          preluat_de: body.preluat_de,
          stadiu: body.stadiu || undefined,
        },
        include: { registre: { include: { departamente: true } } },
      });
    } catch (err) {
      // Check for Postgres sequence max value error
      if (err.code === '2200H' || (err.message && err.message.includes('reached maximum value of sequence'))) {
        // Extend interval in DB
        const { registru_id } = body;
        // Call the function to extend the interval
        await prisma.$executeRaw`SELECT extend_registru_interval(${registru_id}::uuid)`;
        // Retry document creation
        doc = await prisma.documente.create({
          data: {
            registru_id: body.registru_id,
            numar_document: body.numar_document,
            data_document: new Date(body.data_document),
            sursa: body.sursa,
            rezumat: body.rezumat,
            departament_adresat: body.departament_adresat,
            destinatar_id: body.destinatar_id || null,
            tip_document_id: body.tip_document_id,
            data_expedierii: new Date(body.data_expedierii),
            inregistrat_de: body.inregistrat_de,
            preluat_de: body.preluat_de,
            stadiu: body.stadiu || undefined,
          },
        });
      } else {
        throw err;
      }
    }
    return NextResponse.json({ document: doc }, { status: 201 });
  } catch (err) {
    if (
      err.code === 'P0001' ||
      (err.message && err.message.includes('Nu mai sunt numere disponibile în registru'))
    ) {
      return NextResponse.json({ error: 'Nu mai sunt numere disponibile pentru acest registru. Contactați administratorul.' }, { status: 400 });
    }
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

// Editare document
export async function PUT(request) {
  try {
    const body = await request.json();
    if (!body.id) return NextResponse.json({ error: "ID lipsă" }, { status: 400 });
    // Filtrăm doar câmpurile permise la update
    const allowedFields = [
      "registru_id", "numar_document", "data_document", "sursa", "rezumat", "departament_adresat",
      "destinatar_id", "tip_document_id", "data_expedierii", "creat_la", "inregistrat_de", "preluat_de", "stadiu"
    ];
    const updateData = {};
    for (const key of allowedFields) {
      if (body[key] !== undefined) updateData[key] = body[key];
    }
    // Conversie date
    if (updateData.data_document) updateData.data_document = new Date(updateData.data_document);
    if (updateData.data_expedierii) updateData.data_expedierii = new Date(updateData.data_expedierii);
    const doc = await prisma.documente.update({
      where: { id: body.id },
      data: updateData,
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

// Elimin implementarea pentru /next-number, GET rămâne doar pentru documente
export async function GET(request) {
  const registruId = request.nextUrl.searchParams.get("registru_id");
  let documente;
  if (registruId) {
    documente = await prisma.documente.findMany({
      where: { registru_id: registruId },
      include: {
        utilizatori_documente_destinatar_idToutilizatori: { select: { nume: true } },
        tipuri_documente: { select: { nume: true } },
        registre: { select: { nume: true } },
        utilizatori_documente_inregistrat_deToutilizatori: { select: { nume: true } },
        utilizatori_documente_preluat_deToutilizatori: { select: { nume: true } },
      },
      orderBy: { numar_inregistrare: "desc" },
    });
  } else {
    documente = await prisma.documente.findMany({
      include: {
        utilizatori_documente_destinatar_idToutilizatori: { select: { nume: true } },
        tipuri_documente: { select: { nume: true } },
        registre: { select: { nume: true } },
        utilizatori_documente_inregistrat_deToutilizatori: { select: { nume: true } },
        utilizatori_documente_preluat_deToutilizatori: { select: { nume: true } },
      },
      orderBy: { numar_inregistrare: "desc" },
    });
  }
  // Mapăm rezultatul pentru a returna TOATE câmpurile modelului documente + nume destinatar, tip document, registru, inregistrat de, preluat de
  const documenteMapped = documente.map(doc => ({
    id: doc.id,
    registru_id: doc.registru_id,
    numar_inregistrare: doc.numar_inregistrare,
    data: doc.data,
    numar_document: doc.numar_document,
    data_document: doc.data_document,
    sursa: doc.sursa,
    rezumat: doc.rezumat,
    departament_adresat: doc.departament_adresat,
    destinatar_id: doc.destinatar_id,
    tip_document_id: doc.tip_document_id,
    data_expedierii: doc.data_expedierii,
    creat_la: doc.creat_la,
    inregistrat_de: doc.inregistrat_de,
    preluat_de: doc.preluat_de,
    stadiu: doc.stadiu,
    destinatar_nume: doc.utilizatori_documente_destinatar_idToutilizatori?.nume || null,
    tip_document_nume: doc.tipuri_documente?.nume || null,
    registru_nume: doc.registre?.nume || null,
    inregistrat_de_nume: doc.utilizatori_documente_inregistrat_deToutilizatori?.nume || null,
    preluat_de_nume: doc.utilizatori_documente_preluat_deToutilizatori?.nume || null,
  }));
  return NextResponse.json({ documente: documenteMapped });
}
