import React from "react";
import "./Services.scss";

const Services = () => {
  return (
    <section className="services">
      <div className="sections">
        <div className="left-section">
          <img src="images/service-one.png" alt="section-image" />
        </div>
        <div className="first-section">
          <div className="inner-first">
            <h3>Research & Analysis</h3>
            <p>
              Nullam tincidunt libero eu augue eleifend, vitae condimentum lacus
            </p>
            <img src="images/red-sign.svg" alt="Red-sign" />
          </div>
        </div>
        <div className="second-section">
          <div className="inner-second">
            <h3>Industry Development</h3>
            <p>
              Fusce id hendrerit lectus. Morbi vitae tortor sed turpis feugiat
            </p>
            <img src="images/blue-sign.svg" alt="Blue-sign" />
          </div>
        </div>
        <div className="third-section">
          <div className="inner-third">
            <h3>Production Launch</h3>
            <p>
              Nullam tincidunt libero eu augue eleifend, vitae condimentum lacus
            </p>
            <img src="images/red-sign.svg" alt="Red-sign" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
