import { NextResponse } from "next/server";
import { createClient } from "webdav";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    const documentId = formData.get("documentId");

    if (!file || !documentId) {
      return NextResponse.json({ error: "Lipsesc datele necesare" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const client = createClient(
      "http://localhost:8080/remote.php/dav/files/bolojanandrei539@gmail.com/",
      {
        username: "bolojanandrei539@gmail.com",
        password: "1234",
      }
    );

    const destPath = `${documentId}_${file.name}`;
    await client.putFileContents(destPath, buffer, { overwrite: true });

    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: "Eroare la upload Nextcloud" }, { status: 500 });
  }
}
