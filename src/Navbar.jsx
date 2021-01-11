import React from "react";

const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <h1 className="logo">HungerPedia</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a className="nav-link" href="/">Home</a></li>
          <li><a className="nav-link" href="/">Studio</a></li>
          <li><a className="nav-link" href="/">About</a></li>
          <li><a className="nav-link" href="/">Contact</a></li>
          <li><a className="nav-link" href="/">Products</a></li>
        </ul>

        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </header>

  );
};

export default Navbar;