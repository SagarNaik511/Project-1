import React from "react";
import { Link } from "react-router-dom";

function CakeCard({ cake, addToCart }) {
  return (
    <div className="cake-card">
      <img src={cake.image} alt={cake.name} />
      <h2>{cake.name}</h2>
      <p>Price: ${cake.price}</p>

      {/* Separate Buttons */}
      <div className="actions">
        <Link to={`/cake/${cake.id}`} className="view-details-button">
          View Details
        </Link>
        <button onClick={() => addToCart(cake)} className="add-to-cart-button">
        Add to Cart
        </button>
      </div>
    </div>
  );
}

export default CakeCard;
