import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from './components/Breadcrumb';

export default function NotFound() {
  return (
    <>
    <Breadcrumb title="404 Not Found" subtitle="404 Not Found" />
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center w-[913px]">
        <Image
          className="mt-[-200px]"
          src={'/404.png'}
          alt="Not Found"
          width={580}
          height={600}
        />
        <h1 className="text-[#152970] font-bold mt-4">
          Oops! The page you requested was not found!
        </h1>
        <Button className='px-7 mt-8'><Link href={"/"}>Back To Home</Link></Button>
      </div>
    </div>
    </>
  );
}
