import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";
import { HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";

type ProductCardProps = {
    src: string;
    alt: string;
    width: number;
    height: number
}

function FeaturedProduct({width, height, src, alt}: ProductCardProps) {
  return (
    <div className="relative w-[270px] h-[361px] bg-white hover:bg-[#2F1AC4] hover:text-white shadow-2xl shadow-gray-300 group">
        <div className="absolute left-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-[4px]">
                {/* Add to Cart */}
                <TooltipProvider>
  <Tooltip>
    <div className="w-[40px] h-[40px] flex items-center justify-center text-[#1389FF] hover:bg-[#EEEFFB] rounded-full relative">
      <TooltipTrigger>
        <ShoppingCart size={20} />
      </TooltipTrigger>
      <TooltipContent className="flex items-center text-[12px]  py-1 rounded shadow-lg border border-gray-300">
        <p>Add to Cart</p>
      </TooltipContent>
    </div>
  </Tooltip>
</TooltipProvider>


                {/* Add to Wishlist */}
                <TooltipProvider>
                  <Tooltip>
                    <div className="w-[40px] h-[40px] flex items-center justify-center text-[#1389FF] hover:bg-[#EEEFFB] rounded-full relative">
                      <TooltipTrigger>
                        <Heart size={20} />
                      </TooltipTrigger>
                      <TooltipContent className="flex items-center text-[12px] px-2 py-1 rounded shadow">
                        <p>Add to Wishlist</p>
                      </TooltipContent>
                    </div>
                  </Tooltip>
                </TooltipProvider>

                {/* View Details */}
                <TooltipProvider>
                  <Tooltip>
                    <div className="w-[40px] h-[40px] flex items-center justify-center text-[#1389FF] hover:bg-[#EEEFFB] rounded-full relative">
                      <TooltipTrigger>
                        <HiOutlineMagnifyingGlassPlus size={20} />
                      </TooltipTrigger>
                      <TooltipContent className="flex items-center text-[12px] px-2 py-1 rounded shadow">
                          <span className="cursor-pointer">View Details</span>
                      </TooltipContent>
                    </div>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            
      <div className="h-[236px] bg-[#F6F7FB] flex items-center justify-center">
        <Image className="object-cover"
        src={`${src}`}
        alt={alt}
        width={width}
        height={height}/>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="font-bold font-lato text-[18px] text-pink text-center mt-3 group-hover:text-white">Cantilever chair</h1>
        <div className="flex gap-1 w-[52px] h-[4px] justify-center">
          <div className="w-[14px] h-[4px] bg-[#05E6B7] rounded-[10px]"></div>
          <div className="w-[14px] h-[4px] bg-[#F701A8] rounded-[10px]"></div>
          <div className="w-[14px] h-[4px] bg-[#00009D] rounded-[10px] group-hover:bg-[#FFEAC1]"></div>
        </div>
        <p className="text-center font-josefin text-[#151875] text-[14px] group-hover:text-white">Code - Y523201</p>
        <p className="text-center mt-[-6px] font-josefin text-[#151875] text-[14px] group-hover:text-white">$42.00</p>
      </div>
    </div>
  );
}

export default FeaturedProduct;