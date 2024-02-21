import React from 'react';
import  { FaCircleArrowRight } from "react-icons/fa6";
import shape from '../../assets/images/shape2.svg'
export default function HomeBanner() {
  return (
    <>
        <div className='bg-slate-400 h-screen w-full flex flex-col justify-center items-center '>
          <p className='text-7xl font-normal font-serif w-1/2'>Find Your Best Healthy & Tasty Food</p>
    <img src={shape} className='w-72 h-auto' alt="" />
          <p className='text-lg font-serif p-12'>It Is a Long established Fact that a render will be distracted by the redable content of the page</p>
          <button className='text-white h-11 w-52 rounded-tl-xl rounded-br-xl border-2 border-yellow-600 mt-3 bg-transparent text-lg flex justify-center items-center hover:bg-yellow-600 '> <FaCircleArrowRight className='mx-2' /> Happy Crismas</button>
        </div>
    </>
  );
}
