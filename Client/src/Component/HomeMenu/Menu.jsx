import React from 'react'
import 'animate.css/animate.min.css';
import { BsSuitDiamond } from "react-icons/bs";

export default function Menu() {
    return (
        <>
            <h2 className='flex justify-center text-yellow-700 text-2xl font-serif p-2'><BsSuitDiamond className='text-yellow-700 m-1 text-xl' />Our Menu Items <BsSuitDiamond className='text-yellow-700 m-1 text-xl' /></h2>
            <div className='grid m-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 sm:space-x-6 mt-12 space-y-4 sm:space-y-0 xl:mx-24'>
                <div className="relative group overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg">
                    <div className="absolute z-[-10] w-full ">
                        <img
                            src="https://www.feastingathome.com/wp-content/uploads/2020/01/Sauteed-Kale-recipe-9.jpg"
                            className="w-full h-96 rounded-2xl object-cover "
                            alt=""
                        />
                        <div className="absolute inset-0 bg-black opacity-50 hover:opacity-0 transition-opacity ease-in-out duration-300 rounded-2xl"></div>
                    </div>
                    <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
                        <p className="text-4xl font-bold text-white animate__animated animate__slideInUp">
                            Food Name
                        </p>
                    </div>
                </div>

                <div className='space-y-4'>
                    <div className="relative group overflow-h   idden transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg">
                        <div className=" z-[-10] w-full">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMZ5WNn3Ftey6SD2hiYA6Vez1KTSdENSQYNg&usqp=CAU"
                                className="w-full h-44 rounded-2xl object-cover"
                                alt=""
                            />
                            <div className="absolute inset-0 bg-black opacity-50 hover:opacity-0 transition-opacity ease-in-out duration-300 rounded-2xl"></div>
                        </div>
                        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
                            <p className="text-4xl font-bold text-white animate__animated animate__slideInUp">
                                Food Name
                            </p>
                        </div>
                    </div>

                    <div className="relative group overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg">
                        <div className=" z-[-10] w-full">
                            <img
                                src="https://sandinmysuitcase.com/wp-content/uploads/2020/04/Popular-Indian-Cuisine.jpg"
                                className="w-full h-44 rounded-2xl object-cover"
                                alt=""
                            />
                            <div className="absolute inset-0 bg-black opacity-50 hover:opacity-0 transition-opacity ease-in-out duration-300 rounded-2xl"></div>
                        </div>
                        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
                            <p className="text-4xl font-bold text-white animate__animated animate__slideInUp">
                                Food Name
                            </p>
                        </div>
                    </div>
                </div>

                <div className='space-y-4'>
                    <div className="relative group overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg">
                        <div className=" z-[-10] w-full">
                            <img
                                src="https://insanelygoodrecipes.com/wp-content/uploads/2022/12/Healthy-Homemade-Sauteed-Broccoli-Rabe-with-Garlic-and-Nuts-500x500.jpg"
                                className="w-full h-44 rounded-2xl object-cover"
                                alt=""
                            />
                            <div className="absolute inset-0 bg-black opacity-50 hover:opacity-0 transition-opacity ease-in-out duration-300 rounded-2xl"></div>
                        </div>
                        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
                            <p className="text-4xl font-bold text-white animate__animated animate__slideInUp">
                                Food Name
                            </p>
                        </div>
                    </div>

                    <div className="relative group overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg">
                        <div className=" z-[-10] w-full">
                            <img
                                src="https://www.decorlane.com/cdn/shop/products/Untitled.png?v=1598487994"
                                className="w-full h-44 rounded-2xl object-cover"
                                alt=""
                            />
                            <div className="absolute inset-0 bg-black opacity-50 hover:opacity-0 transition-opacity ease-in-out duration-300 rounded-2xl"></div>
                        </div>
                        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
                            <p className="text-4xl font-bold text-white animate__animated animate__slideInUp">
                                Food Name
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
