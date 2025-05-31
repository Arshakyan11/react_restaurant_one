import { createSlice } from "@reduxjs/toolkit";
import { fetchingGlobalMenu } from "../api/api";

const MenuSlice = createSlice({
  name: "menu",
  initialState: {
    selectedItems: [],
    selectedParams: null,
    loading: false,
    error: null,
    filterActivated: false,
    filteredData: [],
  },
  selectors: {
    getAllMenuInfo: (state) => state,
  },
  reducers: {
    setFilteredDataByPrice: (state, action) => {
      const { min, max, filterArg } = action.payload;
      state.filterActivated = filterArg;
      if (filterArg === false) {
        state.filteredData = [];
        state.filterActivated = false;
      } else {
        state.filterActivated = true;
        state.filteredData = state.selectedItems.filter(
          (elm) => elm.recipe.price >= min && elm.recipe.price <= max
        );
      }
    },
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
export const { setFilteredDataByPrice } = MenuSlice.actions;
export const { getAllMenuInfo } = MenuSlice.selectors;
