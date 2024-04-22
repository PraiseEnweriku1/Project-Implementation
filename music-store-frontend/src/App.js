// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css"; // Assuming you have some basic styling

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>My Music Store</h1>
          <nav>
            <Link to="/">Home</Link> | <Link to="/cart">Cart</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            {/* You can add more routes for other components like ProductDetails */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
