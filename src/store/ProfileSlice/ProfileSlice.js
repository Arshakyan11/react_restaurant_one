import { createSlice } from "@reduxjs/toolkit";
import { updatingProfileInformation } from "../api/api";
const userInfo = JSON.parse(localStorage.getItem("userInfo")) || null;
const ProfileSlice = createSlice({
  name: "profile",
  initialState: {
    isHiden: true,
    isHideemOld: true,
    error: null,
    loading: false,
    initialValues: {
      userEmail: userInfo?.email || "",
      userOldPass: "",
      userNewPass: "",
      userNewPassRepeat: "",
    },
  },
  selectors: {
    getAllProfileInfo: (state) => state,
  },

  reducers: {
    setTypeOfChanginPass: (state, action) => {
      state.isHiden = action.payload;
    },
    setTypeofOldPassowrd: (state, action) => {
      state.isHideemOld = action.payload;
    },
    setEmailManualy: (state, action) => {
      state.initialValues.userEmail = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updatingProfileInformation.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updatingProfileInformation.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(updatingProfileInformation.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default ProfileSlice.reducer;
export const { setTypeOfChanginPass, setTypeofOldPassowrd, setEmailManualy } =
  ProfileSlice.actions;
export const { getAllProfileInfo } = ProfileSlice.selectors;
