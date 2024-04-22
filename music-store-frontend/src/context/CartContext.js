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
      // Check if the product is already in the cart
      const itemExists = currentItems.find(
        (item) => item.product_id === product.product_id
      );
      if (itemExists) {
        // Increase the quantity of the existing product in the cart
        return currentItems.map((item) =>
          item.product_id === product.product_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add the new product to the cart with quantity 1
        return [...currentItems, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}