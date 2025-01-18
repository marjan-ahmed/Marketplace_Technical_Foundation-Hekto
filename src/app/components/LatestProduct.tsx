'use client'
import Image from 'next/image';
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from 'react';
import Link from 'next/link';


function LatestProduct() {
  const [latestData, setLatestData] = useState([]);

  useEffect(() => {
    const getLatestProducts = async () => {
      const query = `
        *[_type == 'products' && isFeaturedProduct == false]{
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
      const filteredData = data.slice(0, 6); 
      setLatestData(filteredData); 
    };

    getLatestProducts();
  }, []); 

 
  return (
    <>
    <div className="flex flex-wrap mx-4 sm:mx-32 gap-5 justify-center">
      {latestData.map((product:any) => (
        <div key={product.slug} className="w-[360px] h-[306px] bg-white mt-7 sm:px-0 px-8">
          <div className="w-full h-[269.96px] bg-[#F7F7F7] flex justify-center items-center">
          <Link href={`/product/trending-products/${product.slug}`}>
            <Image
              src={product.image} 
              alt={`Product Image of ${product.name}`}
              width={223}
              height={229}
              layout="intrinsic" 
              objectFit="contain" 
            />
          </Link>
          </div>
          <div className="flex gap-3 justify-between mt-2 font-josefin">
            <h1 className="text-[#151875] text-[16px] border-b-2 border-[#EEEFFB] font-medium">
            <Link href={`/product/featured-products/${product.slug}`}>
              {product.name}
            </Link>
            </h1>
            <div className="flex flex-row gap-2">
              <p className="text-[16px] text-[#151875]">${product.price}</p>
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
}

export default LatestProduct;
