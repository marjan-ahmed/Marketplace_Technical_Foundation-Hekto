import React from 'react';
import Link from "next/link";

type BreadcrumbProps = {
  path?: string;
  category?: string; // Make category optional
  subcategory: string;
};

function Breadcrumb({ path, category, subcategory }: BreadcrumbProps) {
  return (
    <div className="w-full h-auto lg:h-[286px] bg-pantonePurple flex items-center justify-center sm:justify-start">
      <div className="text-center sm:text-left px-6 sm:px-36 py-12 w-full">
        <h1 className="text-[32px] sm:text-[36px] font-extrabold font-josefin text-[#101750]">
          <span className="capitalize">{subcategory}</span>
        </h1>
        <div className='text-[14px] sm:text-[16px] font-medium font-lato flex flex-wrap gap-2 justify-center sm:justify-start'>
          <Link href="/" passHref>
            <button className="hover:text-blue-600">Home</button>
          </Link>
          {path && (
            <>
              <span>/</span>
              <span className="capitalize">{path}</span>
            </>
          )}
          {category && (
            <>
              <span>/</span>
              {/* <Link href={`/${category}`} passHref> */}
                <button className="capitalize hover:text-blue-600">{category}</button>
              {/* </Link> */}
            </>
          )}
          <span>/</span>
          <Link href={subcategory} passHref>
            <button className="font-semibold text-pink capitalize hover:text-blue-600">
              {subcategory}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;