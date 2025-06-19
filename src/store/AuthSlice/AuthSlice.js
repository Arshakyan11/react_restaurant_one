import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "authentication",
  initialState: {
    userInfo: JSON.parse(localStorage.getItem("userInfo")),
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
  selectors: {
    getUserInfo: (state) => state,
  },
});

export default AuthSlice.reducer;
export const { setUserInfo } = AuthSlice.actions;
export const { getUserInfo } = AuthSlice.selectors;
