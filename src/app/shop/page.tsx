import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import ProductCart2 from "../components/ProductCart2";
import { products } from "../components/products/page";
import Image from "next/image";

export default function Shop() {
  return (
    <>
    <div className="">
        <Breadcrumb title="Shop" subtitle="Shop" />
        </div>
        <div className="mx-34">
        <div className="mt-16 mb-20 flex mx-34 items-center bg-red-300">
        <div className="flex flex-col justify-center items-center mx-auto py-0 w-[1171px] h-[44px]">
    <h1 className="text-[#151875] text-[22px] py-[-10px] font-bold mx-[34px]">
        Ecommerce Accessories & Fashion Item
    </h1>
    <p className="text-[#8A8FB9] text-[14px] leading-tight">
        About 9,620 results (0.62 seconds)
    </p>
</div>

        <div className="flex">
            <label htmlFor="perPage">Per Page:</label>
            <input className="w-[55px] h-[25px]" type="text" id="perPage"></input>
        </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-5 mx-32 mb-10">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`} passHref>
              <ProductCart2
                src={product.imageSrc}
                alt={product.name}
                width={201}
                height={201}
                productName={product.name}
                bg="#F6F7FB"
              />
          </Link>
        ))}      
        </div>
        </div>
    </>
  );
}
