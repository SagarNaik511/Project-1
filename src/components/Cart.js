import React from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useCart();

  // Calculate the total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {/* Display cart items */}
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <div className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div>
                    <h2>{item.name}</h2>
                    <p>Price: ${item.price}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>

          {/* Display total price */}
          <div className="cart-total">
            <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;


