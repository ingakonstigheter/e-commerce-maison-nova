import prisma from "@/lib/prisma";
import { Product, ProductSort, TProductFilters } from "../zod-schemas";

function mapProduct(product: any): Product {
  return {
    ...product,
    reviews: product.review.map((r: any) => ({
      id: r.id.toString(),
      productId: r.productId,
      rating: r.rating,
      comment: r.comment,
      date: r.date?.toISOString() || "",
      reviewerName: r.reviewerName || "",
      reviewerEmail: r.reviewerEmail || "",
    })),
  };
}

export async function fetchProduct(slug: string): Promise<Product | null> {
  try {
    const product = await prisma.product.findUnique({
      where: { slug: slug },
      include: { review: true },
    });

    if (!product) return null;

    return mapProduct(product);
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchAllProductsOfMultipleCategories(
  categories: string[]
): Promise<Product[]> {
  try {
    const products = await prisma.product.findMany({
      where: { category: { in: categories } },
      include: { review: true },
    });

    return products.map(mapProduct);
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchAllProducts(): Promise<Product[] | null> {
  const products = await prisma.product.findMany();

  if (!products) {
    return null;
  }
  return products;
}

export async function fetchProductBySlug(
  slug: string
): Promise<Product | null> {
  if (!slug) return null;
  const product = await prisma.product.findUnique({
    where: { slug: slug },
  });

  if (product) {
    return product;
  }
  return null;
}

export async function fetchProducts(
  filters: TProductFilters = {},
  sort: ProductSort = {}
): Promise<Product[]> {
  try {
    const where: any = {};

    if (filters.query) {
      where.title = { contains: filters.query, mode: "insensitive" };
    }
    if (filters.category) {
      where.category = filters.category;
    }
    if (filters.gender !== "all") {
      where.gender = filters.gender;
    }

    if (filters.min || filters.max) {
      where.price = {};
      if (filters.min) where.price.gte = parseInt(filters.min);
      if (filters.max) where.price.lte = parseInt(filters.max);
    }

    if (filters.ratingMin) {
      where.rating = { gte: parseInt(filters.ratingMin) };
    }

    const orderBy = sort.sortBy
      ? { [sort.sortBy]: sort.order === "desc" ? "desc" : "asc" }
      : undefined;

    const products = await prisma.product.findMany({
      where,
      orderBy,
      include: { review: true },
    });

    return products.map((product) => mapProduct(product));
  } catch (error) {
    console.error("Error fetching products", error);
    return [];
  }
}
