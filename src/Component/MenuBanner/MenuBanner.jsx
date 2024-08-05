import React from 'react'
import banner from "../../assets/images/cantactBanner.jpg"
export default function ContactUsBanner() {
  return (
    <>
      <div className="grid relative ">
        <div className="">
          <img src={banner} className="w-full xl:h-[calc(100vh_-_100px)]  object-cover" alt="" />
          <div className="absolute inset-0 bg-black opacity-55"></div>
        </div>
        <div className="absolute inset-0 flex justify-center items-center ">
          <p className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white font-sans ">
            Menu Section
          </p>
        </div>
      </div>
    </>
  )
}
