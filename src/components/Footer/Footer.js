import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="left-footer">
          <h3>AK Bansal & Co.</h3>
          <span>CALL US NOW</span>
          <h3>+91 8437085852</h3>
          <div className="social-links">
            <a href="">
              <img src="images/Twitter.svg" alt="TW"></img>
            </a>
            <a href="">
              <img src="images/Facebook.svg" alt="FB"></img>
            </a>
            <a href="">
              <img src="images/Linkedin.svg" alt="LN"></img>
            </a>
            <a href="">
              <img src="images/Youtube.svg" alt="YOUTUBE"></img>
            </a>
          </div>
          <p>
            Fusce eu magna quis velit efficitur rhoncus. Vivamus vehicula, neque
            a velit
          </p>
        </div>
        <div className="right-footer">
          <div className="content-links">
            <div className="links">
              <h3>Quick Links</h3>
              <ul>
                <li>About Company</li>
                <li>Our Services</li>
                <li>Our Projects</li>
                <li>Pricing</li>
                <li>Contacts</li>
              </ul>
            </div>
            <div className="support">
              <h3>Clients Support</h3>
              <ul>
                <li>Careers</li>
                <li>Our Process</li>
                <li>FAQs</li>
                <li>Clients Testimonials</li>
                <li>Our Blog</li>
              </ul>
            </div>
            <div className="news">
              <h3>Our News</h3>
              <ul>
                <li>Agile Construction</li>
                <li>Management Building</li>
                <li>Top Saas Construction</li>
                <li>Products Information</li>
                <li>Govt Contracts</li>
              </ul>
            </div>
          </div>

          <div className="copyright">
            <p>© 2022 AK Bansal & Co. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
