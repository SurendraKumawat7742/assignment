import React from "react";
import Image from "../assets/Images/office1.jpeg"

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container about-grid">

        <div className="about-image">
          <img
            src={Image}
            alt="Calm therapy office"
          />
        </div>

        <div className="about-content">
          <p className="section-label">
            ABOUT DR. MAYA REYNOLDS
          </p>

          <h2>
            Therapy that meets you
            where you are.
          </h2>

          <p>
            I'm a licensed clinical psychologist based in Santa Monica,
            California, offering therapy for adults who feel overwhelmed
            by anxiety, stress, or the lingering effects of past experiences.
          </p>

          <p>
            My work often focuses on anxiety, panic, trauma, and burnout.
            I work with people who may appear highly functional while
            privately struggling with worry, emotional exhaustion,
            difficulty sleeping, or a sense of being constantly on edge.
          </p>

          <p>
            I believe therapy works best when clients feel respected,
            understood, and actively involved in the process.
          </p>

          <a href="#approach" className="outline-button">
            Explore My Approach →
          </a>

        </div>
      </div>
    </section>
  );
};

export default About;