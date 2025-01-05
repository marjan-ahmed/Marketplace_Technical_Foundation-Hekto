import ProductCard from '@/app/components/ProductCard1';
import StarRating from '@/app/components/StarRating';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import React from 'react';
import { ImageAsset } from 'sanity';
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from 'react-icons/fa';
import { HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";
import Breadcrumb from '@/app/components/Breadcrumb';
import Link from 'next/link';
import ShopLeftSideBar from '@/app/components/ShopLeftSideBar'; 
import ShopControl from '@/app/components/ShopControl';

interface IShopList {
    productImage: ImageAsset | null,
    productTitle: string,
    productDesc: string,
    oldPrice: number,
    newPrice: number
}

const ShopList = async () => {
    const product = await client.fetch(`
        *[_type == 'shopList']{
            productImage,
            productTitle,
            productDesc,
            oldPrice,
            newPrice
        }
    `);
    
    return (
        <>
            <Breadcrumb title="Shop List" subtitle="Shop" />
            <ShopControl />
            <div className="mx-5 sm:mx-10 md:mx-20 lg:mx-40 mt-24">
                <div className="flex flex-col lg:flex-row gap-0">
                    {/* Left Sidebar */}
                    <div className="lg:w-1/4">
                        <ShopLeftSideBar />
                    </div>

                    {/* Shop List Content */}
                    <div className="lg:w-3/4 lg:mr-16">
                        {product.map((pdt: IShopList) => {
                            let imageUrl = "";
                            if (pdt.productImage) {
                                imageUrl = urlFor(pdt.productImage).url();
                            }
                            return (
                                <div key={pdt.productTitle} className="mb-6">
                                    <div className="w-full md:w-[1121px] h-full md:h-[254px] p-5 flex flex-wrap items-center gap-8">
                                        <Link href={`/list/${pdt.productTitle}/`}>
                                            <Image
                                                src={imageUrl}
                                                alt={pdt.productTitle}
                                                width={313.63}
                                                height={217.56}
                                            />
                                        </Link>
                                        <div>
                                            <div className="w-[230px] flex justify-between">
                                                <h1 className="text-[#111C85] text-[18px] leading-[23.29px] font-josefin font-bold">
                                                    {pdt.productTitle}
                                                </h1>
                                                <div className="flex gap-1 items-center">
                                                    <div className="w-[12.15px] h-[12.15px] bg-[#DE9034] rounded-full"></div>
                                                    <div className="w-[12.15px] h-[12.15px] bg-[#E60584] rounded-full"></div>
                                                    <div className="w-[12.15px] h-[12.15px] bg-[#5E37FF] rounded-full"></div>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 items-center mt-3">
                                                <span className="text-[#111C85] text-[15.46px] leading-[18.12px] font-josefin">
                                                    ${pdt.newPrice}.00
                                                </span>
                                                <span className="text-[#FF2AAA] text-[15.46px] leading-[18.12px] font-josefin line-through">
                                                    ${pdt.oldPrice}.00
                                                </span>
                                                <span>
                                                    <StarRating />
                                                </span>
                                            </div>
                                            <div className="w-full md:w-[591px]">
                                                <p className="text-[#9295AA] text-[16px] leading-[30.92px] font-normal font-lato">
                                                    {pdt.productDesc}
                                                </p>
                                            </div>
                                            <div className="flex gap-6 items-center mt-6">
                                                <button className="w-[34.23px] h-[34.23px] shadow-md shadow-gray-200 bg-white rounded-full bg-transparent p-1 flex justify-center items-center">
                                                    <BsCart2 size={21} color="#535399" />
                                                </button>
                                                <button className="w-[34.23px] h-[34.23px] shadow-md shadow-gray-200 bg-white rounded-full bg-transparent p-1 flex justify-center items-center">
                                                    <FaRegHeart size={21} color="#535399" />
                                                </button>
                                                <button className="w-[34.23px] h-[34.23px] shadow-md shadow-gray-200 bg-white rounded-full bg-transparent p-1 flex justify-center items-center">
                                                    <Link href={`/list/${pdt.productTitle}`}>
                                                        <HiOutlineMagnifyingGlassPlus size={21} color="#535399" />
                                                    </Link>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        <div className="mx-auto flex justify-center mb-20 mt-20">
                            <Image
                                src={'/companies.png'}
                                alt="Companies Logo"
                                width={904}
                                height={93}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopList;
