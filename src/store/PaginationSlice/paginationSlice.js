import { createSlice } from "@reduxjs/toolkit";

const pagionationSlice = createSlice({
  name: "pagination",
  initialState: {
    data: [],
    postsPerPage: 3,
    currentPage: 0,
    firstIndex: 0,
  },
  reducers: {
    setingCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  selectors: {
    getAllPagination: (state) => state,
  },
});

export default pagionationSlice.reducer;
export const { getAllPagination } = pagionationSlice.reducer;
