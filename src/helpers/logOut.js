import { ROUTES } from "../Routes";

export const LogOutFromAccount = (navigate) => {
  localStorage.removeItem("userInfo");
  navigate(ROUTES.HOME);
  window.location.reload();
};
