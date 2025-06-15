import { createSlice } from "@reduxjs/toolkit";
import { changingCountOfItem } from "../api/api";
const MiniBuyingList = createSlice({
  name: "miniBuyingList",
  initialState: {
    isHidenModal: false,
    loading: false,
    error: null,
  },
  selectors: {
    getAllMiniBuyingListInfo: (state) => state,
  },
  reducers: {
    setModalOpenType: (state, action) => {
      state.isHidenModal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(changingCountOfItem.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(changingCountOfItem.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(changingCountOfItem.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default MiniBuyingList.reducer;
export const { setModalOpenType } = MiniBuyingList.actions;
export const { getAllMiniBuyingListInfo } = MiniBuyingList.selectors;
