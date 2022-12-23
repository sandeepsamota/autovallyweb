import React from "react";
import "./SecondComp.css";
import Intro from "../../assets/Intro.png";
import Apple from "../../assets/apple.png";
import Play from "../../assets/play.png";

function SixthComp() {
  return (
    <>
      <div className="w-full relative h-[600px]">
        <div className="flex flex-col xl:flex-row mt-42 md:mt-96 lg:mt-[500px] xl:mt-0 lg:items-left">
          <div>
            <img className="w-[2000px]" src={Intro} alt="..." />
          </div>
          <div className="flex flex-col justify-start items-left md:items-left md:px-5 space-y-4">
            <div className="flex ">
              <p className="mt-2 font-semibold text-[#6E3CBC] text-lg md:text-xl">
                Download
              </p>
            </div>
            <div>
              <p className="mt-2 text-left font-semibold oneappheading text-black text-2xl md:text-3xl">
                Download The Latest Version Of Our App
              </p>
            </div>
            <p className="w-[100%] md:w-[80%] lg:w-[100%] font-none mt-2 text-lg text-left md:text-left">
              Auto Vally is online Bike/Car booking platform for rent through
              the mobile application. By the help of these application customer
              can book the Bike or Car with a wide range of Varity. The purpose
              of this application is providing the easy and continence ride to
              the customer.
            </p>
            <div className="flex flex-col mt-12 mb-4 md:flex-row md:space-x-16 lg:space-x-32">
              <div className="flex items-center rounded-xl bg-[#6E3CBC] mb-5 w-full">
                <img className="h-20 p-4" src={Apple} alt="..." />
                <div>
                  <h2 className="text-lg text-white">Avilable On</h2>
                  <p className="text-2xl oneappheading text-white">App Store</p>
                </div>
              </div>
              <div className="flex items-center rounded-xl bg-[#6E3CBC] mb-5 w-full">
                <img className="h-20 p-4" src={Play} alt="..." />
                <div>
                  <h2 className="text-lg text-white">Avilable On</h2>
                  <p className="text-2xl oneappheading text-white">
                    Play Store
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SixthComp;
