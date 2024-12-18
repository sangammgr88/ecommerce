import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const SearchBar = () => {

const{search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
  return showSearch ?  (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 rounded-full w-3/4 sm:w-1/2 '>
         <input value={search} onChange={(e)=>setSearch(e.target.value)}className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search'  />
         <IoSearch className='w-4' />
         <RxCross2 onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer'/>

      </div>

    </div>
  ) : null
}

export default SearchBar