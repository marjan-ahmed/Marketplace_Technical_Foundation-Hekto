'use client';
import { useState, useEffect, useRef } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Tcategory = {
  category: string;
};

const Categories = ({ category }: Tcategory) => {
  const [product, setProduct] = useState<any | null>(null);
  const [hovered, setHovered] = useState(false);
  const textRef = useRef<HTMLAnchorElement>(null); // Ref for measuring text width

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await client.fetch(`
        *[_type == 'products' && category == '${category}'][1]{
          "image": image.asset->url,
          name,
          category
        }
      `);
      setProduct(result);
    };

    fetchProduct();
  }, [category]);

  return (
    <>
  <div className="relative w-[269px] h-[345px]">
  <div className="absolute top-0 w-[269px] h-[269px] bg-[#F6F7FB] rounded-full hover:transition-all hover:ring-4 hover:ring-purple hover:ring-inset group">
    <div className="w-[268px] h-[268px] rounded-full p-4 flex justify-center items-center">
      {product?.image && (
        <Link href={`/product/category/${product.category.toLowerCase()}`}>
        <Image
          src={product.image}
          alt={product.name || "Product Image"}
          width={178}
          height={178}
        />
        </Link>
      )}
    </div>
    <div className="absolute bottom-1 left-0 right-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4">
      <button className="bg-[#08D15F] text-white py-2 px-4 text-[12px] font-josefin">
        Shop Now
      </button>
    </div>
  </div>
  <motion.div
    className="absolute bottom-0 left-0 right-0 flex flex-col items-center text-center mt-4"
    onHoverStart={() => setHovered(true)}
    onHoverEnd={() => setHovered(false)}
  >
   <Link
  href={product?.category ? `/product/category/${product.category.toLowerCase()}` : '#'}
  ref={textRef}
  className="font-normal font-josefin text-[20px] text-[#151875] cursor-pointer"
>
  {product?.category || "Unknown Category"}
</Link>
    <motion.div
      className="border-t-4 border-blue-500 rounded-xl"
      animate={{
        width: hovered
          ? textRef.current?.offsetWidth || 0 
          : 0,
      }}
      initial={{ width: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />
  </motion.div>
</div>
</>
  );
};

export default Categories;
