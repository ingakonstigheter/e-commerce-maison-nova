// lib/prisma.ts

import { PrismaClient } from "./generated/prisma";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query", "error", "warn"],
  });

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;
console.log("PrismaClient instance created");
