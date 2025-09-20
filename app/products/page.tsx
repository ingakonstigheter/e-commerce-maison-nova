import {
  allCategories,
  menCategories,
  PAGE_OFFSET,
  womenCategories,
} from "@/lib/constants";
import ProductList from "@/components/products/product-list";
import { productSortList } from "@/lib/constants";

import {
  fetchAllProductsOfMultipleCategories,
  fetchProductOfTypeCategory,
  fetchSearchProduct,
} from "@/lib/data/products";
import { ProductFull, URLProps } from "@/lib/interfaces";
import {
  ascendingSortByKey,
  descendingSortByKey,
  validCategory,
} from "@/lib/utils";
import React from "react";
import SortOptions from "@/components/products/sort-options";
import ProductFilters from "@/components/products/product-filters";

export async function generateMetadata({ searchParams }: URLProps) {
  const { category = "", subcategory = "", query = "" } = await searchParams;
  return {
    title: `Maison Nova - Products`,
    description: `Product listing ${
      category !== "" ? `for: ${category} ` : "for men / women "
    } ${
      subcategory !== ""
        ? ` of product type ${subcategory} `
        : "all product types "
    } ${query !== "" ? ` and explicitly: ${category}` : "."}`,
  };
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const {
    category = "",
    subcategory = "",
    query = "",
    sort = "",
    min = "",
    max = "",
    stars = "",
    page = "1",
  } = await searchParams;
  let productList: ProductFull[] = [];
  let sortBy = "";
  let order = "";

  if (sort) {
    productSortList.forEach((sortMethod) => {
      if (sortMethod.value === sort) {
        sortBy = sortMethod.key;
        order = sortMethod.type;
      }
    });
  }

  /* If there is a global search fetch result */
  if (query !== "" && category === "" && subcategory === "") {
    const result = await fetchSearchProduct(query, sortBy, order);

    if (result) {
      productList = result.filter((product) =>
        allCategories.includes(product.category)
      );
    }
  }

  /* all products if there no filter */
  if (category === "" && subcategory === "") {
    const result = await fetchAllProductsOfMultipleCategories(allCategories);

    if (result) {
      productList = result;

      if (sort) {
        productSortList.map((sortBy) => {
          if (sortBy.value === sort) {
            productList =
              sortBy.type === "ascending"
                ? ascendingSortByKey(
                    productList,
                    sortBy.key as keyof ProductFull
                  )
                : descendingSortByKey(
                    productList,
                    sortBy.key as keyof ProductFull
                  );
          }
        });
      }
    }
  }

  /* if only a subcategory */
  if (category === "" && subcategory !== "") {
    if (allCategories.includes(subcategory)) {
      const result = await fetchProductOfTypeCategory(
        subcategory,
        sortBy,
        order
      );

      if (result) {
        productList = result;
      }
    }
  }

  /* if is a valid category ie men | women,  */
  if (validCategory(category)) {
    const categories = category === "men" ? menCategories : womenCategories;
    if (categories.includes(subcategory)) {
      const result = await fetchProductOfTypeCategory(
        subcategory,
        sortBy,
        order
      );
      if (result) {
        productList = result;
      }
    } else {
      const result = await fetchAllProductsOfMultipleCategories(categories);
      if (result) {
        productList = result;
      }
    }
  }

  /* Filters */
  if (query !== "") {
    productList = productList.filter((project) =>
      project.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  if (min !== "" && !isNaN(parseInt(min))) {
    productList = productList.filter(
      (product) => product.price > parseInt(min)
    );
  }

  if (max !== "" && !isNaN(parseInt(max))) {
    productList = productList.filter(
      (product) => product.price < parseInt(max)
    );
  }

  if (stars !== "" && !isNaN(parseInt(stars))) {
    productList = productList.filter(
      (product) => product.rating > parseInt(stars[0])
    );
  }

  /* Handle pagination */
  const pages = Math.ceil(productList.length) / PAGE_OFFSET;
  const pageNumber = parseInt(page);
  const start = (pageNumber - 1) * PAGE_OFFSET;
  const end = start + PAGE_OFFSET;
  productList = productList.slice(start, end);

  return (
    <section className="flex gap-4 px-4 py-8">
      <div className="grid gap-2 content-start">
        <SortOptions data={productSortList}></SortOptions>
        <ProductFilters category={category}></ProductFilters>
      </div>
      <ProductList productList={productList} pages={pages}></ProductList>
    </section>
  );
}
