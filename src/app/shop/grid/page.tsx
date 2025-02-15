'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import ProductCart2 from "../../components/ProductCart";
import { FaList } from 'react-icons/fa'
import { IoGridSharp } from 'react-icons/io5'
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ShoppingCart, Heart } from "lucide-react";
import { HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { add, CartItem } from "@/redux/CartSlice";  

export default function Shop() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<any[]>([]);
  const [sortBy, setSortBy] = useState<string>(""); // State for sorting
  const [perPage, setPerPage] = useState<number>(12); // Default items per page


  const handleAdd = (product: CartItem) => {
      dispatch(add(product))
  }
  // Fetch products from the Sanity client
  useEffect(() => {  
    const fetchProducts = async () => {
      const query = `
      *[_type == 'products'] {
        "slug": slug.current,
        name,
        "image": image.asset->url,
        price,
        description
      }
      `;
      const fetchedProducts = await client.fetch(query);
      console.log(fetchedProducts)
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, []);

  // Function to sort products based on selected option
  const sortedProducts = () => {
    if (sortBy === "low") {
      return [...products].sort((a, b) => a.price - b.price);
    }
    if (sortBy === "high") {
      return [...products].sort((a, b) => b.price - a.price);
    }
    if (sortBy === "titleAsc") {
      return [...products].sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortBy === "titleDesc") {
      return [...products].sort((a, b) => b.name.localeCompare(a.name));
    }
    return products;
  };

  return (
    <>
      <Breadcrumb category="shop" subcategory="grid" />
      <div className="flex flex-col lg:flex-row justify-between items-center mx-4 lg:mx-40 mt-20 mb-20">
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <h1 className="text-[#151875] text-[22px] lg:text-[28px] font-josefin leading-[25.78px] font-bold">
            Ecommerce Accessories & Fashion Item
          </h1>
          <p className="text-[#8A8FB9] text-[12px] lg:text-[14px] font-lato font-normal">
            About {products.length} results
          </p>
        </div>

        <div className="flex flex-wrap justify-start sm:px-0 px-4 lg:justify-end items-center gap-4 lg:gap-6 w-full lg:w-auto">
          <div className="flex items-center gap-2">
            <label htmlFor="perPage" className="font-lato font-normal text-[16px] text-[#3F509E] leading-[19.2px]">
              Per Page:
            </label>
            <input
              type="number"
              id="perPage"
              value={perPage}
              onChange={(e) => setPerPage(Number(e.target.value))}
              className="w-[55px] h-[25px] border-[#E7E6EF] border-2"
            />
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="sortBy" className="font-lato font-normal text-[16px] text-[#3F509E] leading-[19.2px]">
              Sort By:
            </label>
            <select
              id="sortBy"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-[130px] h-[25px] border-[#E7E6EF] border-2 text-[12px] text-[#8A8FB9] font-lato leading-[18px]"
            >
              <option value="" disabled>
                Best Matches
              </option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="titleAsc">Title: A to Z</option>
              <option value="titleDesc">Title: Z to A</option>
            </select>
          </div>

          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 font-lato font-normal text-[16px] text-[#3F509E] leading-[19.2px]" htmlFor="view">
              View:
              <span className="flex items-center gap-4">
                <Link href="/shop/grid" className="flex items-center">
                  <IoGridSharp className="mr-1" color="#151875" />
                  Grid
                </Link>
                <Link href="/shop/list" className="flex items-center">
                  <FaList className="mr-1" color="#151875" />
                  List
                </Link>
              </span>
            </label>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-10 mx-36 mb-10">
        {sortedProducts().slice(0, perPage).map((product: any) => (
          <div key={product.slug} className="relative group">
            <Link href={`/shop/grid/${product.slug}`}>
              <ProductCart2
                src={product.image}
                alt={product.name}
                productName={product.name}
                price={product.price}
              />
            </Link>
            <div className="absolute left-2 bottom-28 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col gap-[10px]">
                {/* Add to Cart */}
                <TooltipProvider>
                  <Tooltip>
                    <div className="bg-white w-[35px] h-[35px] hover:shadow-sm hover:shadow-gray-300 rounded-full flex justify-center items-center text-[#151875] cursor-pointer relative">
                      <TooltipTrigger onClick={() => handleAdd(product)}>
                        <ShoppingCart size={20} />
                      </TooltipTrigger>
                      <TooltipContent className="flex items-center text-[12px] absolute left-[120%] top-[50%] -translate-y-1/2 w-max px-2 py-1 rounded shadow">
                        <p>Add to Cart</p>
                      </TooltipContent>
                    </div>
                  </Tooltip>
                </TooltipProvider>

                {/* Add to Wishlist */}
                <TooltipProvider>
                  <Tooltip>
                    <div className="bg-white w-[35px] h-[35px] hover:shadow-sm hover:shadow-gray-300 rounded-full flex justify-center items-center text-[#151875] cursor-pointer relative">
                      <TooltipTrigger>
                        <Heart size={20} />
                      </TooltipTrigger>
                      <TooltipContent className="flex items-center text-[12px] absolute left-[120%] top-[50%] -translate-y-1/2 w-max px-2 py-1 rounded shadow">
                        <p>Add to Wishlist</p>
                      </TooltipContent>
                    </div>
                  </Tooltip>
                </TooltipProvider>

                {/* View Details */}
                <TooltipProvider>
                  <Tooltip>
                    <Link href={`/shop/grid/${product.slug}`} >
                      <div className="bg-white w-[35px] h-[35px] hover:shadow-sm hover:shadow-gray-300 rounded-full flex justify-center items-center text-[#151875] cursor-pointer relative">
                        <TooltipTrigger>
                          <HiOutlineMagnifyingGlassPlus size={20} />
                        </TooltipTrigger>
                        <TooltipContent className="flex items-center text-[12px] absolute left-[120%] top-[50%] -translate-y-1/2 w-max px-2 py-1 rounded shadow">
                          <span className="cursor-pointer">View Details</span>
                        </TooltipContent>
                      </div>
                    </Link>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-16 mt-24">
        <Image
          src={"/companies.png"}
          alt="Companies Logo"
          width={904}
          height={93}
        />
      </div>
    </>
  );
}
