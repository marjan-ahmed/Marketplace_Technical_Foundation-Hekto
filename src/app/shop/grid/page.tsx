import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import ProductCart2 from "../../components/ProductCart2";
import ShopControl from "@/app/components/ShopControl";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";


export default async function Shop() {
  const query = `
  *[_type == 'shopGrid'] | order(_createdAt asc) {
  productTitle,
  id,
  productImage,
  olderPrice,
  newPrice,
  description
}
  `;
  const products = await client.fetch(query);
  console.log(products)
  return (
    <>
      <Breadcrumb title="Shop" subtitle="Shop" />
      <ShopControl />
      <div className="mt-10 flex flex-wrap justify-center gap-10 mx-36 mb-10">
        {products.map((product: any) => (
          <Link key={product.id} href={`/shop/grid/${product.id}`} passHref>
              <ProductCart2 
                src={urlFor(product.productImage).url()}
                alt={product.productTitle}
                width={195}
                height={195}
                productName={product.productTitle}
                olderPrice={product.olderPrice}
                newPrice={product.newPrice}
              />
          </Link>
        ))}      
        </div>
        <div className="flex justify-center mb-16 mt-24">
       <Image 
       src={'/companies.png'}
       alt="Companies Logo"
       width={904}
       height={93}
       />
     </div>
    </>
  );
}
