import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import ProductCart2 from "../components/ProductCart2";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  src: string;
  alt: string;
  previous_price: string;
  current_price: string;
}

export const productData: Product[] = [
  {
    id: 1,
    name: "Vel elit euismod",
    src: "/product-6.png",
    alt: "Product 1",
    previous_price: "$42.00",
    current_price: "$26.00",
  },
  {
    id: 2,
    name: "Ultricies condimentum imperdiet",
    src: "/product-7.png",
    alt: "Product 2",
    previous_price: "$42.00",
    current_price: "$26.00",
  },
  {
    id: 3,
    name: "Vitae suspendisse sed",
    src: "/product-8.png",
    alt: "Product 3",
    previous_price: "$42.00",
    current_price: "$26.00",
  },
  {
    id: 4,
    name: "Sed at fermentum",
    src: "/product-9.png",
    alt: "Product 4",
    previous_price: "$42.00",
    current_price: "$26.00",
  },
  {
    id: 5,
    name: "Fusce pellentesque at",
    src: "/product-10.png",
    alt: "Product 5",
    previous_price: "$42.00",
    current_price: "$26.00",
  },
  {
    id: 6,
    name: "Vestibulum magna laoreet",
    src: "/product-11.png",
    alt: "Product 6",
    previous_price: "$42.00",
    current_price: "$26.00",
  },
  {
    id: 7,
    name: "Sollicitudin amet orci",
    src: "/product-12.png",
    alt: "Product 7",
    previous_price: "$42.00",
    current_price: "$26.00",
  },
  {
    id: 8,
    name: "Ultrices mauris sit",
    src: "/product-13.png",
    alt: "Product 8",
    previous_price: "$42.00",
    current_price: "$26.00",
  },
  {
    id: 9,
    name: "Pellentesque condimentum ac",
    src: "/product-14.png",
    alt: "Product 9",
    previous_price: "$42.00",
    current_price: "$26.00",
  },
  {
    id: 10,
    name: "Cras scelerisque velit",
    src: "/product-15.png",
    alt: "Product 10",
    previous_price: "$42.00",
    current_price: "$26.00",
  },
  {
    id: 11,
    name: "Lectus vulputate faucibus",
    src: "/product-16.png",
    alt: "Product 11",
    previous_price: "$42.00",
    current_price: "$26.00",
  },
  {
    id: 12,
    name: "Purus risus, ut",
    src: "/product-17.png",
    alt: "Product 12",
    previous_price: "$42.00",
    current_price: "$26.00",
  },
];

export default async function Shop() {
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
          <ProductCart2
            src="/product-5.png"
            alt="Product 1"
            width={201}
            height={201}
            productName="Vel elit euismod"
            bg="#F6F7FB"
          />
          <ProductCart2
            src="/product-6.png"
            alt="Product 2"
            width={169}
            height={169}
            productName="Ultricies condimentum imperdiet"
            bg="#EBF4F3"
          />
          <ProductCart2
            src="/product-7.png"
            alt="Product 3"
            width={201}
            height={201}
            productName="Vitae suspendisse sed"
            bg="#F6F7FB"
          />
          <ProductCart2
            src="/product-8.png"
            alt="Product 4"
            width={188}
            height={188}
            productName="Sed at fermentum"
            bg="#F6F7FB"
          />
          <ProductCart2
            src="/product-9.png"
            alt="Product 5"
            width={128}
            height={139}
            productName="Fusce pellentesque at"
            bg="#F6F7FB"
          />
          <ProductCart2
            src="/product-10.png"
            alt="Product 6"
            width={154}
            height={158}
            productName="Vestibulum magna laoreet"
            bg="#F6F7FB"
          />
          <ProductCart2
            src="/product-11.png"
            alt="Product 7"
            width={114}
            height={144}
            productName="Sollicitudin amet orci"
            bg="#F6F7FB"
          />
          <ProductCart2
            src="/product-12.png"
            alt="Product 8"
            width={167}
            height={167}
            productName="Ultrices mauris sit"
            bg="#F6F7FB"
          />
          <ProductCart2
            src="/product-13.png"
            alt="Product 9"
            width={170}
            height={151}
            productName="Pellentesque condimentum ac"
            bg="#F6F7FB"
          />
          <ProductCart2
            src="/product-14.png"
            alt="Product 10"
            width={169}
            height={158}
            productName="Cras scelerisque velit"
            bg="#F6F7FB"
          />
          <ProductCart2
            src="/product-15.png"
            alt="Product 11"
            width={176}
            height={176}
            productName="Lectus vulputate faucibus"
            bg="#F6F7FB"
          />
          <ProductCart2
            src="/product-16.png"
            alt="Product 12"
            width={188}
            height={188}
            productName="Purus risus, ut"
            bg="#F6F7FB"
          />

          <div className="flex wrap mt-14 mb-12">
            <Image
              src={"/companies.png"}
              alt="testimonials"
              width={904}
              height={93}
            />
          </div>
        </div>
      </div>
    </>
  );
}
