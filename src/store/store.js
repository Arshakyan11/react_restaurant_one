import { configureStore } from "@reduxjs/toolkit";
import littleMenuReducer from "./littleMenuSlice/littleMenuSlice";
import ContactUsReducer from "./ContactUsSlice/ContactUsSlice";
import SearchingReducer from "./SearchSlice/SearchSlice";
import PaginationReducer from "./PaginationSlice/paginationSlice";
import MenuReducer from "./MenuSlice/MenuSlice";
import RegistrationReducer from "./RegistrationSlice/RegistrationSlice";
import LoginReducer from "./LoginSlice/LoginSlice";
import ReservationReducer from "./ReservationSlice/ReservationSlice";
import ProfileReducer from "./ProfileSlice/ProfileSlice";
const store = configureStore({
  reducer: {
    littleMenu: littleMenuReducer,
    contactForm: ContactUsReducer,
    searching: SearchingReducer,
    pagination: PaginationReducer,
    menu: MenuReducer,
    registration: RegistrationReducer,
    login: LoginReducer,
    reservation: ReservationReducer,
    profile: ProfileReducer,
  },
});

export default store;
