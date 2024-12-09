import Image from "next/image"

type ProductCart2Props = {
    bg?: string,
    src: string,
    alt: string,
    productName: string,
    width: number,
    height: number
}

function ProductCart2({ bg, src, alt, width, height, productName }: ProductCart2Props) {
  return (
    <div>
        <div className='w-[270px] h-[363px] bg-white'>
            <div className='w-[270px] h-[280px] flex justify-center items-center' style={{ backgroundColor: bg }}>
              <Image src={src} 
              alt={alt}
              width={width}
              height={height}/>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center mt-2">
                <h1 className="text-[17.3px] text-[#151875] font-bold">{productName}</h1>
                <div className="flex gap-[5px] w-[42px] h-[10px]">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#DE9034]"></div>
                    <div className="w-[10px] h-[10px] rounded-full bg-[#EC42A2]"></div>
                    <div className="w-[10px] h-[10px] rounded-full bg-[#8568FF]"></div>
                </div>
                <div className="w-[96px] text-[14px] h-[14px] flex gap-3">
                  <div className="w-[43px] h-[14px] text-[#151875]">$26.00</div>
                  <div className="w-[43px] h-[14px] line-through text-[#FB2E86] ">$42.00</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCart2;