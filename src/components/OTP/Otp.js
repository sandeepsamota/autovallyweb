import React from "react";
// import  { useState, Fragment } from "react";
// import { Listbox, Transition } from "@headlessui/react";
// import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Otp() {
  //   let navigate = useNavigate();

  return (
    <>
      <div className="LoginBackground flex justify-center">
        <div className="w-fit mt-24 py-10">
          <div className="title flex flex-col justify-center">
            <p className="font-semibold text-[#5C329D] text-2xl">
              Varification Code
            </p>
            <p className="text-[#947db8] text-sm my-1">
              Type the varification code we've sent to you
            </p>
          </div>
          <div className="flex justify-between items-center px-1 py-3">
            <input
              className="relative h-10 md:h-12 m-1 w-10 px-3 md:w-12 cursor-default rounded-md border border-gray-300 bg-white text-center shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-[#6E3CBC] "
              placeholder="_______"
              maxLength="1"
            />
            <input
              className="relative h-10 md:h-12 m-1 w-10 px-3 md:w-12 cursor-default rounded-md border border-gray-300 bg-white text-center shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-[#6E3CBC] "
              placeholder="_______"
            />
            <input
              className="relative h-10 md:h-12 m-1 w-10 px-3 md:w-12 cursor-default rounded-md border border-gray-300 bg-white text-center shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-[#6E3CBC] "
              placeholder="_______"
            />
            <input
              className="relative h-10 md:h-12 m-1 w-10 px-3 md:w-12 cursor-default rounded-md border border-gray-300 bg-white text-center shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-[#6E3CBC] "
              placeholder="_______"
            />
            <input
              className="relative h-10 md:h-12 m-1 w-10 px-3 md:w-12 cursor-default rounded-md border border-gray-300 bg-white text-center shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-[#6E3CBC] "
              placeholder="_______"
            />
            <input
              className="relative h-10 md:h-12 m-1 w-10 px-3 md:w-12 cursor-default rounded-md border border-gray-300 bg-white text-center shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-[#6E3CBC] "
              placeholder="_______"
            />
          </div>
          <div className="flex justify-center">
            <Link to="/sign-in">
              <button className="bg-[#6E3CBC] rounded px-12 py-3 mt-3 md:mt-0 text-white font-semibold">
                verify
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Otp;
