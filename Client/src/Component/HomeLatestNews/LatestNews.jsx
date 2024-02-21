import React from 'react'
import { BsSuitDiamond } from "react-icons/bs";
export default function LatestNews() {
    return (
        <>
            <h2 className='flex justify-center text-yellow-700 text-2xl font-serif p-2'><BsSuitDiamond className='text-yellow-700 m-1 text-xl' />Latest News <BsSuitDiamond className='text-yellow-700 m-1 text-xl' /></h2>
            <div className=' grid gap-3 m-2 md:grid-cols-2 xl:mx-24'>
                <div className='rounded-xl border-2'>
                    <div className='flex flex-col items-end '>
                        <p className='bg-white text-xl font-mono rounded-s-lg p-0.5 mt-4 absolute '> 25 DEC 2024</p>
                        <img src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i_WvUKtV.2ns/v1/-1x-1.jpg" className='w-full' alt="" />
                    </div>
                    <div className='flex flex-col  items-center '>
                        <button className='text-white h-11 w-40 rounded-tl-xl rounded-br-xl border-0 mt-3 bg-orange-700 text-lg '>Happy Crismas</button>
                        <p className=' text-lg font-serif font-medium p-2 xl:w-2/3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil mollitia vero, corrupti autem a natus quae placeat laudantium at optio?</p>
                    </div>
                </div>

                <div className='grid sm:grid-cols-2'>
                    <div className=' border-2 rounded-s-xl'>
                        <div className='flex flex-col items-center pt-3'>
                            <button className='text-white h-11 w-40 rounded-tl-xl rounded-br-xl border-0 mt-3 bg-orange-700 text-lg '>Valentine Day</button>
                            <p className='text-lg font-serif font-medium pt-3 p-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil mollitia vero, corrupti autem a natus quae placeat laudantium at optio?</p>
                        </div>
                        <div className='w-full flex flex-col items-end '>
                            <p className='bg-white text-xl font-mono rounded-s-lg px-0.5 mt-4 absolute  '> 14 FEB 2024</p>
                            <img src="https://as1.ftcdn.net/v2/jpg/01/53/48/78/1000_F_153487844_K6BeLXyfCZWrAU3d038PsEf2m0mYMCzX.jpg" className='w-full ' alt="" />
                        </div>
                    </div>

                    <div className=' border-2 rounded-e-xl'>
                        <div className='w-full flex flex-col items-end '>
                            <p className='bg-white text-xl font-mono rounded-s-lg p-0.5 mt-4 absolute '> 25 DEC 2024</p>
                            <img src="https://image1.masterfile.com/getImage/NjEwOS0wNzYwMTIyNGVuLjAwMDAwMDAw=AEkXH5/6109-07601224en_Masterfile.jpg" className=' w-full ' alt="" />
                        </div>
                        <div className='flex flex-col items-center pt-3'>
                            <button className='text-white h-11 w-40 rounded-tl-xl rounded-br-xl border-0 mt-3 bg-orange-700 text-lg '>Happy Crismas</button>
                            <p className='text-lg font-serif font-medium pt-3 p-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil mollitia vero, corrupti autem a natus quae placeat laudantium at optio?</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
