import React from "react";
import "./AboutMiddle.scss";

const AboutMiddle = () => {
  return (
    <section className="middle-content">
      <div className="inner-middle-content">
        <div className="top-content">
          <div className="left-top-content">
            <img src="images/man-new.png" alt="man-image"></img>
            <div className="experience">
              <h2>25+</h2>
              <span>Years of experience</span>
            </div>
          </div>
          <div className="right-top-content">
            <h6>About Us</h6>
            <h2>We're providing the best customer service</h2>
            <div className="content">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </p>
              <h5>John Doe, CEO</h5>
            </div>
            <a href="#" className="btn icon red">
              Learn more
            </a>
          </div>
        </div>
        <div className="bottom-content"></div>
      </div>
    </section>
  );
};

export default AboutMiddle;
