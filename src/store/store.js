import { configureStore } from "@reduxjs/toolkit";
import littleMenuReducer from "./littleMenuSlice/littleMenuSlice";
const store = configureStore({
  reducer: {
    littleMenu: littleMenuReducer,
  },
});

export default store;
