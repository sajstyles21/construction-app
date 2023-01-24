import React from "react";
import "./Video.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Video = () => {
  return (
    <section className="video">
      <div className="inner-wrapper">
        <LazyLoadImage src="images/Video.jpg" alt="video" />
      </div>
    </section>
  );
};

export default Video;
