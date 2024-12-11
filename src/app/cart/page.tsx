import React from 'react'
import Breadcrumb from '../components/Breadcrumb';
import { Button } from '@/components/ui/button';
import { CiCircleCheck } from "react-icons/ci";
import { MdCancel } from "react-icons/md";

function Cart() {
  return (
  <>
    <Breadcrumb title='Shopping Cart' subtitle='Shopping Cart'/>
    <div className="container mx-auto px-4 py-24 mb-20 max-w-6xl sm:mx-32">

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Cart Table */}
        <div className="w-full lg:w-2/3">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className='text-[#1D3178] text-[20px] leading-[23.44px] font-josefin'>
                  <th className="border-b p-4 text-left">Product</th>
                  <th className="border-b p-4 text-left">Price</th>
                  <th className="border-b p-4 text-left">Quantity</th>
                  <th className="border-b p-4 text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 5 }).map((_, index) => (
                  <tr key={index}>
                    <td className="border-b p-4">
                      <div className="flex items-start gap-4 relative">
                        <div className="relative">
                          <img
                            src="/product-1.png"
                            alt={`Product ${index + 1}`}
                            className="object-cover w-[83px] h-[87px]"
                          />
                          <button className="absolute top-0 right-0">
                            <MdCancel />
                          </button>
                        </div>
                        <div className="flex flex-col ml-4 sm:mt-4">
                          <span className='text-[14px] font-josefin leading-[16.41px]'>Product {index + 1}</span>
                          <span className="text-[12px] font-josefin text-[#A1A8C1]">Color: Brown</span>
                          <span className="text-[12px] font-josefin text-[#A1A8C1]">Size: XL</span>
                        </div>
                      </div>
                    </td>
                    <td className="border-b p-4 text-[14px] text-[#15245E] font-josefin">$10.00</td>
                    <td className="border-b p-4">
                      <input
                        type="number"
                        min="1"
                        defaultValue="1"
                        className="w-16 p-1 border rounded"
                      />
                    </td>
                    <td className="border-b p-4 text-[14px] text-[#15245E] font-josefin">$10.00</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Update and Clear Cart Buttons */}
          <div className="flex justify-between mt-4">
            <Button className="leading-[18.75px] w-[134px] h-[39px] font-josefin text-[16px] round py-2 px-4">
              Update Cart
            </Button>
            <Button className="leading-[18.75px] w-[134px] h-[39px] font-josefin text-[16px] round py-2 px-4">
              Clear Cart
            </Button>
          </div>
        </div>

        {/* Cart Summary and Calculate Shipping */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8">
        
          {/* Cart Total Box */}
          <div>
            <h2 className="text-[20px] text-[#1D3178] text-center mt-2 font-josefin font-bold mb-4">Cart Total</h2>
            <div className="p-5 border rounded shadow-md w-full sm:w-[371px] h-[284px] bg-[#F4F4FC]">
              <div className="flex justify-between mt-4 pb-3 border-[#E8E6F1] border-b-2">
                <span className='text-[#1D3178] text-[18px] font-lato font-semibold'>Subtotal:</span>
                <span className='text-[#15245E] text-[16px] font-lato font-normal'>$50.00</span>
              </div>
              <div className="flex justify-between mt-8 pb-3 border-[#E8E6F1] border-b-2">
                <span className='text-[#1D3178] text-[18px] font-lato font-semibold'>Total:</span>
                <span className='text-[#15245E] text-[16px] font-lato font-normal'>$50.00</span>
              </div>
              <div className="flex items-center mt-6">
                <div className='flex gap-1 items-center'>
                  <CiCircleCheck color='#19D16F'/>
                  <label className='text-[#8A91AB] text-[12px] font-normal font-lato'>Shipping & taxes calculated at checkout</label>
                </div>
              </div>
              <button className="w-full h-[40px] font-bold text-[14px] font-lato leading-[16.8px] rounded-[3px] mt-8 bg-[#19D16F] text-white py-2">
                Proceed to Checkout
              </button>
            </div>
          </div>

          {/* Calculate Shipping Box */}
          <div>
            <h2 className="text-[20px] text-[#1D3178] text-center font-josefin font-bold mb-4">Calculate Shipping</h2>
            <div className="p-8 border rounded shadow-md w-full sm:w-[371px] h-[284px] font-josefin bg-[#F4F4FC]">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Pakistan"
                  className="w-full text-[14px] placeholder-[#C5CBE3] p-2 border-b-2 border-[#C7CEE4] rounded bg-transparent"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Karachi"
                  className="w-full text-[14px] placeholder-[#C5CBE3] p-2 border-b-2 border-[#C7CEE4] rounded bg-transparent"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="w-full text-[14px] placeholder-[#C5CBE3] p-2 border-b-2 border-[#C7CEE4] bg-transparent"
                />
              </div>
              <Button className="w-full h-[41px] sm:w-[179px] text-[16px] leading-[18.75px] mt-4 rounded-sm">
                Calculate Shipping
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </>
  );
}

export default Cart;