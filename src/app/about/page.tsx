import React from 'react'
import Breadcrumb from '../components/Breadcrumb';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ServiceCard from '../components/ServiceCard';

function Page() {
  return (
    <>
      <Breadcrumb title="About Us" subtitle="About Us" />
      
      {/* About Section */}
      <div className="my-24 mx-auto flex justify-center gap-12 flex-wrap px-4 sm:px-6">
      <div className="bg-[#2B3CAB] w-full max-w-[552px] h-[409px] rounded-[6px] relative top-3">
  <div className="w-full sm:w-[555px] h-full sm:h-[390px] absolute left-3 rounded-[6px]">
    <Image 
      src={'/about.png'} 
      alt='About' 
      width={555} 
      height={390} 
      className="object-cover w-full h-full"
    />
  </div>
</div>


        <div className="w-full max-w-[550px] h-auto">
          <h1 className="font-josefin font-extrabold mt-10 sm:mt-14 text-[36px] text-[#151875] leading-[48px]">
            Know About Our Ecommerce Business, History
          </h1>
          <p className="font-lato text-[16px] mt-4 text-[#8A8FB9] font-semibold leading-[25.6px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam,
            malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
          <Button className="w-[145px] h-[44px] font-lato font-semibold text-[18px] leading-[25.6px] rounded-sm sm:mt-16 mt-8">
            Contact Us
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto flex justify-center gap-12 flex-wrap mb-12 px-4 sm:px-6">
        <h1 className="text-[42px] font-josefin text-center leading-[25.6px] font-extrabold w-full max-w-[800px]">
          Our Features
        </h1>
        <div className="flex justify-center flex-wrap gap-4 w-full mb-14">
          <ServiceCard src="/free-delivery.png" />
          <ServiceCard src="/cashback.png" />
          <ServiceCard src="/premium-quality.png" />
          <ServiceCard src="/24-hours-support.png" />
        </div>
      </div>

      <div className='w-full min-h-[503px] bg-[#FBFBFF] mb-24 flex flex-col items-center'>
  <h1 className='font-josefin text-[42px] font-extrabold leading-[1.5] text-center pt-16'>
    Our Clients Say!
  </h1>
  <div className='w-full sm:w-[689px] flex justify-center'>
    <div className='flex justify-center gap-3 mt-3'>
      <div className='w-[55px] h-[55px] rounded-sm'>
        <Image
          className='object-cover w-full h-full rounded-sm'
          src={'/client-1.png'}
          alt='Client 1'
          width={55}
          height={55}
        />
      </div>
      <div className='w-[55px] h-[55px] rounded-sm mt-[-10px]'>
        <Image
          className='object-cover w-full h-full rounded-sm'
          src={'/my-picture(marjan).jpg'}
          alt='Client 2'
          width={55}
          height={55}
        />
      </div>
      <div className='w-[55px] h-[55px] rounded-sm'>
        <Image
          className='object-cover w-full h-full rounded-sm'
          src={'/client-3.png'}
          alt='Client 3'
          width={55}
          height={55}
        />
      </div>
    </div>
  </div>

  <div className='w-[132px] h-[48px] text-center'>
        <h1 className='text-[20px] font-lato font-medium mt-4'>Marjan Ahmed</h1>
        <h3 className='text-[10px] text-[#8A8FB9] font-lato leading-[15.6px]'>Ceo of this Store</h3>
    </div>
    <div className='w-full sm:w-[689px] h-[97px] flex justify-center text-center mt-8'>
        <p className='font-lato font-bold text-[16px] leading-[25.6px] text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
    </div>
    <div className='w-[73px] h-[3px] mt-14 sm:mt-2 flex justify-center gap-1'>
      <div className='w-[18px] h-[3px] bg-[#FF75B0] rounded-xl'></div>
      <div className='w-[27px] h-[3px] bg-[#FB2E86] rounded-xl'></div>
      <div className='w-[18px] h-[3px] bg-[#FF75B0] rounded-xl'></div>
      <div></div>
    </div>
</div>

    </>
  );
}

export default Page;
