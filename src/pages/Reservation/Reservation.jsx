import React from "react";
import styles from "./Reservation.module.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Routes";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getAllReservationInfo } from "../../store/ReservationSlice/ReservationSlice";
import { reserveTableInfo } from "../../helpers/sendData";
import { FaArrowDown } from "react-icons/fa6";
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
            <h3>Reservation</h3>
            <Formik
              initialValues={initialValues}
              onSubmit={(e, form) => {
                reserveTableInfo(e, form, dispatch);
              }}
            >
              <Form>
                <fieldset>
                  <legend>
                    <ErrorMessage name="address" component="div" />
                  </legend>
                  <FaArrowDown />
                  <Field name="address" as="select">
                    <option value="" hidden>
                      Select Restaurnat Address
                    </option>
                    <option value="Yerevan">
                      3 Amiryan Street, Yerevan 0010, Armenia
                    </option>
                    <option value="Los Angeles">
                      5125 Melrose Avenue Los Angeles, CA 90038
                    </option>
                    <option value="Tokyo">
                      1-1-2 Oshiage, Sumida City, Tokyo 131-0045, Japan
                    </option>
                  </Field>
                </fieldset>
                <fieldset>
                  <legend>
                    <ErrorMessage name="date" component="div" />
                  </legend>
                  <div className={styles.diferentInput}>
                    <label htmlFor="dateIn">Select Reservation Time</label>
                    <Field
                      name="date"
                      type="datetime-local"
                      placeholder="Time"
                      id="dateIn"
                    />
                  </div>
                </fieldset>
                <fieldset>
                  <legend>
                    <ErrorMessage name="count" component="div" />
                  </legend>
                  <Field
                    name="count"
                    placeholder="Number of Guests"
                    type="number"
                    min={1}
                    max={24}
                  />
                </fieldset>
                <fieldset>
                  <legend>
                    <ErrorMessage name="tableType" component="tableType" />
                  </legend>
                  <FaArrowDown />
                  <Field name="tableType" as="select">
                    <option value="" hidden>
                      Select Your Table Experience
                    </option>
                    <option value="middle-">Standard Seating</option>
                    <option value="middle">Premium Service Table</option>
                    <option value="best">Scenic View Table</option>
                  </Field>
                </fieldset>
                <div className={styles.buttons}>
                  <button type="submit">Reserve</button>
                  <button type="reset">Cancel</button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
