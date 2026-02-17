// Home page displaying aesthetic product cards
import headphones from "../assets/images/headphones.jpg";
import watch from "../assets/images/watch.jpg";
import mouse from "../assets/images/mouse.jpg";

import React from "react";
import "./Home.css"; // Importing CSS styling

function Home() {

  // Product data with real images
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "₹2,999",
    image: headphones,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "₹4,499",
    image: watch,
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: "₹1,299",
    image: mouse,
  },
];



  return (
    <div className="home-container">
      <h1 className="title">Featured Products</h1>

      {/* Product grid */}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">

            {/* Product image */}
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            {/* Product info */}
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
