// src/redux/store.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist";

const persistConfig ={
    key:root,
    storage
}
const reducer=combineReducers({
    cart:cartReducer,

});

const persistedReducer=persistReducer(persistConfig,reducer);

 const store = configureStore({
  reducer: persistedReducer,
})

export default store;