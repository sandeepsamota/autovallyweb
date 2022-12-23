import React from "react";
import "./SecondComp.css";

import Secure from "../../assets/secure.png";
import Avilable from "../../assets/avilable.png";
import Car from "../../assets/car.png";
import Bike from "../../assets/bike.png";
import SelfDrive from "../../assets/selfdrive.png";
import Driver from "../../assets/driver.png";

function ThiredComp() {
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
        <div className="features1 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 2xl:space-x-6 mb-4 2xl:mb-6">
          <div className="bg-[#e3d9f3] p-5 rounded-lg">
            <div className="flex items-center">
              <img
                className="p-2.5 bg-[#6E3CBC] rounded-full h-16 w-16"
                src={Car}
                alt="..."
              />
            </div>

            <p className="oneappheading m-3 font-semibold">Car</p>
            <p className="mt-2 text-lg text-left ">
              Auto Vally is online Bike/Car booking platform for rent through
              the mobile application. By the help of these application customer
              can book the Bike or Car with a wide range of Varity.
            </p>
          </div>
          <div className="bg-[#e3d9f3] p-5 rounded-lg">
            <div className="flex items-center">
              <img
                className="p-2.5 bg-[#6E3CBC] rounded-full h-16 w-16"
                src={Bike}
                alt="..."
              />
            </div>

            <p className="oneappheading m-3 font-semibold">Bike</p>
            <p className="mt-2 text-lg text-left ">
              Auto Vally is online Bike/Car booking platform for rent through
              the mobile application. By the help of these application customer
              can book the Bike or Car with a wide range of Varity.
            </p>
          </div>
          <div className="bg-[#e3d9f3] p-5 rounded-lg">
            <div className="flex items-center">
              <img
                className="p-2.5 bg-[#6E3CBC] rounded-full h-16 w-16"
                src={SelfDrive}
                alt="..."
              />
            </div>

            <p className="oneappheading mt-3 mb-3 ml-1 font-semibold">
              Self Drive
            </p>
            <p className="mt-2 text-lg text-left ">
              Auto Vally is online Bike/Car booking platform for rent through
              the mobile application. By the help of these application customer
              can book the Bike or Car with a wide range of Varity.
            </p>
          </div>
        </div>
        <div className="features2 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 2xl:space-x-6 mb-4 2xl:mb-6">
          <div className=" bg-[#e3d9f3] p-5 rounded-lg">
            <div className="flex items-center">
              <img
                className="p-2.5 bg-[#6E3CBC] rounded-full h-16 w-16"
                src={Driver}
                alt="..."
              />
            </div>

            <p className="oneappheading mt-3 mb-3 ml-1 font-semibold">
              With Driver
            </p>
            <p className="mt-2 text-lg text-left ">
              Auto Vally is online Bike/Car booking platform for rent through
              the mobile application. By the help of these application customer
              can book the Bike or Car with a wide range of Varity.
            </p>
          </div>
          <div className=" bg-[#e3d9f3] p-5 rounded-lg">
            <div className="flex items-center">
              <img
                className="p-2.5 bg-[#6E3CBC] rounded-full h-16 w-16"
                src={Secure}
                alt="..."
              />
            </div>

            <p className="oneappheading mt-3 mb-3 ml-1 font-semibold">
              100% Secured
            </p>
            <p className="mt-2 text-lg text-left ">
              Auto Vally is online Bike/Car booking platform for rent through
              the mobile application. By the help of these application customer
              can book the Bike or Car with a wide range of Varity.
            </p>
          </div>
          <div className=" bg-[#e3d9f3] p-5 rounded-lg">
            <div className="flex items-center">
              <img
                className="p-2.5 bg-[#6E3CBC] rounded-full h-16 w-16"
                src={Avilable}
                alt="..."
              />
            </div>

            <p className="oneappheading mt-3 mb-3 ml-1 font-semibold">
              24x7 Avilable
            </p>

            <p className="mt-2 text-lg text-left ">
              Auto Vally is online Bike/Car booking platform for rent through
              the mobile application. By the help of these application customer
              can book the Bike or Car with a wide range of Varity.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default ThiredComp;
