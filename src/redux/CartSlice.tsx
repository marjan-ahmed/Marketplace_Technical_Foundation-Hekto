"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// CartItem interface
export interface CartItem {
  id: any;
  slug: string;
  name: string;
  image: string;
  price: number;
  description: string;
  quantity: number; // Tracks item quantity
  discountPercentage: number;
}

// Load cart from localStorage
const loadCart = (): CartItem[] => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  }
  return []; // Return an empty cart when on the server
};

// Create the cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState: loadCart(), // Initialize from localStorage
  reducers: {
    add(state, action: PayloadAction<CartItem>) {
      const existingItem = state.find((item) => item.slug === action.payload.slug);
      if (existingItem) {
        // If the item already exists, increase the quantity
        existingItem.quantity += action.payload.quantity || 1; // Use payload quantity if provided
      } else {
        // Add a new item to the cart
        state.push({ ...action.payload, quantity: action.payload.quantity || 1 });
      }
      // Update localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    remove(state, action: PayloadAction<string>) {
      // Filter out the item to be removed
      const updatedState = state.filter((item) => item.slug !== action.payload);
      // Update localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(updatedState));
      }
      return updatedState; // Return updated state
    },
    updateQuantity(state, action: PayloadAction<{ slug: string; quantity: number }>) {
      const item = state.find((item) => item.slug === action.payload.slug);
      if (item) {
        // Update quantity only if it's greater than 0
        item.quantity = Math.max(1, action.payload.quantity); // Prevent negative/zero quantity
      }
      // Update localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
  },
});

export const { add, remove, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;