import React from 'react'

type BreadcrumbProps = {
    title: string;
    subtitle: string;
}

function Breadcrumb({title, subtitle}: BreadcrumbProps) {
  return (
    <div className="w-[1920] h-[286px] bg-pantonePurple flex items-center justify-start">
      <div className="text-center px-36 py-12">
        <h1 className="text-[36px] font-extrabold">{title}</h1>
        <p className="text-[16px]">
          <span>Home</span> . <span>Page</span> . <span className="font-semibold">{subtitle}</span>
        </p>
      </div>
    </div>
  )
}

export default Breadcrumb
