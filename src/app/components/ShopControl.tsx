'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaList } from 'react-icons/fa'
import { IoGridSharp } from 'react-icons/io5'
import products from '../product/product'

function ShopControl() {
  const [sorting, setSorting] = useState(' ');
  const [sortedProducts, setSortedProducts] = useState(products);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectVal = e.target.value;
    setSorting(selectVal);
    const tempArr = [...products];

    if (selectVal === 'low') {
      tempArr.sort((product1, product2) => Number(product1.price) - Number(product2.price));
    } else if (selectVal === 'high') {
      tempArr.sort((product1, product2) => Number(product2.price) - Number(product1.price));
    } else if (selectVal === 'titleAsc') {
      tempArr.sort((product1, product2) => product1.name.localeCompare(product2.name));
    } else if (selectVal === 'titleDesc') {
      tempArr.sort((product1, product2) => product2.name.localeCompare(product1.name));
    }
    setSortedProducts(tempArr);
  };
  return (
    <>
{/* Top Section: Title and Controls */}
<div className="flex flex-col lg:flex-row justify-between items-center mx-4 lg:mx-40 mt-20 mb-20">
  {/* Title and Description */}
  <div className="text-center lg:text-left mb-4 lg:mb-0">
    <h1 className="text-[#151875] text-[22px] lg:text-[28px] font-josefin leading-[25.78px] font-bold">
      Ecommerce Accessories & Fashion Item
    </h1>
    <p className="text-[#8A8FB9] text-[12px] lg:text-[14px] font-lato font-normal">
      About 9,620 results (0.62 seconds)
    </p>
  </div>

  {/* Controls Section */}
  <div className="flex flex-wrap justify-start sm:px-0 px-4 lg:justify-end items-center gap-4 lg:gap-6 w-full lg:w-auto">
    {/* Per Page Input */}
    <div className="flex items-center gap-2">
      <label htmlFor="perPage" className="font-lato font-normal text-[16px] text-[#3F509E] leading-[19.2px]">
        Per Page:
      </label>
      <input
        type="number"
        id="perPage"
        className="w-[55px] h-[25px] border-[#E7E6EF] border-2"
      />
    </div>

    {/* Sort By */}
    <div className="flex items-center gap-2">
      <label htmlFor="sortBy" className="font-lato font-normal text-[16px] text-[#3F509E] leading-[19.2px]">
        Sort By:
      </label>
      <select
        id="sortBy"
        value={sorting}
        onChange={handleChange}
        className="w-[130px] h-[25px] border-[#E7E6EF] border-2 text-[12px] text-[#8A8FB9] font-lato leading-[18px]"
      >
        <option value=" " disabled>Best Matches</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
        <option value="titleAsc">Title: A to Z</option>
        <option value="titleDesc">Title: Z to A</option>
      </select>
    </div>

    {/* View Options */}
    <div className="flex items-center gap-4">
      <label className="flex items-center gap-2 font-lato font-normal text-[16px] text-[#3F509E] leading-[19.2px]" htmlFor="view">
        View:
        <span className="flex items-center gap-4">
          {/* Align items horizontally with space between */}
          <Link href="/shop/grid" className="flex items-center">
            <IoGridSharp className="mr-1" color="#151875" />
            Grid
          </Link>
          <Link href="/shop/list" className="flex items-center">
            <FaList className="mr-1" color="#151875" />
            List
          </Link>
        </span>
      </label>
    </div>
  </div>
</div>
</>
  )
}

export default ShopControl