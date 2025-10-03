import React from "react";
import Image from "next/image";
import Link from "next/link";
import ReviewScore from "./review-score";
import ProductPrice from "./product-price";
import DiscountTag from "./discount-tag";
import { Product } from "@/lib/zod-schemas";

export default async function ProductCard({ product }: { product: Product }) {
  if (!product) {
    return null;
  }

  return (
    <article className="grid max-w-[500px] productCard grid-rows-subgrid justify-start gap-2">
      <div className="flex justify-between gap-2 mb-auto row-start-3">
        <Link href={`/products/${product.slug}`}>
          <h1 className="text-lg">{product.title}</h1>
        </Link>
        <ProductPrice
          discount={product.discountPercentage ?? 0}
          price={product.price}></ProductPrice>
      </div>

      <figure className="grid row-start-1 relative">
        <DiscountTag discount={product.discountPercentage ?? 0}></DiscountTag>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={500}
          height={500}
          className="bg-foreground p-2"></Image>
      </figure>
      <div className="row-start-2">
        <ReviewScore
          nrOfReviews={product.reviews?.length ?? 0}
          scoreOutOfFive={product.rating ?? 0}></ReviewScore>
      </div>
      <div className=" mt-auto flex gap-1 flex-wrap">
        {product.tags.map((tag, index) => (
          <p
            key={index}
            className="uppercase border-1 rounded px-2 py-1.5 shadow w-max h-min">
            {tag}
          </p>
        ))}
      </div>
    </article>
  );
}
