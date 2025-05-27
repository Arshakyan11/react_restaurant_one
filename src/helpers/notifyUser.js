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
