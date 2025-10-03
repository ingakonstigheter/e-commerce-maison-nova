import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function AllProductsLink({ gender }: { gender?: string }) {
  let genderParam = "";
  if (gender) {
    genderParam = gender !== "men" ? "women" : "men";
  }
  return (
    <Link
      href={`/products${genderParam ? `?gender=${genderParam}` : ""}`}
      className="undescore flex p-0.5 items-center gap-2 hover:underline focus-visible:underline">
      Display all... <ArrowRight></ArrowRight>
    </Link>
  );
}
