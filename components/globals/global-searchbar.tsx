"use client";

import { CircleX, Search } from "lucide-react";
import React, { useState } from "react";
import Searchbar from "./searchbar";

export default function GlobalSearchbar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      {!showSearch ? (
        <Search
          size={22}
          onClick={() => setShowSearch((prev) => !prev)}
          className="m-0.5 rounded-full cursor-pointer"></Search>
      ) : (
        <div className="m-0.5 flex gap-0.5 justify-center items-center">
          <CircleX
            size={22}
            strokeWidth={0.5}
            onClick={() => setShowSearch((prev) => !prev)}></CircleX>
          <Searchbar globalSearch={true}></Searchbar>
        </div>
      )}
    </>
  );
}
