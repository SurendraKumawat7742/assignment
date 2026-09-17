import React from "react";
import Image from "../assets/Images/maya_reynolds.png"

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">
            LICENSED CLINICAL PSYCHOLOGIST
          </p>

          <h1>
            A space to slow down,
            <em> reconnect,</em> and feel
            more like yourself.
          </h1>

          <p className="hero-description">
            Therapy for adults navigating anxiety, trauma, burnout,
            perfectionism, and the pressure of living a fast-paced life.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-button">
              Begin Your Journey
            </a>

            <a href="#about" className="text-button">
              Learn More →
            </a>
          </div>

          <div className="credentials">
            <span>✓</span>
            <span>In-person therapy in Santa Monica</span>

            <span>•</span>

            <span>Secure telehealth throughout California</span>
          </div>

        </div>

        <div className="hero-image-wrapper">
          <div className="image-decoration"></div>
          <img
            src={Image}
            alt="Dr. Maya Reynolds"
            className="hero-image"
          />

          <div className="hero-card">
            <strong>Dr. Maya Reynolds, PsyD</strong>

            <span>
              Licensed Clinical Psychologist
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;