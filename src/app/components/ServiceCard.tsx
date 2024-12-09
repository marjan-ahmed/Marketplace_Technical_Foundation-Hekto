import Image from 'next/image'
import React from 'react'

type ServiceCardProps = {
    src: string;
}

function ServiceCard({src}: ServiceCardProps) {
  return (
    <div className='w-[270px] h-[320px] flex flex-col justify-center text-center items-center gap-3 shadow-gray-100 shadow-md'>
        <div>
        <Image 
        src={src}
        alt='service image'
        width={65}
        height={65}/>
    </div>
    <div>
        <h1 className='text-[22px] text-[#151875] font-semibold font-josefin'>24/7 Support</h1>
    </div>
    <div>
        <p className='text-[#1A0B5B4D] text-[16px] font-lato font-bold leading-[25.6px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
    </div>
    </div>
  )
}

export default ServiceCard