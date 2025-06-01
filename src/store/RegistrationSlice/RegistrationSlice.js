import { createSlice } from "@reduxjs/toolkit";
import { creatingUserData } from "../api/api";

const RegistrationSlice = createSlice({
  name: "registration",
  initialState: {
    loading: false,
    error: null,
    succesMessage: null,
    initialValues: {
      userName: "",
      phoneNum: "",
      email: "",
      password: "",
      repeatedpassword: "",
    },
  },
  selectors: {
    getAllRegInfo: (state) => state,
  },
  extraReducers: (builder) => {
    builder.addCase(creatingUserData.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(creatingUserData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.succesMessage = action.payload;
    });
    builder.addCase(creatingUserData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default RegistrationSlice.reducer;
export const { getAllRegInfo } = RegistrationSlice.selectors;
