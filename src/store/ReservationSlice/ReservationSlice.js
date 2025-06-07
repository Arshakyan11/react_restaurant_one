import { createSlice } from "@reduxjs/toolkit";
import { addingReserveTable } from "../api/api";

const ReservationSlice = createSlice({
  name: "reservation",
  initialState: {
    message: null,
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
      state.message = action.payload;
    });
    builder.addCase(addingReserveTable.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default ReservationSlice.reducer;
export const { getAllReservationInfo } = ReservationSlice.selectors;
