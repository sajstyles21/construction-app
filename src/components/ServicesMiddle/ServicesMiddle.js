import React from "react";
import "./ServicesMiddle.scss";

const ServicesMiddle = () => {
  return (
    <section className="services">
      <div className="inner-wrapper">
        <div className="single-service-card service-one"></div>
        <div className="single-service-card red">
          <span>Service One</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
          <a href="#" className="btn icon red learn_more">
            Learn more
          </a>
        </div>
        <div className="single-service-card red">
          <span>Service Two</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
          <a href="#" className="btn icon red learn_more">
            Learn more
          </a>
        </div>
        <div className="single-service-card service-two"></div>
        <div className="single-service-card service-three"></div>
        <div className="single-service-card red">
          <span>Service Three</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
          <a href="#" className="btn icon red learn_more">
            Learn more
          </a>
        </div>
        <div className="single-service-card red">
          <span>Service Four</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
          <a href="#" className="btn icon red learn_more">
            Learn more
          </a>
        </div>
        <div className="single-service-card service-four"></div>
      </div>
    </section>
  );
};

export default ServicesMiddle;
