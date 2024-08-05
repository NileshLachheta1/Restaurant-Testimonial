import React from 'react'
import { FaPhoneAlt,FaEnvelopeOpenText,FaMapMarkedAlt  } from "react-icons/fa";

export default function ContactAddress() {
  return (
    <>
      <div className='p-5 space-y-4 grid sm:grid-cols-3 sm:space-y-0 sm:space-x-2 xl:mx-24 xl:space-x-4'>
    
        <div className='flex flex-col justify-center items-center border-2 border-black p-8'>
            <FaMapMarkedAlt className='text-orange-800 text-8xl p-3' />   
            <p className='font-serif sm:text-xl text-2xl xl:text-3xl'>Email Address</p>
            <p className='text-center font-sans font-semibold sm:text-lg text-xl'>55 Main Street, 2nd Block,</p>
            <p className='text-center font-sans font-semibold sm:text-lg text-xl'> 3rd Floor New York</p>
           <div class="w-44 h-1 m-5 bg-orange-900" ></div>
            <div className='py-1'>
                <p className='text-center font-sans font-semibold sm:text-lg text-xl '>55 Main Street, 2nd Block,</p>
                <p className='text-center font-sans font-semibold sm:text-lg text-xl'> 3rd Floor New York</p>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center border-2 border-black p-5'>
            <FaEnvelopeOpenText className='text-orange-800 text-8xl p-3' />
            <p className='font-serif sm:text-xl text-2xl xl:text-3xl'>Email Address</p>
            <p className='text-center font-sans font-semibold sm:text-lg text-xl'>55 Main Street, 2nd Block,</p>
            <p className='text-center font-sans font-semibold sm:text-lg text-xl'> 3rd Floor New York</p>
           <div class="w-44 h-1 m-5 bg-orange-900" ></div>
            <div className='py-1'>
                <p className='text-center font-sans font-semibold sm:text-lg text-xl '>55 Main Street, 2nd Block,</p>
                <p className='text-center font-sans font-semibold sm:text-lg text-xl'> 3rd Floor New York</p>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center border-2 border-black p-5'>
            <FaPhoneAlt className='text-orange-800 text-8xl p-3' />
            <p className='font-serif sm:text-xl text-2xl xl:text-3xl'>Phone Number</p>
            <p className='text-center font-sans font-semibold sm:text-lg text-xl'>55 Main Street, 2nd Block,</p>
            <p className='text-center font-sans font-semibold sm:text-lg text-xl'> 3rd Floor New York</p>
           <div class="w-44 h-1 m-5 bg-orange-900" ></div>
            <div className='py-1 '>
                <p className='text-center font-sans font-semibold  sm:text-lg text-xl '>55 Main Street, 2nd Block,</p>
                <p className='text-center font-sans font-semibold  sm:text-lg text-xl'> 3rd Floor New York</p>
            </div>
        </div>
        {/* <div className='flex flex-col justify-center items-center'>
            <FaEnvelopeOpenText className='text-orange-800 text-8xl' />
        </div>
        <div className='flex flex-col justify-center items-center'>
            <FaPhoneAlt className='text-orange-800 text-8xl' />
        </div> */}
      </div>
    </>
  )
}
