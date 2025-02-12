'use client';

import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { add, CartItem } from "@/redux/CartSlice";
import { ShoppingCart, Heart } from "lucide-react";
import { HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";
import { useDispatch } from "react-redux";
// import { useToast } from "@/components/ui/use-toast"; // Import useToast from ShadCN
import { useToast } from "@/hooks/use-toast";


type ProductHoveringEffectProps = {
  product: CartItem; // The product being passed to handle actions like add to cart
  onViewDetails?: () => void; // Action for viewing details of the product
};

const ProductHoveringEffect: React.FC<ProductHoveringEffectProps> = ({ product, onViewDetails }) => {
  const dispatch = useDispatch();
  const { toast } = useToast(); // Initialize toast

  const handleAddToCart = () => {
    dispatch(add(product)); // Add product to the cart using Redux dispatch
   toast({
    title: (
      "Product added to cart ✅" 
    ),
    className: "font-josefin",
  });
  };

  return (
    <div className="flex gap-[3px]">
      {/* Add to Cart Button */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div
              className="w-[40px] h-[40px] flex items-center justify-center text-[#1389FF] hover:bg-[#EEEFFB] rounded-full relative"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={20} />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to Cart</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* View Details Button */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div
              className="w-[40px] h-[40px] flex items-center justify-center text-[#1389FF] hover:bg-[#EEEFFB] rounded-full relative"
              onClick={onViewDetails}
            >
              <HiOutlineMagnifyingGlassPlus size={20} />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>View Details</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default ProductHoveringEffect;
