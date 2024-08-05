import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
export default function Footer() {
    return (
        <>
            <div className='p-10 bg-[url("https://media.istockphoto.com/id/1153582453/photo/modern-empty-cocktail-night-bar.jpg?s=2048x2048&w=is&k=20&c=zLDTmfDOquTu22IsHIvnr-RTQiOI1qPgEi0fOxCINr4=")] bg-no-repeat text-white space-y-8'>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 space-y-6'>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='font-serif text-2xl'>Our Facilities</h1>
                        <ul className='font-serif font-normal text-white space-y-2'>
                            <li></li>
                            <li>Indian Menu</li>
                            <li>Menu Item</li>
                            <li>Private Event</li>
                            <li>Italian Menu</li>
                        </ul>
                    </div>
                    <div className='text-white flex flex-col justify-center items-center'>
                        <div className='w-60 h-60 rounded-full bg-transparent border border-white flex flex-col items-center justify-center'>
                            <img src="https://www.freepnglogos.com/uploads/crown-logo-5.png" className='h-14 w-28 ' alt="" />
                            <p className='font-bold font-serif text-xl p-2'>Established - 2024</p>
                            <div className='flex justify-center pb-4'>
                                <p className='w-12 mt-3 bg-orange-900 h-0.5'></p>
                                <span className=''>&emsp;vmkm&emsp;</span>
                                <p className='w-12 mt-3 bg-orange-900 h-0.5'></p>
                            </div>
                            <ul className='flex space-x-2'>
                                <li><div className='w-8 h-8 rounded-full bg-transparent border border-orange-900 flex flex-col items-center justify-center text-white hover:bg-white hover:text-black'><FaFacebookF className=' hover:text-black' /></div></li>
                                <li><div className='w-8 h-8 rounded-full bg-transparent border border-orange-900 flex flex-col items-center justify-center text-white hover:bg-white hover:text-black'><FaInstagram className=' hover:text-black' /></div></li>
                                <li><div className='w-8 h-8 rounded-full bg-transparent border border-orange-900 flex flex-col items-center justify-center text-white hover:bg-white hover:text-black'><FaLinkedinIn className=' hover:text-black' /></div></li>
                                <li><div className='w-8 h-8 rounded-full bg-transparent border border-orange-900 flex flex-col items-center justify-center text-white hover:bg-white hover:text-black'><FaTwitter className=' hover:text-black' /></div></li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center '>
                        <h1 className='font-serif text-2xl'>Address Info</h1>
                        <ul className='font-serif font-normal text-white space-y-2 '>
                            <li></li>
                            <li><span className='text-orange-900 font-semibold'>Phone : </span> <span className='font-sans'>+91 0-1776-766-767</span></li>
                            <li><span className='text-orange-900 font-semibold'>Email : </span> <span>Info@gmail.com</span></li>
                            <li><span className='text-orange-900 font-semibold'>Location : </span><span>Ganesh Nagar Indore</span></li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-center text-md font-serif'>
                    <p className='text-white text-center'>&copy;CopyRight By EgenSlab-2024, All Right Reserved.</p>
                </div>
            </div>
        </>
    )
}
