import React from 'react'
import { TbExchange } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoCall } from "react-icons/io5";

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around  gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-gray-700'>
       
       <div>
       <TbExchange className='w-12 h-6 m-auto mb-5' />
          <p className='font-semibold'>Easy Exchange Policy</p>
          <p className='text-gray-400'>We Offer hassle free exchange policy</p>
       </div>
       <div>
       <CiDeliveryTruck  className='w-16 h-6 m-auto mb-5' />
          <p className='font-semibold'>7 days free return policy</p>
          <p className='text-gray-400'>we provide 7 days free return policy</p>
       </div>
       <div>
       <IoCall className='w-12 h-6 m-auto mb-5' />
          <p className='font-semibold'>Best Customer Support</p>
          <p className='text-gray-400'>we provide 24/7 customer support</p>
       </div>
    </div>
  )
}

export default OurPolicy