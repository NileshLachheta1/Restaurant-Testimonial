import React from 'react'
import { FaPlus, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsSuitDiamond } from "react-icons/bs";

export default function ExpertChef() {
    return (
        <>
            <h2 className='flex justify-center text-yellow-700 text-2xl font-serif p-2'><BsSuitDiamond className='text-yellow-700 m-1 text-xl' />Our Experties Chef 's <BsSuitDiamond className='text-yellow-700 m-1 text-xl' /></h2>
            <div className='m-2 grid sm:grid-cols-2 sm:space-x-5 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-3 2xl:mx-24  '>
                <div className='flex flex-col items-end '>
                    <ul className='absolute space-y-3 text-2xl mt-3 me-4'>
                        <li><FaPlus className='text-gray-200 hover:text-orange-800' /></li>
                        <li><FaFacebookF className='text-gray-200 hover:text-orange-800' /></li>
                        <li><FaInstagram className='text-gray-200 hover:text-orange-800' /></li>
                        <li><FaTwitter className='text-gray-200 hover:text-orange-800' /></li>
                    </ul>
                    <img src="https://img.freepik.com/free-photo/portrait-smiling-chef-uniform_329181-675.jpg" className=' w-full h-[calc(100vh_-_300px)] 2xl:h-80 rounded-2xl' alt="" />
                    <div className='w-2/3 mx-auto relative bottom-5 bg-white flex flex-col items-center rounded-xl border-2   '>
                        <span className='text-xl font-serif'>Joshef Harry</span>
                        <span className='font-serif '>Senior Chef</span>
                    </div>
                </div>

                <div className='flex flex-col items-end '>
                    <ul className='absolute space-y-3 text-2xl mt-3 me-4'>
                        <li><FaPlus className='text-gray-200 hover:text-orange-800' /></li>
                        <li><FaFacebookF className='text-gray-200 hover:text-orange-800' /></li>
                        <li><FaInstagram className='text-gray-200 hover:text-orange-800' /></li>
                        <li><FaTwitter className='text-gray-200 hover:text-orange-800' /></li>
                    </ul>
                    <img src="https://img.freepik.com/free-photo/portrait-smiling-chef-uniform_329181-675.jpg" className=' w-full h-[calc(100vh_-_300px)] 2xl:h-80 rounded-2xl' alt="" />
                    <div className='w-2/3 mx-auto relative bottom-5 bg-white flex flex-col items-center rounded-xl border-2   '>
                        <span className='text-xl font-serif'>Joshef Harry</span>
                        <span className='font-serif '>Senior Chef</span>
                    </div>
                </div>

                <div className='flex flex-col items-end '>
                    <ul className='absolute space-y-3 text-2xl mt-3 me-4'>
                        <li><FaPlus className='text-gray-200 hover:text-orange-800' /></li>
                        <li><FaFacebookF className='text-gray-200 hover:text-orange-800' /></li>
                        <li><FaInstagram className='text-gray-200 hover:text-orange-800' /></li>
                        <li><FaTwitter className='text-gray-200 hover:text-orange-800' /></li>
                    </ul>
                    <img src="https://img.freepik.com/free-photo/portrait-smiling-chef-uniform_329181-675.jpg" className=' w-full h-[calc(100vh_-_300px)] 2xl:h-80 rounded-2xl' alt="" />
                    <div className='w-2/3 mx-auto relative bottom-5 bg-white flex flex-col items-center rounded-xl border-2   '>
                        <span className='text-xl font-serif'>Joshef Harry</span>
                        <span className='font-serif '>Senior Chef</span>
                    </div>
                </div>

                {/* <div className='flex flex-col items-end '>
                    <ul className='absolute space-y-3 text-2xl mt-3 me-4'>
                        <li><FaPlus className='text-gray-200 hover:text-orange-800' /></li>
                        <li><FaFacebookF className='text-gray-200 hover:text-orange-800' /></li>
                        <li><FaInstagram className='text-gray-200 hover:text-orange-800' /></li>
                        <li><FaTwitter className='text-gray-200 hover:text-orange-800' /></li>
                    </ul>
                    <img src="https://img.freepik.com/free-photo/portrait-smiling-chef-uniform_329181-675.jpg" className=' w-full h-[calc(100vh_-_300px)] 2xl:h-80 rounded-2xl' alt="" />
                    <div className='w-2/3 mx-auto relative bottom-5 bg-white flex flex-col items-center rounded-xl border-2   '>
                        <span className='text-xl font-serif'>Joshef Harry</span>
                        <span className='font-serif '>Senior Chef</span>
                    </div>
                </div> */}

            </div> 
        </>
    )
}
