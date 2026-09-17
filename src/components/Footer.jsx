import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">

        <div className="footer-brand">
          <div className="footer-logo">
            Maya Reynolds<span>, PsyD</span>
          </div>

          <p>
            Licensed Clinical Psychologist
          </p>
        </div>

        <nav className="footer-links">
          <a href="#about">About</a>
          <a href="#approach">Approach</a>
          <a href="#office">Office</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="copyright">
          © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD
        </div>

      </div>
    </footer>
  );
};

export default Footer;