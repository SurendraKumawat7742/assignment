import React from "react";

const focusAreas = [
  {
    icon: "◌",
    title: "Anxiety & Panic",
    description:
      "Support for persistent worry, panic, tension, overthinking, and feeling constantly on edge.",
  },
  {
    icon: "♡",
    title: "Trauma",
    description:
      "Carefully paced therapy for both single-incident trauma and long-standing patterns from earlier experiences.",
  },
  {
    icon: "✦",
    title: "Burnout",
    description:
      "Helping professionals and high-achievers create healthier, more sustainable ways of living and working.",
  },
  {
    icon: "○",
    title: "Perfectionism",
    description:
      "Understanding the pressure behind perfectionism and developing a kinder relationship with yourself.",
  },
];

const FocusAreas = () => {
  return (
    <section className="focus" id="services">
      <div className="container">

        <div className="section-heading">
          <div>
            <p className="section-label">
              AREAS OF FOCUS
            </p>

            <h2>
              Support for the things
              <br />
              that feel hardest.
            </h2>
          </div>

          <p>
            Therapy can offer a place to understand what you're
            experiencing and develop practical tools for moving forward.
          </p>

        </div>

        <div className="focus-grid">

          {focusAreas.map((area) => (
            <div className="focus-card" key={area.title}>

              <div className="focus-icon">
                {area.icon}
              </div>

              <h3>
                {area.title}
              </h3>

              <p>
                {area.description}
              </p>

              <a href="#contact">
                Learn more →
              </a>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;