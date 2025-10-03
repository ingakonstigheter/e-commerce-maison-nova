import DeleteButton from "@/components/products/delete-button";
import { fetchAllProducts } from "@/lib/data/products";
import Link from "next/link";
import React from "react";

export default async function Page() {
  const products = await fetchAllProducts();

  if (!products) return console.error("Error");
  return (
    <div className="grid w-full px-8 justify-center gap-4">
      <h2>Manage products</h2>
      <Link
        className="border rounded px-2 ml-auto"
        href={"/admin/admin-products/new"}>
        Create a new product
      </Link>
      {products.length !== 0 ? (
        <ul className="md:max-w-120 px-4">
          <li className="flex gap-4">
            <p>ID</p>
            <p>Name</p>
          </li>
          {products.map((product) => (
            <li
              key={product.id}
              className="flex border p-4 gap-2 justify-between">
              <p>{product.id}</p>
              <p className="w-full ">{product.title}</p>
              <div className="grid sm:flex gap-2">
                <DeleteButton productId={product.id}></DeleteButton>
                <Link
                  className="border rounded h-min px-2"
                  href={`/admin/admin-products/${product.slug}`}>
                  Update
                </Link>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Add your first product</p>
      )}
    </div>
  );
}
