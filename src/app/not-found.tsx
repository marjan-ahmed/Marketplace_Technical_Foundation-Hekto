import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from './components/Breadcrumb';

export default function NotFound() {
  return (
    <>
      <Breadcrumb title="404 Not Found" subtitle="404 Not Found" />
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        {/* Main Content */}
        <div className="flex flex-col mt-8 items-center justify-center w-full max-w-2xl">
          <Image
            className="mt-[-150px] sm:mt-[-100px]"
            src={'/404.png'}
            alt="Not Found"
            width={580}
            height={600}
          />
          <h1 className="text-[#152970] text-[20px] sm:text-[24px] leading-[28px] font-josefin font-bold mt-4 text-center">
            Oops! The page you requested was not found!
          </h1>
          <Button className="w-full sm:w-[165px] h-[44px] rounded-[3px] text-[16px] leading-[25.6px] font-josefin mt-6">
            <Link href="/">Back To Home</Link>
          </Button>
        </div>

        {/* Footer Logos */}
        <div className="w-full px-4 flex justify-center mt-32">
          <Image
            src={'/companies.png'}
            alt="Companies Logo"
            width={1246}
            height={128}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </>
  );
}
