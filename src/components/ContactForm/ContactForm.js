import React, { useState } from "react";
import "./ContactForm.scss";
import * as Yup from "yup";
import { Formik, Form, Field, useField } from "formik";
import { send } from "emailjs-com";

const QuoteSchema = Yup.object().shape({
  fullName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
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

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="form">
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            phoneNumber: "",
            address: "",
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
              <div className="full_name">
                <Field name="fullName" placeholder="Full Name" />
                {errors.fullName && touched.fullName ? (
                  <div className="error">{errors.fullName}</div>
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
              <div className="address">
                <Field name="address" placeholder="Address" />
                {errors.address && touched.address ? (
                  <div className="error">{errors.address}</div>
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
                {isLoading ? "Submitting..." : "Submit Message"}
              </button>
              <p style={{ width: "100%" }}>
                {successMessage ? successMessage : null}
                {errorMessage ? errorMessage : null}
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ContactForm;
