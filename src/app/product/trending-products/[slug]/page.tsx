import Breadcrumb from "@/app/components/Breadcrumb";
import RelatedProducts from "@/app/components/RelatedProducts";
import StarRating from "@/app/components/StarRating";
import { client } from "@/sanity/lib/client";
import { Facebook, Heart, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Tag from "@/app/components/Tag";

export default async function getTrendingProducts({
  params: { slug },
}: {
  params: { slug: string };
}) {

  const query = `
*[_type == 'products' && slug.current == '${slug}'][0]{
  name,
  description,
  price,
  category,
  discountPercentage,
  isFeaturedProduct,
  "image": image.asset->url,
  "slug": slug.current
} `;

  const data = await client.fetch(query);
  console.log(data);

  return (
    <>
      <Breadcrumb category="trending product" subcategory={data.name} />
      <div className="flex justify-center items-center mt-20 mb-20">
        <div className="w-full max-w-[1170px] relative flex flex-col lg:flex-row gap-4 h-auto shadow-gray-200 inset-2 inset-gray-300 shadow-lg p-4">
          <div className="flex flex-col justify-center gap-[16px] mx-auto lg:mx-0">
            <div className="flex">
              <Image
                className="bg-gray-200 p-10 rounded-sm mx-4"
                src={data.image}
                alt={data.name}
                width={490}
                height={300}
              />
            </div>
          </div>

          <div className="p-8 py-16 lg:w-1/2">
            <h1 className="text-[36px] text-[#0D134E] font-josefin font-bold">
              {data.name}
            </h1>
            <StarRating />

            <div className="flex gap-8 flex-wrap mt-2">
              <p className="text-[16px] font-josefin text-[#151875]">${data.price}</p>
              <p className="text-pink text-[16px] font-josefin">Discount: {data.discountPercentage}%</p>
            </div>

            <div className="mt-3">
              <div className="flex items-center flex-wrap justify-between gap-2 w-2/4">
              <h5 className="text-[16px] text-[#0D134E] font-josefin font-semibold">Color:</h5>
              <div className="flex gap-2 flex-wrap">
              <Tag title="red" />
              <Tag title="blue"/>
              <Tag title="green"/>
              </div>
              </div>
              <p className="mt-5 w-full lg:w-[549px] h-[45px] font-josefin text-[16px] text-[#A9ACC6]">
                {data.description}
              </p>
            </div>
            

            <div className="flex gap-8 mt-8 items-center ml-[70px]">
              <div>
                <button className="text-[#151875] text-[16px] font-semibold font-josefin">Add To Cart</button>
              </div>
              <div>
                <Heart size={16} color="#535399" />
              </div>
            </div>

            <div className="pt-4">
              <h1 className="text-[16px] mb-4 text-[#151875] font-josefin font-bold">Categories: <Link className="font-medium text-[16px]" href={`/product/category/${data.category.toLowerCase()}`}>{data.category}</Link>
              </h1>
              <ul className="text-[16px] text-[#151875] font-josefin font-bold flex gap-4 flex-col">
                <div className="flex flex-wrap gap-5">
                <li>Tags:</li>
                <div className="font-medium text-[15px]">
                  #{data.category.toLowerCase()},
                  #{data.isFeaturedProduct == true ? "featured" : "trending"}
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
          <ul className="text-[18px] sm:text-[20px] md:text-[24px] flex flex-wrap sm:flex-nowrap gap-6 sm:gap-10 md:gap-20 text-[#151875] font-josefin font-bold leading-[28.13px]">
            <li className="underline">Description</li>
            <li>Additional Info</li>
            <li>Reviews</li>
            <li>Video</li>
          </ul>

          <div className="mt-16">
            <h1 className="text-[20px] sm:text-[22px] text-[#151875] font-semibold font-josefin">Varius tempor.</h1>
            <div className="w-full sm:w-[1153px] h-auto mt-2">
              <p className="text-[#A9ACC6] text-[14px] sm:text-[16px] font-josefin sm:leading-[29px]">
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 sm:mx-16 md:mx-36 mt-36 mb-16">
        <h1 className="text-[36px] text-[#101750] font-bold font-josefin">Related Products</h1>
        <RelatedProducts type="true" />
      </div>

      <div className="flex justify-center mt-16 mb-10">
        <Image src={'/companies.png'} alt="companies testimonials" width={904} height={93} />
      </div>
    </>
  );
}
