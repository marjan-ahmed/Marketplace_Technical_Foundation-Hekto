'use client'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { Product, removeFromWishlist } from '@/redux/WishListSlice';
import Link from 'next/link';
import Image from 'next/image';

const Wishlist = () => {
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const dispatch = useDispatch();

  const handleRemove = (slug: string) => {
    dispatch(removeFromWishlist(slug));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((product:Product) => (
            <li key={product.slug} className="border p-4 rounded">
              <Link href={`/product/featured-products/${product.slug}`}>
                <a>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="rounded"
                  />
                  <h2 className="text-lg font-bold mt-2">{product.name}</h2>
                  <p className="text-sm text-gray-500">{product.description}</p>
                  <span className="text-green-600 font-bold">${product.price}</span>
                </a>
              </Link>
              <button
                onClick={() => handleRemove(product.slug)}
                className="mt-2 text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
