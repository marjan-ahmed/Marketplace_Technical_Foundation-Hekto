import Link from 'next/link'
import { FaList } from 'react-icons/fa'
import { IoGridSharp } from 'react-icons/io5'

function ShopControl() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center mx-4 lg:mx-40 mt-20 mb-20">
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <h1 className="text-[#151875] text-[22px] lg:text-[28px] font-josefin leading-[25.78px] font-bold">
            Ecommerce Accessories & Fashion Item
          </h1>
          <p className="text-[#8A8FB9] text-[12px] lg:text-[14px] font-lato font-normal">
            About 9,620 results (0.62 seconds)
          </p>
        </div>

        <div className="flex flex-wrap justify-start sm:px-0 px-4 lg:justify-end items-center gap-4 lg:gap-6 w-full lg:w-auto">
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

          <div className="flex items-center gap-2">
            <label htmlFor="sortBy" className="font-lato font-normal text-[16px] text-[#3F509E] leading-[19.2px]">
              Sort By:
            </label>
            <select
              id="sortBy"
              className="w-[130px] h-[25px] border-[#E7E6EF] border-2 text-[12px] text-[#8A8FB9] font-lato leading-[18px]"
            >
              <option value=" " disabled>
                Best Matches
              </option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="titleAsc">Title: A to Z</option>
              <option value="titleDesc">Title: Z to A</option>
            </select>
          </div>

          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 font-lato font-normal text-[16px] text-[#3F509E] leading-[19.2px]" htmlFor="view">
              View:
              <span className="flex items-center gap-4">
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
  );
}

export default ShopControl