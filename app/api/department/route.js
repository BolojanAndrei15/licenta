import prisma from '../../../lib/prismaClient';
import webdavClient from '../../../lib/webdavClient';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const json = await request.json();
    const { nume, descriere } = json;

    // Validare parametri
    if (!nume || !descriere) {
      return new NextResponse(JSON.stringify({ message: 'Câmpurile nume și descriere sunt obligatorii.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Verifică dacă există deja un departament cu același nume
    const existing = await prisma.departamente.findUnique({ where: { nume } });
    if (existing) {
      return new NextResponse(JSON.stringify({ message: 'Există deja un departament cu acest nume.' }), {
        status: 409,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const department = await prisma.departamente.create({
      data: { nume, descriere },
    });

    // Creează folder în WebDAV
    let webdavCreateError = false;
    try {
      await webdavClient.addDepartmentFolder(nume);
    } catch (e) {
      webdavCreateError = true;
    }
    const responseBody = webdavCreateError
      ? { ...department, webdavWarning: 'Atenție: folderul nu a fost creat în Nextcloud, trebuie creat manual!' }
      : department;
    return new NextResponse(JSON.stringify(responseBody), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: 'Failed to create department' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function PUT(request) {
  try {
    const json = await request.json();
    const { id, nume, descriere } = json;

    if (!id || !nume || !descriere) {
      return new NextResponse(JSON.stringify({ message: 'Id, nume și descriere sunt obligatorii.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Obține numele vechi
    const oldDepartment = await prisma.departamente.findUnique({ where: { id } });
    const updatedDepartment = await prisma.departamente.update({
      where: { id: id },
      data: {
        nume: nume,
        descriere: descriere,
      },
    });

    // Redenumește folderul dacă s-a schimbat numele
    let webdavRenameError = false;
    if (oldDepartment && oldDepartment.nume !== nume) {
      try {
        await webdavClient.renameDepartmentFolder(oldDepartment.nume, nume);
      } catch (e) {
        webdavRenameError = true;
      }
    }
    const updateResponseBody = webdavRenameError
      ? { ...updatedDepartment, webdavWarning: 'Atenție: redenumirea folderului nu s-a realizat în Nextcloud, trebuie făcută manual!' }
      : updatedDepartment;
    return new NextResponse(JSON.stringify(updateResponseBody), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: 'Failed to update department' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return new NextResponse(JSON.stringify({ message: 'Department ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Obține numele departamentului pentru ștergere folder
    const department = await prisma.departamente.findUnique({ where: { id } });
    if (!department) {
      return new NextResponse(JSON.stringify({ message: 'Departamentul nu există.' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Șterge departamentul din baza de date (utilizatorii vor avea departament_id = NULL)
    await prisma.departamente.delete({
      where: { id },
    });

    // Șterge folderul din WebDAV în fundal
    (async () => {
      try {
        await webdavClient.deleteDepartmentFolder(department.nume);
        console.log(`Folderul ${department.nume} a fost șters din Nextcloud.`);
      } catch (e) {
        console.error(`Eroare la ștergerea folderului ${department.nume} din Nextcloud:`, e.message);
      }
    })();

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Eroare la ștergerea departamentului:", error.message);
    return new NextResponse(JSON.stringify({ message: 'Failed to delete department' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function GET() {
  try {
    // Obține numărul total de documente
    const totalDocumente = await prisma.documente.count();
    const departments = await prisma.departamente.findMany({
      include: {
        _count: {
          select: {
            utilizatori: true,
            registre: true,
          },
        },
      },
    });
    // Transformăm rezultatul pentru a avea direct utilizatori și registre
    const result = departments.map(dep => ({
      ...dep,
      utilizatori: dep._count.utilizatori,
      registre: dep._count.registre,
      _count: undefined,
    }));
    return new NextResponse(JSON.stringify({ departments: result, totalDocumente }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: 'Failed to fetch departments' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}