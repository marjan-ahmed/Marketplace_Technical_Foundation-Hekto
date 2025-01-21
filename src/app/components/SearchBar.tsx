'use client'
import React, { useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import Link from 'next/link';

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="font-lato font-normal text-[12px] leading-[30px] pl-4 pr-10 py-2 border rounded-md w-full"
      />
      <Link href={'#'} onClick={handleSearch}>
        <FaMagnifyingGlass className="absolute top-2.5 right-4 text-[#BCBDDB] cursor-pointer" />
      </Link>
    </div>
  );
};

export default SearchBar;
