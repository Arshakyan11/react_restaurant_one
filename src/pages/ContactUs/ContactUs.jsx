import React from "react";
import styles from "./ContactUs.module.scss";
import { Field, Form, Formik } from "formik";
const ContactUs = () => {
  return (
    <section className={styles.contactUsSec}>
      <div className={styles.container}>
        <div className={styles.container}>
          <h2>Contact Us</h2>
          <p>
            We love hearing from our customers. Feel free to share your
            experience or ask any questions you may have.
          </p>
          <Formik>
            <Form>
              <Field />
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
