import Image from "next/image";
import React from "react";

interface FavouriteCardProps {
  imageSrc: string;
  altText: string;
  productName: string;
  productPrice: string;
  brandName: string;
}

const FavouriteCard = ({
  imageSrc,
  altText,
  productName,
  productPrice,
  brandName,
}: FavouriteCardProps) => {
  return (
    <div className="w-fit flex flex-col">
      <div className="relative w-60 aspect-5/7 flex flex-col">
        <Image
          src={imageSrc}
          alt={altText}
          className="object-cover"
          fill
          priority
        />
      </div>
      <div className="mt-2 flex justify-between  text-sm">
        <p>{productName}</p>
        <p>${productPrice}</p>
      </div>
      <p className="text-gray-500">{brandName}</p>
    </div>
  );
};

export default FavouriteCard;
