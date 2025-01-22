import Breadcrumb from "@/app/components/Breadcrumb";
import ProductHoveringEffect from "@/app/components/ProductHoveringEffect";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

// Fetch featured products on the server side
async function SofaProducts() {
  const query = `
    *[_type == 'products' && category == 'Sofa']{
      name,
      description,
      price,
      category,
      "slug": slug.current,
      discountPercentage,
      isFeaturedProduct,
      "image": image.asset->url
    }
  `;
  return client.fetch(query);
}

export default async function FeaturedProduct() {
  const data = await SofaProducts();

  return (
    <>
      <Breadcrumb category="category" subcategory="sofa" />
      <div className="flex flex-wrap justify-center mt-20 mb-20 mx-4 gap-5 sm:mx-8 md:mx-16 lg:mx-32">
        {data.map((product: any) => (
          <div
            key={product.slug}
            className="relative w-full sm:w-[300px] md:w-[320px] lg:w-[350px] xl:w-[380px] h-full mt-5 sm:h-[420px] bg-white hover:bg-[#2F1AC4] hover:text-white shadow-2xl shadow-gray-300 group rounded-lg overflow-hidden"
          >
            <div className="absolute left-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-2">
                {/* Add to Cart */}
                <ProductHoveringEffect product={product}/>
              </div>
            </div>

            {/* Product Image */}
            <div className="h-[236px] bg-[#F6F7FB] flex items-center justify-center">
              <Link href={`/product/category/sofa/${product.slug}`}>
              <Image
                className="object-cover"
                src={product.image}
                alt={product.name}
                width={178}
                height={178}
              />
              </Link>
            </div>

            {/* Product Details */}
            <div className="flex flex-col items-center justify-center gap-3 mt-2 px-4">
              <h1 className="font-bold font-lato text-[18px] text-pink text-center mt-3 group-hover:text-white">
              <Link href={`/product/category/sofa/${product.slug}`}>
                {product.name}
                </Link>
              </h1>
              <div className="flex gap-1 w-[52px] h-[4px] justify-center">
                <div className="w-[14px] h-[4px] bg-[#05E6B7] rounded-[10px]"></div>
                <div className="w-[14px] h-[4px] bg-[#F701A8] rounded-[10px]"></div>
                <div className="w-[14px] h-[4px] bg-[#00009D] rounded-[10px] group-hover:bg-[#FFEAC1]"></div>
              </div>
              <p className="text-center font-josefin text-[#151875] text-[14px] group-hover:text-white">
              <Link href={`/product/category/sofa/${product.slug}`}>
                {product.description}
                </Link>
              </p>
              <div className="flex justify-between items-center w-full mt-2">
                <p className="text-center font-josefin text-[#151875] text-[14px] group-hover:text-white">
                  ${product.price}
                </p>
                <p className="text-center font-josefin font-semibold text-[#767676] text-[14px] group-hover:text-white">
                  {product.category}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}