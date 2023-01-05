import React from "react";
import "./SecondComp.css";
// import CountUp from "react-countup";
import Star from "../../assets/star.png";
// import Installs from "../../assets/installs.png";

function EighthComp() {
  return (
    <>
      <div className="flex justify-center items-center">
        <p className="mt-2 text-center font-semibold text-[#6E3CBC] text-lg md:text-xl">
          Testimonial
        </p>
      </div>
      <div>
        <p className="mt-4 text-center font-semibold oneappheading text-black text-2xl md:text-3xl">
          What Say Our Clients!
        </p>
      </div>

      <div>
        <div className="features1 mt-10 xl:px-16 flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-1 lg:space-x-6 2xl:space-x-6 mb-4 2xl:mb-6">
          <div className="flex flex-col w-full items-left bg-white p-5 border-2 border-dotted border-[#CFBEE9] rounded-lg">
            <div className="flex items-center text-center space-x-4 mb-1">
              <img
                className="h-20 rounded-full"
                src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                alt="..."
              />
              <div>
                <p className="text-purple-800 font-semibold">Active Installs</p>
                <h2 className="flex md:relative md:left-[-20px] lg:left-0">
                  <img className="h-6" src={Star} alt="..." />
                  <img className="h-6" src={Star} alt="..." />
                  <img className="h-6" src={Star} alt="..." />
                  <img className="h-6" src={Star} alt="..." />
                  <img className="h-6" src={Star} alt="..." />
                </h2>
              </div>
            </div>
            <hr className="my-2 border-2 border-[#e3d9f3]" />
            <p className="w-[100%] md:w-[80%] lg:w-[100%] font-none mt-2 text-lg text-left md:text-center">
              Auto Vally is online Bike/Car booking platform for rent through
              the mobile application.
            </p>
          </div>
          <div className="flex flex-col w-full items-left bg-white p-5 border-2 border-dotted border-[#CFBEE9] rounded-lg">
            <div className="flex items-center  text-center space-x-4 mb-1">
              <img
                className="h-20 rounded-full"
                src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                alt="..."
              />
              <div>
                <p className="text-purple-800 font-semibold">Active Installs</p>
                <h2 className="flex md:relative md:left-[-20px] lg:left-0">
                  <img className="h-6" src={Star} alt="..." />
                  <img className="h-6" src={Star} alt="..." />
                  <img className="h-6" src={Star} alt="..." />
                  <img className="h-6" src={Star} alt="..." />
                  <img className="h-6" src={Star} alt="..." />
                </h2>
              </div>
            </div>
            <hr className="my-2 border-2 border-[#e3d9f3]" />
            <p className="w-[100%] md:w-[80%] lg:w-[100%] font-none mt-2 text-lg text-left md:text-center">
              Auto Vally is online Bike/Car booking platform for rent through
              the mobile application.
            </p>
          </div>
          <div className="flex flex-col w-full items-left bg-white p-5 border-2 border-dotted border-[#CFBEE9] rounded-lg">
            <div className="flex items-center text-center space-x-4 mb-1">
              <img
                className="h-20 rounded-full"
                src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                alt="..."
              />
              <div>
                <p className="text-purple-800 font-semibold">Active Installs</p>
                <h2 className="flex md:relative md:left-[-20px] lg:left-0">
                  <img className="h-6" src={Star} alt="..." />
                  <img className="h-6" src={Star} alt="..." />
                  <img className="h-6" src={Star} alt="..." />
                  <img className="h-6" src={Star} alt="..." />
                  <img className="h-6" src={Star} alt="..." />
                </h2>
              </div>
            </div>
            <hr className="my-2 border-2 border-[#e3d9f3]" />
            <p className="w-[100%] md:w-[80%] lg:w-[100%] font-none mt-2 text-lg text-left md:text-center">
              Auto Vally is online Bike/Car booking platform for rent through
              the mobile application.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default EighthComp;
