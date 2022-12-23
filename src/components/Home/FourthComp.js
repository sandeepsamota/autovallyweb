import React from "react";
import "./SecondComp.css";
import Intro from "../../assets/Intro.png";
import Done from "../../assets/done.png";

function FourthComp() {
  return (
    <>
      <div className="w-full relative h-[600px]">
        <div className="flex flex-col xl:flex-row mt-16 md:mt-96 lg:mt-[500px] xl:mt-0 lg:items-left">
          <div className="flex flex-col justify-start items-left md:items-left md:px-5 space-y-4">
            <div className="flex ">
              <p className="mt-2 font-semibold text-[#6E3CBC] text-lg md:text-xl">
                Screenshot
              </p>
            </div>
            <div>
              <p className="mt-2 text-left font-semibold oneappheading text-black text-2xl md:text-3xl">
                User Friendly And Easy To Use Car Rental App
              </p>
            </div>
            <p className="w-[100%] md:w-[80%] lg:w-[100%] font-none mt-2 text-lg text-left md:text-left">
              Auto Vally is online Bike/Car booking platform for rent through
              the mobile application. By the help of these application customer
              can book the Bike or Car with a wide range of Varity. The purpose
              of this application is providing the easy and continence ride to
              the customer.
            </p>
            <div>
              <div className="flex justify-start items-center space-x-4 mb-2">
                <img className="h-6" src={Done} alt="..." />
                <span>Diam dolor diam ipsum et tempor sit</span>
              </div>
              <div className="flex justify-start items-center space-x-4 mb-2">
                <img className="h-6" src={Done} alt="..." />
                <span>Diam dolor diam ipsum et tempor sit</span>
              </div>
              <div className="flex justify-start items-center space-x-4">
                <img className="h-6" src={Done} alt="..." />
                <span>Diam dolor diam ipsum et tempor sit</span>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button className="transition my-6 ease-in duration-700 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-10 py-3 h-max w-max md:w-64 text-center">
                Read More
              </button>
            </div>
          </div>

          <div>
            <img className="w-[2000px]" src={Intro} alt="..." />
          </div>
        </div>
      </div>
    </>
  );
}
export default FourthComp;
