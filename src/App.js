import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; // Import CartProvider

import HomePage from "./pages/HomePage";
import CakeDetails from "./pages/CakeDetails";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <CartProvider> {/* Wrap your app with CartProvider */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cake/:id" element={<CakeDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
