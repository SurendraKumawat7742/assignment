import React from "react";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container nav-content">

        <a href="/" className="logo">
          Maya Reynolds<span>, PsyD</span>
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#approach">Approach</a>
          <a href="#office">Office</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Schedule a Consultation
        </a>

        <button className="menu-button" aria-label="Open navigation menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
};

export default Navbar;