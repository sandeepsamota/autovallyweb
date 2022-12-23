import React from "react";
import "./SecondComp.css";
import CountUp from "react-countup";
import Done from "../../assets/done.png";

function SeventhComp() {
  return (
    <>
      <div className="flex justify-center items-center">
        <p className="mt-2 text-center font-semibold text-[#6E3CBC] text-lg md:text-xl">
          Pricing Plan
        </p>
      </div>
      <div>
        <p className="mt-4 text-center font-semibold oneappheading text-black text-2xl md:text-3xl">
          Choose Your Plan
        </p>
      </div>
      <div className="flex mt-5 mb-16 justify-center">
        <div className="bg-white border-2 border-[#6E3CBC] flex justify-between rounded-full mx-5 w-50">
          <button className="oneappheading px-5 py-3 text-[#6E3CBC] focus:bg-[#6E3CBC] focus:border-2 focus:rounded-full focus:text-white">
            Hourly
          </button>
          <button className="oneappheading px-5 py-3 text-[#6E3CBC] focus:bg-[#6E3CBC] focus:border-2 focus:rounded-full focus:text-white">
            Daily
          </button>
        </div>
      </div>
      <div>
        <div className="features1 mt-10 xl:px-16 flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-6 2xl:space-x-6 mb-4 2xl:mb-6">
          <div className="flex flex-col w-full justify-between items-left bg-[#e3d9f3] p-5  rounded-lg">
            <p className="oneappheading text-[#6E3CBC] text-xl">Starter Plan</p>
            <p>Powerful & Awesome Features</p>
            <hr className="my-4" />
            <h2>
              <CountUp
                start={0}
                end={180}
                duration={1}
                separator=" "
                decimal=","
                prefix="₹"
                suffix="/hour"
                className="text-2xl px-2 oneappheading"
              />
            </h2>
            <div className="px-2">
              <div className="flex justify-between mt-2 text-lg">
                <span>HTML5 & CSS3</span>
                <img className="h-6" src={Done} alt="..." />
              </div>
              <div className="flex justify-between mt-2 text-lg">
                <span>HTML5 & CSS3</span>
                <img className="h-6" src={Done} alt="..." />
              </div>
              <div className="flex justify-between mt-2 w-full text-lg">
                <span>HTML5 & CSS3</span>
                <img className="h-6" src={Done} alt="..." />
              </div>
              <div className="flex justify-between mt-2 text-lg">
                <span>Powerful & Awesome Features</span>
                <img className="h-6" src={Done} alt="..." />
              </div>
            </div>
            <div className="flex">
              <button className="transition my-6 ease-in duration-700 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-6 py-4 h-max w-max md:w-44 text-center">
                Read More
              </button>
            </div>
          </div>
          <div className="flex w-full flex-col justify-around items-left bg-[#e3d9f3] p-5 rounded-lg">
            <p className="oneappheading text-[#6E3CBC] text-xl">Advance Plan</p>
            <p>Powerful & Awesome Features</p>
            <hr className="my-4" />
            <h2>
              <CountUp
                start={0}
                end={210}
                duration={1}
                separator=" "
                decimal=","
                prefix="₹"
                suffix="/hour"
                className="text-2xl px-2 oneappheading"
              />
            </h2>
            <div className="px-2">
              <div className="flex justify-between mt-2 text-lg">
                <span>HTML5 & CSS3</span>
                <img className="h-6" src={Done} alt="..." />
              </div>
              <div className="flex justify-between  mt-2 text-lg">
                <span>HTML5 & CSS3</span>
                <img className="h-6" src={Done} alt="..." />
              </div>
              <div className="flex justify-between mt-2 w-full text-lg">
                <span>HTML5 & CSS3</span>
                <img className="h-6" src={Done} alt="..." />
              </div>
              <div className="flex justify-between mt-2 text-lg">
                <span>Powerful & Awesome Features</span>
                <img className="h-6" src={Done} alt="..." />
              </div>
            </div>
            <div className="flex">
              <button className="transition my-6 ease-in duration-700 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-6 py-4 h-max w-max md:w-44 text-center">
                Read More
              </button>
            </div>
          </div>
          <div className="flex w-full flex-col items-left bg-[#e3d9f3] p-5 rounded-lg">
            <p className="oneappheading text-[#6E3CBC] text-xl">Premium Plan</p>
            <p>Powerful & Awesome Features</p>
            <hr className="my-4" />
            <h2>
              <CountUp
                start={0}
                end={240}
                duration={1}
                separator=" "
                decimal=","
                prefix="₹"
                suffix="/hour"
                className="text-2xl px-2 oneappheading"
              />
            </h2>
            <div className="px-2">
              <div className="flex justify-between mt-2 text-lg">
                <span>HTML5 & CSS3</span>
                <img className="h-6" src={Done} alt="..." />
              </div>
              <div className="flex justify-between mt-2 text-lg">
                <span>HTML5 & CSS3</span>
                <img className="h-6" src={Done} alt="..." />
              </div>
              <div className="flex justify-between mt-2 w-full text-lg">
                <span>HTML5 & CSS3</span>
                <img className="h-6" src={Done} alt="..." />{" "}
              </div>
              <div className="flex justify-between mt-2 text-lg">
                <span>Powerful & Awesome Features</span>
                <img className="h-6" src={Done} alt="..." />
              </div>
            </div>
            <div className="flex">
              <button className="transition my-6 ease-in duration-700 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-6 py-4 h-max w-max md:w-44 text-center">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SeventhComp;
