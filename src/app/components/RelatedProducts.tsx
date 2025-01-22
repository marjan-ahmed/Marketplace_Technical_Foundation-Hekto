'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProductHoveringEffect from './ProductHoveringEffect';
import { client } from '@/sanity/lib/client';

function RelatedProducts({ type }: { type: string }) {
  const [products, setProducts] = useState<any[]>([]); // State to store product data
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Fetch data on component mount
    const fetchProducts = async () => {
      try {
        const query = `
          *[_type == 'products' && isFeaturedProduct == ${type}]{
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

        // Shuffle and pick four random products
        const shuffledProducts = data.sort(() => 0.5 - Math.random());
        const randomProducts = shuffledProducts.slice(0, 4);

        setProducts(randomProducts); // Set the random products in state
        setLoading(false); // Stop loading
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false); // Stop loading even if there's an error
      }
    };

    fetchProducts();
  }, [type]); // Re-fetch data if `type` changes

  // Show loading spinner while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-10 items-center">
        {products.map((product: any) => (
          <div
            key={product.slug}
            className={
              type === 'true'
                ? 'w-3/4 sm:w-[360px] h-3/4 sm:h-[306px] bg-white mt-10 sm:px-0'
                : 'mx-4 mt-5 sm:mx-0 relative w-full sm:w-[300px] h-full sm:h-[391px] bg-white hover:bg-[#2F1AC4] hover:text-white shadow-lg shadow-gray-300 group'
            }
          >
            {type === 'true' ? (
              <>
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
                    <Link href={`/product/trending-products/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h1>
                  <div className="flex flex-row gap-2">
                    <Link href={`/product/trending-products/${product.slug}`}>
                      <p className="text-[16px] text-[#151875]">${product.price}</p>
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="relative group">
  {/* Hover Effect */}
  <div className="absolute left-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <div className="flex gap-[3px]">
      <ProductHoveringEffect product={product}/>
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
    {/* Product Name */}
    <h1 className="font-bold font-lato text-[18px] text-pink text-center mt-3 group-hover:text-white whitespace-nowrap overflow-hidden text-ellipsis w-[80%]">
      <Link href={`/product/featured-products/${product.slug}/`}>
        {product.name}
      </Link>
    </h1>

    {/* Color Indicators */}
    <div className="flex gap-1 w-[52px] h-[4px] justify-center">
      <div className="w-[14px] h-[4px] bg-[#05E6B7] rounded-[10px]"></div>
      <div className="w-[14px] h-[4px] bg-[#F701A8] rounded-[10px]"></div>
      <div className="w-[14px] h-[4px] bg-[#00009D] rounded-[10px] group-hover:bg-[#FFEAC1]"></div>
    </div>

    {/* Product Description */}
    <div className="mx-auto text-center px-auto">
      <p className="text-center px-6 font-josefin text-[#151875] text-[14px] group-hover:text-white whitespace-nowrap overflow-hidden text-ellipsis w-[50%]">
        <Link href={`/product/featured-products/${product.slug}/`}>
          {product.description}
        </Link>
      </p>

      {/* Product Price */}
      <div className="w-2/4 mt-3 px-6">
  <div className="flex justify-between p-2 rounded-md">
    <p className="text-center font-josefin bg-gray-200 px-3 py-1 text-[#151875] text-[14px] group-hover:text-black">
      ${product.price}
    </p>
  </div>
</div>

    </div>
  </div>
</div>

              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
