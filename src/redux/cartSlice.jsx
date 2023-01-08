import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    cartCount: 0, // retrieve the cart count from local storage
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      state.cartCount++; // increment the count when an item is added to the cart
    //   localStorage.setItem('cart', JSON.stringify(state.cart)); // store the cart in local storage
    //   localStorage.setItem('cartCount', JSON.stringify(state.cartCount)); // store the cart count in local storage
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      state.cartCount++; // increment the count when the quantity of an item is incremented
    //   localStorage.setItem('cart', JSON.stringify(state.cart)); // store the cart in local storage
    //   localStorage.setItem('cartCount', JSON.stringify(state.cartCount)); // store the cart count in local storage
    },
    decrementQuantity: (state, action) => {
        const item = state.cart.find((item) => item.id === action.payload);
        if (item.quantity === 0) {
          return; // do nothing if the quantity is already 0
        } else {
          item.quantity--;
          state.cartCount--; // decrement the count when the quantity of an item is decremented
        //   localStorage.setItem('cart', JSON.stringify(state.cart)); // store the cart in local storage
        //   localStorage.setItem('cartCount', JSON.stringify(state.cartCount)); // store the cart count in local storage
        }
      },
      
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
      state.cartCount--; // decrement the count when an item is removed from the cart
    //   localStorage.setItem('cart', JSON.stringify(state.cart)); // store the cart in local storage
    //   localStorage.setItem('cartCount', JSON.stringify(state.cartCount)); // store the cart count in local storage
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;
