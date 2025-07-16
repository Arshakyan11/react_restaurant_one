import React from "react";
import styles from "./Registration.module.scss";
import { regImg, regImgMobile } from "../../components/Images";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllRegInfo,
  setPasswordType,
} from "../../store/RegistrationSlice/RegistrationSlice";
import { createUserData } from "../../helpers/sendData";
import { userRegistrationValidation } from "../../helpers/useValidation";
import { ROUTES } from "../../Routes";
const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { initialValues, isHidden } = useSelector(getAllRegInfo);

  return (
    <section className={styles.regSec}>
      <div className={styles.container}>
        <div className={styles.registationSection}>
          <div className={styles.leftSec}>
            <div className={styles.loginBox}>
              <h2>Sign Up</h2>
              <span>
                Don't have an account?
                <Link to={`/${ROUTES.LOGIN}`}> Log in</Link>
              </span>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={userRegistrationValidation}
              onSubmit={(e, form) =>
                createUserData(e, form, dispatch, navigate)
              }
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
                  <Field
                    name="password"
                    placeholder="Password"
                    type={isHidden ? "text" : "password"}
                  />
                  <p
                    onClick={() => dispatch(setPasswordType(!isHidden))}
                    className={styles.seePass}
                  >
                    {isHidden ? <FaEyeSlash /> : <FaEye />}
                  </p>
                </fieldset>
                <fieldset>
                  <legend>
                    <ErrorMessage name="repeatedpassword" component="div" />
                  </legend>
                  <Field
                    name="repeatedpassword"
                    placeholder="Confirm Password"
                    type={isHidden ? "text" : "password"}
                  />
                  <p
                    onClick={() => dispatch(setPasswordType(!isHidden))}
                    className={styles.seePass}
                  >
                    {isHidden ? <FaEyeSlash /> : <FaEye />}
                  </p>
                </fieldset>
                <div className={styles.buttons}>
                  <button type="submit">Submit</button>
                  <button type="reset">Cancel</button>
                </div>
              </Form>
            </Formik>
            <div className={styles.copyRight}>
              Copyright © 2025. All rights reserved.
            </div>
          </div>
          <div className={styles.rightSec}>
            <img src={regImg} alt="regImg" />
            <img
              className={styles.mobileVersionImg}
              src={regImgMobile}
              alt="regImgMobile"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
