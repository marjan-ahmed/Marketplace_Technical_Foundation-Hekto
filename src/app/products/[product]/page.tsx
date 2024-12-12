import Image from 'next/image';
import { products } from '../page';
import Breadcrumb from '@/app/components/Breadcrumb';
import { ArrowRight, Facebook, Heart, Instagram, Twitter } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import StarRating from '@/app/components/StarRating';
import Link from 'next/link';

const totalProducts= Math.floor(Math.random() * (29 - 2 + 1)) + 2;


const ProductDetail = ({ params }: { params: { product: string } }) => {
  const id = params.product;
  console.log(id);

  
  const product = products.find((product) => product.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const randomProducts = products.slice(0, totalProducts); 
  const randomSelectedProducts = randomProducts.sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <div>
      <Breadcrumb title="Product Detail" subtitle="Product Detail" />
      
      <div className="flex justify-center items-center mt-20 mb-20">
        <div className="w-full max-w-[1170px] relative flex flex-col lg:flex-row gap-4 h-auto shadow-gray-200 shadow-lg p-4">
          
          <div className="flex flex-col justify-center gap-[16px] mx-auto lg:mx-0">
            
            <div className="lg:hidden w-full">
              <Carousel className="w-full max-w-xs">
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <img src={product.imageSrc} alt={`Product Image ${index + 1}`} className="w-full h-auto rounded-sm" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            
            <div className="hidden lg:flex flex-col justify-center gap-[16px] mx-auto lg:mx-0">
              <Image className="bg-gray-200 rounded-sm" src={product.imageSrc} alt="" width={151} height={155} />
              <Image className="bg-gray-200 rounded-sm" src={product.imageSrc} alt="" width={151} height={155} />
              <Image className="bg-gray-200 rounded-sm" src={product.imageSrc} alt="" width={151} height={155} />
            </div>
          </div>

          
          <div className="hidden sm:block py-[10px] mx-auto lg:mx-0">
            <Image className="bg-gray-200 w-full lg:w-[375px] h-auto lg:h-[487px] rounded-sm" src={product.imageSrc} alt="" width={375} height={487} />
          </div>

          
          <div className="p-8 py-16 lg:w-1/2">
            <h1 className="text-[36px] text-[#0D134E] font-josefin font-bold">
              {product.name}
            </h1>
            <StarRating />
            
            <div className="flex gap-8 flex-wrap mt-2">
              <p className="text-[16px] font-josefin text-[#151875]">$32.00</p>
              <p className="line-through text-pink text-[16px] font-josefin">$32.00</p>
            </div>

            <div className="mt-3">
              <h5 className="text-[16px] text-[#0D134E] font-josefin font-semibold">
                Color
              </h5>
              <p className="mt-2 w-full lg:w-[549px] h-[45px] font-josefin text-[16px] text-[#A9ACC6]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.
              </p>
            </div>

            <div className="flex gap-8 mt-8 items-center ml-[70px]">
              <div>
                <Link href={'/cart'}>
                <button className="text-[#151875] text-[16px] font-semibold font-josefin">
                  Add To Cart
                </button>
                </Link>
              </div>
              <div>
                <Heart size={16} color="#535399" />
              </div>
            </div>

            <div className="mt-4">
              <h1 className="text-[16px] mb-4 text-[#151875] font-josefin font-bold">
                Categories:
              </h1>
              <ul className="text-[16px] text-[#151875] font-josefin font-bold flex gap-4 flex-col">
                <li>Tags</li>
                <div className="flex gap-4 items-center">
                  <li>Share</li>
                  <div className="flex gap-2">
                    <div className="w-[16px] h-[16px] bg-[#151875] rounded-full flex items-center justify-center">
                      <Facebook size={12} color="white" />
                    </div>
                    <div className="w-[16px] h-[16px] bg-[#FB2E86] rounded-full flex items-center justify-center">
                      <Instagram size={12} color="white" />
                    </div>
                    <div className="w-[16px] h-[16px] bg-[#151875] rounded-full flex items-center justify-center">
                      <Twitter size={12} color="white" />
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      
      <div className='w-full h-auto sm:h-[649px] bg-pantonePurple mb-10'>
        <div className='px-6 sm:px-12 md:px-24 lg:px-44 py-24'>
          <ul className='text-[18px] sm:text-[20px] md:text-[24px] flex flex-wrap sm:flex-nowrap gap-6 sm:gap-10 md:gap-20 text-[#151875] font-josefin font-bold leading-[28.13px]'>
            <li className='underline'>Description</li>
            <li>Additional Info</li>
            <li>Reviews</li>
            <li>Video</li>
          </ul>

          <div className='mt-16'>
            <h1 className='text-[20px] sm:text-[22px] text-[#151875] font-semibold font-josefin'>
              Varius tempor.
            </h1>
            <div className='w-full sm:w-[1153px] h-auto mt-2'>
              <p className='text-[#A9ACC6] text-[14px] sm:text-[16px] font-josefin sm:leading-[29px]'>
                Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
              </p>
            </div>
          </div>

          <div className='mt-8'>
            <h1 className='text-[20px] sm:text-[22px] text-[#000000] font-semibold font-josefin'>
              More details
            </h1>
            <div className='flex flex-wrap flex-col gap-8 mt-4'>
              <ul>
                <li className='flex gap-2 mb-4'>
                  <ArrowRight size={24} />
                  <span className='text-[#A9ACC6] font-josefin text-[14px] sm:text-[16px]'>
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
                  </span>
                </li>
                <li className='flex gap-2 mb-4'>
                  <ArrowRight size={24} />
                  <span className='text-[#A9ACC6] font-josefin text-[14px] sm:text-[16px]'>
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
                  </span>
                </li>
                <li className='flex gap-2 mb-4'>
                  <ArrowRight size={24} />
                  <span className='text-[#A9ACC6] font-josefin text-[14px] sm:text-[16px]'>
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
                  </span>
                </li>
                <li className='flex gap-2 mb-4'>
                  <ArrowRight size={24} />
                  <span className='text-[#A9ACC6] font-josefin text-[14px] sm:text-[16px]'>
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      
      <div className="mx-4 sm:mx-16 md:mx-36 mt-36 mb-16">
  <h1 className="text-[36px] text-[#101750] font-bold font-josefin">Related Products</h1>
  <div className="mt-10 flex flex-wrap gap-6 justify-center sm:justify-between max-w-full">
    {randomSelectedProducts.map((product) => (
      <div key={product.id} className="w-full sm:w-[270px] lg:w-[270px] h-[410px] flex flex-col bg-white shadow-md">
        <div className="flex justify-center  w-full h-[340px] bg-slate-200">
          <Image
            src={product.imageSrc} 
            alt={product.name} 
            width={280}
            height={250}
          />
        </div>
        <div className="flex justify-between gap-5 p-4">
          <div className="w-full">
            <h5 className="text-[#151875] text-[16px] font-semibold font-josefin leading-[18.75px]">
              {product.name} 
            </h5>
            <h6 className="mt-2 text-[#151875] text-[13px] font-josefin leading-[15.23px]">
              ${product.price} 
            </h6>
          </div>

          
          <div>
            <StarRating /> 
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
        <div className='flex justify-center mt-16 mb-10'>
        <Image 
        src={'/companies.png'}
        alt='companies testimonials'
        width={904}
        height={93}/>
        </div>
</div> 

);
};

export default ProductDetail;
