import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const isAlreadyOnCart = state.cart.some(
        item =>
          item.SKU === action.payload.SKU && item.size === action.payload.size
      );
      if (!isAlreadyOnCart) {
        state.cart.push(action.payload);
      } else {
        const item = state.cart.findIndex(
          item =>
            item.SKU === action.payload.SKU && item.size === action.payload.size
        );
        state.cart.at(item).quantity =
          state.cart.at(item).quantity + action.payload.quantity;
      }
    },
    removeItem(state, action) {
      state.cart = state.cart.filter(
        product => product.stockId !== action.payload
      );
    },
    editQuantity(state, action) {
      const item = state.cart.findIndex(
        item =>
          item.SKU === action.payload.SKU && item.size === action.payload.size
      );

      state.cart.at(item).quantity = Number(action.payload.quantity);
    },
  },
});

export const { addItem, removeItem, editQuantity } = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = state => state.cart;

export const getTotalCartPrice = state =>
  state.cart.reduce((acc, crr) => acc + crr.price * crr.quantity, 0);

export const getCartLength = state => state.cart.length;
