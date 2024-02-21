import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { BsSuitDiamond } from "react-icons/bs";

export default function Introduction() {
    return (
        <>
            <h2 className='flex justify-center text-yellow-700 text-2xl font-serif p-2'><BsSuitDiamond className='text-yellow-700 m-1 text-xl' />Introduction<BsSuitDiamond className='text-yellow-700 m-1 text-xl' /></h2>
            <div className=' grid sm:grid-cols-2 lg:grid-cols-2 xl:mx-24'>
                <div className=''>
                    <div className='lg:pe-24'>
                        <img src="https://as1.ftcdn.net/v2/jpg/03/57/89/06/1000_F_357890671_RACOSXE9vqq46UYeb0xhceZQ4HDdbkMs.jpg" className='w-full h-auto xl:w-11/12' alt="" />
                    </div>
                    <div className='relative bottom-10 right-2 flex justify-end lg:bottom-20 lg:p-5 xl:bottom-28'>
                        <img src="https://www.escoffier.edu/wp-content/uploads/2022/03/Chef-in-uniform-posing-for-a-photo-in-a-kitchen-1400.jpg"  className='w-10/12 xl:w-2/3'  alt="" />
                    </div>
                </div>
                <div className=' text-justify px-2 xl:px-10'>
                    <p className='font-serif text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis at optio, quisquam minima cumque laborum numquam officia odit autem nam non molestiae minus, ea itaque voluptate officiis deserunt nemo iusto veritatis? Magni rem nesciunt quod repudiandae laboriosam. Libero architecto, harum suscipit id nihil dolores consequuntur sapiente deleniti dicta facilis ratione.  </p>
                    <ul className='font-serif mt-2'>
                        <li className='flex'><span><FaCheckCircle className='text-orange-900 m-1'/></span><span>Delicious Food</span></li>
                        <li className='flex'><span><FaCheckCircle className='text-orange-900 m-1'/></span><span>Cost Effective</span></li>
                        <li className='flex'><span><FaCheckCircle className='text-orange-900 m-1'/></span><span>Delicious Food</span></li>
                    </ul>
                    <p className='font-bold mt-12 text-lg'>Our Achievement : </p>
                    <div className='flex mt-5'>
                        <div className='group'>
                            <img src="https://cdn-icons-png.flaticon.com/128/3112/3112946.png" className='h-10 mx-2' alt="" />
                            <p className='font-serif text-lg border-2 px-3 hidden group-hover:block '>National Award</p>
                        </div>
                        <div className='group'>
                            <img src="https://cdn-icons-png.flaticon.com/128/3112/3112946.png" className='h-10 mx-2' alt="" />
                            <p className='font-serif text-lg border-2 px-3 hidden group-hover:block'>National Award</p>
                        </div>
                        <div className='group'>
                            <img src="https://cdn-icons-png.flaticon.com/128/3112/3112946.png" className='h-10 mx-2' alt="" />
                            <p className='font-serif text-lg border-2 px-3 hidden group-hover:block     '>National Award</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
