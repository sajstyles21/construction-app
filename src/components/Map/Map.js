import React from "react";
import "./Map.scss";

const Map = () => {
  return (
    <section className="address-map">
      <div className="google-map-code">
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
    </section>
  );
};
export { Map };
