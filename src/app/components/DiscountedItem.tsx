"use client";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { Check } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function DiscountedItem() {
  const [discountedItem, setDiscountedItem] = useState<any | null>(null); 
  const [loading, setLoading] = useState<boolean>(true); // State to track loading status

  useEffect(() => {
    const getDisItem = async () => {
        const itemData = await client.fetch(`
          *[_type == 'products' && category == 'Chair'][10]{
          name,
          description,
          price,
          "image": image.asset->url,
          "slug": slug.current
          }   
        `);
        console.log(itemData); // Check the fetched data
        setDiscountedItem(itemData);
    };

    getDisItem();
  }, []);


  return (
    <div>
      <div>
        <div className="flex flex-wrap lg:flex-nowrap gap-5 sm:mt-12">
          {/* main div */}
          <div className="w-full lg:w-1/2">
            <div className="sm:w-[509px] sm:h-[46px] flex sm:justify-center">
              <h1 className="text-[#151875] font-josefin font-bold text-[20px] sm:text-[35px] tracking-[1.5%]">
                20% Discount Of All Products
              </h1>
            </div>
            <h2 className="mt-0 mb-3 sm:mt-3 text-pink font-lato text-[16px] sm:text-[21px] tracking-[1.5%]">
              {discountedItem?.name}
            </h2>
            <div className="sm:w-[523px] h-[49px] text-wrap">
              <p className="text-[#B7BACB] text-[14px] sm:text-[17px] font-normal font-lato">
                {discountedItem?.description}
              </p>
            </div>
            <div className="flex flex-wrap text mt-6">
              <div className="w-full md:w-auto">
                <ul className="flex flex-wrap gap-x-6 gap-y-4 text-[14px] sm:text-[16px] font-lato font-normal text-[#B8B8DC]">
                  <li className="flex gap-1 w-full sm:w-auto">
                    <Check color="#7569B2" />
                    Material expose like metals
                  </li>
                  <li className="flex gap-1 w-full sm:w-auto">
                    <Check color="#7569B2" />
                    Clear lines and geometric figures
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-auto mt-4">
                <ul className="flex flex-wrap gap-x-14 gap-y-4 text-[14px] sm:text-[16px] font-lato font-normal text-[#B8B8DC]">
                  <li className="flex gap-1 w-full sm:w-auto">
                    <Check color="#7569B2" />
                    Simple neutral colours.
                  </li>
                  <li className="flex gap-1 w-full sm:w-auto">
                    <Check color="#7569B2" />
                    Material expose like metals
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 sm:mt-10">
              <Button className="w-full sm:w-[200px] h-[45px] sm:h-[57px] text-center text-[14px] sm:text-[17px] font-josefin tracking-[2%] rounded-[2px]">
                Shop Now
              </Button>
            </div>
          </div>
          <div className="w-full sm:w-[699px] sm:h-[597px] lg:w-1/2 flex sm:mt-[-10em] ">
            <Image
              className="object-cover"
              src={discountedItem?.image || '/fallback-image.jpg'} // Provide a fallback image in case data is missing
              alt={discountedItem?.name || "Discounted Chair"}
              width={699}
              height={597}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscountedItem;
