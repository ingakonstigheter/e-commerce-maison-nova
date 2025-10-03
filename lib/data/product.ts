"use server";

import prisma from "@/lib/prisma";
import { generateSlug } from "../utils";
import { Product } from "../zod-schemas";

export async function createProduct(data: Omit<Product, "id" | "slug">) {
  const slug = generateSlug(data.title);
  try {
    const result = await prisma.product.create({
      data: {
        ...data,
        slug,
        discountPercentage: data.discountPercentage ?? null,
        rating: data.rating ?? null,
      },
    });

    return { succes: true, product: result.title };
  } catch (e) {
    return { succes: false, error: e };
  }
}

export async function updateProduct(data: Product) {
  try {
    const result = await prisma.product.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
        slug: generateSlug(data.title),
        discountPercentage: data.discountPercentage ?? null,
        rating: data.rating ?? null,
      },
    });

    return { succes: true, product: result.title };
  } catch (e) {
    return { succes: false, error: e };
  }
}

export async function deleteProduct(id: number) {
  try {
    const deleted = await prisma.product.delete({
      where: { id },
    });
    return deleted;
  } catch (error) {
    console.error("Error deleting product: ", error);
    throw error;
  }
}
