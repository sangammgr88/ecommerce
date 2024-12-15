import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { IoMdPerson } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";



const Navbar = () => {

  const [visible,setVisible] =useState(false)
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
    <Link to='/'><img className='w-32' src={logo} alt="" /></Link> 
    <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

     <NavLink to='/' className='flex flex-col items-center gap-1'>
      <p>Home</p>
      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
     </NavLink>
     <NavLink to='/collection' className='flex flex-col items-center gap-1'>
      <p>Collection</p>
      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
     </NavLink>
     <NavLink to='/About' className='flex flex-col items-center gap-1'>
      <p>About</p>
      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
     </NavLink>
     <NavLink to='/Contact' className='flex flex-col items-center gap-1'>
      <p>Contact</p>
      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
     </NavLink>
    </ul>

    <div className='flex items-center gap-6'>
    <CiSearch />
    <div className='group relative'>
    <IoMdPerson className='cursor-pointer'/>
    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
       <div className='flex flex-col gap-2 w-36 py-3 bg-slate-100 text-gray-500 border rounded-sm'>
      <p className='cursor-pointer hover:text-black'>My Profile</p>
      <p className='cursor-pointer hover:text-black'>Orders</p>
      <p className='cursor-pointer hover:text-black'>Logout</p>
       </div>
    </div>
    </div>
    <Link to='/cart' className='relative'>
    <CiShoppingCart/>
     <p className='absolute right-[-5px] bottom-[-5px] w-3 text-center leading-3 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
    </Link>
    <IoMdMenu onClick={()=>setVisible(true)} className='w-5 cursor-pointer sm:hidden' />
    </div>
    {/* sidebarmenu for small screens */}
    <div
  className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
    visible ? 'w-full' : 'w-0'
  }`}
>
  <div className="flex flex-col text-gray-600">
    <div
      onClick={() => setVisible(false)}
      className="flex items- center gap-4 p-3 cursor-pointer" >
      <IoIosArrowBack />
      <p>Back</p>
    </div>
    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>Home</NavLink>
    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>Collection</NavLink>
    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>About</NavLink>
    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>Contact</NavLink>
  </div>
</div>

    </div>
  )
} 

export default Navbar