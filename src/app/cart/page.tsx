"use client";

import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { CartItem, remove, updateQuantity } from "@/redux/CartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);

  // Handle item removal using slug
  const handleRemove = (slug: string) => {
    dispatch(remove(slug));
  };

  return (
    <>
      <Breadcrumb subcategory="cart" />
      <div className="container mx-auto px-4 py-24 mb-20 max-w-6xl sm:mx-32">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-[#1D3178] text-[16px] sm:text-[20px] leading-[23.44px] font-josefin">
                    <th className="border-b p-4 text-left">Product</th>
                    <th className="border-b p-4 text-left">Price</th>
                    <th className="border-b p-4 text-left">Quantity</th>
                    <th className="border-b p-4 text-left">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item: CartItem) => (
                    <tr key={item.slug}>
                      <td className="border-b p-4">
                        <div className="flex items-start gap-4 relative">
                          <div className="relative w-full sm:w-auto">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={83}
                              height={87}
                              className="object-cover w-[83px] h-[87px] max-w-full"
                            />
                            <button
                              className="absolute top-0 right-0 sm:top-[-8px] sm:left-[72px]"
                              onClick={() => handleRemove(item.slug)}
                            >
                              <MdCancel />
                            </button>
                          </div>
                          <div className="flex flex-col ml-4 sm:mt-4">
                            <span className="text-[14px] font-josefin leading-[16.41px]">
                              {item.name}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="border-b p-4 text-[14px] text-[#15245E] font-josefin">
                        ${item.price}
                      </td>
                      <td className="border-b p-4">
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            dispatch(
                              updateQuantity({
                                slug: item.slug,
                                quantity: +e.target.value,
                              })
                            )
                          }
                          className="w-16 p-1 border rounded text-center"
                        />
                      </td>
                      <td className="border-b p-4 text-[14px] text-[#15245E] font-josefin">
                        ${item.price * item.quantity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between mt-4">
              <Button
                onClick={() =>
                  cartItems.forEach((item) => handleRemove(item.slug))
                }
                className="leading-[18.75px] w-[134px] h-[39px] font-josefin text-[16px] py-2 px-4"
              >
                Clear Cart
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <div>
              <h2 className="text-[20px] text-[#1D3178] text-center mt-2 font-josefin font-bold mb-4">
                Cart Total
              </h2>
              <div className="p-5 border rounded shadow-md w-full sm:w-[371px] h-[284px] bg-[#F4F4FC]">
                <div className="flex justify-between mt-4 pb-3 border-b-2">
                  <span className="text-[#1D3178] text-[18px] font-lato font-semibold">
                    Subtotal:
                  </span>
                  <span className="text-[#15245E] text-[16px] font-lato font-normal">
                    $
                    {cartItems.reduce(
                      (sum, item) => sum + item.price * item.quantity,
                      0
                    )}
                  </span>
                </div>
                <Link href="/checkout">
                  <button className="w-full h-[40px] font-bold text-[14px] font-lato mt-8 bg-[#19D16F] text-white py-2 rounded">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
