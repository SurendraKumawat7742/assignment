import React from "react";

const methods = [
  {
    name: "CBT",
    description: "Cognitive Behavioral Therapy",
  },
  {
    name: "EMDR",
    description: "Trauma-focused therapy",
  },
  {
    name: "Mindfulness",
    description: "Present-moment awareness",
  },
  {
    name: "Somatic",
    description: "Body-oriented techniques",
  },
];

const Approach = () => {
  return (
    <section className="approach" id="approach">
      <div className="container approach-grid">

        <div className="approach-content">
          <p className="section-label">
            MY APPROACH
          </p>

          <h2>
            Practical tools.
            <br />
            Deeper understanding.
          </h2>

          <p>
            I take a warm, collaborative, and grounded approach to therapy.
            Sessions are structured enough to feel supportive while still
            leaving room for reflection and depth.
          </p>

          <p>
            I integrate evidence-based methods including cognitive
            behavioral therapy, EMDR, mindfulness-based practices,
            and body-oriented techniques.
          </p>

          <div className="methods">

            {methods.map((method) => (
              <div className="method" key={method.name}>

                <strong>{method.name}</strong>

                <span>
                  {method.description}
                </span>

              </div>
            ))}
          </div>
        </div>

        <div className="approach-quote">
          <div className="quote-mark">
            "
          </div>

          <blockquote>
            My goal is not just symptom relief,
            but helping clients develop insight,
            resilience, and a stronger relationship
            with themselves over time.
          </blockquote>

          <span>
            — Dr. Maya Reynolds
          </span>

        </div>
      </div>
    </section>
  );
};

export default Approach;