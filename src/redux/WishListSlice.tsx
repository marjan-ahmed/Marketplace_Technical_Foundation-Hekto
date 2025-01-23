import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  name: string;
  slug: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  discountPercentage: number;
  isWishlisted?: boolean;
}

const initialState = {
  items: typeof window !== 'undefined' && localStorage.getItem('wishlist')
    ? JSON.parse(localStorage.getItem('wishlist')!)
    : [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Product>) => {
      if (!state.items.find((item: Product) => item.slug === action.payload.slug)) {
        state.items.push(action.payload);
        localStorage.setItem('wishlist', JSON.stringify(state.items));
      }
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item: Product) => item.slug !== action.payload);
      localStorage.setItem('wishlist', JSON.stringify(state.items));
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
