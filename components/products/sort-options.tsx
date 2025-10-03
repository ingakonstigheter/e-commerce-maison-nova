"use client";
import { SortData } from "@/lib/interfaces";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";

export default function SortOptions({ data }: { data: SortData[] }) {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const sortParam = new URLSearchParams(searchParams);
  const { replace } = useRouter();

  function getLink(sortValue: SortData) {
    const params = sortParam;
    if (sortValue !== undefined) {
      params.set("sortBy", sortValue.sortBy);
      params.set("order", sortValue.order);
      return `${pathName}?${params.toString()}`;
    }
    params.delete("sortBy");
    return `${pathName}?${params.toString()}`;
  }

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    replace(getLink(JSON.parse(value)));
  };

  return (
    <div className="p-4 border-2 grid rounded font-mono hover:ring-2 focus:ring-2">
      <label htmlFor="options" className="sr-only">
        Sort By:
      </label>
      <select id="options" onChange={handleChange} defaultValue={"default"}>
        {data.map((item, index) => (
          <option key={index} value={JSON.stringify(item)}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
}
