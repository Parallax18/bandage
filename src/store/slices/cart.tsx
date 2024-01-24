import { createSlice } from "@reduxjs/toolkit";

export interface CartInitialState {
  totalCount: number;
  totalPrice: number;
  items: (IProduct & { count: number })[];
}

const initialState: CartInitialState = {
  totalPrice: 0,
  totalCount: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
      handleCountChange(state);
      handleTotalPriceChange(state);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      handleCountChange(state);
      handleTotalPriceChange(state);
    },

    increaseItemQuantity: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[index].count += 1;
      handleCountChange(state);
      handleTotalPriceChange(state);
    },
    decreaseItemQuantity: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[index].count -= 1;
      handleCountChange(state);
      handleTotalPriceChange(state);
    },
  },
});

const handleCountChange = (state: CartInitialState) => {
  state.totalCount = state.items.reduce(
    (acc: number, curr) => acc + curr.count,
    0
  );
};

const handleTotalPriceChange = (state: CartInitialState) => {
  state.totalPrice = state.items.reduce(
    (acc: number, curr) => acc + curr.price * curr.count,
    0
  );
};

export const {
  addToCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
