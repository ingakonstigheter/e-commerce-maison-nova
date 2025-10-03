"use client";
import { allCategories, menCategories, womenCategories } from "@/lib/constants";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import {} from "../../lib/constants";
import Link from "next/link";

export default function CategoryFilter({ gender }: { gender: string }) {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  let categories = allCategories;

  if (gender === "men") {
    categories = menCategories;
  } else if (gender === "women") {
    categories = womenCategories;
  }

  function getLink(category: string) {
    params.set("category", category);
    return `${pathName}?${params.toString()}`;
  }
  const paramCategory =
    params.get("category") !== "" ? params.get("category") : "";
  const isActive = "bg-background ring-2";
  return (
    <div className="grid max-w-full grid-flow-row gap-2">
      {categories.map((link, index) => (
        <Link
          key={index}
          href={getLink(link)}
          className={`border-1 text-sm h-min px-2 py-1 w-max nowrap rounded shadow${
            paramCategory === link ? isActive : ""
          }`}>
          {link}
        </Link>
      ))}
    </div>
  );
}
