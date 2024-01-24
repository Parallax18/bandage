import { combineReducers } from "@reduxjs/toolkit";
import cart from "./slices/cart";
import wishlist from "./slices/wishlist";

const rootReducer = combineReducers({
  cart,
  wishlist,
});

export default rootReducer;
