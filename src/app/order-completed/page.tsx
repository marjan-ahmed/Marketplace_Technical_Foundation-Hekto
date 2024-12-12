import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function OrderCompleted() {
  return (
    <>
      <Breadcrumb title='Order Completed' subtitle='Order Completed'/>
      <div className='md:w-[1020] h-[526px] bg-red-100 mt-20 mb-20'>

      </div>
    </>
  )
}

export default OrderCompleted
