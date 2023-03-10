import React from "react";
import AboutMiddle from "../components/AboutMiddle/AboutMiddle";
import Footer from "../components/Footer/Footer";
import PageHeader from "../components/PageHeader/PageHeader";
import RequestAQuote from "../components/RequestAQuote/RequestAQuote";

const About = () => {
  const pageData = {
    name: "About Us",
    breadCrumb: "Home / About Us",
    imageClass: "about-background-image",
  };

  return (
    <>
      <PageHeader {...pageData} />
      <AboutMiddle />
      <RequestAQuote />
      <Footer />
    </>
  );
};

export default About;
