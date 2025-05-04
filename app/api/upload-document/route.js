import { NextResponse } from "next/server";
import webdavClient from "../../../lib/webdavClient";
import { createReadStream } from "fs";
import { join } from "path";
import prisma from '../../../lib/prismaClient';
import { stat } from "fs/promises";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    const department = formData.get("department");
    const register = formData.get("register");
    const documentName = formData.get("documentName");
    if (!file || !department || !register || !documentName) {
      return NextResponse.json({ error: "Lipsesc datele necesare" }, { status: 400 });
    }
    // Extrage extensia și numele original
    const originalName = file.name || "document";
    const ext = originalName.includes('.') ? originalName.substring(originalName.lastIndexOf('.')) : '';
    // Construiește numele final: NumeOriginalFaraExtensie_id.extensie
    const baseName = originalName.replace(ext, '');
    const finalName = `${baseName}_${documentName}${ext}`;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    await webdavClient.addDocumentToRegister(department, register, finalName, buffer);
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: "Eroare la upload Nextcloud" }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const formData = await req.formData();
    const department = formData.get("department");
    const register = formData.get("register");
    const oldName = formData.get("oldName");
    const newName = formData.get("newName");
    // Logare pentru debugging
    console.log("[PUT] Redenumire document:", { department, register, oldName, newName });
    if (!department || !register || !oldName || !newName) {
      return NextResponse.json({ error: "Lipsesc datele necesare pentru redenumire" }, { status: 400 });
    }
    try {
      await webdavClient.renameDocument(department, register, oldName, newName);
      return NextResponse.json({ success: true });
    } catch (err) {
      // Logare eroare detaliată
      console.error("Eroare redenumire Nextcloud:", err?.response?.data || err.message);
      // Returnează mesajul real de la Nextcloud dacă există
      return NextResponse.json({ error: err?.response?.data || err.message }, { status: err?.response?.status || 500 });
    }
  } catch (e) {
    return NextResponse.json({ error: "Eroare la redenumire Nextcloud" }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { department, register, documentName } = await req.json();
    if (!department || !register || !documentName) {
      return NextResponse.json({ error: "Lipsesc datele necesare pentru ștergere" }, { status: 400 });
    }
    await webdavClient.deleteDocument(department, register, documentName);
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: "Eroare la ștergere Nextcloud" }, { status: 500 });
  }
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  // Download direct: /api/upload-document/download?department=...&register=...&filename=...
  if (searchParams.get("download") === "1") {
    const department = searchParams.get("department");
    const register = searchParams.get("register");
    const filename = searchParams.get("filename");
    if (!department || !register || !filename) {
      return new Response("Parametri lipsă", { status: 400 });
    }
    try {
      const { buffer, contentType } = await webdavClient.getDocumentStream(department, register, filename);
      return new Response(buffer, {
        headers: {
          "Content-Type": contentType,
          "Content-Disposition": `inline; filename=\"${filename}\"`,
        },
      });
    } catch (e) {
      return new Response("Eroare la accesarea fișierului din Nextcloud", { status: 404 });
    }
  }
  // GET /api/upload-document?retrieve=1&department=...&register=...&iddocument=...
  if (searchParams.get("retrieve") === "1") {
    const department = searchParams.get("department");
    const register = searchParams.get("register");
    const iddocument = searchParams.get("iddocument");
    if (!department || !register || !iddocument) {
      return NextResponse.json({ error: "Lipsesc datele necesare pentru retrieve" }, { status: 400 });
    }
    try {
      const files = await webdavClient.retrieveDocumentById(department, register, iddocument);
      return NextResponse.json({ files });
    } catch (e) {
      return NextResponse.json({ error: "Eroare la retrieve Nextcloud" }, { status: 500 });
    }
  }
  const documentId = searchParams.get("document_id");
  if (!documentId) {
    return new Response("document_id lipsă", { status: 400 });
  }
  // Caută documentul în baza de date
  const doc = await prisma.documente.findUnique({ where: { id: documentId } });
  if (!doc || !doc.file_path) {
    return new Response("Document inexistent", { status: 404 });
  }
  const filePath = join(process.cwd(), "public", doc.file_path);
  try {
    await stat(filePath); // verifică dacă fișierul există
    const stream = createReadStream(filePath);
    const ext = filePath.split('.').pop();
    let contentType = "application/octet-stream";
    if (ext === "pdf") contentType = "application/pdf";
    if (["jpg", "jpeg"].includes(ext)) contentType = "image/jpeg";
    if (ext === "png") contentType = "image/png";
    if (ext === "doc") contentType = "application/msword";
    if (ext === "docx") contentType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    return new Response(stream, {
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename=\"${doc.nume_fisier || "document"}.${ext}\"`,
      },
    });
  } catch {
    return new Response("Fișierul nu există pe server", { status: 404 });
  }
}
