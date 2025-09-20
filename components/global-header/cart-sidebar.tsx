import React from "react";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { userCartStore } from "@/lib/stores/cartStore";
import Image from "next/image";

interface CartSidebarProps {
  cartIsOpen: boolean;
  setCartIsOpen: (isOpen: boolean) => void;
}

const CartSidebar = ({ cartIsOpen, setCartIsOpen }: CartSidebarProps) => {
  const cartList = userCartStore((state) => state.cart);
  const removeFromCart = userCartStore((state) => state.removeFromCart);
  const incrementCartItem = userCartStore((state) => state.incrementCartItem);
  const decrementCartItem = userCartStore((state) => state.decrementCartItem);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[500px] p-3 bg-white shadow-md z-50 transform transition-transform duration-300 ${
        cartIsOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <p className="text-2xl font-semibold">Kundvagn</p>
        <button className="cursor-pointer" onClick={() => setCartIsOpen(false)}>
          <X />
        </button>
      </div>
      {/*** List of products in cart ***/}
      <div>
        {cartList.length === 0 ? (
          <div>
            <p className="mx-auto">Din kundvagn är tom!</p>
          </div>
        ) : (
          <ul className="flex flex-col gap-2">
            {cartList.map((cartItem, idx) => (
              <li key={idx} className="flex justify-between gap-2 bg-[#f5f5f5]">
                <div className="relative w-30 aspect-square">
                  <Image
                    src={cartItem.image}
                    alt={`Image of ${cartItem.title}`}
                    fill
                    className="object-fit"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <p className="font-semibold">{cartItem.title}</p>
                  <div className="">
                    <p>${cartItem.price}</p>
                    <p className="line-through">
                      {cartItem.discountPercentage}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-end">
                  <span
                    className="m-1 cursor-pointer"
                    onClick={() => removeFromCart(cartItem.id)}
                  >
                    <Trash2 size={22} />
                  </span>
                  <div className="p-2 flex gap-4 border-2 border-black">
                    <button className="cursor-pointer">
                      <Minus
                        size={20}
                        onClick={() => decrementCartItem(cartItem.id)}
                      />
                    </button>
                    <span className="font-semibold">{cartItem.quantity}</span>
                    <button className="cursor-pointer">
                      <Plus
                        size={20}
                        onClick={() => incrementCartItem(cartItem.id)}
                      />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
