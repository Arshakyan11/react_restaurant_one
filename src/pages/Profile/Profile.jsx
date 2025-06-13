import React from "react";
import styles from "./Profile.module.scss";
import { Formik, Form, Field } from "formik";
const Profile = () => {
  return (
    <div className={styles.profileSec}>
      <Formik>
        <Form>
          <fieldset>
            <legend></legend>
            <Field name="userEmail" placeholder="Your Email" type="text" />
          </fieldset>
          <fieldset>
            <legend></legend>
            <Field
              name="userOldPass"
              placeholder="Your Last Password"
              type="password"
            />
          </fieldset>
          <fieldset>
            <legend></legend>
            <Field
              name="userNewPass"
              placeholder="New Password"
              type="password"
            />
          </fieldset>
          <fieldset>
            <legend></legend>
            <Field
              name="userOldPassRepeat"
              placeholder="Repeat New Password"
              type="password"
            />
          </fieldset>
        </Form>
      </Formik>
    </div>
  );
};

export default Profile;
