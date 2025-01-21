import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";
import { ImageAsset, Slug } from "sanity";
import { ImPen } from "react-icons/im";
import { LucideCalendarDays } from "lucide-react";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";

export interface IBlogFields {
  title: string;
  author: string;
  shortDescription: string;
  buttonText: string;
  picture: ImageAsset | null; // Allow picture to be null
  slug: Slug;
  publishDate: string;
}

async function Blog() {
  const blogFields =
    await client.fetch(`*[_type == "blog"] | order(_createdAt asc){
    picture,
    title,
    buttonText,
    author,
    publishDate,
    shortDescription,
    content,
    "slug": slug.current
} `);

  return (
    <>
    <Breadcrumb subcategory="blog"/>
    <div className="mx-5 sm:mx-10 md:mx-20 lg:mx-40 mt-20">
        {blogFields.map((blog: IBlogFields) => {
          let imageUrl = "";
          if (blog.picture) {
            imageUrl = urlFor(blog.picture).url();
          }

          return (
            <div key={blog.slug.current || blog.title} className="mb-10">
              <Link href={`/blog/${blog.slug}/`}>
              <Image
                src={imageUrl}
                alt={blog.title}
                width={870}
                height={453}
                className="w-full md:w-[870px] h-auto md:h-[453px]"
              />
              </Link>
              <div className="flex mt-6 gap-2 sm:gap-6 flex-wrap">
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

              <div className="mt-6 w-full sm:w-[870px]">
                <h2 className="text-[24px] sm:text-[30px] text-[#151875] leading-[30px] font-josefin font-bold">
                <Link href={`/blog/${blog.slug}/`}>
                {blog.title}
                </Link>
                </h2>
                <p className="text-[14px] sm:text-[16px] text-[#8A8FB9] leading-[25.6px] font-lato font-normal mt-6">
                  {blog.shortDescription}
                </p>
                <Link href={`/blog/${blog.slug}/`}>
                  <button className="mt-6">
                    <div className="flex items-center gap-1 text-[16px] sm:text-[18px] text-[#151875] leading-[21.6px] font-semibold font-lato">
                      {blog.buttonText}
                      <div className="w-[5px] h-[5px] rounded-full bg-[#FB2E86]"></div>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Blog;
