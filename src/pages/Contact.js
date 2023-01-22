import React from "react";
import ContactMiddle from "../components/ContactMiddle/ContactMiddle";
import Footer from "../components/Footer/Footer";
import PageHeader from "../components/PageHeader/PageHeader";

const Contact = () => {
  const pageData = {
    name: "Contact Us",
    breadCrumb: "Home / Contact Us",
    imageClass: "contact-background-image",
  };
  return (
    <>
      <PageHeader {...pageData} />
      <ContactMiddle />
      <Footer />
    </>
  );
};

export default Contact;
