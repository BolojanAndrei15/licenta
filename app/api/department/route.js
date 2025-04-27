import { PrismaClient } from '../../../lib/generated/prisma';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

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

    return new NextResponse(JSON.stringify(department), {
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
    const { id, ...updateData } = json;

    const updatedDepartment = await prisma.departamente.update({
      where: { id: id },
      data: updateData,
    });

    return new NextResponse(JSON.stringify(updatedDepartment), {
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

    await prisma.departamente.delete({
      where: { id: id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: 'Failed to delete department' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function GET() {
  try {
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
    return new NextResponse(JSON.stringify(result), {
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