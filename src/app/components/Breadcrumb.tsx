import React from 'react'

type BreadcrumbProps = {
  title: string;
  subtitle: string;
}

function Breadcrumb({ title, subtitle }: BreadcrumbProps) {
  return (
    <div className="w-full h-auto lg:h-[286px] bg-pantonePurple flex items-center justify-center sm:justify-start">
      <div className="text-center sm:text-left px-6 sm:px-36 py-12 w-full">
        <h1 className="text-[32px] sm:text-[36px] font-extrabold font-josefin text-[#101750]">
          {title}
        </h1>
          <div className='text-[14px] sm:text-[16px] font-medium font-lato flex flex-wrap gap-2 justify-center sm:justify-start'>
          <span>Home</span> . <span>Page</span> . <span className="font-semibold text-pink">{subtitle}</span>
          </div>
        
        
      </div>
    </div>
  )
}

export default Breadcrumb
