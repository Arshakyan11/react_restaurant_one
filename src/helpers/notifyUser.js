import { Bounce, toast } from "react-toastify";

export const notifyForConnecting = () => {
  toast("Message was send Successfuly", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    type: "success",
  });
};

export const notifyForLogin = () => {
  toast("You Logged In", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    type: "success",
  });
};

export const notifyForUserNotFound = () => {
  toast("User not found", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    type: "error",
  });
};
