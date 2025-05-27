import { createSlice } from "@reduxjs/toolkit";

const ContactUsSlice = createSlice({
  name: "contactForm",
  initialState: {
    data: [],
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
});

export default ContactUsSlice.reducer;
export const { getAllData } = ContactUsSlice.selectors;
