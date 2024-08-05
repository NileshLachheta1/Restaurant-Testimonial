import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineEmail, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home', route: "" },
    { id: 2, text: 'Menu', route: "menu" },
    { id: 3, text: 'About', route: "about" },
    { id: 4, text: 'Blog', route: "blog" },
    { id: 5, text: 'Contact', route: "contact" },
  ];

  return (
    <>
      <div className='w-full bg-black opacity-80 text-white fixed z-10  '>
        <ul className='grid sm:grid-cols-3 lg:mx-12 xl:mx-24 text-white bg-black opacity-90 px-3 '>
          <li className='p-2'><span className='text-yellow-400 m-1'>Opening Hour : </span><span>09:00am - 10:00pm</span></li>
          <li className='p-2 flex'><span><MdOutlineEmail className='text-yellow-400 text-xl m-1' /></span><span>info@gmail.com</span></li>
          <li className='p-2 flex'><span><MdLocationOn className='text-yellow-400 text-xl m-1' /></span><span>Khandwa Naka Ganesh Nagar</span></li>
        </ul>
        <div className='bg-white w-full h-px'></div>

        <div className=' bg-black opacity-90 flex items-center justify-between h-16 px-4 sm:px-12 text-white lg:mx-16'>
          {/* Logo */}
          <h1 className=' text-3xl font-bold text-white'>REACT.</h1>

          {/* Desktop Navigation */}
          <ul className='hidden md:flex xl:space-x-12 lg:space-x-6 md:space-x-0 mx-auto'>
            {navItems.map(item => (
              <li key={item.id} className='p-3  hover:text-white m-2 cursor-pointer duration-300'>
                <Link className='hover:border-b-[3px] bottom-4 transition-all transition-duration: 15ms; ' to={`/${item.route}`}>{item.text}</Link>
              </li>
            ))}
          </ul>
          <button className='text-white h-11 w-36 rounded-tl-xl  rounded-br-xl border-0 hidden md:block bg-yellow-600 text-lg font-serif'>Login</button>

          {/* Mobile Navigation Icon */}
          <div onClick={handleNav} className='block md:hidden '>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>

          {/* Mobile Navigation Menu */}
          <ul
            className={
              nav
                ? 'fixed md:hidden left-0 top-0 w-40 h-full border-r border-r-gray-900 bg-black opacity-95 ease-in-out duration-500 z-10'
                : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
            }
          >
            {/* Mobile Logo */}
            {/* <h1 className='w-full text-3xl font-bold text-white m-4 ps-8'>REACT.</h1> */}

            {/* Mobile Navigation Items */}
            {navItems.map(item => (
              <li key={item.id}
                className='p-4 border-b rounded-xl hover:bg-white duration-300 hover:text-black cursor-pointer border-gray-600'
              >
                {item.text}
              </li>
            ))}
            <button className='p-4 border-b w-40 text-start rounded-xl hover:bg-white duration-300 hover:text-black cursor-pointer border-gray-600 hover:text-black cursor-pointer'>Login</button>
          </ul>

        </div>
      </div>
    </>
  );
};

export default Navbar;