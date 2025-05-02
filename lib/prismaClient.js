import { PrismaClient } from '../lib/generated/prisma';

let prisma;
if (!global._prisma) {
  global._prisma = new PrismaClient();
}
prisma = global._prisma;

export default prisma;
