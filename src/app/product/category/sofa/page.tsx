import Breadcrumb from "@/app/components/Breadcrumb";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { client } from "@/sanity/lib/client";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";

// Fetch featured products on the server side
async function SofaProducts() {
  const query = `
    *[_type == 'products' && category == 'Sofa']{
  name,
  description,
  price,
  category,
    _id,
  discountPercentage,
    isFeaturedProduct,
    "image": image.asset->url
}
  `;
  return client.fetch(query);
}

export default async function FeaturedProduct() {
  const data = await SofaProducts();

  return (
    <>
    <Breadcrumb title="Sofa" subtitle="Category" />
    <div className="flex flex-wrap justify-center mt-20 mb-20 mx-4 gap-5 sm:mx-32">
      {data.map((product: any) => (
        <div
          key={product._id}
          className=" relative w-full sm:w-[300px] h-full mt-5 sm:h-[420px] bg-white hover:bg-[#2F1AC4] hover:text-white shadow-2xl shadow-gray-300 group"
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
            <Image
              className="object-cover"
              src={product.image}
              alt={product.name}
              width={178}
              height={178}
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col items-center justify-center gap-3 mt-1">
            <h1 className="font-bold font-lato text-[18px] text-pink text-center mx-1 mt-3 group-hover:text-white">
              {product.name}
            </h1>
            <div className="flex gap-1 w-[52px] h-[4px] justify-center">
              <div className="w-[14px] h-[4px] bg-[#05E6B7] rounded-[10px]"></div>
              <div className="w-[14px] h-[4px] bg-[#F701A8] rounded-[10px]"></div>
              <div className="w-[14px] h-[4px] bg-[#00009D] rounded-[10px] group-hover:bg-[#FFEAC1]"></div>
            </div>
            <div className="mx-5">
              <p className="text-center font-josefin text-[#151875] text-[14px] group-hover:text-white">
                {product.description}
              </p>
              <div className="absolute bottom-[10px] left-1/2 transform -translate-x-1/2 w-5/6">
  <div className="flex justify-between items-center">
    <p className="text-center font-josefin text-[#151875] text-[14px] group-hover:text-white">
      ${product.price}
    </p>
    <p className="text-center font-josefin font-semibold text-[#767676] text-[14px] group-hover:text-white">
      {product.category}
    </p>
  </div>
</div>

            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
}
