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
              offset={300}
              className={"portfolio-image-" + item.className}
            >
              <img src={item.src} width={width} height={400} />
            </LazyLoad>
          );
        })}
      </div>
    </section>
  );
};

export default PortfolioMiddle;
