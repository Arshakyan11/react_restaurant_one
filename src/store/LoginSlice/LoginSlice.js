import { createSlice } from "@reduxjs/toolkit";
import { checkingUserExisting } from "../api/api";

const LoginSlice = createSlice({
  name: "login",
  initialState: {
    isHidenPASS: false,
    loading: false,
    error: null,
    initialValues: {
      email: "",
      password: "",
    },
  },
  selectors: {
    getAllLoginInfo: (state) => state,
  },
  reducers: {
    setPasswordType: (state, action) => {
      state.isHidenPASS = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkingUserExisting.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(checkingUserExisting.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
    });
    builder.addCase(checkingUserExisting.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default LoginSlice.reducer;
export const { setPasswordType } = LoginSlice.actions;
export const { getAllLoginInfo } = LoginSlice.selectors;
