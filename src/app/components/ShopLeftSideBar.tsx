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
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='checkbox-1' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='checkbox-1'>Coaster Furniture</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='checkbox-2' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='checkbox-2'>Fusion Dot High Fashion</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='checkbox-3' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='checkbox-3'>Unique Furniture Restore</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='checkbox-4' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='checkbox-4'>Dream Furniture Flipping</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='checkbox-5' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='checkbox-5'>Young Repurposed</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='checkbox-6' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='checkbox-6'>Green DIY Furniture</label>
      </div>
    </div>

    <div className='mt-10'>
    <h2 className='text-[#151875] text-[20px] leading-[25px] font-josefin font-extrabold border-b-2 border-black inline-block'>Discounted Offer</h2>
    <div className='mt-5 flex flex-col gap-2'>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='checkbox-7' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='checkbox-7'>20% Cashback</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='checkbox-8' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='checkbox-8'>5% Cashback Offer</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='checkbox-9' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='checkbox-9'>25% Cashback Offer</label>
      </div>
    </div>
  </div>

  <div className='mt-10'>
    <h2 className='text-[#151875] text-[20px] leading-[25px] font-josefin font-extrabold border-b-2 border-black inline-block'>Rating Item</h2>
    <div className='mt-5 flex flex-col gap-2'>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='checkbox-7' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='checkbox-7'><StarRating /></label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='checkbox-8' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='checkbox-8'><StarRating /></label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='checkbox-9' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='checkbox-9'><StarRating /></label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='checkbox-9' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='checkbox-9'><StarRating /></label>
      </div>
    </div>
  </div>

  <div className='mt-10'>
    <h2 className='text-[#151875] text-[20px] leading-[25px] font-josefin font-extrabold border-b-2 border-black inline-block'>Categories</h2>
    <div className='mt-5 flex flex-col gap-2'>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='checkbox-7' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='checkbox-7'>Prestashop</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='checkbox-8' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='checkbox-8'>Magento</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='checkbox-9' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='checkbox-9'>Bigcommerce</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='checkbox-9' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='checkbox-9'>osCommerce</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='checkbox-9' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='checkbox-9'>3dcart</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='checkbox-9' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='checkbox-9'>Accessories</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='checkbox-9' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='checkbox-9'>Jewellery</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='checkbox-9' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='checkbox-9'>Watches</label>
      </div>
    </div>
  </div>

  <div className='mt-10'>
    <h2 className='text-[#151875] text-[20px] leading-[25px] font-josefin font-extrabold border-b-2 border-black inline-block'>Price Filter</h2>
    <div className='mt-5 flex flex-col gap-2'>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='checkbox-7' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='checkbox-7'>$0.00 - $150.00</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='checkbox-8' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='checkbox-8'>$150.00 - $350.00</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='checkbox-9' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='checkbox-9'>$350.00 - $550.00</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='checkbox-9' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='checkbox-9'>$550.00 +</label>
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
        <span className='w-[14px] h-[14px] rounded-full bg-[#5E37FF]' id='checkbox-7'></span>
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='checkbox-7'>Blue</label>
        </div>
        <div className='flex gap-1 items-center'>
        <span className='w-[14px] h-[14px] rounded-full bg-[#FF9437]' id='checkbox-7'></span>
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='checkbox-7'>Orange</label>
        </div>
        <div className='flex gap-1 items-center'>
        <span className='w-[14px] h-[14px] rounded-full bg-[#FFBF95]' id='checkbox-7'></span>
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='checkbox-7'>Brown</label>
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