"use client";

import { ProductFull } from "@/lib/interfaces";
import { userCartStore } from "@/lib/stores/cartStore";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import React, { useState } from "react";

interface AddToCartBtnProps {
  product: ProductFull;
}

const AddToCartBtn = ({ product }: AddToCartBtnProps) => {
  const addToCart = userCartStore((state) => state.addToCart);

  const [isAdded, setIsAdded] = useState(false);

  const cartProduct = {
    id: product.id,
    title: product.title,
    price: product.price,
    discountPercentage: product.discountPercentage,
    image: product.images[0],
  };

  const handleClick = () => {
    addToCart(cartProduct);
    setIsAdded(true);

    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <motion.button
      animate={{ backgroundColor: isAdded ? "#22c55e" : "#111827" }}
      transition={{ duration: 0.3 }}
      className="relative w-full h-12 overflow-hidden text-center bg-gray-900 text-background shadow tracking-wider uppercase cursor-pointer"
      onClick={handleClick}>
      <motion.span
        animate={{ y: isAdded ? -4 : 0, opacity: isAdded ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="block">
        Add to cart
      </motion.span>
      <AnimatePresence>
        {isAdded && (
          <motion.span
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center">
            <Check size={20} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default AddToCartBtn;
