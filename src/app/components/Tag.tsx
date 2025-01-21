'use client'
import React, { useState } from 'react';

function Tag({ title }: { title: string }) {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      onClick={toggleSelection}
      className={`w-full p-3 sm:w-[60px] h-[25px] font-josefin flex justify-center items-center capitalize rounded-lg border-2 text-[14px] 
        ${isSelected ? 'bg-gray-700 text-white border-gray-900 border-2' : 'bg-gray-200 text-gray-600 border-gray-600'} 
        cursor-pointer transition`}
    >
      {title}
    </div>
  );
}

export default Tag;
