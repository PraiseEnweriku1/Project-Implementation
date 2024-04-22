// src/components/ProductItem.js
import React from "react";
import { useCart } from "../context/CartContext";

function ProductItem({ product }) {
  const { addToCart } = useCart();

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <img
        src={product.image_url}
        alt={product.name}
        style={{ width: "100px", height: "100px" }}
      />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;