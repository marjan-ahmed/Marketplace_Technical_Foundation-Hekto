'use client';
import React, { useState, useEffect } from 'react';
import { SearchIcon } from 'lucide-react';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Product {
  name: string;
  slug: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  discountPercentage: number;
}

interface SearchBarProps {
  className?: string;
}

function SearchBar({ className }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const router = useRouter();

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
    const value = e.target.value.trim();
    setSearchTerm(value);

    if (value === '') {
      setFilteredProducts([]); // Clear results when search is empty
      return;
    }

    const filtered = products.filter((product) =>
      product.name.toLowerCase().startsWith(value.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  const handleSearchSubmit = () => {
    if (searchTerm.trim() !== '') {
      router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className={`w-full max-w-sm mx-auto ${className}`}>
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search Product"
          value={searchTerm}
          onChange={handleSearch}
          className="text-black border px-5 border-gray-300 rounded w-full p-2"
        />
        <button
          type="submit"
          onClick={handleSearchSubmit}
          className="p-[9px] absolute right-0 bg-purple text-white rounded-r"
        >
          <SearchIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Only show the list when searchTerm is not empty */}
      {searchTerm.length > 0 && filteredProducts.length > 0 && (
        <ul className="absolute mt-2 z-10 max-h-96 overflow-y-auto border border-gray-200 rounded-lg shadow-lg bg-white">
          {filteredProducts.map((product) => (
            <li
              key={product.slug}
              className="flex items-center gap-4 p-4 hover:bg-gray-100 cursor-pointer transition-colors duration-300"
            >
              <Link href={`/product/featured-products/${product.slug}`}>
                <Image
                  className="object-cover rounded-md"
                  src={product.image}
                  alt={product.name}
                  width={60}
                  height={60}
                  layout="fixed"
                  objectFit="contain"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={product.image}
                  quality={90}
                />
              </Link>

              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-800 hover:text-[#151875] font-josefin">
                  <Link href={`/product/featured-products/${product.slug}`}>
                    {product.name}
                  </Link>
                </h3>
                <p className="text-xs text-gray-500 truncate font-lato">
                  {product.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
