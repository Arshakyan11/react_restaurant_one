import { createSlice } from "@reduxjs/toolkit";
import { sendingMessage } from "../api/api";

const ContactUsSlice = createSlice({
  name: "contactForm",
  initialState: {
    successMessage: null,
    error: null,
    loading: null,
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      subject: "",
      message: "",
    },
  },
  selectors: {
    getAllData: (state) => state,
  },
  extraReducers: (builder) => {
    builder.addCase(sendingMessage.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(sendingMessage.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.successMessage = action.payload;
    });
    builder.addCase(sendingMessage.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default ContactUsSlice.reducer;
export const { getAllData } = ContactUsSlice.selectors;
