'use client'
import { client } from '@/sanity/lib/client';
import { CalendarDays, PenTool } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function LatestBlog() {
  const [blogs, setBlogs] = useState<any[]>([]); 

  useEffect(() => {
    const fetchBlogs = async () => {
        const query = `
        *[_type == "blog"]{
          "picture": picture.asset->url,
          title,
          buttonText,
          author,
          publishDate,
          shortDescription,
          "slug": slug.current
        }`;
        const data = await client.fetch(query);
        setBlogs(data); 
    };

    fetchBlogs(); 
  }, []); 


  return (
    <>
    <div className='flex justify-center gap-12 mx-3 sm:mx-0 flex-wrap'>
      {blogs.map((blog: any) => (
        <div className='w-[370px] h-[493px] mx-3 sm:mx-0 shadow-lg bg-white shadow-gray-200' key={blog.slug}>
          <div className='w-[370px] overflow-hidden rounded-lg'>
            <Image
              className='object-cover'
              src={blog.picture}
              alt='blog image'
              width={369}
              height={255}
            />
          </div>
          <div className='flex m-4 gap-8 mt-5 text-[#151875] text-[14px] font-josefin capitalize'>
            <div className='flex items-start justify-center gap-1'>
              <div>
                <span>
                  <PenTool color='#FB2E86' size={15} />
                </span>
              </div>
              <div>
                <h5 className='text-center'>{blog.author}</h5>
              </div>
            </div>

            <div className='flex items-start justify-center gap-1'>
              <div>
                <span>
                  <CalendarDays color='#FFA454' size={15} />
                </span>
              </div>
              <div>
                <h5 className='text-center'>{blog.publishDate}</h5>
              </div>
            </div>
          </div>

          <div className='mx-5 mt-6'>
            <h1 className='font-josefin font-bold text-[#151875] text-[18px]'>
            <Link href={`blog/${blog.slug}`}>
            {blog.title}
            </Link>
            </h1>
            <p className='text-[#72718F] text-[16px] font-lato leading-[30px] mt-2 font-normal'>
            <Link href={`blog/${blog.slug}`}>
            {blog.shortDescription.slice(0,92).concat('...')}</Link>
            </p>
            <button className='underline leading-[30px] font-lato font-normal text-[16px] mt-6'>
              <Link href={`blog/${blog.slug}`}>{blog.buttonText}</Link>
            </button>
          </div>
        </div>
      ))}
      </div>
    </>
  );
}
