import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-700'>
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
          </div>
          <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
          <div className='flex item-center gap-2'>
            <p className='font-semibold text-sm md:text-base'>Shop Now</p>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141] mt-3'></p>
          </div>
        </div>
      </div>
      <img className='w-full h-auto sm:w-1/2' src="https://i.pinimg.com/736x/11/0b/ef/110bef01c7dafdd14e7b5c13281ee23c.jpg" alt="" />
    </div>
  )
}

export default Hero