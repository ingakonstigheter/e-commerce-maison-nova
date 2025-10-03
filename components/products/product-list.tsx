import React from "react";
import ProductCard from "./product-card";
import ProductPagnation from "./product-pagnation";
import { Product } from "@/lib/zod-schemas";

export default async function ProductList({
  productList,
  pages,
}: {
  productList: Product[];
  pages: number;
}) {
  return (
    <div className="grid">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-center ">
        {productList.map((product, index) => (
          <ProductCard key={index} product={product}></ProductCard>
        ))}
      </div>
      <ProductPagnation pages={pages}></ProductPagnation>
    </div>
  );
}
