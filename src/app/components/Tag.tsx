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
      className={`w-full p-4 sm:w-[60px] h-[25px] hover:bg-gray-300 bg-gray-200 font-josefin flex justify-center items-center capitalize rounded-lg border-1 text-[14px] 
        ${isSelected ? 'border-gray-900 border-2' : 'text-gray-700 border-gray-600'} 
        cursor-pointer transition`}
    >
      {title}
    </div>
  );
}

export default Tag;
