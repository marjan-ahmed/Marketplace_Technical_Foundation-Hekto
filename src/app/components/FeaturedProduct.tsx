import Image from "next/image";
import React from "react";

type ProductCardProps = {
    src: string;
    alt: string;
}

function FeaturedProduct({src, alt}: ProductCardProps) {
  return (
    <div className="w-[270px] h-[361px] bg-white shadow-2xl shadow-gray-300">
      <div className="h-[236px] bg-[#F6F7FB] flex items-center justify-center">
        <Image className="object-cover"
        src={`${src}`}
        alt={alt}
        width={178}
        height={178}/>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="font-bold font-lato text-[18px] text-pink text-center mt-3">Cantilever chair</h1>
        <div className="flex gap-1 w-[52px] h-[4px] justify-center">
          <div className="w-[14px] h-[4px] bg-[#05E6B7] rounded-[10px]"></div>
          <div className="w-[14px] h-[4px] bg-[#F701A8] rounded-[10px]"></div>
          <div className="w-[14px] h-[4px] bg-[#00009D] rounded-[10px]"></div>
        </div>
        <p className="text-center font-josefin text-[#151875] text-[14px]">Code - Y523201</p>
        <p className="text-center mt-[-6px] font-josefin text-[#151875] text-[14px]">$42.00</p>
      </div>
    </div>
  );
}

export default FeaturedProduct;