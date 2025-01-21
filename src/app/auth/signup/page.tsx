import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { FcGoogle } from "react-icons/fc";

function Signup() {
  return (
    <>
      <Breadcrumb category="my account" subcategory="create an account" />

      <div className="mt-24 mb-16 flex justify-center items-center">
        <Card className="w-[544px] h-auto sm:h-auto p-6 text-center">
          <CardHeader>
            <CardTitle className="text-[32px] font-josefin font-bold leading-[37.5px]">Sign Up</CardTitle>
            <CardDescription className="leading-[20.4px] font-lato text-[17px] font-normal text-[#9096B2]">
              Please fill in the details below to create your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-7">
              <Input
                placeholder="Full Name"
                type="text"
                className="font-lato text-[18px] sm:w-[432px] h-[52px]"
              />
              <Input
                placeholder="Email Address"
                type="email"
                className="font-lato text-[18px] sm:w-[432px] h-[52px]"
              />
              <Input
                placeholder="Password"
                type="password"
                className="font-lato text-[18px] sm:w-[432px] h-[52px]"
              />
              <Input
                placeholder="Confirm Password"
                type="password"
                className="font-lato text-[18px] sm:w-[432px] h-[52px]"
              />
            </div>
            <div className="flex items-start mt-4 flex-col">
              <Button className="font-bold font-lato text-[17px] w-full h-[47px] sm:w-[432px] mt-6 leading-[20.4px]">
                Sign Up
              </Button>
            </div>
            <div className="flex items-center justify-between mt-6">
              <hr className="border-gray-300 w-1/3" />
              <span className="text-[#9096B2] font-lato text-[16px] mx-2">OR</span>
              <hr className="border-gray-300 w-1/3" />
            </div>
            <div className="flex items-start mt-4 flex-col">
              <Button
                variant="outline"
                className="font-bold font-lato text-[17px] w-full h-[47px] sm:w-[432px] mt-6 leading-[20.4px] flex justify-center items-center"
              >
              <FcGoogle size={30} />
                Sign Up with Google
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center mt-5">
            <p className="text-[17px] text-[#9096B2] font-lato font-bold">
              Already have an account? <Link href={'/auth/login'}>Login</Link>
            </p>
          </CardFooter>
        </Card>
      </div>
      <div className="flex justify-center mb-20">
        <Image src={'/companies.png'} alt="Companies Logos" width={904} height={93} />
      </div>
    </>
  );
}

export default Signup;
