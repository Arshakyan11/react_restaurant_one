import React from "react";
import styles from "./Profile.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { userDataEditing } from "../../helpers/useValidation";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProfileInfo,
  setTypeOfChanginPass,
  setTypeofOldPassowrd,
} from "../../store/ProfileSlice/ProfileSlice";
import { updateDataOnProfile } from "../../helpers/sendData";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Profile = () => {
  const dispatch = useDispatch();
  const { initialValues, isHiden, isHideemOld } =
    useSelector(getAllProfileInfo);
  return (
    <div className={styles.profileSec}>
      <div className={styles.mainProfileSec}>
        <h2>Do You Want to change your passowrd?</h2>
        <Formik
          validationSchema={userDataEditing}
          initialValues={initialValues}
          onSubmit={(e, form) => updateDataOnProfile(e, form, dispatch)}
        >
          <Form>
            <fieldset>
              <legend>
                <ErrorMessage name="userEmail" component="div" />
              </legend>
              <Field name="userEmail" placeholder="Your Email" type="text" />
            </fieldset>
            <fieldset>
              <legend>
                <ErrorMessage name="userOldPass" component="div" />
              </legend>
              <Field
                name="userOldPass"
                placeholder="Your Last Password"
                type={isHideemOld ? "password" : "text"}
              />
              <p
                className={styles.seePassIcon}
                onClick={() => dispatch(setTypeofOldPassowrd(!isHideemOld))}
              >
                {isHideemOld ? <FaEye /> : <FaEyeSlash />}
              </p>
            </fieldset>
            <fieldset>
              <legend>
                <ErrorMessage name="userNewPass" component="div" />
              </legend>
              <Field
                name="userNewPass"
                placeholder="New Password"
                type={isHiden ? "password" : "text"}
              />
              <p
                className={styles.seePassIcon}
                onClick={() => dispatch(setTypeOfChanginPass(!isHiden))}
              >
                {isHiden ? <FaEye /> : <FaEyeSlash />}
              </p>
            </fieldset>
            <fieldset>
              <legend>
                <ErrorMessage name="userNewPassRepeat" component="div" />
              </legend>
              <Field
                name="userNewPassRepeat"
                placeholder="Repeat New Password"
                type={isHiden ? "password" : "text"}
              />
              <p
                className={styles.seePassIcon}
                onClick={() => dispatch(setTypeOfChanginPass(!isHiden))}
              >
                {isHiden ? <FaEye /> : <FaEyeSlash />}
              </p>
            </fieldset>
            <div className={styles.buttons}>
              <button>Submit</button>
              <button>Reset</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Profile;
