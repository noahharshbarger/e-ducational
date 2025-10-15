"use client"

import { createContext, useContext, useState} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity = 1) => {
        setCart(cart => {
            const existing = cart.find(item => item.id === product.id);
            if (existing) {
                return cart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            }
            return [...cart, { ...product, quantity }];
        });
    }
    const removeFromCart = id => setCart(cart => cart.filter(item => item.id !== id));
    const updateQuantity = (id, qty) => setCart(cart => cart.map(item => item.id === id ? { ...item, quantity: qty } : item));
    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={({ cart, addToCart, removeFromCart, updateQuantity, clearCart })}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
