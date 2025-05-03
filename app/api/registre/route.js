import webdavClient from '../../../lib/webdavClient';
import prisma from '../../../lib/prismaClient';

export async function POST(request) {
  const data = await request.json();
  try {
    // Asigură-te că tip_registru_id este prezent
    if (!data.tip_registru_id) {
      return Response.json({ error: 'tip_registru_id este obligatoriu' }, { status: 400 });
    }
    if (data.min_val === "" || data.min_val === undefined) data.min_val = null;
    if (data.max_val === "" || data.max_val === undefined) data.max_val = null;
    const registru = await prisma.registre.create({
      data,
      include: { tip_registru: true, departamente: true },
    });
    // Creează folder în Nextcloud în interiorul departamentului
    let webdavCreateError = false;
    if (registru.departamente && registru.departamente.nume && registru.nume) {
      try {
        await webdavClient.addRegisterFolder(registru.departamente.nume, registru.nume);
      } catch (e) {
        webdavCreateError = true;
      }
    }
    if (webdavCreateError) {
      return Response.json({
        ...registru,
        webdavWarning: 'Atenție: registrul a fost creat în aplicație, dar nu a putut fi creat folderul în Nextcloud. Trebuie creat manual!'
      }, { status: 201 });
    }
    return Response.json(registru, { status: 201 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}

export async function PUT(request) {
  const data = await request.json();
  const { id, nume, descriere, departament_id, min_val, max_val, an, tip_registru_id } = data;
  const updateData = { nume, descriere, departament_id, min_val, max_val, an, tip_registru_id };
  try {
    if (updateData.tip_registru_id === undefined) {
      return Response.json({ error: 'tip_registru_id este obligatoriu' }, { status: 400 });
    }
    if (updateData.an !== undefined) {
      updateData.an = Number(updateData.an);
    }
    // Obține registrul vechi cu departamentul asociat
    const oldRegistru = await prisma.registre.findUnique({
      where: { id },
      include: { departamente: true },
    });
    const registru = await prisma.registre.update({
      where: { id },
      data: updateData,
      include: { tip_registru: true, departamente: true },
    });
    // Redenumește folderul dacă s-a schimbat numele
    let webdavRenameError = false;
    if (
      oldRegistru &&
      oldRegistru.nume !== nume &&
      oldRegistru.departamente?.nume &&
      nume
    ) {
      try {
        await webdavClient.renameRegisterFolder(oldRegistru.departamente.nume, oldRegistru.nume, nume);
      } catch (e) {
        webdavRenameError = true;
      }
    }
    if (webdavRenameError) {
      return Response.json({
        ...registru,
        webdavWarning: 'Atenție: registrul a fost editat în aplicație, dar folderul nu a putut fi redenumit în Nextcloud. Trebuie redenumit manual!'
      });
    }
    return Response.json(registru);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(request) {
  const { id } = await request.json();
  try {
    // Obține registrul cu departamentul asociat pentru a șterge folderul
    const registru = await prisma.registre.findUnique({
      where: { id },
      include: { departamente: true },
    });
    await prisma.registre.delete({ where: { id } });
    // Șterge folderul din WebDAV
    let webdavDeleteError = false;
    if (registru?.departamente?.nume && registru?.nume) {
      try {
        await webdavClient.deleteRegisterFolder(registru.departamente.nume, registru.nume);
      } catch (e) {
        webdavDeleteError = true;
      }
    }
    if (webdavDeleteError) {
      return Response.json({
        warning: 'Atenție: registrul a fost șters din aplicație, dar folderul nu a putut fi șters din Nextcloud. Trebuie șters manual!'
      }, { status: 204 });
    }
    return Response.json(null, { status: 204 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const departament_id = searchParams.get("departament_id");
  try {
    if (id) {
      const registru = await prisma.registre.findUnique({
        where: { id },
        include: { departamente: true, tip_registru: true },
      });
      return Response.json({ registru }, { status: 200 });
    }
    // Dacă nu există un ID, returnează lista de registre
    const where = departament_id ? { departament_id } : {};
    const registre = await prisma.registre.findMany({
      where,
      include: {
        departamente: true,
        documente: true,
        tip_registru: true,
      },
      orderBy: { nume: "asc" },
    });
    const result = registre.map(reg => ({
      ...reg,
      numar_inregistrari: reg.documente.length,
      an: reg.an,
      tip_registru: reg.tip_registru
    }));
    const ani = await prisma.registre.findMany({
      select: { an: true },
      distinct: ['an'],
      orderBy: { an: 'desc' },
    });
    const aniUnici = Array.from(new Set(ani.map(a => a.an)));
    const tipuri_registru = await prisma.tipuri_registru.findMany({
      select: { id: true, nume: true },
      orderBy: { nume: "asc" }
    });
    return Response.json({ registre: result, ani: aniUnici, tipuri_registru }, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}
