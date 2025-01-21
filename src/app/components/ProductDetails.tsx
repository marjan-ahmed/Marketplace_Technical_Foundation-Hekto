import React from 'react'
import Breadcrumb from '../components/Breadcrumb';
import Image from 'next/image';

interface Product {
    id: string;
    name: string;
    imageSrc: string;
    price: string;
    description: string;
  }
  
  interface ProductDetailProps {
    product: Product;
  }

  
function ProductDetail({product}: ProductDetailProps) {
  return (
    <div>
        <Breadcrumb subcategory='Product Detail'/>
        <div className='flex justify-center items-center mt-20 mb-20'>
            <div className='w-[1170px] h-[509px] bg-red-200'>
                <div>
                    <Image 
                    src={product.imageSrc}
                    alt={''}
                    width={151}
                    height={155}/>
                </div>
                <div>
                <Image 
                    src={product.imageSrc}
                    alt={''}
                    width={151}
                    height={155}/>
                </div>
                <div>
                <Image 
                    src={product.imageSrc}
                    alt={''}
                    width={151}
                    height={155}/>
                </div>
                <div>
                <Image 
                    src={product.imageSrc}
                    alt={''}
                    width={151}
                    height={155}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail;