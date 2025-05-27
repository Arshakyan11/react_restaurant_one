import { nanoid } from "nanoid";
import { sendingMessage } from "../store/api/api";

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
