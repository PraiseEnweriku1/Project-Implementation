// src/components/ProductList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <ProductItem key={product.product_id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
