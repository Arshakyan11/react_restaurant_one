import React from "react";
import styles from "./Reservation.module.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Routes";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getAllReservationInfo } from "../../store/ReservationSlice/ReservationSlice";
const Reservation = () => {
  const dispatch = useDispatch();
  const { initialValues } = useSelector(getAllReservationInfo);
  return (
    <section className={styles.resSec}>
      <div className={styles.container}>
        <div className={styles.reserveSec}>
          <div className={styles.header}>
            <p>Hello,New Friend</p>
            <p>Reserve Your Table</p>
            <div className={styles.buttons}>
              <Link to={ROUTES.MENU}>Open Menu</Link>
              <Link to={ROUTES.RESTAURANTS}>Open Our Addresses</Link>
            </div>
          </div>
          <div className={styles.reservation}>
            <Formik initialValues={initialValues}>
              <Form>
                <fieldset>
                  <legend>{/* <ErrorMessage /> */}</legend>
                  {/* <Field name="address" placeholder="" /> */}
                </fieldset>
                <fieldset>
                  <legend>
                    <ErrorMessage name="date" component="div" />
                  </legend>
                  <Field name="date" type="datetime-local" placeholder="Time" />
                </fieldset>
                <fieldset>
                  <legend>
                    <ErrorMessage name="count" component="div" />
                  </legend>
                  <Field name="count" placeholder="Choose" type="number" />
                </fieldset>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
