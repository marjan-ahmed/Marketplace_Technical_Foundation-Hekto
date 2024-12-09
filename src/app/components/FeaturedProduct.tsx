import Image from 'next/image'

type TSrc = {
    src: string;
    width: number;
    height: number;
}

function FeaturedProduct({src, width, height}: TSrc) {
  return (
    <div className='w-[360px] h-[306px] bg-white'>
        <div className='w-[full] h-[269.96px] bg-[#F7F7F7] flex justify-center items-center'>
            <Image 
            src={`${src}`}
            alt='Product image'
            width={width}
            height={height}/>
        </div>
        <div className='flex gap-3 justify-between mt-2 font-josefin'>
        <h1 className='text-[#151875] text-[16px] border-b-2 border-[#EEEFFB] font-medium'>Comfort Handy Craft</h1>
        <div className='flex flex-row gap-2'>
        <p className='text-[14px] text-[#151875]'>$42.00</p>
        <p className='text-[12px] text-[#FB2448] mt-[2px] line-through'>$65.00</p>
        </div>
    </div>
    </div>
  )
}

export default FeaturedProduct