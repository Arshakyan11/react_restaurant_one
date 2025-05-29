import { createSlice } from "@reduxjs/toolkit";
import { fetchingSearchMenu } from "../api/api";

const SearchSlice = createSlice({
  name: "searching",
  initialState: {
    foundedData: [],
    queryByUser: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearFoundedData: (state) => {
      state.foundedData = [];
    },
  },
  selectors: {
    gettAllDataSearching: (state) => state,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchingSearchMenu.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchingSearchMenu.fulfilled, (state, action) => {
      let rcvingData = action.payload;
      state.loading = false;
      state.error = null;
      state.foundedData = rcvingData.data;
      state.queryByUser = rcvingData.queryName;
    });
    builder.addCase(fetchingSearchMenu.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export default SearchSlice.reducer;
export const { clearFoundedData } = SearchSlice.actions;
export const { gettAllDataSearching } = SearchSlice.selectors;
