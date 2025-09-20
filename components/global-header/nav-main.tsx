"use client";

import { Menu, ShoppingCart, User, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import NavItems from "./nav-items";
import GlobalSearchbar from "../globals/global-searchbar";
import CartSidebar from "./cart-sidebar";

const NavMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  // const count = userCartStore((state) => state.count);
  return (
    <header className="relative h-[50] lg:px-0 md:px-8 px-4 w-full flex justify-between items-center font-sans">
      {/*** Desktop navigation ***/}
      <nav className="hidden md:flex">
        <NavItems direction="row" />
      </nav>
      <button className="md:hidden" onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/*** Mobile navigation ***/}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 left-0 h-full w-[200px] bg-white shadow-md z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <button onClick={() => setIsOpen(false)}>
            <X />
          </button>
        </div>
        <nav className="flex flex-col px-4 py-6">
          <NavItems direction="col" onLinkClick={() => setIsOpen(false)} />
        </nav>
      </div>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1>
          <Link href="/" className="text-xl md:text-2xl font-bold uppercase">
            Maison Nova
          </Link>
        </h1>
      </div>
      <div className="flex gap-3">
        <span>
          <GlobalSearchbar></GlobalSearchbar>
        </span>
        <span>
          <User size={24} />
        </span>
        <button
          className="cursor-pointer"
          onClick={() => setCartIsOpen((prev) => !prev)}>
          <ShoppingCart />
        </button>
        {/***Cart div */}
        {cartIsOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setCartIsOpen(false)}
          />
        )}
        {/* <div
          className={`fixed top-0 right-0 h-full w-[300px] p-3 bg-white shadow-md z-50 transform transition-transform duration-300 ${
            cartIsOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="w-full flex items-center justify-end">
            <button
              className="cursor-pointer"
              onClick={() => setCartIsOpen(false)}
            >
              <X />
            </button>
          </div>
        </div> */}
        <CartSidebar cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen} />
      </div>
    </header>
  );
};

export default NavMain;
