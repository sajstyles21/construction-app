import React from "react";
import Footer from "../components/Footer/Footer";
import PageHeader from "../components/PageHeader/PageHeader";
import ServicesMiddle from "../components/ServicesMiddle/ServicesMiddle";

const Services = () => {
  const pageData = {
    name: "Services Archive",
    breadCrumb: "Home / Services Archive",
    imageClass: "services-background-image",
  };

  return (
    <>
      <PageHeader {...pageData} />
      <ServicesMiddle />
      <Footer />
    </>
  );
};

export default Services;
