import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

function HomeBanner() {

  const slides = [
    {
      url: 'https://img.freepik.com/free-photo/design-restaurant-dining-background_1409-7401.jpg?t=st=1722756792~exp=1722760392~hmac=d5e34e24bb176554b20985ba602ab87aed0f590271b8727ce2997e68132668a9&w=1060',
    },
    {
      url: 'https://img.freepik.com/free-photo/tropical-hotel-holiday-background-resort_1203-4943.jpg?t=st=1722756942~exp=1722760542~hmac=73da55baf71c22eb27321d4fb671e65c604f1aca69d732c41391ab9a4c8204e2&w=1060',
    },
    {
      url: 'https://t3.ftcdn.net/jpg/00/29/13/38/240_F_29133877_bfA2n7cWV53fto2BomyZ6pyRujJTBwjd.jpg',
    },

    {
      url: 'https://img.freepik.com/free-photo/luxurious-villa-with-modern-architectural-design_23-2151694040.jpg?uid=R137429940&ga=GA1.1.578146502.1721503295&semt=ais_hybrid',
    },
    {
      url: 'https://img.freepik.com/free-photo/luxurious-villa-with-modern-architectural-design_23-2151694107.jpg?t=st=1722757047~exp=1722760647~hmac=fca3f132162af94c2d30f25321bba2e86f6d2f0a362e215bfe894fdf26c35630&w=1060',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='grid'>
      <div className='max-w-[100%] h-[400px] sm:h-[550px] sm:py-4 md:h-[650px] md:py-5 lg:h-[800px] xl:h-screen 2xl:h-screen w-full m-auto xl:py-2 py-12 px-2 relative group'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        ></div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {/* {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <RxDotFilled />
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
