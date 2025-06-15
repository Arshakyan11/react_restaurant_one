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
import WishlistReducer from "./WishlistSlice/WishlistSlice";
import MiniBuyingListReducer from "./MiniBuyingListSlice/MiniBuyingListSlice";
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
    wishlist: WishlistReducer,
    miniBuyingList: MiniBuyingListReducer,
  },
});

export default store;
