import { CalendarDays, PenTool } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

interface LatestBlogProps {
    src: string;
    name: string;
    date: string;
}

function LatestBlog({src, name, date}: LatestBlogProps) {
  return (
    <div className='w-[370px] h-[493px] shadow-lg bg-white shadow-gray-200 '>
        <div className='w-[370px] h-[255px] overflow-hidden  rounded-lg'>
            <Image className='object-cover'
            src={src}
            alt='blog image'
            width={369}
            height={255}/>
        </div>
        <div className='flex m-4 gap-8 mt-3 text-[#151875] text-[14px] font-josefin capitalize'>
        <div className='flex items-start justify-center gap-1'>
            <div>
  <span><PenTool color="#FB2E86" size={15} /></span>
  </div>
  <div>
  <h5 className="text-center">{name}</h5>
  </div>
</div>

            <div className='flex  items-start justify-center gap-1'>
            <div>
            <span><CalendarDays color='#FFA454' size={15}/></span>
            </div>
            <div>
            <h5 className='text-center'>{date}</h5>
            </div>
            </div>
        </div>

        <div className='mx-5 mt-6'>
        <h1 className='font-josefin font-bold text-[#151875] text-[18px]'>Top esssential Trends in 2021</h1>
        <p className='text-[#72718F] text-[16px] font-lato leading-[30px] mt-2 font-normal'>More off this less hello samlande lied much
        over tightly circa horse taped mightly</p>
        <button className='underline leading0[30px] font-lato font-normal text-[16px] leading-[30px] mt-6'>Read More</button>
        </div>
    </div>
  )
}

export default LatestBlog