"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// CartItem interface
export interface CartItem {
  slug: string;
  name: string;
  image: string;
  price: number;
  description: string;
  quantity: number; // New key for tracking quantity
  discountPercentage: number
}

// Load cart from localStorage
const loadCart = (): CartItem[] => {
   if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  }
  return []; // Return an empty cart on the server
};

// Create the cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState: loadCart(), // Initialize from localStorage
  reducers: {
    add(state, action: PayloadAction<CartItem>) {
      const existingItem = state.find((item) => item.slug === action.payload.slug);
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if the item exists
      } else {
        state.push({ ...action.payload, quantity: 1 }); // Add new item with quantity 1
      }
      localStorage.setItem("cart", JSON.stringify(state)); // Update localStorage
    },
    remove(state, action: PayloadAction<string>) {
      const updatedState = state.filter((item) => item.slug !== action.payload);
      localStorage.setItem("cart", JSON.stringify(updatedState)); // Update localStorage
      return updatedState; // Return the updated state
    },
    updateQuantity(state, action: PayloadAction<{ slug: string; quantity: number }>) {
      const item = state.find((item) => item.slug === action.payload.slug);
      if (item) {
        item.quantity = action.payload.quantity; // Update the quantity
      }
      localStorage.setItem("cart", JSON.stringify(state)); // Update localStorage
    },
  },
});

export const { add, remove, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
