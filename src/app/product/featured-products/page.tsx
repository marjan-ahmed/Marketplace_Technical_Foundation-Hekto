import Breadcrumb from "@/app/components/Breadcrumb";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { client } from "@/sanity/lib/client";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";

async function featuredProducts() {
  const query = `
    *[_type == 'products' && isFeaturedProduct == true]{
      _id,
      name,
      "image": image.asset->url,
      description,
      price,
      category,
      "slug": slug.current
    }
  `;
  const data = await client.fetch(query);
  // console.log(data);
  return (
    <>
    <Breadcrumb category="product" subcategory="featured"/>
    <div className="flex flex-wrap justify-center gap-5 mt-5 mb-8 sm:mt-16 sm:mb-16 sm:mx-32 mx-4">
      {data.map((product: any) => (
        <div
          key={product.slug}
          className="mx-4 mt-5 sm:mx-0 relative w-full sm:w-[300px] h-full sm:h-[391px] bg-white hover:bg-[#2F1AC4] hover:text-white shadow-lg shadow-gray-300 group"
        >
          <div className="absolute left-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex gap-[3px]">
              {/* Add to Cart */}
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
          </div>

          {/* Product Image */}
          <div className="h-[236px] bg-[#F6F7FB] flex items-center justify-center">
          <Link href={`/product/featured-products/${product.slug}/`}>
            <Image
              className="object-cover"
              src={product.image}
              alt={product.name}
              width={178}
              height={178}
            />
            </Link>
          </div>

          {/* Product Details */}
          <div className="flex flex-col items-center justify-center gap-3 mt-1">
            <h1 className="font-bold font-lato text-[18px] text-pink text-center mt-3 group-hover:text-white">
            <Link href={`/product/featured-products/${product.slug}/`}>
            {product.name}
            </Link>
            </h1>
            <div className="flex gap-1 w-[52px] h-[4px] justify-center">
              <div className="w-[14px] h-[4px] bg-[#05E6B7] rounded-[10px]"></div>
              <div className="w-[14px] h-[4px] bg-[#F701A8] rounded-[10px]"></div>
              <div className="w-[14px] h-[4px] bg-[#00009D] rounded-[10px] group-hover:bg-[#FFEAC1]"></div>
            </div>
            <div className="mx-5">
            <p className="text-center font-josefin text-[#151875] text-[14px] group-hover:text-white">
              <Link href={`/product/featured-products/${product.slug}/`}>
              {product.description}
              </Link>
            </p>
            <div className="flex justify-between mt-3">
            <p className="text-center mt-[-6px] font-josefin bg-gray-200 p-1 text-[#151875] text-[14px] group-hover:text-black">
              ${product.price}
            </p>
            </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
}

export default featuredProducts;
