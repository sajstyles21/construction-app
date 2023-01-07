import React from "react";
import Footer from "../components/Footer/Footer";
import PageHeader from "../components/PageHeader/PageHeader";
import PortfolioMiddle from "../components/PortfolioMiddle/PortfolioMiddle";

const Portfolio = () => {
  const pageData = {
    name: "Portfolio Archive",
    breadCrumb: "Home / Portfolio Archive",
    imageClass: "portfolio-background-image",
  };

  return (
    <>
      <PageHeader {...pageData} />
      <PortfolioMiddle />
      <Footer />
    </>
  );
};

export default Portfolio;
