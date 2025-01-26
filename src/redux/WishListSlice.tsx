// features/wishlist/wishlistSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "./CartSlice";


interface WishlistState {
  wishlistItems: CartItem[];
}

const initialState: WishlistState = {
  wishlistItems: JSON.parse(localStorage.getItem("wishlistItems") || "[]"),
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<CartItem>) => {
      const itemExists = state.wishlistItems.find(
        (item) => item.slug === action.payload.slug
      );
      if (!itemExists) {
        state.wishlistItems.push(action.payload);
        localStorage.setItem(
          "wishlistItems",
          JSON.stringify(state.wishlistItems)
        );
      }
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.slug !== action.payload
      );
      localStorage.setItem(
        "wishlistItems",
        JSON.stringify(state.wishlistItems)
      );
    },
    clearWishlist: (state) => {
      state.wishlistItems = [];
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
