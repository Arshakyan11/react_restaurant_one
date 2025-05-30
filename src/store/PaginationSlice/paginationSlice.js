import { createSlice } from "@reduxjs/toolkit";
import { sliceDataForPage } from "../../helpers/sliceData";

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
      state.slicedData = sliceDataForPage(
        rcvInfo.data,
        rcvInfo.currentPage,
        rcvInfo.postsPerPage
      );
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
      state.slicedData = sliceDataForPage(
        state.dataRcving,
        action.payload,
        state.postsPerPage
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
