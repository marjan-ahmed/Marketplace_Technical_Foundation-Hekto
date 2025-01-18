import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";

function SeeMoreBtn({href}:{href:string}) {
  return (
    <div>
        <Link href={`/product/${href}`}>
<Button className="w-[9vw] h-[3vw] font-lato font-bold">See More</Button>
</Link>
    </div>
  )
}

export default SeeMoreBtn