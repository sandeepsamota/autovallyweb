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
import { Link } from "react-router-dom";

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
            <Link to="/products">
              <button className="transition mt-6 ease-in duration-700 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-6 py-3 h-max w-48 md:w-64 text-center">
                Book Now
              </button>
            </Link>
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
      <div className="custom-shape-divider-top-1671081312 border-none">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
            fill="#CFBEE9"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
            fill="#CFBEE9"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
            fill="#CFBEE9"
          ></path>
        </svg>
      </div>
    </>
  );
}
export default FirstComp;
