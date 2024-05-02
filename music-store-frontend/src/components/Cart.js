import React from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, checkout } = useCart(); 
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleRemoveItem = (productId) => {
    removeFromCart(productId); 
  };

  const handleCheckout = () => {
    checkout(); 
  };

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>The cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.product_id}>
                {item.name} - ${item.price} x {item.quantity}
                <button onClick={() => handleRemoveItem(item.product_id)}>Remove</button> 
              </li>
            ))}
          </ul>
          <h2>Total: ${total.toFixed(2)}</h2>
          <button onClick={handleCheckout}>Checkout</button> {/* Add the checkout button */}
        </div>
      )}
    </div>
  );
}

export default Cart;
