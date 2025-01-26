import Breadcrumb from "@/app/components/Breadcrumb";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function TrendingProducts() {
  const query = `
    *[_type == 'products' && isFeaturedProduct == false]{
      name,
      "image": image.asset->url,
      description,
      price,
      "slug": slug.current
    }
  `;
  const data = await client.fetch(query);
  console.log(data);
  return (
    <>
    <Breadcrumb category="product" subcategory="trending"/>
    <div className="flex flex-wrap justify-center gap-5 mt-5 mb-8 sm:mt-16 sm:mb-16 sm:mx-10"> 
        {data.map((product: any) => (
          <div key={product.slug} className="w-3/4 sm:w-[360px] h-3/4 sm:h-[306px] bg-white mt-10 sm:px-0 ">
            <div className="w-full h-[269.96px] bg-[#F7F7F7] flex justify-center items-center">
              <Link href={`/product/trending-products/${product.slug}`}>
              <Image
                src={product.image} 
                alt={`Product Image of ${product.name}`}
                width={223}
                height={229}
                layout="intrinsic" 
                objectFit="contain" 
                loading="lazy"
                placeholder="blur"
                blurDataURL={product.image}
                quality={90}
              />
              </Link>
            </div>
            <div className="flex gap-3 justify-between mt-2 font-josefin">
              <h1 className="text-[#151875] text-[16px] border-b-2 border-[#EEEFFB] font-medium">
                <Link href={`/product/trending-products/${product.slug}`}>{product.name}</Link>
              </h1>
              <div className="flex flex-row gap-2">
              <Link href={`/product/trending-products/${product.slug}`}>
                <p className="text-[16px] text-[#151875]">${product.price}</p>
              </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

