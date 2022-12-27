import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-us">
        <div className="map">
          <img src="images/map.png" alt="map"></img>
        </div>
        <div className="address_phones">
          <div className="address">
            <span>COMPANY ADDRESS</span>
            <h2>
              #201, Tower OAK, Ansal Woodbury, Highland road, Zirakpur - 140603
            </h2>
          </div>
          <div className="phones">
            <img src="images/iconcall.svg" alt="phone"></img>
            <div className="data">
              <span className="title">COMPANY PHONES</span>
              <span className="values">+91 8437085852</span>
            </div>
          </div>
          <div className="emails">
            <img src="images/iconemail.svg" alt="email"></img>
            <div className="data">
              <span className="title">COMPANY EMAILS</span>
              <span className="values">akbansal05@gmail.com</span>
              <span className="values">info@akbansalcompany.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
