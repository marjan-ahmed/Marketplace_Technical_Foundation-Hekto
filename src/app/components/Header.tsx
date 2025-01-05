import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  ChevronDown,
  Heart,
  Mail,
  Menu,
  PhoneCall,
  SearchIcon,
  ShoppingCart,
  User,
} from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="w-full h-[44px] bg-purple">
        <div className="flex w-full max-w-screen-xl justify-between sm:py-1 items-center mx-auto px-4">
          <ul className="flex items-center gap-4 font-josefin text-white m-2">
            <li className="flex sm:text-[16px] text-[12px] font-josefin items-center gap-2">
              <Mail size={20} />
              mhhansanul@gmail.com
            </li>
            <li className="flex sm:text-[16px] text-[12px] items-center gap-2">
              <PhoneCall size={20} />
              (12345)67890
            </li>
          </ul>
          <ul className="hidden font-josefin sm:text-[16px] md:flex gap-10 text-white mx-4">
            <li className="flex items-center">
              English <ChevronDown size={20} />
            </li>
            <li className="flex items-center">
              USD <ChevronDown size={20} />
            </li>
            <li className="flex items-center gap-1">
              <Link href={'/login'} className="flex gap-1">
              Login <User size={20} />
              </Link>
            </li>
            <li className="sm:flex items-center gap-1 hidden relative">
              Wishlist <Heart size={20} />
            </li>
            <li className="flex items-center">
              <Link href={'/cart'}>
              <ShoppingCart size={20} />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full px-2 sm:px-[135px] flex justify-center py-6">
        <div className="w-full max-w-screen-xl h-[40px] bg-white flex flex-row p-2 sm:p-6 sm:py-1 sm:gap-32 justify-between items-center">
          <ul>
            <li>
              <h1 className="font-bold text-[30px] sm:text-[34px] font-josefin"><Link href={'/'}>Hekto</Link></h1>
            </li>
          </ul>

          {/* Desktop Navigation Links */}
          <ul className="font-lato hidden sm:flex gap-6 sm:gap-10 py-4 sm:py-8 text-[14px] sm:text-[16px] font-normal">
            <li className="flex items-center gap-2">
              <Link href="/" className="flex items-center">
                Home <ChevronDown size={20} />
              </Link>
            </li>
            <li>
              <Link href="/pages">Pages</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/shop/grid">Shop</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          {/* Desktop Search Input */}
          <div className="hidden sm:flex w-full max-w-sm relative items-center">
            <Input type="email" placeholder="Search" className="text-black" />
            <button
              type="submit"
              className="p-[8px] absolute right-0 bg-purple text-white"
            >
              <SearchIcon size={20} />
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <Sheet>
            <SheetTrigger className="block sm:hidden">
              <Menu />
            </SheetTrigger>
            <SheetContent className="w-full max-w-xs">
              <ul className="flex flex-col gap-6 py-3 text-[16px] font-normal">
                <li className="flex">
                  Home <ChevronDown />
                </li>
                <li>
                  <Link href="/pages">Pages</Link>
                </li>
                <li>
                  <Link href="/products">Products</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/shop/grid">Shop</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
              <Link href={'/login'}>Login</Link>
                </li>
              </ul>

              {/* Mobile Search Input */}
              <div className="flex w-full max-w-sm relative items-center">
                <Input type="email" placeholder="Search" className="text-black w-full font-josefin" />
                <button
                  type="submit"
                  className="p-[8px] absolute right-0 bg-purple text-white font-josefin"
                >
                  <SearchIcon size={20} />
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default Header;