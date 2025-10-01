"use client";

import { Key, useState } from "react";

export default function Carousel({ slides }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto my-12">
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl font-bold z-10">
        {"<"}
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl font-bold z-10">
        {">"}
      </button>

      <div className="w-full">{slides[currentIndex]}</div>

      <div className="flex justify-center mt-4 gap-2">
        {slides.map((_: any, idx: Key | null | undefined) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}></span>
        ))}
      </div>
    </div>
  );
}
