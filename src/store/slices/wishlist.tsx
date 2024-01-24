import { createSlice } from "@reduxjs/toolkit";

export interface WishlistInitialState {
  items: IProduct[];
}

const initialState: WishlistInitialState = {
  items: [],
};

const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishListSlice.actions;

export default wishListSlice.reducer;
