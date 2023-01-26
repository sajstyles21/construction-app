import React from "react";
import "./ContactMiddle.scss";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import ErrorFallback from "../../utils/ErrorFallback";
const Contact = React.lazy(() => import("../Contact/Contact"));
const ContactForm = React.lazy(() => import("../ContactForm/ContactForm"));

const ContactMiddle = () => {
  return (
    <section className="contact-us">
      <div className="contact-inner">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<h1>Loading....</h1>}>
            <ContactForm />
            <Contact />
          </Suspense>
        </ErrorBoundary>
      </div>
    </section>
  );
};

export default ContactMiddle;
