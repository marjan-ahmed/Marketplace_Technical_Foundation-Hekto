import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

async function FAQ() {
  const faqData = await client.fetch(`
  *[_type == 'faq']{
    question,
    answer
  }
    `);
  console.log(faqData);
  return (
    <>
      <Breadcrumb title="FAQ" subtitle="Frequently Asked Questions" />
      <div className="my-24 sm:px-44 px-4 flex flex-col lg:flex-row overflow-x-hidden">
        {}
        <div className="w-full lg:w-1/2">
          <h1 className="text-[#1D3178] text-[30px] sm:text-[36px] font-extrabold font-josefin mb-6">
            General Information
          </h1>
          <div className="space-y-10">
            {faqData.map((faq: { question: string; answer: string }) => (
              <div key={faq.question} className="w-full lg:max-w-[499px]">
                <h2 className="text-[#1D3178] font-bold text-[17px] font-josefin">
                  {faq.question}
                </h2>
                <p className="text-[#A1ABCC] text-[16px] font-josefin mt-2">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Card className="space-y-6 mt-16 sm:mt-0 w-full sm:w-[566px] h-[738px] bg-[#F8F8FD] p-6 lg:w-1/2 mx-0 sm:mx-8 rounded-sm shadow-none">
          <CardHeader className="mt-10 mb-20">
            <CardTitle className="text-[24px] font-josefin text-[#1D3178] leading-[30px]">
              Ask a Question
            </CardTitle>
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
            <Button className="w-full sm:w-[156px] h-[48px] font-josefin sm:text-[16px] leading-[30px] rounded-sm">
              Send Mail
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="flex justify-center items-center mb-12 sm:mb-16">
        <Image
          src={"/companies.png"}
          alt="Companies Testimonials"
          width={1246}
          height={128}
        />
      </div>
    </>
  );
}

export default FAQ;
