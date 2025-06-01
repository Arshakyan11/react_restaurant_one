import React from "react";
import styles from "./Registration.module.scss";
import { regImg } from "../../components/Images";
import { Link } from "react-router-dom";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getAllRegInfo } from "../../store/RegistrationSlice/RegistrationSlice";
import { createUserData } from "../../helpers/sendData";
import { userRegistrationValidation } from "../../helpers/useValidation";
const Registration = () => {
  const dispatch = useDispatch();
  const { initialValues, loading } = useSelector(getAllRegInfo);
  return (
    <section className={styles.regSec}>
      <div className={styles.container}>
        <div className={styles.registationSection}>
          <div className={styles.leftSec}>
            <h2>Sign Up</h2>
            <div className={styles.loginBox}>
              <span>Don't have an account?</span>
              <Link> Log in</Link>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={userRegistrationValidation}
              onSubmit={(e, form) => createUserData(e, form, dispatch)}
            >
              <Form>
                <fieldset>
                  <legend>
                    <ErrorMessage name="userName" component="div" />
                  </legend>
                  <Field name="userName" placeholder="Name" type="text" />
                </fieldset>
                <fieldset>
                  <legend>
                    <ErrorMessage name="phoneNum" component="div" />
                  </legend>
                  <Field
                    name="phoneNum"
                    placeholder="Phone Number"
                    type="text"
                  />
                </fieldset>
                <fieldset>
                  <legend>
                    <ErrorMessage name="email" component="div" />
                  </legend>
                  <Field name="email" placeholder="Email" type="email" />
                </fieldset>
                <fieldset>
                  <legend>
                    <ErrorMessage name="password" component="div" />
                  </legend>
                  <Field name="password" placeholder="Password" type="text" />
                  <FaEye />
                </fieldset>
                <fieldset>
                  <legend>
                    <ErrorMessage name="repeatedpassword" component="div" />
                  </legend>
                  <Field
                    name="repeatedpassword"
                    placeholder="Confirm Password"
                    type="text"
                  />
                  <FaEye />
                </fieldset>
                <button type="submit">Submit</button>
                <button type="reset">Cancel</button>
              </Form>
            </Formik>
          </div>
          <div className={styles.rightSec}>
            <img src={regImg} alt="regImg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
