import { nanoid } from "nanoid";
import { creatingUserData, sendingMessage } from "../store/api/api";

export const createDataContact = (e, form, dispatch) => {
  const { name, lastname, email, subject, message } = e;
  const data = {
    id: nanoid(3),
    name,
    lastname,
    email,
    subject,
    message,
  };
  form.resetForm();
  dispatch(sendingMessage(data));
};

export const createUserData = (event, form, dispatch) => {
  const { userName, phoneNum, email, password, repeatedpassword } = event;
  const data = {
    id: nanoid(7),
    userName,
    phoneNumber: phoneNum,
    email,
    repeatedpassword,
  };
  form.resetForm();
  dispatch(creatingUserData(data));
};
