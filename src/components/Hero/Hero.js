import React from "react";
import Header from "../Header/Header";
import "./Hero.scss";

const Hero = (props) => {
  return (
    <div className="hero-section">
      <div className="top" style={{ backgroundImage: "url(/images/hero.png)" }}>
        <Header />
        <div className="top-content">
          <span>
            <b>Construction solution</b> <br />
            for everyone
          </span>
          <p>
            In id enim odio. Nunc aliquet diam tortor, at venenatis urna
            sagittis non. Suspendisse sodales nulla sit amet sem condimentum, ac
            euismod nibh elementum. Praesent eu urna at sem sodales venenatis.
            Mauris efficitur dapibus enim in posuere
          </p>
          <a href="#" className="btn icon red">
            Learn more
          </a>
        </div>
      </div>
      <div className="bottom">
        <div className="completed-projects">
          <span className="number">147</span>
          <span className="text">Completed Projects</span>
        </div>
        <div className="experience">
          <span className="number">25+</span>
          <span className="text">Years of Experience</span>
        </div>
        <div className="card">
          <h2>We Construct and Manage Places and Infrastructures </h2>
          <div className="card-values">
            <div className="card-content">
              <div className="image">
                <img src="images/engineer.png" alt="Engineer" />
              </div>
              <div className="single-card">
                <span>General Contract</span>
                <p>
                  Quisque condimentum erat ac orci blandit, in sollicitudin
                  tellus vestibulum
                </p>
              </div>
            </div>
            <div className="card-content">
              <div className="image">
                <img src="images/ruler.png" alt="Ruler" />
              </div>

              <div className="single-card">
                <span>Project Planning</span>
                <p>
                  Quisque condimentum erat ac orci blandit, in sollicitudin
                  tellus vestibulum
                </p>
              </div>
            </div>
            <div className="card-content">
              <div className="image">
                <img src="images/measuring-tool.png" alt="Measuring Tool" />
              </div>

              <div className="single-card">
                <span>Refurbishment</span>
                <p>
                  Quisque condimentum erat ac orci blandit, in sollicitudin
                  tellus vestibulum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
