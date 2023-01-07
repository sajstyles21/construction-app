import React from "react";
import Header from "../Header/Header";
import "./PageHeader.scss";

const PageHeader = (props) => {
  return (
    <div className={`${props.imageClass} page-header`}>
      <div className="header-div">
        <Header />
        <div className="inner-page-header">
          <div className="left-content">
            <h2>{props.name}</h2>
            <span>{props.breadCrumb}</span>
          </div>
          <div className="right-content">
            <span>Call Us Today</span>
            <h3>+91 8437085852</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
