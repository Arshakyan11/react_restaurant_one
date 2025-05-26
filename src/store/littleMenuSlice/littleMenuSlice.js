import { createSlice } from "@reduxjs/toolkit";
import { fetchingLittleMenu } from "../api/api";

const littleMenuSlice = createSlice({
  name: "littleMenu",
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchingLittleMenu.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchingLittleMenu.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    });
    builder.addCase(fetchingLittleMenu.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
  selectors: {
    gettAllInfo: (state) => state,
    gettData: (state) => state.data,
  },
});

export default littleMenuSlice.reducer;
export const { gettAllInfo, gettData } = littleMenuSlice.selectors;
