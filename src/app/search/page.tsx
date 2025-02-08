'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  name: string;
  slug: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query')?.toLowerCase() || '';
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!query) return;

    const fetchSearchResults = async () => {
      try {
        const searchQuery = `
        *[_type == "products" && name match "${query}*"] {
          name,
          "slug": slug.current,
          description,
          "image": image.asset->url,
          price,
          category
        }
        `;
        const data: Product[] = await client.fetch(searchQuery);

        // Apply JavaScript filtering to ensure the name starts with the query
        const filteredData = data.filter(product => 
          product.name.toLowerCase().startsWith(query.toLowerCase())
        );

        setProducts(filteredData);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className="mx-36 mt-20 mb-20">
      <h2 className="text-2xl font-bold mb-4 font-poppins">Search Results for "{query}"</h2>
      {products.length === 0 ? (
        <p className="text-gray-600">No results found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {products.map((product) => (
    <div 
      key={product.slug} 
      className="border p-4 rounded-lg shadow-lg w-full bg-red-50 flex flex-col items-center justify-center text-center"
    >
      <Link href={`/product/featured-products/${product.slug}`}>
        <Image 
          src={product.image} 
          alt={product.name} 
          width={200} 
          height={200} 
          loading='lazy' 
          className="rounded-md block mx-auto"
        />
        <h3 className="font-semibold font-josefin text-lg mt-2">{product.name}</h3>
        <p className="text-gray-600 font-josefin tracking-tight leading-5 mt-3">{product.description}</p>
        <span className="block font-bold font-josefin text-purple-600 mt-2">${product.price}</span>
      </Link>
    </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
