import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function SeeMoreBtn({ href }: { href: string }) {
  return (
    <div className="flex justify-center items-center">
      <Link href={`/product/${href}`}>
        <Button className="p-5 font-lato font-semibold rounded-none w-full sm:w-[120%]">
          See More
        </Button>
      </Link>
    </div>
  );
}

export default SeeMoreBtn;
