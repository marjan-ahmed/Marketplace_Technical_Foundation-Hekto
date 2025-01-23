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
      <div className="flex justify-center items-center mt-20 mb-20 px-4 sm:px-6 lg:px-12">
        <div className="w-full max-w-[1170px] relative flex flex-col lg:flex-row gap-4 h-auto shadow-lg shadow-gray-200 inset-2 inset-gray-300 p-4">
          
          {/* Image Section */}
          <div className="flex flex-col justify-center gap-4 mx-auto lg:mx-0 mb-8 lg:mb-0">
            <div className="flex justify-center">
              <Image
                className="bg-gray-200 p-4 rounded-sm mx-4"
                src={product.image}
                alt={product.name}
                width={490}
                height={300}
                placeholder="blur"
                blurDataURL={product.image}
              />
            </div>
          </div>

          {/* Product Details Section */}
          <div className="p-8 py-16 lg:w-1/2">
            <h1 className="text-2xl font-josefin mb-4 md:text-3xl lg:text-4xl font-bold text-[#0D134E]">
              {product.name}
            </h1>
            <StarRating />

            <div className="flex gap-8 flex-wrap mt-4 font-josefin">
              <p className="text-lg font-semibold text-[#151875]">${product.price}</p>
              <p className="text-red-500 text-lg">{`Discount: ${product.discountPercentage}%`}</p>
            </div>

            <div className="mt-5">
              <div className="flex items-center flex-wrap justify-between gap-2">
                <h5 className="text-lg font-semibold font-josefin text-[#0D134E]">Color:</h5>
                <div className="flex gap-2 flex-wrap">
                  <Tag title="Red" />
                  <Tag title="Blue" />
                  <Tag title="Green" />
                </div>
              </div>
              <p className="mt-5 text-lg text-[#A9ACC6] font-josefin">{product.description}</p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8 items-center">
              {/* Quantity Controls */}
              <button
                onClick={() =>
                  setProduct((prev: CartItem) => ({
                    ...prev,
                    quantity: (prev.quantity || 1) + 1,
                  }))
                }
                className="px-4 py-2 border-2 border-gray-700 text-black rounded-sm hover:text-white hover:bg-gray-700 transition transform hover:scale-105"
              >
                +
              </button>
              <div className="text-lg font-semibold text-gray-700">{product.quantity || 1}</div>
              <button
                onClick={() =>
                  setProduct((prev: CartItem) => ({
                    ...prev,
                    quantity: Math.max((prev.quantity || 1) - 1, 1),
                  }))
                }
                className="px-4 py-2 border-2 border-gray-700 text-black rounded-sm hover:text-white hover:bg-gray-700 transition transform hover:scale-105"
              >
                -
              </button>

              <button
                onClick={() => handleAdd({ ...product, quantity: product.quantity || 1 })}
                className="font-josefin bg-pink bg-opacity-90 text-white px-4 py-2 rounded hover:bg-pink"
              >
                Add To Cart
              </button>

              <Toastify cart={product} />

              <div className="text-red-500 cursor-pointer">
                <Heart size={16} color="#535399" className="hover:text-red-500 transition transform hover:scale-105" />
              </div>
            </div>

            <div className="mt-6">
              <h1 className="text-lg font-josefin font-bold text-[#151875]">
                Categories:{" "}
                <Link className="font-medium text-blue-500" href={`/product/category/${product.category}`}>
                  {product.category}
                </Link>
              </h1>
              <ul className="flex gap-10 mt-2 text-lg font-semibold text-[#151875] flex-wrap">
                <div className="flex justify-center font-josefin items-center gap-4">
                  <li>Tags:</li>
                  <div className="text-md font-medium">
                    #{product.category} #{product.isFeaturedProduct ? "featured" : "trending"}
                  </div>
                </div>
                <div className="flex gap-4 items-center font-josefin">
                  <li>Share:</li>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-[#151875] rounded-full flex items-center justify-center">
                      <Facebook size={16} color="white" />
                    </div>
                    <div className="w-8 h-8 bg-[#FB2E86] rounded-full flex items-center justify-center">
                      <Instagram size={16} color="white" />
                    </div>
                    <div className="w-8 h-8 bg-[#151875] rounded-full flex items-center justify-center">
                      <Twitter size={16} color="white" />
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-36 bg-pantonePurple w-full h-auto sm:h-[500px]">
        <Tabs defaultValue="additionalInfo" className="pt-8 sm:pt-12">
          <TabsList className="flex gap-4 bg-transparent font-josefin font-bold">
            <TabsTrigger value="additionalInfo" className="sm:w-2/6 w-full text-xl border-b-2 border-[#d4d0e8]">Additional Info</TabsTrigger>
            <TabsTrigger value="reviews" className="sm:w-2/6 w-full text-xl border-b-2  border-[#d4d0e8]">Reviews</TabsTrigger>
            <TabsTrigger value="video" className="sm:w-2/6 w-full text-xl border-b-2  border-[#d4d0e8]">Video</TabsTrigger>
          </TabsList>

          <TabsContent value="additionalInfo" className="mt-5">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </TabsContent>

          <TabsContent value="reviews">
            <CommentSection />
          </TabsContent>

          <TabsContent value="video">
            <div className="flex justify-center pt-6 sm:pt-10">
            <video
              muted
              loop 
              autoPlay
              src="/videos/video1.mp4"
              className="w-full max-w-lg"
            ></video>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      <div className="sm:mx-32 mx-0 mb-10">
        <h1 className="text-2xl mx-10 sm:mx-0 sm:text-4xl mt-14 font-bold font-josefin">Related Products</h1>
        <RelatedProducts type="true" />
      </div>
      <Image className="block mx-auto mb-10"
      src={'/companies.png'}
      width={800}
      height={800}
      alt="Companies Logo"
      />

    </>
  );
}
