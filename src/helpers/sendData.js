import { nanoid } from "nanoid";
import {
  addingReserveTable,
  addingWishlistToData,
  checkingUserExisting,
  creatingUserData,
  sendingMessage,
  updatingProfileInformation,
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
    wishList: [],
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
  dispatch(checkingUserExisting({ data, dispatch }));
};

export const reserveTableInfo = (event, form, dispatch) => {
  dispatch(addingReserveTable(event));
  form.resetForm();
};

export const updateDataOnProfile = (event, form, dispatch) => {
  dispatch(updatingProfileInformation(event));
  form.resetForm();
};

export const sendingWatchList = (dispatch, item) => {
  dispatch(
    addingWishlistToData({
      id: item.mealId,
      name: item.label,
      img: item.images?.REGULAR.url,
      price: item.price,
      calories: item.calories,
      count: 1,
    })
  );
};
