'use client';
import Image from 'next/image';
import React from 'react';

type ProductCart2Props = {
  src: string;
  alt: string;
  productName: string;
  price: number;
}

function ProductCart2({ src, alt, productName, price }: ProductCart2Props) {
  return (
    <>
      <div>
        <div className="w-[270px] h-[363px] bg-white group relative flex flex-col items-center">
          {/* Product image */}
          <div className='w-[270px] h-[280px] flex justify-center items-center bg-[#F6F7FB] group-hover:bg-[#EBF4F3] transition-colors duration-300'>
            <Image
              src={src} 
              alt={alt}
              width={195}
              height={195}
              loading='lazy'
              placeholder='blur'
              blurDataURL={src}
            />
          </div>

          {/* Product details */}
          <div className="flex flex-col items-center justify-between mt-4 w-full h-[83px]">
            <h1 className="text-[17.3px] text-[#151875] font-bold font-josefin text-center whitespace-nowrap overflow-hidden text-ellipsis w-[90%]">
              {productName}
            </h1>
            <div className="flex items-center justify-center gap-2 mt-4 mb-4">
              <div className="w-[10px] h-[10px] rounded-full bg-[#DE9034]"></div>
              <div className="w-[10px] h-[10px] rounded-full bg-[#EC42A2]"></div>
              <div className="w-[10px] h-[10px] rounded-full bg-[#8568FF]"></div>
            </div>
            <div className="text-center font-josefin text-[#151875] text-[14px]">{`$${price}`}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCart2;
