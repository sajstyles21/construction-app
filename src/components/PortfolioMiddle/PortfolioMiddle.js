import React, { useEffect, useMemo, useState } from "react";
import "./PortfolioMiddle.scss";
import LazyLoad from "react-lazy-load";
import { isMobile } from "react-device-detect";

const PortfolioMiddle = () => {
  const [width, setWidth] = useState("32%");
  const images = useMemo(() => {
    return [
      { className: "one", src: "images/ione.png" },
      { className: "two", src: "images/itwo.png" },
      { className: "three", src: "images/ithree.png" },
      { className: "four", src: "images/ifour.png" },
      { className: "five", src: "images/ifive.png" },
      { className: "six", src: "images/isix.png" },
      { className: "seven", src: "images/iseven.png" },
      { className: "eight", src: "images/ieight.png" },
      { className: "nine", src: "images/inine.png" },
    ];
  });

  const getWidthAccordingToDevice = (device) => {
    return device === isMobile ? setWidth("100%") : setWidth("100%");
  };

  useEffect(() => {
    getWidthAccordingToDevice();
  });

  return (
    <section className="portfolio-images">
      <div className="images">
        {images?.map((item) => {
          return (
            <LazyLoad
              height={400}
              className={"portfolio-image-" + item.className}
            >
              <img src={item.src} width={width} height="400px" />
            </LazyLoad>
          );
        })}
      </div>
      {/*<div className="images">
        <img src="images/ione.png" alt="one" />
        <img src="images/itwo.png" alt="two" />
        <img src="images/ithree.png" alt="three" />
        <img src="images/ifour.png" alt="four" />
        <img src="images/ifive.png" alt="five" />
        <img src="images/isix.png" alt="six" />
        <img src="images/iseven.png" alt="seven" />
        <img src="images/ieight.png" alt="eight" />
        <img src="images/inine.png" alt="nine" />
  </div> */}
    </section>
  );
};

export default PortfolioMiddle;
