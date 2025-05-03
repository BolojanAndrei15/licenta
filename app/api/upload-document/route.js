import { NextResponse } from "next/server";
import webdavClient from "../../../lib/webdavClient";

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
    if (!department || !register || !oldName || !newName) {
      return NextResponse.json({ error: "Lipsesc datele necesare pentru redenumire" }, { status: 400 });
    }
    await webdavClient.renameDocument(department, register, oldName, newName);
    return NextResponse.json({ success: true });
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
