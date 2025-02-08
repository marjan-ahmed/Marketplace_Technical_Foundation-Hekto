import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"

function Login() {
  return (
    <>
    <Breadcrumb category="my account" subcategory='login'/>

    <div className='mt-24 mb-16 flex justify-center items-center'>
       <Card className='w-[544px] h-[494px] sm:h-[474px] p-6 text-center'>
        <CardHeader>
        <CardTitle className='text-[32px] font-josefin font-bold leading-[37.5px]'>Login</CardTitle>
        <CardDescription className='leading-[20.4px] font-lato text-[17px] font-normal text-[#9096B2]'>Please login using account detail bellow.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col gap-7'>
          <Input placeholder='Email Address' type='email' className='font-lato text-[18px] sm:w-[432px] h-[52px]'/>
          <Input placeholder='Password' type='password' className='font-lato text-[18px] sm:w-[432px] h-[52px]'/>
          </div>
          <div className='flex items-start mt-4 flex-col'>
          <span className='font-lato text-[17px] text-[#9096B2] leading-[20.4px] font-normal'>Forgot your password?</span>
          <Button className="font-bold font-lato text-[17px] w-full h-[47px] sm:w-[432px] mt-6 leading-[20.4px]"
          onClick={() => signIn()}
          >Sign In</Button>
          </div>
          <CardFooter className='flex justify-center mt-5'>
            <p className='text-[17px] text-[#9096B2] font-lato font-bold'>Don’t have an Account?<Link href={'/auth/signup'}>Create account</Link></p>
          </CardFooter>
        </CardContent>
      </Card>
    </div>
    <div className='flex justify-center mb-20'>
    <Image 
      src={'/companies.png'}
      alt='Companies Logos'
      width={904}
      height={93}/>
    </div>
    </>
  )
}

export default Login