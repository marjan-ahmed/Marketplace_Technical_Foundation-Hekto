import { Input } from "@/components/ui/input";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
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
  <div className="w-full h-[44px] bg-purple">
    <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4">
      <ul className="flex gap-4 text-white m-2">
        <li className="flex items-center gap-2">
          <Mail />
          mhhansanul@gmail.com
        </li>
        <li className="flex items-center gap-2">
          <PhoneCall />
          (12345)67890
        </li>
      </ul>
      <ul className="hidden md:flex gap-10 text-white mx-4">
        <li className="flex items-center">
          English <ChevronDown />
        </li>
        <li className="flex items-center">
          USD <ChevronDown />
        </li>
        <li className="flex items-center gap-1">
          Login <User />
        </li>
        <li className="sm:flex items-center gap-1 hidden">
          Wishlist <Heart />
        </li>
        <li className="flex items-center">
          <ShoppingCart />
        </li>
      </ul>
    </div>
  </div>;

  {
    /* Second Menu */
  }
  <div className="w-[1177] sm:px-[154px]">
    <div className="flex mx-1 sm:gap-32 justify-between">
      <ul>
        <li>
          <h1 className="font-bold text-[34px]">Hekto</h1>
        </li>
      </ul>
      <ul className="hidden sm:flex gap-12 py-3 text-[16px] font-normal">
      <li className="flex items-center gap-2">
      <Link href="/" className="flex items-center">
          Home <ChevronDown />
      </Link>
    </li>
        <li><Link href={'/pages'}>Pages</Link></li>
        <li><Link href={'/pages'}>Products</Link></li>
        <li><Link href={'/pages'}>Blog</Link></li>
        <li><Link href={'/pages'}>Shop</Link></li>
        <li><Link href={'/pages'}>Contact</Link></li>
      </ul>
      <div className="hidden sm:flex w-full max-w-sm relative items-center">
        <Input type="email" placeholder="Search" className="text-black" />
        <button
          type="submit"
          className="p-[8px] absolute right-0 bg-purple text-white"
        >
          <SearchIcon size={20} />
        </button>
      </div>
      <Sheet>
        <SheetTrigger className="block sm:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <ul className="flex flex-col gap-8 py-3 text-[16px] font-normal">
            <li className="flex">
              Home <ChevronDown />
            </li>
            <li>Pages</li>
            <li>Products</li>
            <li>Blog</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
          <div className="flex w-full max-w-sm relative items-center">
            <Input type="email" placeholder="Search" className="text-black" />
            <button
              type="submit"
              className="p-[8px] absolute right-0 bg-purple text-white"
            >
              <SearchIcon size={20} />
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  </div>;
  </>
    )
};

export default Header;
