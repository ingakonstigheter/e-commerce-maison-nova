"use server";
import { createProduct, updateProduct } from "@/lib/data/product";
import { generateSlug, parseCommaSeparareted } from "@/lib/utils";
import { Product, productSchema } from "@/lib/zod-schemas";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function createNewProduct(
  prevState: unknown,
  formData: FormData
): Promise<{
  validationErrors: Record<string, string[]>;
  data: Omit<Product, "reviews" | "id" | "slug">;
  dbError: string;
} | null> {
  const priceString = formData.get("price") as string;
  const product: Omit<Product, "reviews" | "id" | "slug"> = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    gender: formData.get("gender") as string,
    category: formData.get("category") as string,
    tags: parseCommaSeparareted(formData.get("tags") as string),
    price: parseFloat(priceString),
    images: parseCommaSeparareted(formData.get("images") as string),
    thumbnail: formData.get("thumbnail") as string,
  };
  const newProductSchema = productSchema.partial({ id: true, slug: true });
  const result = newProductSchema.safeParse(product);

  if (!result.success) {
    const errors = z.flattenError(result.error);

    return {
      validationErrors: errors.fieldErrors,
      data: product,
      dbError: "",
    };
  }
  await createProduct(product);
  revalidatePath("/");
  redirect(`/admin/admin-products`);
}

export async function updateOldProduct(
  prevState: unknown,
  formData: FormData
): Promise<{
  validationErrors: Record<string, string[]>;
  data: Omit<Product, "reviews">;
  dbError: string;
} | null> {
  const idString = formData.get("id") as string;
  const priceString = formData.get("price") as string;
  const product: Omit<Product, "reviews"> = {
    id: parseInt(idString),
    slug: generateSlug(formData.get("title") as string),
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    gender: formData.get("gender") as string,
    category: formData.get("category") as string,
    tags: parseCommaSeparareted(formData.get("tags") as string),
    price: parseFloat(priceString),
    images: parseCommaSeparareted(formData.get("images") as string),
    thumbnail: formData.get("thumbnail") as string,
    rating: null,
    discountPercentage: null,
  };

  const result = productSchema.safeParse(product);

  if (!result.success) {
    const errors = z.flattenError(result.error);

    return {
      validationErrors: errors.fieldErrors,
      data: product,
      dbError: "",
    };
  }
  await updateProduct(product);
  revalidatePath("/");
  redirect(`/admin/admin-products`);
}
