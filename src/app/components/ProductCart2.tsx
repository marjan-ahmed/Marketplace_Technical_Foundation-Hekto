'use client'
import Image from "next/image";
import { Heart, ShoppingCart, Search } from 'lucide-react'; // Import the icons
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";

type ProductCart2Props = {
  src: string;
  alt: string;
  productName: string;
  width: number;
  height: number;
  olderPrice: number;
  newPrice: number;
}

function ProductCart2({ src, alt, width, height, productName, olderPrice, newPrice }: ProductCart2Props) {
  return (
    <>
    <div>
      <div className="w-[270px] h-[363px] bg-white group relative">
        {/* Product image */}
        <div className='w-[270px] h-[280px] flex justify-center items-center bg-[#F6F7FB] group-hover:bg-[#EBF4F3] transition-colors duration-300'>
          <Image 
            src={src} 
            alt={alt}
            width={width}
            height={height}
            className=""
          />
        </div>

        {/* Icons appear on hover, align to the right */}
       


        {/* Product details */}
        <div className="flex flex-col gap-2 justify-center items-center mt-2">
          <h1 className="text-[17.3px] text-[#151875] font-bold font-josefin">{productName}</h1>
          <div className="flex gap-[5px] w-[42px] h-[10px]">
            <div className="w-[10px] h-[10px] rounded-full bg-[#DE9034]"></div>
            <div className="w-[10px] h-[10px] rounded-full bg-[#EC42A2]"></div>
            <div className="w-[10px] h-[10px] rounded-full bg-[#8568FF]"></div>
          </div>
          <div className="w-[96px] text-[14px] h-[14px] flex gap-3 font-josefin">
            <div className="w-[43px] h-[14px] text-[#151875]">{`$${newPrice}.00`}</div>
            <div className="w-[43px] h-[14px] line-through text-[#FB2E86] ">{`$${olderPrice}.00`}</div>
          </div>
        </div>
      </div>
    </div>
     </>
  );
}

export default ProductCart2;
