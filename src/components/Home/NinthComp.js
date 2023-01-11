import React from "react";
import Email from "../../assets/email.png";
import Map from "../../assets/map.png";
import Call from "../../assets/call.png";

function NinthComp() {
  return (
    <>
      <div className="flex justify-center items-center">
        <p className="mt-2 text-center font-semibold text-[#6E3CBC] text-lg md:text-xl">
          Contact Us
        </p>
      </div>
      <div>
        <p className="mt-4 text-center font-semibold oneappheading text-black text-2xl md:text-3xl">
          Get In Touch!
        </p>
      </div>
      <p className="md:px-48 font-none mt-2 text-lg text-center md:text-center">
        Here is the contact information of our company. You can contact us via
        call or send us mail which is provided below.
      </p>
      <div className="features1 mt-10 xl:px-16 flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-6 2xl:space-x-6 mb-4 2xl:mb-6">
        <a
          href="mailto:autovallyrentals@gmail.com"
          className="flex flex-col w-full items-left bg-white p-5 border-2 border-dotted border-[#CFBEE9] rounded-lg"
        >
          <div className="flex items-center text-center space-x-4 mb-1">
            <div className=" bg-[#6E3CBC] h-14 w-14 rounded-full">
              <img className="p-3.5" src={Email} alt="..." />
            </div>
            <div>
              <p className="text-purple-800 font-semibold">Email Us</p>
            </div>
          </div>
          <hr className="my-2 border-2 border-[#e3d9f3]" />
          <p className="w-[100%] md:w-[80%] lg:w-[100%] font-none mt-2 text-lg text-left">
            autovallyrentals@gmail.com
          </p>
        </a>
        <div className="flex flex-col w-full items-left bg-white p-5 border-2 border-dotted border-[#CFBEE9] rounded-lg">
          <div className="flex items-center text-center space-x-4 mb-1">
            <div className=" bg-[#6E3CBC] h-14 w-14 rounded-full">
              <img className="p-3.5 " src={Map} alt="..." />
            </div>
            <div>
              <p className="text-purple-800 font-semibold">Our Address</p>
            </div>
          </div>
          <hr className="my-2 border-2 border-[#e3d9f3]" />
          <p className="w-[100%] md:w-[80%] lg:w-[100%] font-none mt-2 text-lg text-left md:text-left lg:text-center">
            Wing<span className="text-white">_</span>D, HM
            <span className="text-white">_</span>Tech Park,
            Whitefield,Bengaluru, Karnataka(560066)
          </p>
        </div>
        <a
          href="tel:+919460451905"
          className="flex flex-col w-full items-left bg-white p-5 border-2 border-dotted border-[#CFBEE9] rounded-lg"
        >
          <div className="flex items-center text-left space-x-4 mb-1">
            <div className="bg-[#6E3CBC] h-14 w-14 rounded-full">
              <img className="p-3.5 " src={Call} alt="..." />
            </div>
            <div>
              <p className="text-purple-800 font-semibold">Call Us</p>
            </div>
          </div>
          <hr className="my-2 border-2 border-[#e3d9f3]" />
          <p className="w-[100%] md:w-[80%] lg:w-[100%] font-none mt-2 text-lg text-left">
            +91-9460451905
          </p>
        </a>
      </div>
    </>
  );
}
export default NinthComp;
