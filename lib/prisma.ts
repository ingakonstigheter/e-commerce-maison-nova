import { PrismaClient } from "../lib/generated/prisma";

declare global {
  var prisma: PrismaClient | undefined;
}

// Undvik att skapa flera instanser i dev
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;
console.log("PrismaClient instance created");
