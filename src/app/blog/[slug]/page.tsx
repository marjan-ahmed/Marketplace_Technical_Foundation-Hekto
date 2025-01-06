import { client } from '@/sanity/lib/client';
import { LucideCalendarDays } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { ImPen } from 'react-icons/im';
import { urlFor } from '@/sanity/lib/image';
import Breadcrumb from '@/app/components/Breadcrumb';
import { PortableText } from 'next-sanity';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default async function getBlog({params: {slug}}: {params: {slug: string}}){

  const query = `
 *[_type == 'blog' && slug.current == '${slug}'][0]{
  picture,
  title,
  buttonText,
  author,
  publishDate,
  shortDescription,
  "slug": slug.current,
  qoute,
  content1,
  content2,
  content3,
  content4
} `;

  const blog = await client.fetch(query);
  console.log(blog);

  const imageUrl = blog.picture ? urlFor(blog.picture).url() : '';

    return (
      <>
        <Breadcrumb title="Single Blog" subtitle='Blog'/>
        <div className='mx-8 sm:mx-20 lg:mx-40 mb-20 mt-10 sm:mt-28'>
        <Image src={imageUrl} alt={blog.title} width={870} height={453} />
        <div className="flex flex-wrap mt-6 gap-6">
              <div className="flex gap-2 items-center">
                <ImPen size={14} color="#FB2E86" />
                <div className="flex justify-center items-center w-[160px] h-[23px] bg-[#FFE7F9] rounded-sm">
                  <span className="capitalize text-[#151875] text-[14px] leading-[14px] font-josefin font-medium">
                    {blog.author}
                  </span>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <LucideCalendarDays size={14} color="#FFA454" />
                <div className="flex justify-center items-center w-[127px] h-[23px] bg-[#FFECE2] rounded-sm">
                  <span className="text-[#151875] text-[14px] leading-[14px] font-josefin font-medium">
                    {blog.publishDate}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:w-full lg:w-[870px]">
              <h2 className="text-[30px] text-[#151875] leading-[30px] font-josefin font-bold">
                {blog.title}
              </h2>
              <p className="text-[16px] text-[#8A8FB9] leading-[25.6px] font-lato font-normal mt-6">
                {blog.shortDescription}
              </p>

              <div className="mt-16 text-[16px] text-[#8A8FB9] leading-[25.6px] font-lato font-normal">
                {/* Render rich text content */}
                <PortableText value={blog.content1} />
              </div>

              <div className='relative w-full sm:w-[95%] lg:w-[869px] h-[141px] bg-[#FAFAFB] py-8 px-5 mt-14'>
                <div className='absolute bg-[#FC45A0] w-full h-full -z-10 right-1 top-0'></div>
                <p className='italic text-[18px] text-[#969CB4] leading-[31.09px] font-josefin'>
                  {blog.qoute}
                </p>
              </div>

              <div className='flex flex-wrap sm:flex-nowrap gap-6 mt-8'>
                <Image 
                  src={'/blog-pic1.png'}
                  alt='Blog Picture 1'
                  width={417.74}
                  height={245}
                  className="w-full sm:w-[48%] lg:w-[49%]"
                />
                <Image 
                  src={'/blog-pic2.png'}
                  alt='Blog Picture 2'
                  width={417.74}
                  height={245}
                  className="w-full sm:w-[48%] lg:w-[49%]"
                />
              </div>

              <div className="mt-14 text-[16px] text-[#8A8FB9] leading-[25.6px] font-lato font-normal">
                <PortableText value={blog.content2} />
              </div>
              <div className="mt-14 text-[16px] text-[#8A8FB9] leading-[25.6px] font-lato font-normal">
                <PortableText value={blog.content3} />
              </div>
              <div className="mt-14 text-[16px] text-[#8A8FB9] leading-[25.6px] font-lato font-normal">
                <PortableText value={blog.content4} />
              </div>

              <div className="flex justify-center items-center mt-16">
                <ul className="flex gap-2 sm:gap-4">
                  <li className="bg-[#5625DF] w-[35px] h-[35px] rounded-full flex justify-center items-center">
                    <FaFacebookF color='white' size={16}/>
                  </li>
                  <li className="bg-[#FF27B7] w-[35px] h-[35px] rounded-full flex justify-center items-center">
                    <FaInstagram color="white" size={16}/>
                  </li>
                  <li className="bg-[#37DAF3] w-[35px] h-[35px] rounded-full flex justify-center items-center">
                    <FaTwitter color="white" size={16}/>
                  </li>
                </ul>
              </div>
              <div className='mt-8 flex items-center justify-between px-6 w-full sm:w-[882.69px] h-[45px] bg-[#F7F8FB]'>
                <div className='flex gap-1 items-center text-[#8A8FB9]'>
                    <FaArrowLeftLong />
                    <button className='font-lato'>Previous Post</button>
                </div>

                <div className='flex items-center gap-1 text-[#8A8FB9]'>
                    <button className='font-lato'>Next Post</button>
                    <FaArrowRightLong />
                </div>
              </div>

              <div className='mt-16'>
              <div className='w-full md:w-[667.68px] h-full md:h-[137.16px] p-4 flex flex-wrap sm:flex-nowrap gap-4 items-center justify-center sm:justify-start shadow-xl shadow-neutral-300'>
                <Image 
                src={'/blog-smallpic1.png'}
                alt='Image 1'
                width={103.16}
                height={106.56}
                />
                <div>
                  <div className='flex justify-between sm:gap-6 items-center'>
                  <h4 className='font-josefin tracking-[1%] leading-[21.25px] text-[#363385] text-[18.14px] font-semibold'>Sapien ac</h4>
                   <span className='font-lato font-normal text-[12.47px] leading-[14.96px] text-[#A3A2B6]'>Jan 09 2020</span>
                  </div>
                  <p className='font-lato font-normal text-[12.47px] text-[#A3A2B6] leading-[28.34px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
                </div>
              </div>

              <div className='mt-10 w-full md:w-[667.68px] h-full md:h-[137.16px] p-4 flex flex-wrap sm:flex-nowrap gap-4 items-center justify-center sm:justify-start shadow-xl shadow-neutral-300'>
                <Image 
                src={'/blog-smallpic2.png'}
                alt='Image 2'
                width={103.16}
                height={106.56}
                />
                <div>
                  <div className='flex justify-between sm:gap-6 items-center'>
                  <h4 className='font-josefin tracking-[1%] leading-[21.25px] text-[#363385] text-[18.14px] font-semibold'>Augue conva</h4>
                   <span className='font-lato font-normal text-[12.47px] leading-[14.96px] text-[#A3A2B6]'>Aug 18 2020</span>
                  </div>
                  <p className='font-lato font-normal text-[12.47px] text-[#A3A2B6] leading-[28.34px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
                </div>
              </div>
              </div>

              <div className='w-full sm:w-[717px] h-[427.05px] mt-20'>
                  <div className='flex gap-5 sm:gap-8 justify-between flex-wrap sm:flex-nowrap'>
                      <Input placeholder='Your Name*' className='font-lato font-normal text-[15.73px] leading-[18.88px] tracking-[1%] text-[#8A8FB9] sm:w-3/6 h-[42px] w-full border-[#8A8FB9] rounded-none' /> 
                      <Input placeholder='Write Your Email' className='font-lato font-normal text-[15.73px] leading-[18.88px] tracking-[1%] text-[#8A8FB9] sm:w-3/6 h-[42px] w-full border-[#8A8FB9] rounded-none ' />                      
                  </div>
                  <Textarea placeholder='Write Your Comment' className="mt-5 font-lato font-normal text-[15.73px] leading-[18.88px] tracking-[1%] text-[#8A8FB9] w-full sm:w-[717px] h-[130px] sm:h-[205.66px] border-[#8A8FB9] rounded-none" />              
                  <span className="flex items-start sm:items-center gap-2 text-[#8A91AB] text-[13.49px] tracking-[2%] font-medium font-lato mt-6">
    <input type="checkbox" id="permission" className="w-4 h-4" />
    <label htmlFor="permission" className="cursor-pointer">
      Save my name, email, and website in this browser for the next time I comment.
    </label>
  </span>                  
                  <div className="flex justify-center mt-10">
                  <Button className='w-full sm:w-[697.89px] h-[49.45px] font-josefin text-[15px] md:text-[17.98px] leading-[21.07px]'>Continue Shipping</Button>
                  </div>
                  </div>
                </div>
            </div>
            <Image 
                  src={'/companies.png'}
                  alt='Companies Logo'
                  width={1205.33}
                  height={124}
                  className='flex justify-center mx-auto mb-8 mt-[-30px]'
                  />
      </>
    );
}