import { fetchAllProductsOfMultipleCategories } from "./seedUtil/products";
import { allCategories, menCategories } from "./seedUtil/constants";
import prisma from "@/lib/prisma";
import { generateSlug } from "@/lib/utils";

async function allProducts() {
  try {
    const allProducts = await fetchAllProductsOfMultipleCategories(
      allCategories
    );

    if (!allProducts) {
      return;
    }
    let productIdCounter = 1;
    for (const product of allProducts) {
      await prisma.product.create({
        data: {
          slug: generateSlug(product.title + productIdCounter),
          title: product.title,
          description: product.description,
          gender: menCategories.includes(product.category) ? "men" : "women",
          category: product.category,
          tags: product.tags,
          price: product.price,
          discountPercentage: product.discountPercentage,
          rating: product.rating,
          images: product.images,
          thumbnail: product.thumbnail,
        },
      });

      if (product.reviews && product.reviews.length > 0) {
        for (const review of product.reviews) {
          await prisma.review.create({
            data: {
              productId: productIdCounter,
              rating: review.rating,
              comment: review.comment,
              reviewerName: review.reviewerName,
              reviewerEmail: review.reviewerEmail,
            },
          });
        }
      }
      productIdCounter++;
    }
  } catch (e) {
  }
}

async function main() {
  await allProducts();
}

main().catch(async (e) => {
  console.error(e);
  process.exit(1);
});
