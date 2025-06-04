import { configureStore } from "@reduxjs/toolkit";
import littleMenuReducer from "./littleMenuSlice/littleMenuSlice";
import ContactUsReducer from "./ContactUsSlice/ContactUsSlice";
import SearchingReducer from "./SearchSlice/SearchSlice";
import PaginationReducer from "./PaginationSlice/paginationSlice";
import MenuReducer from "./MenuSlice/MenuSlice";
import RegistrationReducer from "./RegistrationSlice/RegistrationSlice";
import LoginReducer from "./LoginSlice/LoginSlice";
const store = configureStore({
  reducer: {
    littleMenu: littleMenuReducer,
    contactForm: ContactUsReducer,
    searching: SearchingReducer,
    pagination: PaginationReducer,
    menu: MenuReducer,
    registration: RegistrationReducer,
    login: LoginReducer,
  },
});

export default store;
