import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { PiGreaterThan } from "react-icons/pi";

const Collection = () => {

  const {product} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className='min-w-60'>
<p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>
<PiGreaterThan className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}/>

{/*category filters */}
    <div className={`border border-gray-300 pl-5 py-3 mt-6 $(showFilter ? '':'hidden')`}>
      <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
      <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
        <p className='flex gap-2'>
          <input className='w-3' type="checkbox" value={'Men'} />Men
        </p>
        <p className='flex gap-2'>
          <input className='w-3' type="checkbox" value={'Women'} />Women
        </p>
        <p className='flex gap-2'>
          <input className='w-3' type="checkbox" value={'Kid'} />Kids
        </p>
      </div>
    </div>
    {/*Subcategory Filter */}
    <div className={`border border-gray-300 pl-5 py-3 my-5 $(showFilter ? '':'hidden')`}>
      <p className='mb-3 text-sm font-medium'>TYPE</p>
      <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
        <p className='flex gap-2'>
          <input className='w-3' type="checkbox" value={'Sneakers'} />Sneakers
        </p>
        <p className='flex gap-2'>
          <input className='w-3' type="checkbox" value={'Boots'} />Boots
        </p>
        <p className='flex gap-2'>
          <input className='w-3' type="checkbox" value={'sports'} />Sports
        </p>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Collection