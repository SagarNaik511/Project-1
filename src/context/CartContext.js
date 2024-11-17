// src/context/CartContext.js
import React, { createContext, useState, useContext } from "react";

// Create Cart Context
const CartContext = createContext();

// Cart Provider to wrap around App to provide cart state globally
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Add item to the cart
  const addToCart = (cake) => {
    // Check if cake already exists in the cart
    const existingCake = cart.find((item) => item.id === cake.id);
    if (!existingCake) {
      setCart((prevCart) => [...prevCart, cake]);
    }
  };

  // Remove item from the cart
  const removeFromCart = (id) => {
    setCart(cart.filter((cake) => cake.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to access the cart context
export const useCart = () => useContext(CartContext);
