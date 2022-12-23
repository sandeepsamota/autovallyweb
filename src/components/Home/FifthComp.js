import React from "react";
import "./SecondComp.css";

import Setting from "../../assets/setting.png";
import Profile from "../../assets/profile.png";
import Done from "../../assets/checked.png";

function FifthComp() {
  return (
    <>
      <div className="flex justify-center items-center">
        <p className="mt-2 text-center font-semibold text-[#6E3CBC] text-lg md:text-xl">
          App Features
        </p>
      </div>
      <div>
        <p className="mt-4 text-center font-semibold oneappheading text-black text-2xl md:text-3xl">
          Awesome Features
        </p>
      </div>
      <div>
        <div className="features1 mt-10 flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-6 2xl:space-x-6 mb-4 2xl:mb-6">
          <div className="bg-[#e3d9f3] p-5 rounded-lg">
            <div className="flex relative justify-center items-center">
              <img
                className="p-2.5 absolute top-[-50px] bg-[#6E3CBC] rounded-full h-16 w-16"
                src={Setting}
                alt="..."
              />
            </div>

            <p className="oneappheading pt-10 text-center font-semibold">
              Install the App
            </p>
            <p className="mt-2 text-lg text-center ">
              Auto Vally is online Bike/Car booking platform for rent through
              the mobile application.
            </p>
          </div>
          <div className="bg-[#e3d9f3] p-5 rounded-lg">
            <div className="flex relative justify-center items-center">
              <img
                className="p-2.5 absolute top-[-50px] bg-[#6E3CBC] rounded-full h-16 w-16"
                src={Profile}
                alt="..."
              />
            </div>

            <p className="oneappheading pt-10 text-center font-semibold">
              Install the App
            </p>
            <p className="mt-2 text-lg text-center ">
              Auto Vally is online Bike/Car booking platform for rent through
              the mobile application.
            </p>
          </div>
          <div className="bg-[#e3d9f3] p-5 rounded-lg">
            <div className="flex relative justify-center items-center">
              <img
                className="p-2.5 absolute top-[-50px] bg-[#6E3CBC] rounded-full h-16 w-16"
                src={Done}
                alt="..."
              />
            </div>

            <p className="oneappheading pt-10 text-center font-semibold">
              Install the App
            </p>
            <p className="mt-2 text-lg text-center ">
              Auto Vally is online Bike/Car booking platform for rent through
              the mobile application.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default FifthComp;
