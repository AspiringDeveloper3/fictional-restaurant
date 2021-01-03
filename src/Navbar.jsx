import React from "react";

const Navbar = () => {
  return (
    <nav>
      <h1 className="logo">HungerPedia</h1>

      <ul className="nav-items">
        <li className="item">Products</li>
        <li className="item">About</li>
        <li className="item">Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;