import Image from "next/image";
import ProductCard from "./components/ProductCard1";
import { Button } from "@/components/ui/button";
import FeaturedProduct from "./components/FeaturedProduct";
import ServiceCard from "./components/ServiceCard";
import Head from 'next/head';


export default function Home() {
  return (
    <>
    <Head>
        <title>Home | Heckto</title>
        <meta name="description" content="Welcome to Our Store Heckto. We offer the best products and services to help you achieve your goals." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

  <main>
  <div className="font-[josefin sans]">
  <div className="relative h-[60em] sm:h-[38em] bg-pantonePurple flex flex-col sm:flex-row items-center justify-center sm:justify-between py-8 px-4 sm:px-8 md:px-16 lg:px-32">
    <div className="flex-shrink-0 absolute top-0 sm:left-10">
      <Image
        src={'/bulb.png'}
        alt="bulb"
        width={277}
        height={277}
        className="max-w-full h-auto"
      />
    </div>
    <div className="relative sm:mx-32 lg:w-1/2 mt-[-8em] sm:mt-0 text-center sm:text-left">
      <div className="w-full max-w-[644px] mx-auto sm:mx-0">
        <span className="text-pink text-[16px] font-lato font-bold block mb-4">Best Furniture For Your Castle....</span>
        <h1 className="text-[32px] sm:text-[48px] md:text-[46px] lg:text-[48px] leading-tight sm:leading-[60px] md:leading-[68px] lg:leading-[70px] font-josefin tracking-[1.5%] font-extrabold mb-4">
          New Furniture Collection Trends in 2020
        </h1>
        <p className="font-lato font-bold leading-tight text-[14px] sm:text-[16px] text-[#8A8FB9] mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
        <Button className="w-[120px] sm:w-[163px] h-[40px] sm:h-[50px] rounded-[2px] font-josefin text-[14px] sm:text-[17px] leading-[19.92px]">Shop Now</Button>
      </div>
    </div>
    <div className="flex-shrink-0 absolute bottom-10 sm:bottom-auto sm:right-10 sm:top-10 w-[calc(100%-2rem)] sm:w-[564px] h-auto">
      <Image
        src={'/sofa.png'}
        alt="Sofa promotion"
        width={706}
        height={689}
        className="max-w-full h-auto"
      />
    </div>
  </div>

    {/* Products */}
      <div className="flex flex-col justify-center items-center my-[4em] sm:my-28"> 
        <h1 className="text-[32px] sm:text-[42px] font-josefin text-[#1A0B5B] text-center font-bold">Featured Products</h1>
        <div className="mt-10 flex justify-center gap-5 flex-wrap">
        <ProductCard src="/product-1.png" alt="product 1 image"/>
        <ProductCard src="/product-2.png" alt="product 2 image"/>
        <ProductCard src="/product-3.png" alt="product 3 image"/> 
        <ProductCard src="/product-4.png" alt="product 4 image"/>
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
    <div><FeaturedProduct src="/product-17.png" width={223} height={229} /></div>
    <div><FeaturedProduct src="/product-20.png" width={245} height={245} /></div>
    <div><FeaturedProduct src="/product-1.png" width={221.84} height={222.2} /></div>
    <div><FeaturedProduct src="/product-18.png" width={267} height={277} /></div>
    <div><FeaturedProduct src="/product-19.png" width={303} height={264} /></div>
    <div><FeaturedProduct src="/product-4.png" width={360} height={261} /></div>
  </div>
</div>

        <div className="flex justify-center text-center">
        <h1 className="text-[32px] sm:text-[42px] font-josefin font-bold text-[#151875]">What Shopex Offer!</h1>
        </div>
        <div className="flex flex-wrap gap-6 justify-center mt-8">
          <div><ServiceCard src="/free-delivery.png"/></div>
          <div><ServiceCard src="/cashback.png" /></div>
          <div><ServiceCard src="/premium-quality.png"/></div>
          <div><ServiceCard src="/24-hours-support.png"/></div>
        </div>

        <div className="lg:max-w-full w-full bg-pantonePurple">
  <div className="px-4 py-8 md:px-16 lg:px-48 flex flex-wrap items-start">
    <div className="flex-shrink-0 w-full md:w-auto mb-4 md:mb-0">
      <Image
        src={'/unique-feature.png'}
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
          Reinforced with double wood dowels, glue, screw - nails corner <br /> blocks and machine nails
        </p>
      </div>
      <div className="flex items-start space-x-2">
        <div className="w-[11px] h-[11px] rounded-full bg-[#2BF5CC] mt-2"></div>
        <p className="font-medium font-lato text-[#ACABC3] text-[14px] sm:text-[16px]">
          Arms, backs and seats are structurally reinforced
        </p>
      </div>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6 items-center">
        <Button className="w-[120px] sm:w-[157px] h-[40px] sm:h-[45px] rounded-[2px] font-josefin text-[14px] sm:text-[17px] leading-[19.92px] text-white">Add To Cart</Button>
        <div className="text-center sm:text-left">
          <p className="text-[14px] text-[#151875] font-josefin font-medium tracking-[2%]">B&B Italian Sofa</p>
          <p className="font-lato text-[#151875] font-normal text-[14px]">$32.00</p>
        </div>
      </div>
    </div>
  </div>
</div>



      </div>
    </div>
    </main>
    </>
  );
}
