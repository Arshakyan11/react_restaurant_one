import { createSlice } from "@reduxjs/toolkit";
import { fetchingGlobalMenu } from "../api/api";

const MenuSlice = createSlice({
  name: "menu",
  initialState: {
    selectedItems: [],
    selectedParams: null,
    loading: false,
    error: null,
  },
  selectors: {
    getAllMenuInfo: (state) => state,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchingGlobalMenu.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.selectedItems = [];
    });
    builder.addCase(fetchingGlobalMenu.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.selectedItems = action.payload.response;
      state.selectedParams = action.payload.query;
    });
    builder.addCase(fetchingGlobalMenu.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default MenuSlice.reducer;
export const { getAllMenuInfo } = MenuSlice.selectors;
