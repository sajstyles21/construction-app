import React from "react";
import Header from "../Header/Header";
import "./PageHeader.scss";

const PageHeader = () => {
  return (
    <div className="page-header">
      <div className="header-div">
        <Header />
        <div className="inner-page-header">
          <div className="left-content">
            <h2>About Us</h2>
            <span>Home / About Us</span>
          </div>
          <div className="right-content">
            <span>Call Us Today</span>
            <h3>+1 123 4567 789</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
