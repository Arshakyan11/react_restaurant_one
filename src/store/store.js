import { configureStore } from "@reduxjs/toolkit";
import littleMenuReducer from "./littleMenuSlice/littleMenuSlice";
import ContactUsReducer from "./ContactUsSlice/ContactUsSlice";
import SearchingReducer from "./SearchSlice/SearchSlice";
const store = configureStore({
  reducer: {
    littleMenu: littleMenuReducer,
    contactForm: ContactUsReducer,
    searching: SearchingReducer,
  },
});

export default store;
