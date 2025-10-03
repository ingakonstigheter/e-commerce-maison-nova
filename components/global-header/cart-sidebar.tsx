import React from "react";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { userCartStore } from "@/lib/stores/cartStore";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CartSidebarProps {
  cartIsOpen: boolean;
  setCartIsOpen: (isOpen: boolean) => void;
}

const CartSidebar = ({ cartIsOpen, setCartIsOpen }: CartSidebarProps) => {
  const cartList = userCartStore((state) => state.cart);
  const removeFromCart = userCartStore((state) => state.removeFromCart);
  const incrementCartItem = userCartStore((state) => state.incrementCartItem);
  const decrementCartItem = userCartStore((state) => state.decrementCartItem);
  const router = useRouter();
  // const totalProducts = userCartStore((state) => state.getTotalProductCount());
  // const showDecimals = cartItem.price > 1000 ? 0 : 2;

  const handleCheckout = () => {
    setCartIsOpen(false);
    router.push("/Cart");
  }

  const getNumbersOfProducts = () => {
    let sumOfProducts = 0;
    cartList.map((cart, idx) => {
      if (cart.quantity) {
        sumOfProducts = cart.quantity + sumOfProducts;
      }
    });

    return sumOfProducts;
  };

  const getTotalPriceOfProducts = () => {
    let totalPriceOfProduct = 0;
    cartList.forEach((cart) => {
      const discountPrice = Math.round(
        cart.price - (cart.discountPercentage / 100) * cart.price
      );
      if (cart.quantity) {
        totalPriceOfProduct += discountPrice * cart.quantity;
      }
    });

    return totalPriceOfProduct;
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[500px] p-3 bg-white shadow-md z-50 transform transition-transform duration-300 ${
        cartIsOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="w-full mb-4 flex items-center justify-end">
        <button className="cursor-pointer" onClick={() => setCartIsOpen(false)}>
          <X />
        </button>
      </div>
      <p className="text-2xl font-semibold">Kundvagn</p>
      <hr className="border-t border-gray-300 my-4" />
      {/*** List of products in cart ***/}
      <div>
        {cartList.length === 0 ? (
          <div className="flex justify-between">
            <p className="mx-auto">Din kundvagn är tom!</p>
          </div>
        ) : (
          <ul className="flex flex-col gap-2">
            {cartList.map((cartItem, idx) => (
              <li key={idx} className="flex flex-col ">
                <div className="flex justify-between gap-2 ">
                  <div className="flex gap-2">
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
                      <div className="flex gap-2">
                        <p className="line-through opacity-60">
                          ${cartItem.price}
                        </p>
                        <p className="font-bold">
                          {" "}
                          {`$${Math.round(
                            cartItem.price -
                              (cartItem.discountPercentage / 100) *
                                cartItem.price
                          )}.00`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-end">
                    <span
                      className="cursor-pointer"
                      onClick={() => removeFromCart(cartItem.id)}
                    >
                      <Trash2 size={22} />
                    </span>
                    <div className="w-[100px] py-2 flex justify-between border-2 border-black">
                      <button className="px-2 cursor-pointer">
                        <Minus
                          size={20}
                          onClick={() => decrementCartItem(cartItem.id)}
                        />
                      </button>
                      <span className="font-semibold">{cartItem.quantity}</span>
                      <button className="px-2 cursor-pointer">
                        <Plus
                          size={20}
                          onClick={() => incrementCartItem(cartItem.id)}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <hr className="border-t border-gray-300 my-4" />
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-col items-end">
          <div className="w-full mt-6  px-5 py-3 flex justify-between font-semibold bg-[#e5e5e5]">
            <p>{`Totalt: ${getNumbersOfProducts()} produkter`}</p>
            <p>{`${getTotalPriceOfProducts()} SEK`}</p>
          </div>
          <button 
          onClick={handleCheckout}
          className="flex py-3 px-5 mt-4 bg-[#e5e5e5] font-semibold rounded-full cursor-pointer">
            Till kassan
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
