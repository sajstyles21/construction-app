import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-us">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.507705620842!2d76.80004511511663!3d30.647828881666875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb3df9314c17%3A0x9fc489a59257a284!2sAnsals%20Woodbury%20Apartments!5e0!3m2!1sen!2sin!4v1674372400007!5m2!1sen!2sin"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
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
