import Image from "next/image";
import React from "react";
import FeaturedProduct from "./components/FeaturedProduct";
import { Button } from "@/components/ui/button";
import LatestProduct from "./components/LatestProduct";
import ServiceCard from "./components/ServiceCard";
import Head from "next/head";
import LatestBlog from "./components/LatestBlog";
import Link from "next/link";
import SeeMoreBtn from "./components/SeeMoreBtn"
import Categories from "./components/Categories";
import UniqueProduct from "./components/UniqueProduct";
import DiscountedItem from "./components/DiscountedItem";


export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Hekto</title>
        <meta
          name="description"
          content="Welcome to Our Store Heckto. We offer the best products and services to help you achieve your goals."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>


      <main>
        <div className="font-[josefin sans]">
          <div className="relative h-[60em] sm:h-[38em] bg-pantonePurple flex flex-col sm:flex-row items-center justify-center sm:justify-between py-8 px-4 sm:px-8 md:px-16 lg:px-32">
            <div className="flex-shrink-0 absolute top-0 sm:left-10">
              <Image
                src={"/bulb.png"}
                alt="bulb"
                width={277}
                height={277}
                className="max-w-full h-auto"
              />
            </div>
            <div className="relative sm:mx-32 lg:w-1/2 mt-[-8em] sm:mt-0 text-center sm:text-left">
              <div className="w-full max-w-[644px] mx-auto sm:mx-0">
                <span className="text-pink text-[16px] font-lato font-bold block mb-4">
                  Best Furniture For Your Castle....
                </span>
                <h1 className="text-[32px] sm:text-[48px] md:text-[46px] lg:text-[48px] leading-tight sm:leading-[60px] md:leading-[68px] lg:leading-[70px] font-josefin tracking-[1.5%] font-extrabold mb-4">
                  New Furniture Collection Trends in 2020
                </h1>
                <p className="font-lato font-bold leading-tight text-[14px] sm:text-[16px] text-[#8A8FB9] mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>
                <Link href={'/shop/grid'}>
                <Button className="w-[120px] sm:w-[163px] h-[40px] sm:h-[50px] rounded-[2px] font-josefin text-[14px] sm:text-[17px] leading-[19.92px]">
                  Shop Now
                </Button>
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0 absolute bottom-10 sm:bottom-auto sm:right-10 sm:top-10 w-[calc(100%-2rem)] sm:w-[564px] h-auto">
              <Image
                src={"/sofa.png"}
                alt="Sofa promotion"
                width={706}
                height={689}
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Products */}
          <div className="flex flex-col justify-center items-center my-[4em] sm:my-28">
            <h1 className="text-[32px] sm:text-[42px] font-josefin text-[#1A0B5B] text-center font-bold">
              Featured Products
            </h1>
            <div className="mt-10 flex justify-center gap-5 flex-wrap">
              <FeaturedProduct />
            </div>
            <div className=" flex gap-1 mt-12">
             <SeeMoreBtn href="featured-products" />
            </div>
            <div className="my-16 flex justify-center flex-col items-center">
              <h1 className="text-[32px] sm:text-[42px] font-josefin text-center mt-4 leading-[49.22px] text-[#151875] font-bold">
                Latest Products
              </h1>
              <div className="flex gap-8 justify-center mb-12 mt-10 flex-wrap">
                <div>
                  <LatestProduct />
                </div>
                  <SeeMoreBtn href="trending-products" />
               </div>
            </div>

            <div className="flex justify-center text-center">
              <h1 className="text-[32px] sm:text-[42px] font-josefin font-bold text-[#151875]">
                What Shopex Offer!
              </h1>
            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-8">
              <div className="bg-white shadow-md shadow-gray-300">
                <ServiceCard src="/free-delivery.png" />
              </div>
              <div className="bg-white shadow-md shadow-gray-300">
                <ServiceCard src="/cashback.png" />
              </div>
              <div className="bg-white shadow-md shadow-gray-300">
                <ServiceCard src="/premium-quality.png" />
              </div>
              <div className="bg-white shadow-md shadow-gray-300">
                <ServiceCard src="/24-hours-support.png" />
              </div>
            </div>

        <UniqueProduct />

            <div className="mx-auto max-w-[1200px] px-4">
              <div className="flex flex-wrap gap-7 justify-center items-center"> 

                <div className="flex justify-center mx-auto">
                  <div className="my-16 flex justify-center flex-col items-center">
                    <h1 className="text-[32px] mb-3 sm:mb-4 sm:text-[42px] font-josefin text-center leading-[49.22px] text-[#151875] font-bold">
                      Discounted Item
                    </h1>
                  </div>
                </div>
                <DiscountedItem />
              </div>

            {/* ddfd */}
            </div>
            </div>

            <div>
              <h1 className="text-[32px] sm:text-[42px] font-josefin text-center mt-10 sm:mt-12 leading-[49.22px] text-[#151875] font-bold">
                Categories
              </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-10 mt-10">
             <Categories category="Chair" /> 
             <Categories category="Sofa" />

            <div className="mt-10 w-full h-auto relative flex justify-center items-center">
              <div className="relative w-full h-auto">
                {/* Image */}
                <Image
                  src={"/latest-update-img.png"}
                  alt="Latest Update Image"
                  width={1920}
                  height={762}
                />

                {/* Content - Heading and Button */}
                <div className="absolute top-12 sm:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center z-10 px-0 sm:px-4">
                  <h1 className="text-[10px] sm:text-[35px] text-[#151875] leading-[1.5] font-josefin font-bold">
                    Get Latest Update By Subscribe <br className="text-flex" />{" "}
                    Our Newsletter
                  </h1>
                  <Button className="w-[5em] h-[2em] font-josefin text-[8px] px-5 tracking-[2%] leading-[2%] mt-0 sm:mt-8 sm:w-[173px] sm:h-[49px] sm:text-[17px] rounded-sm">
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex gap-12 mt-16 flex-col justify-center ">
              <h1 className="text-[32px] sm:text-[42px] font-josefin text-center leading-[49.22px] text-[#151875] font-bold">
                Latest Blogs
              </h1>
    
            <div className="flex justify-center gap-10 ">
              <LatestBlog />
            </div>
            </div>
          </div>
      
            <div className="mt-20 mb-10 flex justify-center ">
              <Image
                src={"/companies.png"}
                alt="companies logos"
                width={904}
                height={93}
              />
            </div>
        </div>
      </main>
    </>
  );
}