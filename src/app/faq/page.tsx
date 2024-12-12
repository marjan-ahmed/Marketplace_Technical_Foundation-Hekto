import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

function FAQ() {
  return (
    <>
      <Breadcrumb title="FAQ" subtitle="Frequently Asked Questions" />
      <div className="my-24 sm:px-44 px-4 flex flex-col lg:flex-row gap-12 overflow-x-hidden">
        {/* Left Side - General Information */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-[#1D3178] text-[30px] sm:text-[36px] font-extrabold font-josefin mb-6">General Information</h1>
          <div className="space-y-6">
            {faqData.map((item, index) => (
              <div key={index} className="w-full lg:w-[499px]">
                <h2 className="text-[#1D3178] mt-5 font-bold text-[17px] font-josefin">{item.question}</h2>
                <p className="text-[#A1ABCC] mb-16 text-[16px] font-josefin w-full lg:w-[499px] h-[45px]">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Ask a Question Form */}
        <Card className="space-y-6 w-full sm:w-[566px] h-[738px] bg-[#F8F8FD] p-6 lg:w-1/2 mx-0 sm:mx-8 rounded-sm shadow-none">
          <CardHeader className="mt-10 mb-20">
            <CardTitle className="text-[24px] font-josefin text-[#1D3178] leading-[30px]">Ask a Question</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-10">
            <Input
              required
              className="w-full h-[50px] bg-[#FFFFFF] shadow-none border-[#CDCEDC] border-1 placeholder-[#8990B1] text-[#8990B1] font-lato font-semibold text-[16px] leading-[30px]"
              type="text"
              placeholder="Your Name* "
            />
            <Input
              required
              className="w-full h-[50px] bg-[#FFFFFF] shadow-none border-[#CDCEDC] border-1 placeholder-[#8990B1] text-[#8990B1] font-lato font-semibold text-[16px] leading-[30px]"
              type="text"
              placeholder="Subject* "
            />
            <Textarea
              required
              className="w-full h-[197px] bg-[#FFFFFF] shadow-none border-[#CDCEDC] border-1 placeholder-[#8990B1] text-[#8990B1] font-lato font-semibold text-[16px] leading-[30px]"
              placeholder="Type Your Message* "
            />
          </CardContent>
          <CardFooter>
            <Button className="w-full sm:w-[156px] h-[48px] font-josefin sm:text-[16px] leading-[30px] rounded-sm">Send Mail</Button>
          </CardFooter>
        </Card>
      </div>
      <div className='flex justify-center items-center mb-12 sm:mb-16'>
        <Image 
        src={'/companies.png'}
        alt='Companies Testimonials'
        width={1246}
        height={128}
        />
      </div>
    </>
  );
}

const faqData = [
  {
    question: 'Eu dictumst cum at sed euismood condimentum?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.'
  },
  {
    question: 'Magna bibendum est fermentum eros.',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.'
  },
  {
    question: 'Odio muskana hak eris conseekin sceleton?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.'
  },
  {
    question: 'Elit id blandit sabara boi velit gua mara?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.'
  }
];

export default FAQ;
