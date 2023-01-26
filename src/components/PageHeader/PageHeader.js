import React from "react";
import "./PageHeader.scss";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import ErrorFallback from "../../utils/ErrorFallback";
const Header = React.lazy(() => import("../Header/Header"));

const PageHeader = (props) => {
  return (
    <div className={`${props.imageClass} page-header`}>
      <div className="header-div">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<h1>Loading....</h1>}>
            <Header />
          </Suspense>
        </ErrorBoundary>
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
