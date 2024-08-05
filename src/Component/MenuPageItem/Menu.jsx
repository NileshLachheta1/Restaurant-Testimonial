import React from 'react'
import { BsSuitDiamond } from "react-icons/bs";

export default function Menu() {
    return (
        <>
            <h2 className='flex justify-center text-yellow-700 text-2xl font-serif p-5'><BsSuitDiamond className='text-yellow-700 m-1 text-xl' />Special Selection <BsSuitDiamond className='text-yellow-700 m-1 text-xl' /></h2>
            <hr />
            <ul className='flex sm:justify-center  md:space-x-4 lg:space-x-6 xl:space-x-20'>
                <li className='font-serif'>MORNING</li>
                <li><BsSuitDiamond className='text-yellow-700 m-1' /></li>
                <li className='font-serif'>WEEKDAY LUNCH</li>
                <li><BsSuitDiamond className='text-yellow-700 m-1' /></li>
                <li className='font-serif'>DINNER</li>
                {/* <li><`BsSuitDiamond className='text-yellow-700 m-1' /></li> */}
                {/* <li className='font-serif'>WINES</li> */}
            </ul>
            <hr />
            <div className='m-5 grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-1 lg:grid-cols-2 xl:mx-24'>
                <div className='flex flex-col md:flex-row justify-center items-center space-y-8 p-8  border-2 rounded-xl  bg-orange-50'>
                    <div className=''>
                        <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2023/09/chicken-fry-recipe.jpg" className='w-full h-44 rounded-2xl' alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-center md:items-start sm:w-2/3 mx-5'>
                        <h1 className='font-normal text-xl font-serif'>TOMMY'S MARGARITA</h1>
                        <p className='font-serif text-lg'>Tomatoes Beef, Eggs, Poaches Beef, Eggs, Poaches, With Bacon, Bacon,Chorizo,Roasted Roma.</p>
                        <div className='flex space-x-5'>
                            <h2 className='text-3xl p-2 font-bold text-orange-900'>$18.00</h2>
                            <button type="button" className="text-white bg-orange-700 hover:bg-orange-800 focus:outline-none focus:ring-1 focus:ring-red-300  rounded-full text-sm px-10 mt-2 text-center me-2 mb-2 dark:bg-orange-900 dark:hover:bg-orange-850 dark:focus:ring-red-900">ADD</button>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-center items-center space-y-8 p-8  border-2 rounded-xl  bg-orange-50'>
                    <div className=''>
                        <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2023/09/chicken-fry-recipe.jpg" className='w-full h-44 rounded-2xl' alt="" />
                    </div>
                    <div className='flex  flex-col justify-center items-center md:items-start sm:w-2/3 mx-5'>
                        <h1 className='font-normal text-xl font-serif'>TOMMY'S MARGARITA</h1>
                        <p className='font-serif text-lg'>Tomatoes Beef, Eggs, Poaches Beef, Eggs, Poaches, With Bacon, Bacon,Chorizo,Roasted Roma.</p>
                        <div className='flex space-x-5'>
                            <h2 className='text-3xl p-2 font-bold text-orange-900'>$18.00</h2>
                            <button type="button" className="text-white bg-orange-700 hover:bg-orange-800 focus:outline-none focus:ring-1 focus:ring-red-300  rounded-full text-sm px-10 mt-2 text-center me-2 mb-2 dark:bg-orange-900 dark:hover:bg-orange-850 dark:focus:ring-red-900">ADD</button>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-center items-center space-y-8 p-8  border-2 rounded-xl  bg-orange-50'>
                    <div className=''>
                        <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2023/09/chicken-fry-recipe.jpg" className='w-full h-44 rounded-2xl' alt="" />
                    </div>
                    <div className='flex  flex-col justify-center items-center md:items-start sm:w-2/3 mx-5'>
                        <h1 className='font-normal text-xl font-serif'>TOMMY'S MARGARITA</h1>
                        <p className='font-serif text-lg'>Tomatoes Beef, Eggs, Poaches Beef, Eggs, Poaches, With Bacon, Bacon,Chorizo,Roasted Roma.</p>
                        <div className='flex space-x-5'>
                            <h2 className='text-3xl p-2 font-bold text-orange-900'>$18.00</h2>
                            <button type="button" className="text-white bg-orange-700 hover:bg-orange-800 focus:outline-none focus:ring-1 focus:ring-red-300  rounded-full text-sm px-10 mt-2 text-center me-2 mb-2 dark:bg-orange-900 dark:hover:bg-orange-850 dark:focus:ring-red-900">ADD</button>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-center items-center space-y-8 p-8  border-2 rounded-xl  bg-orange-50'>
                    <div className=''>
                        <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2023/09/chicken-fry-recipe.jpg" className='w-full h-44 rounded-2xl' alt="" />
                    </div>
                    <div className='flex  flex-col justify-center items-center md:items-start sm:w-2/3 mx-5'>
                        <h1 className='font-normal text-xl font-serif'>TOMMY'S MARGARITA</h1>
                        <p className='font-serif text-lg'>Tomatoes Beef, Eggs, Poaches Beef, Eggs, Poaches, With Bacon, Bacon,Chorizo,Roasted Roma.</p>
                        <div className='flex space-x-5'>
                            <h2 className='text-3xl p-2 font-bold text-orange-900'>$18.00</h2>
                            <button type="button" className="text-white bg-orange-700 hover:bg-orange-800 focus:outline-none focus:ring-1 focus:ring-red-300  rounded-full text-sm px-10 mt-2 text-center me-2 mb-2 dark:bg-orange-900 dark:hover:bg-orange-850 dark:focus:ring-red-900">ADD</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
