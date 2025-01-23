'use client';
import React, { useState, useEffect } from 'react';
import { Heart, SearchIcon, ShoppingCart } from 'lucide-react';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { add, CartItem } from '@/redux/CartSlice';
import ProductHoveringEffect from './ProductHoveringEffect';

interface Product {
  name: string;
  slug: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity:number;
  discountPercentage: number;
}

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const dispatch = useDispatch()

  const handleAdd = (product: CartItem) => {
    dispatch(add(product))
  }

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `
        *[_type == 'products'] {
          name,
          "slug": slug.current,
          description,
          "image": image.asset->url,
          price,
          category
        }
        `;
        const data: Product[] = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      setFilteredProducts([]); 
      return;
    }

    
    const filtered = products.filter((product) =>
        product.name.toLowerCase().startsWith(value.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      {}
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search for a product"
          value={searchTerm}
          onChange={handleSearch}
          className="text-black border border-gray-300 rounded w-full p-2"
        />
        <button
          type="submit"
          className="p-[9px] absolute right-0 bg-purple text-white rounded-r"
        >
          <SearchIcon className="h-5 w-5" />
        </button>
      </div>

      {}
      {filteredProducts.length > 0 && (
        <ul  className="mt-4 absolute z-10 max-h-[391px] overflow-y-auto p-2 space-y-4 border border-gray-200 rounded shadow-lg bg-white">
          {filteredProducts.map((product:Product) => (
            <div
            key={product.slug}
            className="mx-3 sm:mx-0 relative w-full sm:w-[300px] h-full sm:h-[391px] bg-white hover:bg-[#2F1AC4] hover:text-white shadow-2xl shadow-gray-300 group"
            >
            <div className="absolute left-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-[3px]">
                {}
                <ProductHoveringEffect product={product} />
              </div>
            </div>
  
            {}
            <div className="h-[236px] bg-[#F6F7FB] flex items-center justify-center">
              <Link href={`/product/featured-products/${product.slug}`}>
                <Image
                  className="object-cover"
                  src={product.image}
                  alt={product.name}
                  width={178}
                  height={178}
                  layout="intrinsic"
                  objectFit="contain"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={product.image}
                  quality={90}
                />
              </Link>
            </div>
  
            {}
            <div className="flex flex-col items-center justify-center gap-3 mt-1">
              <h1 className="font-bold font-lato text-[18px] text-pink text-center mt-3 group-hover:text-white">
                <Link href={`/product/featured-products/${product.slug}`}>
                  {product.name}
                </Link>
              </h1>
              <div className="flex gap-1 w-[52px] h-[4px] justify-center">
                <div className="w-[14px] h-[4px] bg-[#05E6B7] rounded-[10px]"></div>
                <div className="w-[14px] h-[4px] bg-[#F701A8] rounded-[10px]"></div>
                <div className="w-[14px] h-[4px] bg-[#00009D] rounded-[10px] group-hover:bg-[#FFEAC1]"></div>
              </div>
              <div className="mx-5">
                <p className="text-center font-josefin text-[#151875] text-[14px] group-hover:text-white">
                  <Link href={`/product/featured-products/${product.slug}`}>
                    {product.description}
                  </Link>
                </p>
                <div className="flex justify-between mt-3">
                  <p className="text-center mt-[-6px] font-josefin text-[#151875] text-[14px] group-hover:text-white">
                    ${product.price}
                  </p>
                  <p className="text-center mt-[-6px] font-josefin font-semibold text-[#767676] text-[14px] group-hover:text-white">
                    {product.category}
                  </p>
                </div>
              </div>
            </div>
          </div>
    
    ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
