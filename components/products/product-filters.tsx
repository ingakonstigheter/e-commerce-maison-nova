"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { FormEvent } from "react";
import Stars from "../stars";
import Searchbar from "../globals/searchbar";
import CategoryFilter from "./category-filter";
import AllProductsLink from "./all-products-link";

export default function ProductFilters({ gender }: { gender: string }) {
  const starRating = [1, 2, 3, 4, 5];
  const priceOptions = [
    { prompt: "Max Price", value: "max" },
    { prompt: "Min Price", value: "min" },
  ];

  const pathName = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();

  const paramStars = params.getAll("stars");
  const paramCategory = searchParams.get("category");

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const filters = [
      { filter: "min", value: formData.get("min")?.toString() },
      { filter: "max", value: formData.get("max")?.toString() },
      { filter: "stars", value: formData.getAll("stars")?.toString() },
    ];

    filters.map((filter) => {
      if (filter.value === undefined || filter.value === "") {
        params.delete(filter.filter);
      } else {
        params.set(filter.filter, filter.value);
      }
    });
    replace(`${pathName}?${params}`);
  }

  return (
    <div className="p-8 border-2 grid gap-2 py-4 text-xl">
      <Searchbar globalSearch={false}></Searchbar>
      <AllProductsLink
        gender={paramCategory ? paramCategory : ""}></AllProductsLink>
      <CategoryFilter gender={gender}></CategoryFilter>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-start gap-4 font-mono">
        {priceOptions.map((option, index) => (
          <label key={index}>
            {option.prompt}
            <input
              type="number"
              max="9999"
              min="0"
              name={option.value}
              defaultValue={option.value}
              className="border-2 px-0.5 ml-2"
            />
          </label>
        ))}

        {starRating.map((star) => (
          <div key={star} className="flex gap-2">
            <input
              type="checkbox"
              name="stars"
              id={`star-${star}`}
              value={star}
              defaultChecked={paramStars.includes(star.toString())}
            />
            <label htmlFor={`star-${star}`}>
              <Stars scoreOutOfFive={star}></Stars>
            </label>
          </div>
        ))}
        <button className="w-full py-3 text-center hover:ring-2 ring-ring focus-visible:ring-2 bg-button text-background shadow tracking-wider uppercase cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
}
