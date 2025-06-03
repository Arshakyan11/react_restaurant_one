import React from "react";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Routes";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getAllLoginInfo } from "../../store/LoginSlice/LoginSlice";
import { userLoginValidation } from "../../helpers/useValidation";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const dispatch = useDispatch();
  const { isHidenPASS, initialValues } = useSelector(getAllLoginInfo);
  return (
    <section className={styles.navBox}>
      <div className={styles.container}>
        <div className={styles.navSection}>
          <div className={styles.leftSec}>
            <img
              src="https://cdn.pixabay.com/photo/2017/01/19/10/28/food-1991987_1280.jpg"
              alt=""
            />
          </div>
          <div className={styles.rightSec}>
            <div className={styles.registration}>
              <h2>Login</h2>
              <span>
                Don't have an account?{" "}
                <Link to={ROUTES.REGISTRATION}>Sign up</Link>
              </span>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={userLoginValidation}
            >
              <Form>
                <fieldset>
                  <legend>
                    <ErrorMessage name="email" component="div" />
                  </legend>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email Address"
                  />
                </fieldset>
                <fieldset>
                  <legend>
                    <ErrorMessage name="password" component="div" />
                  </legend>
                  <Field
                    name="password"
                    type={isHidenPASS ? "password" : "text"}
                    placeholder="Password"
                  />
                  <p>{isHidenPASS ? <FaEyeSlash /> : <FaEye />}</p>
                </fieldset>
                <div className={styles.buttons}>
                  <button type="submit">Login</button>
                  <button type="reset">Reset</button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
