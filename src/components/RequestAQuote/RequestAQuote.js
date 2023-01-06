import React, { useState } from "react";
import "./RequestAQuote.scss";
import * as Yup from "yup";
import { Formik, Form, Field, useField } from "formik";
import { send } from "emailjs-com";

const QuoteSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
});

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <textarea {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const RequestAQuote = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className="quote">
      <div className="inner-quote">
        <div className="quote-form">
          <h6>Appointment</h6>
          <h2>Request a Quote</h2>
          <div className="form">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                message: "",
              }}
              validationSchema={QuoteSchema}
              onSubmit={(values, { resetForm }) => {
                setIsLoading(true);
                send(
                  "service_1fh41av",
                  "template_03ji4te",
                  values,
                  "uNfPJIbgHHahWrxsr"
                )
                  .then((response) => {
                    if (response.status === 200) {
                      setSuccessMessage("Thank you for contacting us");
                      setIsLoading(false);
                      resetForm({ values: "" });
                    }
                  })
                  .catch((err) => {
                    setErrorMessage(err);
                    setIsLoading(false);
                  });
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="first_name">
                    <Field name="firstName" placeholder="First Name" />
                    {errors.firstName && touched.firstName ? (
                      <div className="error">{errors.firstName}</div>
                    ) : null}
                  </div>
                  <div className="last_name">
                    <Field name="lastName" placeholder="Last Name" />
                    {errors.lastName && touched.lastName ? (
                      <div className="error">{errors.lastName}</div>
                    ) : null}
                  </div>
                  <div className="email">
                    <Field name="email" type="email" placeholder="Email" />
                    {errors.email && touched.email ? (
                      <div className="error">{errors.email}</div>
                    ) : null}
                  </div>
                  <div className="phone_number">
                    <Field name="phoneNumber" placeholder="Phone Number" />
                    {errors.phoneNumber && touched.phoneNumber ? (
                      <div className="error">{errors.phoneNumber}</div>
                    ) : null}
                  </div>
                  <div className="message">
                    <MyTextArea
                      name="message"
                      rows="5"
                      cols="1"
                      placeholder="Message"
                    />
                  </div>
                  <button
                    style={{ pointerEvents: isLoading ? "none" : "unset" }}
                    type="submit"
                    className="btn icon red"
                  >
                    {isLoading ? "Submitting..." : "Submit"}
                  </button>
                  <p style={{ width: "100%" }}>
                    {successMessage ? successMessage : null}
                    {errorMessage ? errorMessage : null}
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="quote-content">
          <div className="quote-box-one">
            <img src="images/box-one.svg" alt="box-one" />
            <div className="quote-box-one-content">
              <h6>High Quality Build</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="quote-box-two">
            <img src="images/box-two.svg" alt="box-two" />
            <div className="quote-box-one-content">
              <h6>High Quality Build</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="quote-box-three">
            <img src="images/box-three.svg" alt="box-three" />
            <div className="quote-box-one-content">
              <h6>High Quality Build</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestAQuote;
