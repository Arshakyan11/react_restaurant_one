import { createSlice } from "@reduxjs/toolkit";
import { checkingUserExisting } from "../api/api";

const LoginSlice = createSlice({
  name: "login",
  initialState: {
    isHidenPASS: false,
    loading: false,
    error: null,
    userExisting: false,
    initialValues: {
      email: "",
      password: "",
    },
  },
  selectors: {
    getAllLoginInfo: (state) => state,
  },
  reducers: {
    setLogVisiblePass: (state, action) => {
      state.isHidenPASS = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkingUserExisting.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(checkingUserExisting.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.userExisting = action.payload;
    });
    builder.addCase(checkingUserExisting.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.succesMessage = false;
    });
  },
});

export default LoginSlice.reducer;
export const { setLogVisiblePass } = LoginSlice.actions;
export const { getAllLoginInfo } = LoginSlice.selectors;
