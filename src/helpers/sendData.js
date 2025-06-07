import { nanoid } from "nanoid";
import {
  addingReserveTable,
  checkingUserExisting,
  creatingUserData,
  sendingMessage,
} from "../store/api/api";
import { ROUTES } from "../Routes";

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

export const createUserData = (event, form, dispatch, navigate) => {
  const { userName, phoneNum, email, password } = event;
  const data = {
    id: nanoid(7),
    userName,
    phoneNumber: phoneNum,
    email,
    password,
  };
  navigate(`/${ROUTES.LOGIN}`);
  dispatch(creatingUserData(data));
  form.resetForm();
};

export const checkUserSendingData = (event, form, dispatch, navigate) => {
  const { email, password } = event;
  const data = {
    email,
    password,
    navigate,
  };
  dispatch(checkingUserExisting(data));
};

export const reserveTableInfo = (event, form, dispatch) => {
  dispatch(addingReserveTable(event));
  form.resetForm();
};
