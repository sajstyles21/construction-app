import React, { useEffect, useState } from "react";
import "./Header.scss";

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
          <div className="logo">AK Bansal</div>
          <ul className={navClass}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
        {/* End of nav menu */}
        {/* Start of mobile nav menu */}
        <nav className={`mobile-menu ${navClass}`}>
          <div className="logo">AK Bansal</div>
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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        {/* End of mobile menu container */}
      </div>
    </header>
  );
};

export default Header;
