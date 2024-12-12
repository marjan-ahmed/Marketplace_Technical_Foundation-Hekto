import Image from 'next/image';
import Breadcrumb from '@/app/components/Breadcrumb';
import { Facebook, Heart, Instagram, Twitter } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import StarRating from '@/app/components/StarRating';
import Link from 'next/link';

const ProductDetail = ({ params }: { params: { product: string } }) => {
  const id = params.product;
  console.log(id);

  // Replace with actual product data
  const product = {
    id,
    name: 'Product Name',
    imageSrc: 'product-3.png',
    price: '$32.00'
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrumb title="Product Detail" subtitle="Product Detail" />
      
      <div className="flex justify-center items-center mt-20 mb-20">
        <div className="w-full max-w-[1170px] relative flex flex-col lg:flex-row gap-4 h-auto shadow-gray-200 shadow-lg p-4">
          
          <div className="flex flex-col justify-center gap-[16px] mx-auto lg:mx-0">
            
            <div className="lg:hidden w-full">
              <Carousel className="w-full max-w-xs">
                <CarouselContent>
                  {[...Array(4)].map((_, index) => (
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
              {[...Array(4)].map((_, index) => (
                <Image
                  key={index}
                  className="bg-gray-200 rounded-sm"
                  src={product.imageSrc}
                  alt={`Product Image ${index + 1}`}
                  width={151}
                  height={155}
                />
              ))}
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
              <p className="text-[16px] font-josefin text-[#151875]">${product.price}</p>
              <p className="line-through text-pink text-[16px] font-josefin">${product.price}</p>
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

      <div className="mx-4 sm:mx-16 md:mx-36 mt-36 mb-16">
        <h1 className="text-[36px] text-[#101750] font-bold font-josefin">Related Products</h1>
        <div className="mt-10 flex flex-wrap gap-6 justify-center sm:justify-between max-w-full">
          {/* Display related products here */}
        </div>
      </div>

      <div className='flex justify-center mt-16 mb-10'>
        <Image 
          src={'/companies.png'}
          alt='companies testimonials'
          width={904}
          height={93}
        />
      </div>
    </div> 
  );
};

export default ProductDetail;
