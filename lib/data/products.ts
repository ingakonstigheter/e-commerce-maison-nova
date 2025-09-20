import { ProductFull } from "../interfaces";

export async function fetchProduct(id: string) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);

    if (!response.ok) {
      throw new Error(`There was an error fetching a product with id: ${id}`);
    }

    const data: ProductFull = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function fetchSearchProduct(
  query: string,
  sortBy: string,
  order: string
) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${query}&sortBy=${sortBy}&order=${order}`
    );

    if (!response.ok) {
      throw new Error(`There was an error searching for products`);
    }

    const data = await response.json();
    const products: ProductFull[] = data.products;
    return products;
  } catch (e) {
    console.log(e);
  }
}

export async function fetchProductOfTypeCategory(
  category: string,
  sortBy: string,
  order: string
) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/category/${category}?sortBy=${sortBy}&order=${order}`
    );

    if (!response.ok) {
      throw new Error(`There was an error fetching all products by category`);
    }

    const data = await response.json();
    const products: ProductFull[] = data.products;
    return products;
  } catch (e) {
    console.log(e);
  }
}

export async function fetchAllProductsOfMultipleCategories(
  categories: string[]
) {
  try {
    let productList: ProductFull[] = [];
    const result = await Promise.all(
      /* returns array of produlist */
      categories.map(async (category) => {
        const result = await fetchProductOfTypeCategory(category, "", "");
        /* returns empty array if result is undefined */
        return Array.isArray(result) ? result : [];
      })
    );
    if (result) {
      /* flattens the result from fetching categories */
      productList = result.flat();
    } else {
      throw new Error(
        `There was a problem fetching all products of multiple categories`
      );
    }
    return productList;
  } catch (e) {
    console.log(e);
  }
}
