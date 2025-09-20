import Image from "next/image";
import ReviewScore from "./products/review-score";
import Link from "next/link";
import Carousel from "./carousel";
import { fetchAllProductsOfMultipleCategories } from "@/lib/data/products";
import { ReactNode } from "react";

export interface SlideProps {
  key: string | number;
  content: ReactNode;
}

export default async function ItemWithReview({
  categories,
}: {
  categories: string[];
}) {
  const allProducts = await fetchAllProductsOfMultipleCategories(categories);

  if (allProducts) {
    // Ta de fyra bästa
    const topProducts = allProducts
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 4);

    // Skapa slides: ett stort kort per slide
    const slides = topProducts.map((prod) => {
      // Ta den bästa reviewen från samma produkt
      const bestReview =
        prod.reviews && prod.reviews.length > 0
          ? prod.reviews.reduce((prev, curr) =>
              curr.rating > prev.rating ? curr : prev
            )
          : { comment: "No reviews yet", reviewerName: "Anonymous" };

      return {
        key: prod.id,
        content: (
          <article
            key={prod.id}
            className="flex flex-col md:flex-row gap-4 items-center justify-between w-3/4 mx-auto  p-6 rounded-lg mb-12 ">
            <section className="flex flex-col gap-4 text-center md:text-left">
              <ReviewScore
                scoreOutOfFive={prod.rating}
                nrOfReviews={prod.reviews.length}
              />
              <p className="text-3xl text-secondary italic">
                {`"${bestReview.comment}"`}
              </p>
              <p className="font-semibold text-primary">
                {`- ${bestReview.reviewerName}`}
              </p>
              <p className="font-light underline decoration-secondary">
                {prod.title}
              </p>
            </section>
            <section className="flex-shrink-0">
              <Link href={`/products/${prod.id}`}>
                <Image
                  src={prod.images[0]}
                  alt={prod.title}
                  width={600}
                  height={600}
                  className="rounded-lg object-cover w-full md:w-[600px] h-auto bg-foreground"
                />
              </Link>
            </section>
          </article>
        ),
      };
    });
    return (
      <div className="hidden md:block">
        <Carousel slides={slides} />
      </div>
    );
  }
}
