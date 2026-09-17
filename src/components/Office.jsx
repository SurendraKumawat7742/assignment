import React from "react";
import Image1 from "../assets/Images/office1.jpeg";
import Image2 from "../assets/Images/office2.jpeg";

const Office = () => {
  return (
    <section className="office" id="office">
      <div className="container">

        <div className="office-heading">
          <div>
            <p className="section-label">
              THE OFFICE
            </p>

            <h2>
              A quiet place to
              <br />
              feel at ease.
            </h2>
          </div>

          <div className="address">
            <strong>Santa Monica Office</strong>

            <p>
              123th Street 45 W
              <br />
              Santa Monica, CA 90401
            </p>
          </div>

        </div>

        <div className="office-gallery">

          <div className="large-office-image">
            <img
              src={Image1}
              alt="Dr. Maya Reynolds therapy office"
            />
          </div>

          <div className="small-office-image">
            <img
              src={Image2}
              alt="Therapy office interior"
            />
          </div>

        </div>

        <div className="office-info">

          <div className="office-info-item">

            <span className="info-icon">
              ⌂
            </span>

            <div>
              <strong>In-Person</strong>

              <p>
                Private sessions from my Santa Monica office.
              </p>
            </div>

          </div>

          <div className="office-info-item">

            <span className="info-icon">
              ◎
            </span>

            <div>
              <strong>Telehealth</strong>

              <p>
                Secure online sessions for clients throughout California.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Office;