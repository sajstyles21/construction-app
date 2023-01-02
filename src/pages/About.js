import React from "react";
import AboutMiddle from "../components/AboutMiddle/AboutMiddle";
import Footer from "../components/Footer/Footer";
import PageHeader from "../components/PageHeader/PageHeader";
import RequestAQuote from "../components/RequestAQuote/RequestAQuote";

const About = () => {
  return (
    <>
      <PageHeader />
      <AboutMiddle />
      <RequestAQuote />
      <Footer />
    </>
  );
};

export default About;
