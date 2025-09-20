"use client";

import React, { useRef } from "react";
import FavouriteCard from "./favourite-card";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CardItem {
  imageSrc: string;
  altText: string;
  productName: string;
  productPrice: string;
  brandName: string;
}

interface CardItemProps {
  cards: CardItem[];
}

const CardCarousel = ({ cards }: CardItemProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const firstCardWidth = scrollRef.current.children[0].clientWidth;
      const gap = 16;

      scrollRef.current.scrollBy({
        left:
          direction === "left" ? -(firstCardWidth + gap) : firstCardWidth + gap,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="relative w-full my-10 flex gap-4">
      <button onClick={() => scroll("left")}>
        <ChevronLeft />
      </button>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-none snap-x snap-mandatory ">
        {cards.map((card, idx) => (
          <div key={idx} className="snap-start">
            <FavouriteCard
              imageSrc={card.imageSrc}
              altText={card.altText}
              productName={card.productName}
              productPrice={card.productPrice}
              brandName={card.brandName}
            />
          </div>
        ))}
      </div>
      <button onClick={() => scroll("right")}>
        <ChevronRight />
      </button>
    </div>
  );
};

export default CardCarousel;
