import React from 'react'
import StarRating from './StarRating';
import { Input } from '@/components/ui/input';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import Link from 'next/link';

function ShopLeftSideBar() {
  return (
    <div className='w-[211px]'>
      <h1 className='text-[#151875] text-[20px] leading-[25px] font-josefin font-extrabold border-b-2 border-black inline-block'>Product Brand</h1>
    <div className='mt-5 flex flex-col gap-2'>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='pdtbrand-1' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='pdtbrand-1'>Coaster Furniture</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='pdtbrand-2' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='pdtbrand-2'>Fusion Dot High Fashion</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='pdtbrand-3' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='pdtbrand-3'>Unique Furniture Restore</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='pdtbrand-4' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='pdtbrand-4'>Dream Furniture Flipping</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='pdtbrand-5' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='pdtbrand-5'>Young Repurposed</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='pdtbrand-6' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='pdtbrand-6'>Green DIY Furniture</label>
      </div>
    </div>

    <div className='mt-10'>
    <h2 className='text-[#151875] text-[20px] leading-[25px] font-josefin font-extrabold border-b-2 border-black inline-block'>Discounted Offer</h2>
    <div className='mt-5 flex flex-col gap-2'>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='offer-1' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='offer-1'>20% Cashback</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='offer-2' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='offer-2'>5% Cashback Offer</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='offer-3' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='offer-3'>25% Cashback Offer</label>
      </div>
    </div>
  </div>

  <div className='mt-10'>
    <h2 className='text-[#151875] text-[20px] leading-[25px] font-josefin font-extrabold border-b-2 border-black inline-block'>Rating Item</h2>
    <div className='mt-5 flex flex-col gap-2'>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='rate-1' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='rate-1'><StarRating /></label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='rate-2' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='rate-2'><StarRating /></label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='rate-3' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='rate-3'><StarRating /></label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='rate-4' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='rate-4'><StarRating /></label>
      </div>
    </div>
  </div>

  <div className='mt-10'>
    <h2 className='text-[#151875] text-[20px] leading-[25px] font-josefin font-extrabold border-b-2 border-black inline-block'>Categories</h2>
    <div className='mt-5 flex flex-col gap-2'>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='category-1' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='category-1'>Prestashop</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='category-2' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='category-2'>Magento</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='category-3' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='category-3'>Bigcommerce</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='category-4' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='category-4'>osCommerce</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='category-5' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='category-5'>3dcart</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='category-6' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='category-6'>Accessories</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='category-7' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='category-7'>Jewellery</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='category-8' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='category-8'>Watches</label>
      </div>
    </div>
  </div>

  <div className='mt-10'>
    <h2 className='text-[#151875] text-[20px] leading-[25px] font-josefin font-extrabold border-b-2 border-black inline-block'>Price Filter</h2>
    <div className='mt-5 flex flex-col gap-2'>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='filter-1' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='filter-1'>$0.00 - $150.00</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='filter-2' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='filter-2'>$150.00 - $350.00</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='filter-3' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='filter-3'>$350.00 - $550.00</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='filter-4' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='filter-4'>$550.00 +</label>
      </div>
      <div className='relative mt-3'>
      <Input className='font-lato font-normal text-[12px] leading-[30px]' />
      <Link href={'#'}><FaMagnifyingGlass className='absolute top-2.5 right-4 text-[#BCBDDB]' /></Link>
      </div>
    </div>
  </div>

  <div className='mt-10'>
    <h2 className='text-[#151875] text-[20px] leading-[25px] font-josefin font-extrabold border-b-2 border-black inline-block'>Filter By Color</h2>
    <div className='mt-5 flex flex-col gap-2'>
    <div className='flex justify-between gap-5'>
      <div className='flex gap-1 items-center'>
        <span className='w-[14px] h-[14px] rounded-full bg-[#5E37FF]' id='color-1'></span>
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='color-1'>Blue</label>
        </div>
        <div className='flex gap-1 items-center'>
        <span className='w-[14px] h-[14px] rounded-full bg-[#FF9437]' id='color-2'></span>
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='color-2'>Orange</label>
        </div>
        <div className='flex gap-1 items-center'>
        <span className='w-[14px] h-[14px] rounded-full bg-[#FFBF95]' id='color-3'></span>
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='color-3'>Brown</label>
        </div>
      </div>

      <div className='flex justify-between gap-5'>
      <div className='flex gap-1 items-center'>
        <span className='w-[14px] h-[14px] rounded-full bg-[#33D221]' id='checkbox-7'></span>
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='checkbox-7'>Green</label>
        </div>
        <div className='flex gap-1 items-center'>
        <span className='w-[14px] h-[14px] rounded-full bg-[#E248FF]' id='checkbox-7'></span>
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='checkbox-7'>Purple</label>
        </div>
        <div className='flex gap-1 items-center'>
        <span className='w-[14px] h-[14px] rounded-full bg-[#26CBFF]' id='checkbox-7'></span>
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='checkbox-7'>Sky</label>
        </div>
      </div>
      </div>
      </div>

  </div>
  
  )
}

export default ShopLeftSideBar;