"use client";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/CartSlice";
import wishlistReducer from './WishListSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlist: wishlistReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store;