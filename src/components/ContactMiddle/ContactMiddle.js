import React from "react";
import "./ContactMiddle.scss";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import ErrorFallback from "../../utils/ErrorFallback";
import useSpinner from "../../customHooks/useSpinner";
const Contact = React.lazy(() => import("../Contact/Contact"));
const ContactForm = React.lazy(() => import("../ContactForm/ContactForm"));

const ContactMiddle = () => {
  const spinnerData = {
    height: 80,
    width: 80,
  };

  const spinner = useSpinner(spinnerData);

  return (
    <section className="contact-us">
      <div className="contact-inner">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={spinner}>
            <ContactForm />
            <Contact />
          </Suspense>
        </ErrorBoundary>
      </div>
    </section>
  );
};

export default ContactMiddle;
