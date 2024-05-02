// src/context/CartContext.js
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const itemExists = currentItems.find(
        (item) => item.product_id === product.product_id
      );
      if (itemExists) {
        return currentItems.map((item) =>
          item.product_id === product.product_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...currentItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.product_id !== productId)
    );
  };

  const checkout = () => {
    // Add logic for the checkout process
    // For example, clearing the cart after checkout
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, checkout }}> {/* Provide checkout in the value */}
      {children}
    </CartContext.Provider>
  );
}
