import Image from "next/image";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <div className="h-[200px] font-[josefin sans]">
        <div className=" relative bg-pantonePurple">
          <Image 
          src={'/bulb.png'}
          alt="buld"
          width={387}
          height={387}
          />
        <div className="w-[644px]">
          <p>Best Furniture For Your Castle....</p>
          <h1 className="text-[53px] leading-tighter font-josefinSans font-extrabold">New Furniture Collection Trends in 2020</h1>
        </div>
        </div>
      

    {/* Products */}
      <div className="flex flex-col justify-center items-center my-28"> 
        <h1 className="text-[42px] text-center font-bold">Featured Products</h1>
        <div className="mt-10 flex gap-5 flex-wrap">
        <ProductCard src="/product-1.png" alt="product 1 image"/>
        <ProductCard src="/product-2.png" alt="product 2 image"/>
        <ProductCard src="/product-3.png" alt="product 3 image"/> 
        <ProductCard src="/product-4.png" alt="product 4 image"/>
        </div>
      </div>
      </div>
    </>
  );
}
