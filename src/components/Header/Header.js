import React, { useEffect, useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [navClass, setNavClass] = useState("");
  const [enableMobileMenu, setEnableMobileMenu] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 60) {
        setNavClass("scrolled");
      } else {
        setNavClass("");
      }
    });
  }, []);

  const handleMenuClick = (e) => {
    setEnableMobileMenu("active");
  };

  const handleCloseButton = (e) => {
    setEnableMobileMenu("");
  };

  return (
    <header>
      <div className="wrapper">
        {/* Start of nav menu */}
        <nav className={navClass}>
          <div className="logo">
            <Link to="/">A K Bansal</Link>
          </div>
          <ul className={navClass}>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>
        {/* End of nav menu */}
        {/* Start of mobile nav menu */}
        <nav className={`mobile-menu ${navClass}`}>
          <div className="logo">
            <Link to="/">A K Bansal</Link>
          </div>
          <div className="grid" onClick={handleMenuClick}>
            =
          </div>
        </nav>
        {/* End of mobile nav menu */}
        {/* Start of mobile menu container */}
        <div className={`mobile-menu-container ${enableMobileMenu}`}>
          <div className="close-icon" onClick={handleCloseButton}>
            X
          </div>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        {/* End of mobile menu container */}
      </div>
    </header>
  );
};

export default Header;
