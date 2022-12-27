import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section className="about">
      <div className="about-us">
        <div className="left-content">
          <span>ABOUT US</span>
          <h1>With our knowledge we guarantee success</h1>
          <p className="dark">
            Fusce id hendrerit lectus. Morbi vitae tortor sed turpis feugiat
            congue
          </p>
          <p className="light">
            Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum
            leo consectetur accumsan. Vivamus viverra ante turpis, dignissim
            condimentum elit egestas sit amet. Phasellus faucibus pellentesque
          </p>
          <a href="#" className="btn icon red">
            Learn more
          </a>
        </div>
        <div className="right-content">
          <div className="img-one">
            <img width="350" height="350" src="images/img1.png" alt="img-one" />
          </div>
          <div className="video-icon">
            <img
              width="60"
              height="60"
              src="images/video_icon.svg"
              alt="video-icon"
            />
          </div>
          <div className="img-two">
            <img width="300" height="387" src="images/img2.png" alt="img-two" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
