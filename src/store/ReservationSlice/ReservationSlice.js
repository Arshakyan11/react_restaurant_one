import { createSlice } from "@reduxjs/toolkit";
import { addingReserveTable, deletingReservationTime } from "../api/api";

const ReservationSlice = createSlice({
  name: "reservation",
  initialState: {
    userData: JSON.parse(localStorage.getItem("userInfo")),
    loading: false,
    error: null,
    initialValues: {
      address: "",
      date: "",
      count: "",
      tableType: "",
    },
  },
  selectors: {
    getAllReservationInfo: (state) => state,
  },
  extraReducers: (builder) => {
    builder.addCase(addingReserveTable.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addingReserveTable.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.userData = action.payload;
    });
    builder.addCase(addingReserveTable.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deletingReservationTime.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deletingReservationTime.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.userData = action.payload;
    });
    builder.addCase(deletingReservationTime.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default ReservationSlice.reducer;
export const { getAllReservationInfo } = ReservationSlice.selectors;
