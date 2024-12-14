import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import ProductCart2 from "../components/ProductCart2";

// interface IProducts {
//   id: string;
//   name: string;
//   imageSrc: string;
//   price: string;
// }

export const products: any = [
  { id: '1', name: 'Product 1', imageSrc: '/product-1.png', price: '$20' },
  { id: '2', name: 'Product 2', imageSrc: '/product-2.png', price: '$25' },
  { id: '3', name: 'Product 3', imageSrc: '/product-3.png', price: '$30' },
  { id: '4', name: 'Product 4', imageSrc: '/product-4.png', price: '$35' },
  { id: '5', name: 'Product 5', imageSrc: '/product-5.png', price: '$40' },
  { id: '6', name: 'Product 6', imageSrc: '/product-6.png', price: '$45' },
  { id: '7', name: 'Product 7', imageSrc: '/product-7.png', price: '$50' },
  { id: '8', name: 'Product 8', imageSrc: '/product-8.png', price: '$55' },
  { id: '9', name: 'Product 9', imageSrc: '/product-9.png', price: '$60' },
  { id: '10', name: 'Product 10', imageSrc: '/product-10.png', price: '$65' },
  { id: '11', name: 'Product 11', imageSrc: '/product-11.png', price: '$70' },
  { id: '12', name: 'Product 12', imageSrc: '/product-12.png', price: '$75' },
  { id: '13', name: 'Product 13', imageSrc: '/product-13.png', price: '$80' },
  { id: '14', name: 'Product 14', imageSrc: '/product-14.png', price: '$85' },
  { id: '15', name: 'Product 15', imageSrc: '/product-15.png', price: '$90' },
  { id: '16', name: 'Product 16', imageSrc: '/product-16.png', price: '$95' },
  { id: '17', name: 'Product 17', imageSrc: '/product-17.png', price: '$100' },
  { id: '18', name: 'Product 18', imageSrc: '/product-18.png', price: '$105' },
  { id: '19', name: 'Product 19', imageSrc: '/product-19.png', price: '$110' },
  { id: '20', name: 'Product 20', imageSrc: '/product-20.png', price: '$115' },
  { id: '21', name: 'Product 21', imageSrc: '/product-21.png', price: '$120' },
  { id: '22', name: 'Product 22', imageSrc: '/product-22.png', price: '$125' },
  { id: '23', name: 'Product 23', imageSrc: '/product-23.png', price: '$130' },
  { id: '24', name: 'Product 24', imageSrc: '/product-24.png', price: '$135' },
  { id: '25', name: 'Product 25', imageSrc: '/product-25.png', price: '$140' },
  { id: '26', name: 'Product 26', imageSrc: '/product-26.png', price: '$145' },
  { id: '27', name: 'Product 27', imageSrc: '/product-27.png', price: '$150' },
  { id: '28', name: 'Product 28', imageSrc: '/product-28.png', price: '$155' },
  { id: '29', name: 'Product 29', imageSrc: '/product-29.png', price: '$160' },
];

// import Image from "next/image";

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
        {products.map((product: any) => (
          <Link key={product.id} href={`/product/${product.id}`} passHref>
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
