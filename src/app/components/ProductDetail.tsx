'use client';

import Breadcrumb from "@/app/components/Breadcrumb";
import RelatedProducts from "@/app/components/RelatedProducts";
import StarRating from "@/app/components/StarRating";
import { client } from "@/sanity/lib/client";
import { Facebook, Heart, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Tag from "@/app/components/Tag";
import { useDispatch } from "react-redux";
import { add, CartItem } from "@/redux/CartSlice";
import Toastify from "@/app/cart/Toastify";
import { useEffect, useState } from "react";
import CommentSection from "./CommentSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProductDetail({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const dispatch = useDispatch();
  const [product, setProduct] = useState<any>(null);

  const handleAdd = (data: CartItem) => {
    dispatch(add(data));
  };

  useEffect(() => {
    const getProductDetail = async () => {
      const query = `
        *[_type == 'products' && slug.current == $slug][0]{
          name,
          description,
          price,
          category,
          discountPercentage,
          isFeaturedProduct,
          "image": image.asset->url,
          "slug": slug.current
        }
      `;
      const data = await client.fetch(query, { slug });
      setProduct(data);
    };
    getProductDetail();
  }, [slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Breadcrumb category="Product Detail" subcategory={product.name} />
      <div className="flex justify-center items-center mt-20 mb-20">
        <div className="w-full max-w-[1170px] relative flex flex-col lg:flex-row gap-4 h-auto shadow-gray-200 inset-2 inset-gray-300 shadow-lg p-4">
          <div className="flex flex-col justify-center gap-[16px] mx-auto lg:mx-0">
            <div className="flex">
              <Image
                className="bg-gray-200 p-10 rounded-sm mx-4"
                src={product.image}
                alt={product.name}
                width={490}
                height={300}
                placeholder="blur" // Optional blur-up while loading

              />
            </div>
          </div>

          <div className="p-8 py-16 lg:w-1/2">
            <h1 className="text-[36px] text-[#0D134E] font-josefin font-bold">
              {product.name}
            </h1>
            <StarRating />

            <div className="flex gap-8 flex-wrap mt-2">
              <p className="text-[16px] font-josefin text-[#151875]">
                ${product.price}
              </p>
              <p className="text-pink text-[16px] font-josefin">
                Discount: {product.discountPercentage}%
              </p>
            </div>

            <div className="mt-3">
              <div className="flex items-center flex-wrap justify-between gap-2 w-2/4">
                <h5 className="text-[16px] text-[#0D134E] font-josefin font-semibold">
                  Color:
                </h5>
                <div className="flex gap-2 flex-wrap">
                  <Tag title="red" />
                  <Tag title="blue" />
                  <Tag title="green" />
                </div>
              </div>
              <p className="mt-5 w-full lg:w-[549px] h-[45px] font-josefin text-[16px] text-[#A9ACC6]">
                {product.description}
              </p>
            </div>

            <div className="flex gap-4 mt-8 items-center ml-[70px]">
  <div className="text-lg font-semibold text-gray-700">
    {product.quantity || 1}
  </div>

  {/* Increase Quantity Button */}
  <button
    onClick={() =>
      setProduct((prev: CartItem) => ({
        ...prev,
        quantity: (prev.quantity || 1) + 1,
      }))
    }
    className="px-4 py-1 border-2 border-gray-700 text-black rounded-sm hover:text-white  hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105"
  >
    +
  </button>

  <div>
    <button
      className="text-[#151875] text-[16px] font-semibold font-josefin hover:text-[#535399] transition duration-300 ease-in-out"
      onClick={() => handleAdd({ ...product, quantity: product.quantity || 1 })}
    >
      Add To Cart
    </button>
  </div>

  {/* Decrease Quantity Button */}
  <button
    onClick={() =>
      setProduct((prev: CartItem) => ({
        ...prev,
        quantity: Math.max((prev.quantity || 1) - 1, 1),
      }))
    }
    className="px-4 py-1 border-2 border-gray-700 text-black rounded-sm hover:text-white  hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105"
  >
    -
  </button>

  <Toastify cart={product} />

  <div>
    <Heart size={16} color="#535399" className="cursor-pointer hover:text-red-500 transition duration-300 ease-in-out" />
  </div>
</div>


            <div className="pt-4">
              <h1 className="text-[16px] mb-4 text-[#151875] font-josefin font-bold">
                Categories:{" "}
                <Link
                  className="font-medium text-[16px]"
                  href={`/product/category/${product.category}`}
                >
                  {product.category}
                </Link>
              </h1>
              <ul className="text-[16px] text-[#151875] font-josefin font-bold flex gap-4 flex-col">
                <div className="flex flex-wrap gap-5">
                  <li>Tags:</li>
                  <div className="font-medium text-[15px]">
                    #{product.category},
                    #{product.isFeaturedProduct ? "featured" : "trending"}
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <li>Share</li>
                  <div className="flex gap-2">
                    <div className="w-[16px] h-[16px] bg-[#151875] rounded-full flex items-center justify-center">
                      <Facebook size={12} color="white" />
                    </div>
                    <div className="w-[16px] h-[16px] bg-[#FB2E86] rounded-full flex items-center justify-center">
                      <Instagram size={12} color="white" />
                    </div>
                    <div className="w-[16px] h-[16px] bg-[#151875] rounded-full flex items-center justify-center">
                      <Twitter size={12} color="white" />
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto sm:h-[649px] bg-pantonePurple mb-10">
  <div className="px-6 sm:px-12 md:px-24 lg:px-44 py-24">
    <Tabs defaultValue="additionalInfo" className="w-full">
      <TabsList className="bg-transparent text-[18px] sm:text-[20px] items-center md:text-[24px] flex flex-wrap sm:flex-nowrap gap-6 sm:gap-10 md:gap-20 text-[#151875] font-josefin font-bold leading-[28.13px]">
        <TabsTrigger className="w-full sm:w-3/4 text-[22px] p-2" value="additionalInfo">Additional Info</TabsTrigger>
        <TabsTrigger className="w-full sm:w-3/4 text-[22px] p-2" value="reviews">Reviews</TabsTrigger>
        <TabsTrigger className="w-full sm:w-3/4 text-[22px] p-2" value="video">Videos</TabsTrigger>
      </TabsList>

      <TabsContent className="sm:mt-8 mt-20" value="additionalInfo">
        <h1 className="text-[20px] sm:text-[22px] text-[#151875] font-semibold font-josefin">{product.name}</h1>
        <p className="text-[#A9ACC6] text-[14px] sm:text-[16px] font-josefin sm:leading-[29px]">{product.description}</p>
      </TabsContent>

      <TabsContent className="sm:mt-8 mt-20" value="reviews">
        <CommentSection />
      </TabsContent>

      <TabsContent className="sm:mt-10 mt-20 flex justify-center items-end" value="video">
      <video width="700" height="700" muted loop autoPlay preload="none">
      <source src="/videos/video1.mp4" type="video/mp4" />
      <track
        src="/videos/video1.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
        
      />
      Your browser does not support the video tag.
    </video>
      </TabsContent>
    </Tabs>
  </div>
</div>


      <div className="mx-4 sm:mx-16 md:mx-36 mt-36 mb-16">
        <h1 className="text-[36px] text-[#101750] font-bold font-josefin">
          Related Products
        </h1>
        <RelatedProducts type="true" />
      </div>

      <div className="flex justify-center mt-16 mb-10">
        <Image
          src="/companies.png"
          alt="companies testimonials"
          width={904}
          height={93}
        />
      </div>
    </>
  );
}
