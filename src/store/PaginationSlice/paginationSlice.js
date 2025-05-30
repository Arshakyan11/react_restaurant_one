import { createSlice } from "@reduxjs/toolkit";

const pagionationSlice = createSlice({
  name: "pagination",
  initialState: {
    dataRcving: [],
    slicedData: [],
    postsPerPage: 0,
    currentPage: 0,
  },
  reducers: {
    setInfoAboutPagination: (state, action) => {
      const rcvInfo = action.payload;
      state.dataRcving = rcvInfo.data;
      state.postsPerPage = rcvInfo.postsPerPage;
      state.currentPage = rcvInfo.currentPage;
      const wrappedLastIndex = rcvInfo.currentPage * state.postsPerPage;
      const wrappedFirstIndex = wrappedLastIndex - state.postsPerPage;
      state.lastIndex = wrappedLastIndex;
      state.firstIndex = wrappedFirstIndex;
      state.slicedData = rcvInfo.data.slice(
        wrappedFirstIndex,
        wrappedLastIndex
      );
    },
    setCurrentPage: (state, action) => {
      const wrappedLastIndex = action.payload * state.postsPerPage;
      const wrappedFirstIndex = wrappedLastIndex - state.postsPerPage;
      state.currentPage = action.payload;
      state.lastIndex = wrappedLastIndex;
      state.firstIndex = wrappedFirstIndex;
      state.slicedData = state.dataRcving.slice(
        wrappedFirstIndex,
        wrappedLastIndex
      );
    },
  },
  selectors: {
    getAllPagination: (state) => state,
  },
});

export default pagionationSlice.reducer;
export const { setInfoAboutPagination, setCurrentPage } =
  pagionationSlice.actions;
export const { getAllPagination } = pagionationSlice.selectors;
