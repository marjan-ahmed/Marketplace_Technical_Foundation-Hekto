import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import ProductCart2 from "../../components/ProductCart2";
import products from "@/app/product/product";
import ShopControl from "@/app/components/ShopControl";

type Product = {
  id: string;
  name: string;
  imageSrc: string;
  price: string;
};

export default function Shop() {
  return (
    <>
      <Breadcrumb title="Shop" subtitle="Shop" />
      <ShopControl />
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
    </>
  );
}
