import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    cartCount: 0, // retrieve the cart count from local storage
  },
  reducers: {
    addToCart: (state, action) => {
      const { title, price, id, image } = action.payload;
      const itemInCart = state.cart.find((item) => item.id === id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ title, price, id, image, quantity: 1 });
      }
      state.cartCount++; // increment the count when an item is added to the cart
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      state.cartCount++; // increment the count when the quantity of an item is incremented
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 0) {
        return; // do nothing if the quantity is already 0
      } else {
        item.quantity--;
        state.cartCount--; // decrement the count when the quantity of an item is decremented
      }
    },

    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
      state.cartCount--; // decrement the count when an item is removed from the cart
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;
