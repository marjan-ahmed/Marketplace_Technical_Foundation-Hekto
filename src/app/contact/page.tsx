import React from 'react'
import Breadcrumb from '../components/Breadcrumb'

function Contact() {
  return (
    <>
    <Breadcrumb title='Contact Us' subtitle='Contact Us'/>
    <div className='mt-32 mb-64 flex gap-44 flex-wrap justify-center'>
        <div className='w-[550px] h-[49px]'>
        <h1 className='font-josefin text-[36px] text-[#151875] leading-[48px] font-bold'>Information About us</h1>
        <p className='text-[#8A8FB9] text-[16px] font-lato leading-[25.6px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
        <div className='w-[103px] h-[25px] flex flex-wrap gap-3 mt-12'>
            <div className='w-[25px] h-[25px] rounded-full bg-[#5625DF]'></div>
            <div className='w-[25px] h-[25px] rounded-full bg-[#FF27B7]'></div>
            <div className='w-[25px] h-[25px] rounded-full bg-[#37DAF3]'></div>
        </div>
    </div>
    
    <div>
  <h1 className="font-josefin text-[36px] text-[#151875] leading-[48px] font-bold">Contact Way</h1>
  
  <div className="w-full sm:w-[489px] h-[155px] flex flex-wrap flex-col gap-8 sm:gap-20 mt-8">
    {/* Parent div */}
    <div className="w-full sm:w-[489px] flex flex-wrap gap-8 sm:gap-20">
      {/* First child div (containing the first two dots) */}
      <div className="flex flex-wrap items-center gap-8 sm:gap-20">
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="w-[45px] h-[45px] bg-[#5726DF] rounded-full">
            <div className="w-[172px] h-[53px] ml-4 sm:ml-14 font-lato text-[#8A8FB9]">
              <h5>Tel: 877-67-88-99</h5>
              <h5>E-Mail: shop@store.com</h5>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="w-[45px] h-[45px] bg-pink rounded-full">
            <div className="w-[172px] h-[53px] ml-4 sm:ml-14 font-lato text-[#8A8FB9]">
              <h5>Support Forum</h5>
              <h5>For over 24hr</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Second child div (containing the third and fourth dots) */}
      <div className="flex flex-wrap gap-8 sm:gap-20">
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="w-[45px] h-[45px] bg-[#FFB265] rounded-full">
            <div className="w-[172px] h-[53px] ml-4 sm:ml-14 font-lato text-[#8A8FB9]">
              <h5>20 Margaret st, London</h5>
              <h5>Great Britain, 3NM98-LK</h5>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-6">
          <div className="w-[45px] h-[45px] bg-[#1BE982] rounded-full">
            <div className="w-[172px] h-[53px] ml-4 sm:ml-14 font-lato text-[#8A8FB9]">
              <h5>Free standard shipping</h5>
              <h5>on all orders.</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Contact