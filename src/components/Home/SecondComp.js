import React from "react";
import "./SecondComp.css";
import Intro from "../../assets/Intro.png";
import Installs from "../../assets/installs.png";
import Reviews from "../../assets/reviews.png";
import CountUp from "react-countup";

function SecondComp() {
  return (
    <>
      <div className="w-full flex relative justify-between h-[600px]">
        <div className="flex flex-col xl:flex-row mt-16 md:mt-96 lg:mt-[500px] xl:mt-0 justify-center items-center lg:items-left">
          <div className="flex flex-col items-center md:items-left md:px-5 space-y-6">
            <div className="flex justify-start items-left">
              <p className="mt-2 text-left font-semibold text-[#6E3CBC] text-lg md:text-xl">
                About App
              </p>
            </div>
            <div>
              <p className="mt-2 text-left font-semibold oneappheading text-black text-2xl md:text-3xl">
                #1 App For Your Self Drive Car / Bike
              </p>
            </div>
            <p className="w-[100%] md:w-[80%] lg:w-[100%] font-none mt-2 text-lg text-left md:text-center">
              Auto Vally is online Bike/Car booking platform for rent through
              the mobile application. By the help of these application customer
              can book the Bike or Car with a wide range of Varity. The purpose
              of this application is providing the easy and continence ride to
              the customer.
            </p>
            <div className="flex flex-col mt-12 mb-4 md:flex-row md:space-x-16 lg:space-x-32">
              <div className="flex items-center justify-between mb-5">
                <img className="h-20" src={Installs} alt="..." />
                <div>
                  <h2>
                    <CountUp
                      start={0}
                      end={9459}
                      duration={2.75}
                      className="text-2xl oneappheading"
                    />
                  </h2>
                  <p className="text-purple-800 font-semibold">
                    Active Installs
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-5">
                <img className="h-20" src={Reviews} alt="..." />
                <div>
                  <h2>
                    <CountUp
                      start={0}
                      end={1024}
                      duration={2.75}
                      className="text-2xl oneappheading"
                    />
                  </h2>
                  <p className="text-purple-800 font-semibold">
                    Client Reviews
                  </p>
                </div>
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
export default SecondComp;
