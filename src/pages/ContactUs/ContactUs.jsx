import React from "react";
import styles from "./ContactUs.module.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { getAllData } from "../../store/ContactUsSlice/ContactUsSlice";
import { contactUsValidation } from "../../helpers/useValidation";
const ContactUs = () => {
  const { initialValues, data } = useSelector(getAllData);
  console.log(initialValues);

  return (
    <section className={styles.contactUsSec}>
      <div className={styles.container}>
        <div className={styles.contactUsMain}>
          <h2>Contact Us</h2>
          <p className={styles.titileText}>
            We love hearing from our customers. Feel free to share your
            experience or ask any questions you may have. We’d love to hear from
            you! Whether you have a question, feedback, or just want to say
            hello, our team is here to help. At our restaurant, we value every
            guest and believe communication is the key to great service.
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={contactUsValidation}
            onSubmit={(e, form) => {
              const { name, lastname, email, subject, message } = e;
              console.log(name);
            }}
          >
            <Form>
              <div className={styles.eachLine}>
                <fieldset>
                  <Field name="name" placeholder="First Name" type="text" />
                  <legend>
                    <ErrorMessage name="name" component="div"></ErrorMessage>
                  </legend>
                </fieldset>

                <fieldset>
                  <Field name="lastname" placeholder="Last Name" type="text" />
                  <legend>
                    <ErrorMessage
                      name="lastname"
                      component="div"
                    ></ErrorMessage>
                  </legend>
                </fieldset>
              </div>
              <div className={styles.eachLine}>
                <fieldset>
                  <Field
                    name="email"
                    placeholder="Email address"
                    type="email"
                  />
                  <legend>
                    <ErrorMessage name="email" component="div"></ErrorMessage>
                  </legend>
                </fieldset>

                <fieldset>
                  <Field name="subject" placeholder="Subject" type="text" />
                  <legend>
                    <ErrorMessage name="subject" component="div"></ErrorMessage>
                  </legend>
                </fieldset>
              </div>

              <fieldset>
                <Field
                  as="textarea"
                  className={styles.textareaStyle}
                  name="message"
                  placeholder="Message"
                  type="text"
                />
                <legend>
                  <ErrorMessage name="message" component="div"></ErrorMessage>
                </legend>
              </fieldset>
              <div className={styles.buttons}>
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
