"use client"
import React from 'react';
import { useDispatch } from 'react-redux';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import "react-toastify/ReactToastify.css";
import { add, CartItem } from '@/redux/CartSlice';


function Toastify({cart}:any) {
    
const dispatch = useDispatch()

const handleAdd = (product:CartItem)=>{
    dispatch(add(product))
}

    const notify = () => 
    toast.success('Product added Successfully!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  return (
    <>
    <div onClick={()=>handleAdd(cart)}>
    </div>
     <ToastContainer
     position="bottom-right"
     autoClose={5000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick={false}
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="light"
     transition={Bounce}
     />
     </>

  )
}

export default Toastify