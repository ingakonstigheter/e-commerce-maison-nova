"use client";
import { Search } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import React from "react";
import { useDebouncedCallback } from "use-debounce";

export default function Searchbar({ globalSearch }: { globalSearch: boolean }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleChange = useDebouncedCallback((queryString: string) => {
    //if global search remove all params
    const params = globalSearch
      ? new URLSearchParams()
      : new URLSearchParams(searchParams.toString());

    if (queryString === "") {
      params.delete("query");
    } else {
      params.set("query", queryString);
    }
    replace(`/products?${params.toString()}`);
  }, 400);

  return (
    <div className="grid [grid-template-columns:1fr] ">
      <div className="grid row-start-1 col-start-1 [grid-template-columns:1fr]">
        <label htmlFor="query" className="sr-only"></label>
        <input
          type="text"
          placeholder="Search..."
          name="query"
          id="query"
          onChange={(e) => {
            handleChange(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
          className="shadow border-2 font-mono rounded pl-4 pr-8 col-start-1 row-start-1"
        />

        <button className="col-start-1 row-start-1 self-center ml-auto mr-2">
          <Search size={20}></Search>
        </button>
      </div>
    </div>
  );
}
