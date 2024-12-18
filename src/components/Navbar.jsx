import React, { useState, useContext } from 'react';
import logo from '../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { IoMdPerson } from 'react-icons/io';
import { CiShoppingCart } from 'react-icons/ci';
import { IoMdMenu } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      {/* Logo */}
      <Link to="/">
        <img className="w-32" src={logo} alt="Logo" />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {['Home', 'Collection', 'About', 'Contact'].map((item) => (
          <NavLink
            key={item}
            to={`/${item.toLowerCase()}`}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 ${
                isActive ? 'text-black' : ''
              }`
            }
          >
            <p>{item}</p>
            <hr
              className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
                window.location.pathname.includes(item.toLowerCase())
                  ? ''
                  : 'hidden'
              }`}
            />
          </NavLink>
        ))}
      </ul>

      {/* Action Icons */}
      <div className="flex items-center gap-6">
        <CiSearch className="cursor-pointer" onClick={() => setShowSearch(true)} />
        {/* Profile Dropdown */}
        <div className="group relative">
          <IoMdPerson className="cursor-pointer" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 bg-slate-100 text-gray-500 border rounded-sm">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <CiShoppingCart />
          <p className="absolute right-[-5px] bottom-[-5px] w-3 text-center leading-3 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>

        {/* Hamburger Menu */}
        <IoMdMenu
          onClick={() => setVisible(true)}
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>

      {/* Sidebar Menu for Small Screens */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white z-50 transition-transform transform ${
          visible ? 'translate-x-0' : 'translate-x-full'
        } w-3/4 sm:w-1/3`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <IoIosArrowBack />
            <p>Back</p>
          </div>
          {['Home', 'Collection', 'About', 'Contact'].map((item) => (
            <NavLink
              key={item}
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to={`/${item.toLowerCase()}`}
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
