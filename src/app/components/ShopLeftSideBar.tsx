import React from 'react'
import SearchBar from './SearchBar';


function ShopLeftSideBar() {
  return (
    <div className='w-[211px]'>

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
    <h2 className='text-[#151875] text-[20px] leading-[25px] font-josefin font-extrabold border-b-2 border-black inline-block'>Categories</h2>
    <div className='mt-5 flex flex-col gap-2'>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='category-1' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='category-1'>Chair</label>
      </div>
      <div className='flex gap-2 items-center'>
        <input className='w-[16px] h-[16px] rounded-none' type="checkbox" id='category-2' />
        <label className='text-[16px] font-normal text-[#7E81A2] font-lato leading-[30px]' htmlFor='category-2'>Sofa</label>
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
      <SearchBar />
      </div>
    </div>
      </div>
  </div>
  
  )
}

export default ShopLeftSideBar;