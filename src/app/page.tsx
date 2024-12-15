import Image from "next/image";
import ProductCard from "./components/ProductCard1";
import { Button } from "@/components/ui/button";
import FeaturedProduct from "./components/FeaturedProduct";
import ServiceCard from "./components/ServiceCard";
import Head from "next/head";
import TrendingProducts from "./components/TrendingProducts";
import { Check, Circle, Dot } from "lucide-react";
import LatestBlog from "./components/LatestBlog";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Heckto</title>
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
                <Button className="w-[120px] sm:w-[163px] h-[40px] sm:h-[50px] rounded-[2px] font-josefin text-[14px] sm:text-[17px] leading-[19.92px]">
                  Shop Now
                </Button>
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
              <ProductCard src="/product-1.png" alt="product 1 image" />
              <ProductCard src="/product-2.png" alt="product 2 image" />
              <ProductCard src="/product-3.png" alt="product 3 image" />
              <ProductCard src="/product-4.png" alt="product 4 image" />
            </div>
            <div className="w-[91px] h-[4px] flex gap-1 mt-12">
              <div className="w-[24px] h-[4px] bg-pink rounded-[10px]"></div>
              <div className="w-[16px] h-[4px] bg-[#FEBAD7] rounded-[10px]"></div>
              <div className="w-[16px] h-[4px] bg-[#FEBAD7] rounded-[10px]"></div>
              <div className="w-[16px] h-[4px] bg-[#FEBAD7] rounded-[10px]"></div>
            </div>
            <div className="my-16 flex justify-center flex-col items-center">
              <h1 className="text-[32px] sm:text-[42px] font-josefin text-center leading-[49.22px] text-[#151875] font-bold">
                Latest Products
              </h1>
              <div className="w-full flex justify-center">
                <ul className="font-lato font-normal text-[14px] sm:text-[18px] text-[#151875] leading-[21.6px] mt-2 flex gap-4 sm:gap-14">
                  <li className="text-pink underline">New Arrival</li>
                  <li>Best Seller</li>
                  <li>Featured</li>
                  <li>Special Offer</li>
                </ul>
              </div>
              <div className="flex gap-8 justify-center mb-12 mt-10 flex-wrap">
                <div>
                  <FeaturedProduct
                    src="/product-17.png"
                    width={223}
                    height={229}
                  />
                </div>
                <div>
                  <FeaturedProduct
                    src="/product-20.png"
                    width={245}
                    height={245}
                  />
                </div>
                <div>
                  <FeaturedProduct
                    src="/product-1.png"
                    width={221.84}
                    height={222.2}
                  />
                </div>
                <div>
                  <FeaturedProduct
                    src="/product-18.png"
                    width={267}
                    height={277}
                  />
                </div>
                <div>
                  <FeaturedProduct
                    src="/product-19.png"
                    width={303}
                    height={264}
                  />
                </div>
                <div>
                  <FeaturedProduct
                    src="/product-4.png"
                    width={360}
                    height={261}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center text-center">
              <h1 className="text-[32px] sm:text-[42px] font-josefin font-bold text-[#151875]">
                What Shopex Offer!
              </h1>
            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-8">
              <div>
                <ServiceCard src="/free-delivery.png" />
              </div>
              <div>
                <ServiceCard src="/cashback.png" />
              </div>
              <div>
                <ServiceCard src="/premium-quality.png" />
              </div>
              <div>
                <ServiceCard src="/24-hours-support.png" />
              </div>
            </div>

            <div className="lg:max-w-full w-full bg-pantonePurple">
              <div className="px-4 py-8 md:px-16 lg:px-48 flex flex-wrap items-start">
                <div className="flex-shrink-0 w-full md:w-auto mb-4 md:mb-0">
                  <Image
                    src={"/unique-feature.png"}
                    alt="Unique Product"
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
                        B&B Italian Sofa
                      </p>
                      <p className="font-lato text-[#151875] font-normal text-[14px]">
                        $32.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-[1200px] px-4">
              <h1 className="text-[32px] sm:text-[42px] font-josefin text-center leading-[49.22px] text-[#151875] font-bold mt-10 sm:mt-28">
                Trending Products
              </h1>
              <div className="flex flex-wrap gap-7 justify-center items-center">
                <div className="flex-grow-0">
                  <TrendingProducts
                    src="/product-29.png"
                    width={171}
                    height={171}
                  />
                </div>
                <div className="flex-grow-0">
                  <TrendingProducts
                    src="/product-27.png"
                    width={187}
                    height={187}
                  />
                </div>
                <div className="flex-grow-0">
                  <TrendingProducts
                    src="/product-28.png"
                    width={197}
                    height={189}
                  />
                </div>
                <div className="flex-grow-0">
                  <TrendingProducts
                    src="/product-19.png"
                    width={253}
                    height={211}
                  />
                </div>
              </div>
              <div className="flex flex-start flex-wrap justify-start gap-7 mt-7">
                <div className="w-full sm:w-[420px] h-[270px] bg-[#FFF6FB] relative">
                  <div className="w-[269px] h-[56px] m-7">
                    <h1 className="font-josefin font-semibold text-[26px] text-[#151875]">
                      23% off in all products
                    </h1>
                    <button className="font-lato font-semibold text-[16px] border-b-2 border-[#FB2E86] text-[#FB2E86]">
                      Shop Now
                    </button>
                    <div className="absolute right-0 bottom-3">
                      <Image
                        src={"/product-24.png"}
                        alt="product 5"
                        width={213}
                        height={207}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-[420px] h-[270px] bg-[#EEEFFB] relative">
                  <div className="w-[269px] h-[56px] m-7">
                    <h1 className="font-josefin font-semibold text-[26px] text-[#151875]">
                      23% off in all products
                    </h1>
                    <button className="font-lato font-semibold text-[16px] border-b-2 border-[#FB2E86] text-[#FB2E86]">
                      View Collection
                    </button>
                    <div className="absolute right-1 mt-4">
                      <Image
                        src={"/product-25.png"}
                        alt="product 6"
                        width={312}
                        height={173}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-7 flex-col">
                  <div className="w-[267px] h-[74px] flex items-center gap-2">
                    <div className="w-[107px] h-[74px] flex justify-center bg-[#F5F6F8]">
                      <Image
                        src={"/product-21.png"}
                        alt="Product 1"
                        width={64}
                        height={71}
                      />
                    </div>
                    <div className="flex flex-col">
                      <h1 className="font-josefin text-[16px] text-[#151875]">
                        Executive Seat chair
                      </h1>
                      <p className="line-through text-[12px] text-[#151875] font-josefin font-normal">
                        $32.00
                      </p>
                    </div>
                  </div>

                  <div className="w-[267px] h-[74px]">
                    <div className="w-[267px] h-[74px] flex items-center gap-2">
                      <div className="w-[107px] h-[74px] flex justify-center bg-[#F5F6F8]">
                        <Image
                          src={"/product-22.png"}
                          alt="Product 1"
                          width={64}
                          height={71}
                        />
                      </div>
                      <div className="flex flex-col">
                        <h1 className="font-josefin text-[16px] text-[#151875]">
                          Executive Seat chair
                        </h1>
                        <p className="line-through text-[12px] text-[#151875] font-josefin font-normal">
                          $32.00
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[267px] h-[74px]">
                    <div className="w-[267px] h-[74px] flex items-center gap-2">
                      <div className="w-[107px] h-[74px] flex justify-center bg-[#F5F6F8]">
                        <Image
                          src={"/product-23.png"}
                          alt="Product 1"
                          width={67}
                          height={67}
                        />
                      </div>
                      <div className="flex flex-col">
                        <h1 className="font-josefin text-[16px] text-[#151875]">
                          Executive Seat chair
                        </h1>
                        <p className="line-through text-[12px] text-[#151875] font-josefin font-normal">
                          $32.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mx-auto">
                  <div className="my-16 flex justify-center flex-col items-center">
                    <h1 className="text-[32px] mb-3 sm:mb-4 sm:text-[42px] font-josefin text-center leading-[49.22px] text-[#151875] font-bold">
                      Discounted Item
                    </h1>
                    <div className="w-full flex justify-center">
                      <ul className="font-lato font-normal text-[14px] sm:text-[18px] text-[#151875] leading-[21.6px] mt-2 flex gap-5 sm:gap-8">
                        <div className="flex gap-0">
                          <li className="text-pink border-b-2 border-pink w-[95px]">
                            Wood Chair
                          </li>
                          <span className="text-pink w-[5px] h-[5px]">
                            <Dot size={30} />
                          </span>
                        </div>
                        <li>Plastic Chair</li>
                        <li>Sofa Collection</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap lg:flex-nowrap gap-5 sm:mt-12">
                {" "}
                {/* main div */}
                <div className="w-full lg:w-1/2">
                  <div className="sm:w-[509px] sm:h-[46px] flex sm:justify-center">
                    <h1 className="text-[#151875] font-josefin font-bold text-[20px] sm:text-[35px] tracking-[1.5%]">
                      20% Discount Of All Products
                    </h1>
                  </div>
                  <h2 className="mt-0 mb-3 sm:mt-3 text-pink font-lato text-[16px] sm:text-[21px] tracking-[1.5%]">
                    Eams Sofa Compact
                  </h2>
                  <div className="sm:w-[523px] h-[49px] text-wrap">
                    <p className="text-[#B7BACB] text-[14px] sm:text-[17px] font-normal font-lato">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Eu eget feugiat habitasse nec, bibendum condimentum.
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
                    src={"/discounted-product.png"}
                    alt="Discounted Item"
                    width={699}
                    height={597}
                  />
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-[32px] sm:text-[42px] font-josefin text-center mt-10 sm:mt-12 leading-[49.22px] text-[#151875] font-bold">
                Top Categories
              </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <div className="relative w-[269px] h-[345px]">
                <div className="relative w-[269px] h-[269px] bg-[#F6F7FB] rounded-full hover:transition-all hover:ring-4 hover:ring-purple hover:ring-inset group">
                  <div className="w-[268px] h-[268px] rounded-full p-4 flex justify-center items-center">
                    <Image
                      src={"/product-26.png"}
                      alt="Product 1"
                      width={178}
                      height={178}
                    />
                  </div>
                  <div className="flex flex-col justify-center mt-4 text-center">
                    <h5 className="font-normal font-josefin text-[20px] text-[#151875]">
                      Mini LCW Chair
                    </h5>
                    <p className="font-normal font-josefin text-[16px] text-[#151875]">
                      $56.00
                    </p>
                  </div>
                  <div className="absolute bottom-1 left-0 right-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4">
                    <button className="bg-[#08D15F] text-white py-2 px-4 text-[12px] font-josefin">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative w-[269px] h-[345px]">
                <div className="relative w-[269px] h-[269px] bg-[#F6F7FB] rounded-full hover:transition-all hover:ring-4 hover:ring-purple hover:ring-inset group">
                  <div className="w-[268px] h-[268px] rounded-full p-4 flex justify-center items-center">
                    <Image
                      src={"/product-1.png"}
                      alt="Product 2"
                      width={178}
                      height={178}
                    />
                  </div>
                  <div className="flex flex-col justify-center mt-4 text-center">
                    <h5 className="font-normal font-josefin text-[20px] text-[#151875]">
                      Mini LCW Chair
                    </h5>
                    <p className="font-normal font-josefin text-[16px] text-[#151875]">
                      $56.00
                    </p>
                  </div>
                  <div className="absolute bottom-1 left-0 right-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4">
                    <button className="bg-[#08D15F] text-white py-2 px-4 text-[12px] font-josefin">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative w-[269px] h-[345px]">
                <div className="relative w-[269px] h-[269px] bg-[#F6F7FB] rounded-full hover:transition-all hover:ring-4 hover:ring-purple hover:ring-inset group">
                  <div className="w-[268px] h-[268px] rounded-full p-4 flex justify-center items-center">
                    <Image
                      src={"/product-29.png"}
                      alt="Product 3"
                      width={178}
                      height={178}
                    />
                  </div>
                  <div className="flex flex-col justify-center mt-4 text-center">
                    <h5 className="font-normal font-josefin text-[20px] text-[#151875]">
                      Mini LCW Chair
                    </h5>
                    <p className="font-normal font-josefin text-[16px] text-[#151875]">
                      $56.00
                    </p>
                  </div>
                  <div className="absolute bottom-1 left-0 right-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4">
                    <button className="bg-[#08D15F] text-white py-2 px-4 text-[12px] font-josefin">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative w-[269px] h-[345px]">
                <div className="relative w-[269px] h-[269px] bg-[#F6F7FB] rounded-full hover:transition-all hover:ring-4 hover:ring-purple hover:ring-inset group">
                  <div className="w-[268px] h-[268px] rounded-full p-4 flex justify-center items-center">
                    <Image
                      src={"/product-26.png"}
                      alt="Product 4"
                      width={178}
                      height={178}
                    />
                  </div>
                  <div className="flex flex-col justify-center mt-4 text-center">
                    <h5 className="font-normal font-josefin text-[20px] text-[#151875]">
                      Mini LCW Chair
                    </h5>
                    <p className="font-normal font-josefin text-[16px] text-[#151875]">
                      $56.00
                    </p>
                  </div>
                  <div className="absolute bottom-1 left-0 right-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4">
                    <button className="bg-[#08D15F] text-white py-2 px-4 text-[12px] font-josefin">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8 justify-center">
              <div className="bg-pink rounded-full w-[10px] h-[9.89px]">
                <Circle size={10} color="#FB2E86" />
              </div>
              <div>
                <Circle size={10} color="#FB2E86" />
              </div>
              <div>
                <Circle size={10} color="#FB2E86" />
              </div>
            </div>

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

            <div className="mt-20 mb-10">
              <Image
                src={"/companies.png"}
                alt="companies logos"
                width={904}
                height={93}
              />
            </div>

            <div>
              <h1 className="text-[32px] sm:text-[42px] font-josefin text-center leading-[49.22px] text-[#151875] font-bold">
                Latest Product
              </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-12 mt-16">
              <LatestBlog
                src="/blog-1.png"
                name="sufyan"
                date="20 August,2022"
              />
              <LatestBlog
                src="/blog-2.png"
                name="marjan"
                date="20 August,2022"
              />
              <LatestBlog
                src="/blog-3.png"
                name="Abdul Rehman"
                date="20 August,2022"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
