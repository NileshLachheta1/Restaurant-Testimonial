import React from 'react'
import { FaPlus ,FaMinus } from "react-icons/fa";
export default function CartItem() {
    return (
        <>
            <div className=' mt-3'>
                <div className='p-3 flex justify-center items-center border-y-2 space-x-4 border-black   bg-gray-100'>
                    <div className=''>
                        <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2023/09/chicken-fry-recipe.jpg" className='w-20 ' alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-center md:items-start sm:w-2/3 '>
                        <h1 className='font-normal text-base font-serif'>TOMMY'S MARGARITA</h1>
                     
                        <div className='flex space-x-4'>
                            <h2 className='text-xl font-bold text-orange-900'>$18.00</h2>
                           <div className='bg-white flex justify-center items-center'>
                                <span><FaMinus  /></span>
                                <span className='mx-3 border-x-2 border-black px-4'>0</span>
                                <span><FaPlus /></span>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
