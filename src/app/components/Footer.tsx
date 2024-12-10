import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <>
      <div className='w-full'>
        <div className='bg-pantonePurple w-full h-auto'>
          <div className='flex flex-col sm:flex-row sm:gap-20 gap-10 px-4 sm:px-10 lg:px-36 py-[44px] sm:py-[95px]'>
            <div>
              <h1 className='text-[32px] sm:text-[38px] font-bold font-josefin'>Heckto</h1>
              <div className="relative flex w-full max-w-sm mt-4 items-center">
                <Input className='w-full h-[44px] sm:w-[377px] bg-white' type="email" placeholder="Search Email Address" />
                <Button className='absolute right-1 w-[135px] h-[39px] rounded-none p-[21px] focus:p-[21px] mx-[-4px] sm:mx-[3px]' type="submit">Sign Up</Button>
              </div>
              <div className='mt-5 sm:mt-8 text-[#8A8FB9] font-lato'>
                <h1>Contact Info</h1>
                <p className='mt-1 text-[14px] sm:text-[16px] font-normal'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
              </div>
            </div>
            <div>
              <h1 className='text-[18px] sm:text-[22px] font-bold font-josefin'>Categories</h1>
              <ul className='mt-2 sm:mt-8 flex flex-col gap-2 sm:gap-4 font-lato text-[14px] sm:text-[16px] text-[#8A8FB9]'>
                <li>Laptops & Computers</li>
                <li>Cameras & Photography</li>
                <li>Smart Phones & Tablets</li>
                <li>Video Games & Consoles</li>
                <li>Waterproof Headphones</li>
              </ul>
            </div>
            <div>
              <h1 className='text-[18px] sm:text-[22px] font-bold font-josefin'>Customer Care</h1>
              <ul className='mt-2 sm:mt-8 flex flex-col gap-2 sm:gap-4 font-lato text-[14px] sm:text-[16px] text-[#8A8FB9]'>
                <li>My Account</li>
                <li>Discount</li>
                <li>Returns</li>
                <li>Orders History</li>
                <li>Order Tracking</li>
              </ul>
            </div>
            <div>
              <h1 className='text-[18px] sm:text-[22px] font-bold font-josefin'>Pages</h1>
              <ul className='mt-2 sm:mt-8 flex flex-col gap-2 sm:gap-4 font-lato text-[14px] sm:text-[16px] text-[#8A8FB9]'>
                <li>Blog</li>
                <li>Browse the Shop</li>
                <li>Category</li>
                <li>Pre-Built Pages</li>
                <li>Visual Composer Elements</li>
                <li>WooCommerce Pages</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex justify-between bg-[#E7E4F8] font-lato text-[#9DA0AE] py-4 px-4 sm:px-10 lg:px-36 w-full h-[53px] items-center'>
          <div>
            <h1 className='sm:text-[16px] text-[14px]'>©Webecy - All Rights Reserved</h1>
          </div>
          <div className="flex justify-center items-center">
            <ul className="flex gap-2 sm:gap-4">
              <li className="bg-[#151875] w-[35px] h-[35px] rounded-full flex justify-center items-center">
                <Facebook className="text-white" size={20}/>
              </li>
              <li className="bg-[#151875] w-[35px] h-[35px] rounded-full flex justify-center items-center">
                <Instagram className="text-white" size={20}/>
              </li>
              <li className="bg-[#151875] w-[35px] h-[35px] rounded-full flex justify-center items-center">
                <Twitter className="text-white" size={20}/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
