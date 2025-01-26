// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// // import { addCart } from '../features/carts/cartsSlice';
// // import { removeWishlist } from '../features/wishlists/wishlistSlice

// interface WishlistItem {
//     _id: string;
//     image: string;
//     title: string;
//     price: number;
//     category: string;
// }

// interface WishProps {
//     wishlist: WishlistItem;
// }

// const Wish: React.FC<WishProps> = ({ wishlist }) => {
//     const { _id, image, title, price, category } = wishlist;

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     // Remove wishlist item handler
//     // const removeWishlishHandler = (wishlist: WishlistItem): void => {
//     //     dispatch(removeWishlist(wishlist));
//     // };

//     // Add to cart handler
//     // const addToCartHandler = (product: WishlistItem): void => {
//     //     dispatch(addCart({ product, qty: 1 }));
//     //     navigate('/carts');
//     // };

//     return (
//         <div className="flex flex-col items-center bg-white rounded-lg shadow md:flex-row md:max-w-xl dark:bg-gray-900">
//             <Link to={`/product/${_id}`}>
//                 <img
//                     className="object-cover w-full rounded-t-lg h-96 mx-2 my-1 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
//                     src={image}
//                     alt={title}
//                 />
//             </Link>
//             <div className="flex flex-col justify-between p-4 leading-normal">
//                 <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h3>
//                 <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$ {price}</h4>
//                 <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">{category}</p>
//                 <div className='flex flex-row items-center py-1'>
//                     <button
//                         // onClick={() => addToCartHandler(wishlist)}
//                         className='text-white bg-rose-600 hover:bg-rose-800 rounded-lg mx-2 px-2 md:whitespace-pre'
//                     >
//                         Add To Cart
//                     </button>
//                     <button
//                         // onClick={() => removeWishlishHandler(wishlist)}
//                         className='dark:text-rose-600'
//                     >
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Wish;