'use client';
import { Button } from '@/components/ui/button'
import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

export default function UniqueProduct() {
  const [product, setProduct] = useState<any | null>(null); 

  useEffect(() => {
    const fetchProduct = async () => {
        
        const data = await client.fetch(`
          *[_type == 'products' && category == 'Sofa'][2]{
            name,
            price,
            "image": image.asset->url
          }
        `);
        
        setProduct(data); 
    };

    fetchProduct(); 
  }, []); 
  
  return (
    <div className="lg:max-w-full w-full bg-pantonePurple mt-32">
      <div className="px-4 py-8 md:px-16 lg:px-32 flex flex-wrap items-start">
        <div className="flex-shrink-0 w-full md:w-auto mb-4 md:mb-0">
          <Image
            src={product?.image || '/default-image.jpg'} 
            alt={product?.name || 'Product'}
            width={558}
            height={550}
            className="max-w-full h-auto"
          />
        </div>
        <div className="flex flex-col justify-center py-8 md:py-20 ml-0 md:ml-8 space-y-6 w-full md:w-auto">
          <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] tracking-[1.5%] font-josefin font-bold text-[#151875] text-center md:text-left">
            Unique Features Of Latest & <br /> Trending Products
          </h1>
          <div className="flex items-start space-x-2">
            <div className="w-[11px] h-[11px] rounded-full bg-pink mt-2"></div>
            <p className="font-medium font-lato text-[#ACABC3] text-[14px] sm:text-[16px]">
              All frames constructed with hardwood solids and laminates
            </p>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-[11px] h-[11px] rounded-full bg-[#2B2BF5] mt-2"></div>
            <p className="font-medium font-lato text-[#ACABC3] text-[14px] sm:text-[16px]">
              Reinforced with double wood dowels, glue, screw - nails
              corner <br /> blocks and machine nails
            </p>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-[11px] h-[11px] rounded-full bg-[#2BF5CC] mt-2"></div>
            <p className="font-medium font-lato text-[#ACABC3] text-[14px] sm:text-[16px]">
              Arms, backs and seats are structurally reinforced
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6 items-center">
            <Button className="w-[120px] sm:w-[157px] h-[40px] sm:h-[45px] rounded-[2px] font-josefin text-[14px] sm:text-[17px] leading-[19.92px] text-white">
              Add To Cart
            </Button>
            <div className="text-center sm:text-left">
              <p className="text-[14px] text-[#151875] font-josefin font-medium tracking-[2%]">
                {product?.name}
              </p>
              <p className="font-lato text-[#151875] font-normal text-[14px]">
                ${product?.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
