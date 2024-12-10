import Image from 'next/image'
import React from 'react'

type TrendingProductsProps = {
    src: string;
    width: number;
    height: number;
}

function TrendingProducts({src, width, height}: TrendingProductsProps) {
  return (
    <div className='w-[270px] h-[350px] p-3 shadow-lg shadow-slate-200'>
        <div className='w-[247px] h-[244px] bg-[#F5F6F8] flex justify-center items-center'>
            <Image 
            src={src}
            alt='product image'
            width={width}
            height={height}/>
        </div>
        <div className='flex justify-center items-center mt-4'>
        <div className='w-[114px] h-[48px]'>
            <h1 className='font-lato font-bold text-[#151875] text-[16px]'>Cantilever chair</h1>
            <div className='flex gap-3 mt-[4px] justify-center items-center'>
                <p className='font-normal font-josefin text-[14px] text-[#151875]'>$26.00</p>
                <p className='font-normal font-josefin text-[12px] text-[#1518754D] line-through'>$42.00</p>
            </div>
        </div>
        </div>

    </div>
  )
}

export default TrendingProducts