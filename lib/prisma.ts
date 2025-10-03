// lib/prisma.ts

<<<<<<< HEAD
declare global {
  var prisma: PrismaClient | undefined;
}

// Undvik att skapa flera instanser i dev
const prisma = global.prisma || new PrismaClient();
=======
import { PrismaClient } from "./generated/prisma";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query", "error", "warn"],
  });
>>>>>>> origin/main

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;
console.log("PrismaClient instance created");
