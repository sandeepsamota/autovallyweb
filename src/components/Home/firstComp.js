import React, { useState } from "react";
import LImg from "../../assets/bg-circle.png";
import RImg from "../../assets/bg-triangle.png";
import Intro from "../../assets/screenshot-frame.png";

import Inst1 from "../../assets/inst1.jpg";
import Inst2 from "../../assets/home.png";
import Inst3 from "../../assets/checkout.png";
import Inst4 from "../../assets/inst2.jpg";
import Inst5 from "../../assets/inst3.jpg";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function FirstComp() {
  const slides = [
    {
      url: Inst1,
    },
    {
      url: Inst2,
    },
    {
      url: Inst3,
    },
    {
      url: Inst4,
    },
    {
      url: Inst5,
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

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <>
      <div className="w-full flex relative justify-between h-[500px] bg-[#CFBEE9]">
        <img className="h-32 md:h-64" src={LImg} alt="..." />
        <div className="flex absolute flex-col md:flex-row mt-16 justify-center items-center">
          <div className="flex flex-col md:w-1/2 md:mr-12 lg:mr-54 xl:mr-60 justify-center items-center">
            <p className="mt-2 text-center font-semibold text-black text-2xl md:text-4xl">
              Welcome to Auto Vally
            </p>
            <p className="px-1 mt-2 text-lg text-center">
              Auto Vally is online Bike/Car booking platform for rent through
              the mobile application. By the help of these application customer
              can book the Bike or Car with a wide range of Varity. The purpose
              of this application is providing the easy and continence ride to
              the customer.
            </p>

            <button className="transition mt-6 ease-in duration-700 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-6 py-3 h-max w-48 md:w-64 text-center">
              Book Now
            </button>
            <button className="transition my-6 ease-in duration-700 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-6 py-3 h-max w-48 md:w-64 text-center">
              Contact Us
            </button>
          </div>

          <div className="relative">
            <div className="h-[500px] w-full m-auto px-4 absolute p-4 group">
              <div
                style={{
                  backgroundImage: `url(${slides[currentIndex].url})`,
                }}
                className="w-full h-full p-1 rounded bg-center bg-cover duration-500"
              ></div>
              {/* Left Arrow */}
              <div className="block absolute bottom-1/2 left-[-35px] md:left-[-40px] text-md rounded-full mt-4 p-2 bg-[#6E3CBC] text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={20} />
              </div>
              {/* Right Arrow */}
              <div className="block absolute bottom-1/2 right-[-35px] md:right-[-40px] text-md rounded-full mt-4 p-2 bg-[#6E3CBC] text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={20} />
              </div>
              <div className="flex top-4 justify-center py-2">
                {slides.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className="text-2xl md:text-4xl text-[#6E3CBC] cursor-pointer"
                  >
                    <RxDotFilled />
                  </div>
                ))}
              </div>
            </div>
            <img className="relative" src={Intro} alt="..." />
          </div>
        </div>
        <img className="mt-48 md:mt-42 h-32 md:h-64" src={RImg} alt="..." />
      </div>
    </>
  );
}
export default FirstComp;
