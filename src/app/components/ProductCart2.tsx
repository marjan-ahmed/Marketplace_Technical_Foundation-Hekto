'use client'
import Image from "next/image"
import { FaHeart, FaShoppingCart } from "react-icons/fa";

type ProductCart2Props = {
    bg?: string,
    src: string,
    alt: string,
    productName: string,
    width: number,
    height: number
}

function ProductCart2({ bg, src, alt, width, height, productName }: ProductCart2Props) {
  const handleAddToCart = () => {
    alert("Product Added")
  }
  return (
    <div>
        <div className='w-[270px] h-[363px] bg-white'>
            <div className='relative w-[270px] h-[280px] flex justify-center items-center overflow-hidden' style={{ backgroundColor: bg }}>
              <Image src={src} 
              alt={alt}
              width={width}
              height={height}
              className=""
              />
               <div 
    className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-50 transition-opacity z-20"
  >
    <div className="flex flex-col gap-2 my-14">
    <button className="bg-white rounded-full p-2 absolute right-3 top-3" onClick={handleAddToCart}><FaShoppingCart size={20} color={"black"}/></button>
    <button className="bg-white rounded-full p-2 absolute right-3 top-14"><FaHeart size={20} color="black"/></button>
  </div>
  </div>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center mt-2">
                <h1 className="text-[17.3px] text-[#151875] font-bold font-josefin">{productName}</h1>
                <div className="flex gap-[5px] w-[42px] h-[10px]">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#DE9034]"></div>
                    <div className="w-[10px] h-[10px] rounded-full bg-[#EC42A2]"></div>
                    <div className="w-[10px] h-[10px] rounded-full bg-[#8568FF]"></div>
                </div>
                <div className="w-[96px] text-[14px] h-[14px] flex gap-3 font-josefin">
                  <div className="w-[43px] h-[14px] text-[#151875]">$26.00</div>
                  <div className="w-[43px] h-[14px] line-through text-[#FB2E86] ">$42.00</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCart2;