import { create } from "zustand";
import { CartProduct, ProductFull } from "../interfaces";
import { persist } from "zustand/middleware";

interface ICartState {
    cart: CartProduct[];
    addToCart: (product: CartProduct) => void; 
    removeFromCart: (id: number) => void;
    incrementCartItem: (id: number) => void;
    decrementCartItem: (id: number) => void;
    getTotalProductCount: () => number;
} 

export const userCartStore = create <ICartState>()(
    persist(
    (set, get) => ({
        cart: [],
        addToCart: (product) => 
            set((state) => { 
                const existingIndex = state.cart.findIndex(item => item.id === product.id);

                let newCart;
                if (existingIndex !== -1) {
                    newCart = [...state.cart];
                    newCart[existingIndex] = {
                        ...newCart[existingIndex],
                        quantity: (newCart[existingIndex].quantity || 1) + 1
                    };
                } else {
                    newCart = [...state.cart, { ...product, quantity: 1}];
                }

                return { 
                    cart: newCart,
                }
            }),
        incrementCartItem: (id: number) => 
            set((state) => {
                const existingIndex = state.cart.findIndex(item => item.id === id);

                let newCart;
            
                newCart = [...state.cart];
                newCart[existingIndex] = {
                    ...newCart[existingIndex],
                    quantity: (newCart[existingIndex].quantity || 1) + 1
                };

                return {
                    cart: newCart,
                }

            }),
        decrementCartItem: (id: number) => 
            set((state) => {
                const existingIndex = state.cart.findIndex(item => item.id === id);
                if(existingIndex === -1 ) return { cart: state.cart };
            
                const newCart = [...state.cart];
                // if (newCart[existingIndex].quantity) {
                    if (newCart[existingIndex].quantity === 1) {
                        return { cart: state.cart.filter((item) => item.id !== id) }
        
                    }
    
                    newCart[existingIndex] = {
                        ...newCart[existingIndex],
                        quantity: (newCart[existingIndex].quantity || 1) - 1
                    };

                    return {
                        cart: newCart,
                    }
                // }
            }),
        removeFromCart: (id: number) => 
            set((state) => ({
                cart: state.cart.filter((item) => item.id !== id),
            })),
        getTotalProductCount: () => {
            return get().cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
        }
    }),
    {name: "cart-storage"}
    )
);
