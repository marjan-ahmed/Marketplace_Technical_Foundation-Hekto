import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Heart, ShoppingCart } from 'lucide-react';
import React from 'react'
import { HiOutlineMagnifyingGlassPlus } from 'react-icons/hi2';

function ProductHoveringEffect() {
  return (
    <div>
         <TooltipProvider>
                <Tooltip>
                  <div className="w-[40px] h-[40px] flex items-center justify-center text-[#1389FF] hover:bg-[#EEEFFB] rounded-full relative">
                    <TooltipTrigger>
                      <ShoppingCart size={20} />
                    </TooltipTrigger>
                    <TooltipContent className="flex items-center text-[12px] py-1 rounded shadow-lg border border-gray-300">
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
  )
}

export default ProductHoveringEffect;