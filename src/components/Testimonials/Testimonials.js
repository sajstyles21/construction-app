import React from "react";
import "./Testimonials.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="inner-wrapper">
        <div className="upper-content">
          <span>Testimonials</span>
          <h1>Our Clients Say</h1>
        </div>
        <div className="testimonials-data">
          <LazyLoadImage src="images/client.png" alt="client" />
          <div className="content">
            <LazyLoadImage src="images/quote_icon.svg" alt="icon" />
            <p>
              Suspendisse tortor enim, varius et porttitor sit amet, posuere
              vitae massa. Proin ac quam eu erat semper sagittis in vitae elit.
              Nam neque erat, semper vel ultrices in, finibus eu magna.
              Pellentesque habitant morbi tristique
            </p>
            <h6>Katy Grey</h6>
            <span>CEO Grey Industries</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
