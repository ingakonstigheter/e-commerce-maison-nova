import { z } from "zod";

export const reviewSchema = z.object({
  rating: z.number(),
  comment: z.string(),
  date: z.string(),
  reviewerName: z.string(),
  reviewerEmail: z.string(),
});

export const productSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.string().min(3).max(32),
  description: z.string().min(5).max(255),
  gender: z.string(),
  category: z.string(),
  tags: z.array(z.string()),
  price: z.coerce.number().gt(0),
  discountPercentage: z.number().optional().nullable(),
  rating: z.number().optional().nullable(),
  images: z.array(z.url()),
  thumbnail: z.url(),
  reviews: z.array(reviewSchema).optional().nullable(),
});

const SortByEnum = z.enum(["price", "rating", "title"]);

export const QueryParamsSchema = z.object({
  query: z.string().optional(),
  gender: z.enum(["men", "women", "all"]).optional(),
  category: z.string().optional(),
  min: z.string().optional(),
  max: z.string().optional(),
  ratingMin: z.string().optional(),
  sortBy: SortByEnum.nullable().optional(),
  order: z.enum(["asc", "desc"]).nullable().optional(),
});

export type Product = z.infer<typeof productSchema>;
export type Review = z.infer<typeof reviewSchema>;
export type QueryParams = z.infer<typeof QueryParamsSchema>;
export type TProductFilters = Omit<QueryParams, "sortBy" | "order">;
export type ProductSort = {
  sortBy?: z.infer<typeof SortByEnum> | null;
  order?: "asc" | "desc" | null;
};
