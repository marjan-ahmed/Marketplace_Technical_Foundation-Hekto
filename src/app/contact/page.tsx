import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

function Contact() {
  return (
    <>
      <Breadcrumb title='Contact Us' subtitle='Contact Us' />
      <div className="mt-10 sm:mt-20 md:mt-28 mb-20 flex mx-5 sm:mx-36 gap-36 sm:flex-nowrap flex-wrap">
        <div className="w-full sm:w-[550px] h-[49px] mb-14">
          <h1 className="font-josefin text-[30px] sm:text-[36px] text-[#151875] leading-[48px] font-bold">Information About us</h1>
          <p className="text-[#8A8FB9] text-[16px] font-lato leading-[25.6px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
          </p>
          <div className="w-full sm:w-[103px] h-[25px] flex flex-wrap gap-3 mt-12">
            <div className="w-[25px] h-[25px] rounded-full bg-[#5625DF]"></div>
            <div className="w-[25px] h-[25px] rounded-full bg-[#FF27B7]"></div>
            <div className="w-[25px] h-[25px] rounded-full bg-[#37DAF3]"></div>
          </div>
        </div>

        <div className="w-full sm:w-[650px] mt-28 sm:mt-0">
          <h1 className="font-josefin text-[30px] sm:text-[36px] mb-8 text-[#151875] leading-[48px] font-bold">Contact Way</h1>
          <div className='w-full sm:w-[489px] h-auto'>
            {/* Contact Items (Responsive Grid) */}
            <div className="flex flex-wrap gap-6 sm:gap-12">
              {/* First Contact Item */}
              <div className="flex items-center gap-3 w-full sm:w-1/2">
                <div className="w-[45px] h-[45px] bg-[#5726DF] rounded-full"></div>
                <div className="w-[172px]">
                  <h5 className="font-lato font-medium text-[16px] text-[#8A8FB9] leading-[25.6px]">Tel: 877-67-88-99</h5>
                  <h5 className="font-lato font-medium text-[16px] text-[#8A8FB9] leading-[25.6px]">E-Mail: shop@store.com</h5>
                </div>
              </div>
              
              {/* Second Contact Item */}
              <div className="flex items-center gap-3 w-full sm:w-1/2">
                <div className="w-[45px] h-[45px] bg-[#FB2E86] rounded-full"></div>
                <div className="w-[172px]">
                  <h5 className="font-lato font-medium text-[16px] text-[#8A8FB9] leading-[25.6px]">Tel: 877-67-88-99</h5>
                  <h5 className="font-lato font-medium text-[16px] text-[#8A8FB9] leading-[25.6px]">E-Mail: shop@store.com</h5>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 sm:gap-12 mt-8">
              {/* Third Contact Item */}
              <div className="flex items-center gap-3 w-full sm:w-1/2">
                <div className="w-[45px] h-[45px] bg-[#FFB265] rounded-full"></div>
                <div className="w-[172px]">
                  <h5 className="font-lato font-medium text-[16px] text-[#8A8FB9] leading-[25.6px]">Tel: 877-67-88-99</h5>
                  <h5 className="font-lato font-medium text-[16px] text-[#8A8FB9] leading-[25.6px]">E-Mail: shop@store.com</h5>
                </div>
              </div>

              {/* Fourth Contact Item */}
              <div className="flex items-center gap-3 w-full sm:w-1/2">
                <div className="w-[45px] h-[45px] bg-[#1BE982] rounded-full"></div>
                <div className="w-[172px]">
                  <h5 className="font-lato font-medium text-[16px] text-[#8A8FB9] leading-[25.6px]">Tel: 877-67-88-99</h5>
                  <h5 className="font-lato font-medium text-[16px] text-[#8A8FB9] leading-[25.6px]">E-Mail: shop@store.com</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mx-4 mb-16 sm:mx-36 flex-wrap md:flex-nowrap justify-between gap-3">
        <div className="w-full md:w-1/2">
          <div className="sm:w-[550px] w-full">
            <h1 className="text-[36px] text-[#151875] font-josefin leading-[48px] font-bold">Get In Touch</h1>
            <p className="font-lato text-[16px] text-[#8A8FB9] font-semibold leading-[25.6px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
            </p>
          </div>

          <div className="sm:w-[534px] sm:h-[414px] mt-10 w-full">
            <div className="flex justify-between">
              <Input placeholder="Your Name*" className="sm:w-[255px] w-full h-[45px] border-[#A4B6C8B2] border-2 font-lato font-medium text-[16px] tracking-[1%] leading-[19.2px]" />
              <Input placeholder="Your E-Mail*" className="sm:w-[255px] w-full h-[45px] border-[#A4B6C8B2] border-2 font-lato font-medium text-[16px] tracking-[1%] leading-[19.2px]" />
            </div>

            <div className="mt-8 flex flex-col gap-12">
              <Input placeholder="Subject*" className="h-[45px] border-[#A4B6C8B2] border-2 font-lato font-medium text-[16px] tracking-[1%] leading-[19.2px]" />
              <Textarea placeholder="Type Your Message*" className="h-[166px] border-[#A4B6C8B2] border-2 font-lato font-medium text-[16px] tracking-[1%] leading-[19.2px]" />
            </div>

            <Button className="mt-8 w-full md:w-[157px] h-[44px] bg-[#FB2E86] text-[16px] font-josefin leading-[25.6px] text-white">
              Send Mail
            </Button>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <Image src="/contact_page_pic.png" alt="Contact Page" width={723} height={692} />
        </div>
      </div>
    </>
  )
}

export default Contact;
