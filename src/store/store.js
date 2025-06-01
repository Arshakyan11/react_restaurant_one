import { configureStore } from "@reduxjs/toolkit";
import littleMenuReducer from "./littleMenuSlice/littleMenuSlice";
import ContactUsReducer from "./ContactUsSlice/ContactUsSlice";
import SearchingReducer from "./SearchSlice/SearchSlice";
import PaginationReducer from "./PaginationSlice/paginationSlice";
import MenuReducer from "./MenuSlice/MenuSlice";
const store = configureStore({
  reducer: {
    littleMenu: littleMenuReducer,
    contactForm: ContactUsReducer,
    searching: SearchingReducer,
    pagination: PaginationReducer,
    menu: MenuReducer,
  },
});

export default store;
