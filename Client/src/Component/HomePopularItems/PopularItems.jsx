import React from 'react'
import { FaStar } from "react-icons/fa6";
import { BsSuitDiamond } from "react-icons/bs";


export default function PopularItems() {
    return (
        <>
            <h2 className='flex justify-center text-yellow-700 text-2xl font-serif p-2'><BsSuitDiamond className='text-yellow-700 m-1 text-xl' />Our Pupular Item <BsSuitDiamond className='text-yellow-700 m-1 text-xl' /></h2>
            <div className=' m-2 grid sm:grid-cols-2 sm:space-x-4 md:grid-cols-3 xl:mx-24 xl:space-x-10'>
                <div >
                    <div className=' flex justify-center'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLKad5Dx9CcP57tQfMpW3Ppe22_TMhq3a-7DVYZcz4LqIptyKkhX_0GRDJCSqORiW70RU&usqp=CAU" className='w-2/3 h-48 rounded-lg' alt="" />
                    </div>
                    <div className='border-2 border-black mt-6 pt-32 text-center rounded-tl-3xl rounded-br-3xl relative bottom-32 -z-10'>
                        <div className='flex space-x-1 justify-center items-center'>
                            <FaStar className='text-orange-800 text-2xl ' />
                            <FaStar className='text-orange-800 text-2xl ' />
                            <FaStar className='text-orange-800 text-2xl ' />
                            <FaStar className='text-orange-800 text-2xl ' />
                            <FaStar className=' text-2xl text-gray-300' />
                            <p className='font-serif'>Review(54)</p>
                        </div>
                        <p className='font-serif text-3xl p-2'>Thai Soup</p>
                        <p className='text-xl font-serif p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, aperiam?</p>
                    </div>
                </div>

                <div >
                    <div className=' flex justify-center'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLKad5Dx9CcP57tQfMpW3Ppe22_TMhq3a-7DVYZcz4LqIptyKkhX_0GRDJCSqORiW70RU&usqp=CAU" className='w-2/3 h-48 rounded-lg' alt="" />
                    </div>
                    <div className='border-2 border-black mt-6 pt-32 text-center rounded-tl-3xl rounded-br-3xl relative bottom-32 -z-10'>
                        <div className='flex space-x-1 justify-center items-center'>
                            <FaStar className='text-orange-800 text-2xl ' />
                            <FaStar className='text-orange-800 text-2xl ' />
                            <FaStar className='text-orange-800 text-2xl ' />
                            <FaStar className='text-orange-800 text-2xl ' />
                            <FaStar className=' text-2xl text-gray-300' />
                            <p className='font-serif'>Review(54)</p>
                        </div>
                        <p className='font-serif text-3xl p-2'>Thai Soup</p>
                        <p className='text-xl font-serif p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, aperiam?</p>
                    </div>
                </div>

                <div >
                    <div className=' flex justify-center'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLKad5Dx9CcP57tQfMpW3Ppe22_TMhq3a-7DVYZcz4LqIptyKkhX_0GRDJCSqORiW70RU&usqp=CAU" className='w-2/3 h-48 rounded-lg' alt="" />
                    </div>
                    <div className='border-2 border-black mt-6 pt-32 text-center rounded-tl-3xl rounded-br-3xl relative bottom-32 -z-10'>
                        <div className='flex space-x-1 justify-center items-center'>
                            <FaStar className='text-orange-800 text-2xl ' />
                            <FaStar className='text-orange-800 text-2xl ' />
                            <FaStar className='text-orange-800 text-2xl ' />
                            <FaStar className='text-orange-800 text-2xl ' />
                            <FaStar className=' text-2xl text-gray-300' />
                            <p className='font-serif'>Review(54)</p>
                        </div>
                        <p className='font-serif text-3xl p-2'>Thai Soup</p>
                        <p className='text-xl font-serif p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, aperiam?</p>
                    </div>
                </div>



            </div>
        </>
    )
}
