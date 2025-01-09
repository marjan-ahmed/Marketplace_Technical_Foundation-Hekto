import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import ProductCart2 from "../../components/ProductCart2";
import ShopControl from "@/app/components/ShopControl";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ShoppingCart, Heart } from "lucide-react";
import { HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";

export default async function Shop() {
  const query = `
  *[_type == 'shopGrid'] | order(_createdAt asc) {
    productTitle,
    id,
    productImage,
    olderPrice,
    newPrice,
    description
  }
  `;
  const products = await client.fetch(query);
  console.log(products);

  return (
    <>
      <Breadcrumb title="Shop" subtitle="Shop" />
      <ShopControl />
      <div className="mt-10 flex flex-wrap justify-center gap-10 mx-36 mb-10">
        {products.map((product: any) => (
          <div key={product.id} className="relative group">
            <Link href={`/shop/grid/${product.id}`}>
            <ProductCart2
              src={urlFor(product.productImage).url()}
              alt={product.productTitle}
              width={195}
              height={195}
              productName={product.productTitle}
              olderPrice={product.olderPrice}
              newPrice={product.newPrice}
            />
            </Link>
            <div className="absolute left-2 bottom-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col gap-[10px]">
                {/* Add to Cart */}
                <TooltipProvider>
                  <Tooltip>
                    <div className="bg-white w-[35px] h-[35px] hover:shadow-sm hover:shadow-gray-300 rounded-full flex justify-center items-center text-[#151875] cursor-pointer relative">
                      <TooltipTrigger>
                        <ShoppingCart size={20} />
                      </TooltipTrigger>
                      <TooltipContent className="flex items-center text-[12px] absolute left-[120%] top-[50%] -translate-y-1/2 w-max px-2 py-1 rounded shadow">
                        <p>Add to Cart</p>
                      </TooltipContent>
                    </div>
                  </Tooltip>
                </TooltipProvider>

                {/* Add to Wishlist */}
                <TooltipProvider>
                  <Tooltip>
                    <div className="bg-white w-[35px] h-[35px] hover:shadow-sm hover:shadow-gray-300 rounded-full flex justify-center items-center text-[#151875] cursor-pointer relative">
                      <TooltipTrigger>
                        <Heart size={20} />
                      </TooltipTrigger>
                      <TooltipContent className="flex items-center text-[12px] absolute left-[120%] top-[50%] -translate-y-1/2 w-max px-2 py-1 rounded shadow">
                        <p>Add to Wishlist</p>
                      </TooltipContent>
                    </div>
                  </Tooltip>
                </TooltipProvider>

                {/* View Details */}
                <TooltipProvider>
                  <Tooltip>
                  <Link href={`/shop/grid/${product.id}`} >
                    <div className="bg-white w-[35px] h-[35px] hover:shadow-sm hover:shadow-gray-300 rounded-full flex justify-center items-center text-[#151875] cursor-pointer relative">
                      <TooltipTrigger>
                        <HiOutlineMagnifyingGlassPlus size={20} />
                      </TooltipTrigger>
                      <TooltipContent className="flex items-center text-[12px] absolute left-[120%] top-[50%] -translate-y-1/2 w-max px-2 py-1 rounded shadow">
                          <span className="cursor-pointer">View Details</span>
                      </TooltipContent>
                    </div>
                    </Link>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-16 mt-24">
        <Image
          src={"/companies.png"}
          alt="Companies Logo"
          width={904}
          height={93}
        />
      </div>
    </>
  );
}
