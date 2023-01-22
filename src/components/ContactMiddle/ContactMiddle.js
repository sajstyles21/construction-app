import React from "react";
import Contact from "../Contact/Contact";
import ContactForm from "../ContactForm/ContactForm";
import { Map } from "../Map/Map";
import "./ContactMiddle.scss";

const ContactMiddle = () => {
  return (
    <section className="contact-us">
      <div className="contact-inner">
        <ContactForm />
        <Contact />
      </div>
    </section>
  );
};

export default ContactMiddle;
