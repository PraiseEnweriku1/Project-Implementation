// src/components/Cart.js
import React from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems } = useCart();
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>The cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            
            <li key={item.product_id}>
              {item.name} - ${item.price} x {item.quantity}
            </li>
          ))}
        </ul>
      )}
      <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  );
}

export default Cart;