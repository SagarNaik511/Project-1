import React, { useState } from "react";
import CakeCard from "../components/CakeCard";
import { cakes } from "../data";
import { useCart } from "../context/CartContext"; // Import CartContext

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const { addToCart } = useCart(); // Using Cart Context's addToCart function

  // Function to filter cakes based on category and search query
  const filterCakes = () => {
    let filteredCakes = cakes;

    if (selectedCategory !== "All") {
      filteredCakes = filteredCakes.filter((cake) => cake.category === selectedCategory);
    }

    if (searchQuery) {
      filteredCakes = filteredCakes.filter(
        (cake) =>
          cake.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          cake.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filteredCakes;
  };

  return (
    <div className="homepage">
      <h1>Welcome to Cake Shop</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for cakes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={() => setSearchQuery(searchQuery)}>Search</button>
      </div>

      {/* Filter buttons */}
      <div className="category-filter">
        <button onClick={() => setSelectedCategory("All")}>All Cakes</button>
        <button onClick={() => setSelectedCategory("Wedding")}>Wedding Cakes</button>
        <button onClick={() => setSelectedCategory("Birthday")}>Birthday Cakes</button>
        <button onClick={() => setSelectedCategory("Special")}>Special Cakes</button>
      </div>

      {/* Display cakes based on selected category and search */}
      <div className="cake-category">
        <h2>{selectedCategory} Cakes</h2>
        <div className="cake-row">
          {filterCakes().map((cake) => (
            <CakeCard key={cake.id} cake={cake} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
