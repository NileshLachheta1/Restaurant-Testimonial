import React from 'react'

export default function ContactForm() {
    return (
        <>
            <div>

                <div className='grid sm:grid-cols-2 lg:p-12 md:w-2/3 md:mx-auto'>
                    <div className=''>
                        <img src="https://media.istockphoto.com/id/1214844785/photo/sharing-food.jpg?s=170667a&w=0&k=20&c=4bNTWdu1mUEGT4MJiX2XNp669MVrCVG95wUySKCwosM=" className='w-full h-auto sm:h-96 object-cover' alt="" />
                    </div>
                    <div className='bg-black text-white '>
                        <form class="mx-8 space-y-4 py-5 p-1">
                            <div>
                                <input type="text"
                                    class="w-full p-2 text-sm border-b-2 border-gray-400 outline-none text-white bg-black focus:border-blue-400"
                                    placeholder="Full Name" />
                            </div>
                            <div>
                                <input type="text"
                                    class="w-full p-2 text-sm border-b-2 border-gray-400 outline-none text-white bg-black focus:border-blue-400"
                                    placeholder="Your Email" />

                            </div>
                            <div>
                                <input type="text"
                                    class="w-full p-2 text-sm border-b-2 border-gray-400 outline-none text-white bg-black focus:border-blue-400"
                                    placeholder="Subject" />
                            </div>
                            <div>
                                <textarea name="message"
                                    class="w-full p-6 text-sm border-b-2 border-gray-400 rounded-lg outline-none text-white bg-black focus:border-blue-400"
                                    placeholder="Enter your message"></textarea>
                            </div>

                            <button class="block w-full p-2 mt-2 text-white bg-black rounded-full border-white border-2 focus:border-blue-500">Send
                                Form</button>
                        </form>
                    </div>
                </div>
                <div >
                <iframe className='w-full relative bottom-24 -z-10'
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7363.0370260522095!2d75.87636689999998!3d22.671733800000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1708292610905!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>
                
            </div>
        </>
    )
}
