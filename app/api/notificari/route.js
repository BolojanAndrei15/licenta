import { NextResponse } from "next/server";
import prisma from "@/lib/prismaClient"; // Import shared Prisma client

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
  return NextResponse.json({ notificari: Array.isArray(notificari) ? notificari : [] });
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

// PATCH: Marchează o notificare ca citită/necitată, toate pentru un destinatar, sau acceptă o notificare de document
export async function PATCH(request) {
  try {
    const body = await request.json();
    const { id, citita, destinatar_id, document_id, preluat_de, status } = body;

    // Logic for accepting a document notification
    if (id && document_id && preluat_de && status === 'atribuit') {
      try {
        const result = await prisma.$transaction(async (tx) => {
          // 1. Update the notification
          const updatedNotificare = await tx.notificari.update({
            where: { id },
            data: {
              citita: true, // Mark as read when accepted
              status: 'atribuit',
            },
          });

          // 2. Update the document
          const updatedDocument = await tx.documente.update({
            where: { id: document_id },
            data: {
              preluat_de: preluat_de,
              // Optionally update document status here as well, e.g.:
              // stadiu: 'Preluat',
            },
          });

          if (!updatedNotificare || !updatedDocument) {
             throw new Error("Actualizarea notificării sau a documentului a eșuat.");
          }

          return { updatedNotificare, updatedDocument };
        });

        console.log("Transaction successful:", result);
        return NextResponse.json({ success: true, message: "Notificare și document actualizate." });

      } catch (transactionError) {
        console.error("Transaction failed:", transactionError);
        // Check for specific Prisma errors if needed
        // if (transactionError instanceof Prisma.PrismaClientKnownRequestError) { ... }
        return NextResponse.json({ error: `Eroare în tranzacție: ${transactionError.message}` }, { status: 500 });
      }
    }

    // Existing logic for marking single notification as read/unread
    // Ensure 'citita' is explicitly provided for this action
    if (id && citita !== undefined) {
       await prisma.notificari.update({
         where: { id },
         data: { citita }, // Use the provided citita value
       });
       return NextResponse.json({ success: true });
    }

    // Existing logic for marking all notifications for a user as read/unread
    if (destinatar_id && citita !== undefined) {
      await prisma.notificari.updateMany({
        where: { destinatar_id },
        data: { citita },
      });
      return NextResponse.json({ success: true });
    }

    // If none of the conditions match
    return NextResponse.json({ error: "Parametri invalizi sau lipsă pentru operația PATCH." }, { status: 400 });

  } catch (err) {
    console.error("PATCH Error:", err);
    return NextResponse.json({ error: `Eroare server: ${err.message}` }, { status: 500 });
  }
}