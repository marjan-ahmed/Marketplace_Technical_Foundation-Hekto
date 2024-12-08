import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <>
    <div className='px-34'>
    <div className='bg-pantonePurple w-full h-[479px]'>
      <div className='flex flex-col sm:flex-row gap-20 px-36 py-[95px]'>
        <div>
          <h1 className='text-[38px] w-[110px] h-[38px] font-bold'>Heckto</h1>
          <div className="relative flex w-full max-w-sm mt-8 items-center">
      <Input className='w-[377px] bg-white' type="email" placeholder="Search Email Address" />
      <Button className='absolute right-1' type="submit">Subscribe</Button>
    </div>
    <div className='mt-8 text-[#8A8FB9]'>
      <h1>Contact Info</h1>
      <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
    </div>
    </div>
        <div>
          <h1 className='text-[22px] font-bold'>Catagories</h1>
          <ul className='mt-8 flex flex-col gap-4 text-[#8A8FB9]'>
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>
        <div>
          <h1 className='text-[22px] font-bold'>Customer Care</h1>
          <ul className='mt-8 flex flex-col gap-4 text-[#8A8FB9]'>
          <li>My Account</li>
          <li>Discount</li>
          <li>Returns</li>
          <li>Orders History</li>
          <li>Order Tracking</li>
          </ul>
        </div>
        <div>
          <h1 className='text-[22px] font-bold'>Pages</h1>
          <ul className='mt-8 flex flex-col gap-4 text-[#8A8FB9]'>
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
    <div className='flex justify-between bg-[#E7E4F8] text-[#9DA0AE] py-4 px-36 w-full h-[53px] items-center'>
      <div>
        <h1>©Webecy - All Rights Reserved</h1>
      </div>
      <div className="flex justify-center items-center">
        <ul className="flex gap-4">
          <li className="bg-[#151875] w-[35px] h-[35px] rounded-full flex justify-center items-center">
            <Facebook className="text-white" />
          </li>
          <li className="bg-[#151875] w-[35px] h-[35px] rounded-full flex justify-center items-center">
            <Instagram className="text-white" />
          </li>
          <li className="bg-[#151875] w-[35px] h-[35px] rounded-full flex justify-center items-center">
            <Twitter className="text-white" />
          </li>
        </ul>
      </div>
    </div>
    </div>

    </>
  )
}

export default Footer