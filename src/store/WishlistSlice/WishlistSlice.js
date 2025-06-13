import { createSlice } from "@reduxjs/toolkit";
import { addingWishlistToData, deleteWishListFromData } from "../api/api";

const WishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
    loading: false,
    error: null,
  },
  selectors: {
    getallWatchlistInfo: (state) => state,
  },
  extraReducers: (builder) => {
    builder.addCase(addingWishlistToData.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addingWishlistToData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.wishlist = action.payload;
    });
    builder.addCase(addingWishlistToData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteWishListFromData.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(deleteWishListFromData.fulfilled, (state, action) => {
      state.wishlist = action.payload;
      state.error = null;
      state.loading = false;
    });
    builder.addCase(deleteWishListFromData.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export default WishlistSlice.reducer;
export const { getallWatchlistInfo } = WishlistSlice.selectors;
