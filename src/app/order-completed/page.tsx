import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function OrderCompleted() {
  return (
    <>
      <Breadcrumb title='Order Completed' subtitle='Order Completed'/>
      <div className='mx-34'>
        <div>
        <Image 
        src={'/clock.png'}
        alt='time image'
        width={94}
        height={94}/>
        </div>
      <div className="flex justify-center mt-[-11em] items-center min-h-screen">
        <div className="w-[625px] mx-auto h-auto flex justify-center text-center flex-col">
          <Image children='block'
            src={'/check.png'}
            alt='Order Success'
            width={65}
            height={65}
          />
          <h1 className="text-[36px] text-[#101750] font-extrabold leading-[42.19px] font-josefin mt-4">
            Your Order Is Completed!
          </h1>
          <p className="font-semibold font-lato text-[#8d92a7] text-[16px] mt-4">
            Thank you for your order! Your order is being processed and will be completed within 3-6
            hours. You will receive an email confirmation when your order is completed.
          </p>
          <Button className="w-[208px] block mx-auto h-[59px] font-lato font-semibold text-[16px] leading-[30px] rounded-sm mt-6">
            Continue Shopping
          </Button>
        </div>
      </div>
      </div>
    </>
  )
}

export default OrderCompleted
