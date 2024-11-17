import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>SAGAR'S CAKE HOUSE</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
}

export default Header;


