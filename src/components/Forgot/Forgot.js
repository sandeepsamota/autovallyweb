import React from "react";
// import  { useState, Fragment } from "react";
// import { Listbox, Transition } from "@headlessui/react";
// import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Forgot() {
  //   let navigate = useNavigate();

  return (
    <>
      <div className="LoginBackground flex justify-center">
        <div className="w-fit mt-24  py-10">
          <div className="title flex flex-col justify-center">
            <p className="font-semibold text-[#5C329D] text-2xl">
              Forgot Password
            </p>
            <p className="text-[#947db8] w-60 text-sm my-1">
              Select which contact details should we use to reset your password
            </p>
          </div>
          <div className="flex flex-col">
            <input
              className="relative mt-3 my-2 w-72 md:w-80 px-2 py-3 cursor-default rounded-md border border-gray-300 bg-white text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-[#6E3CBC] "
              placeholder="Email"
            />
            <input
              className="relative mt-2 mb-3 w-72 md:w-80 px-2 py-3 cursor-default rounded-md border border-gray-300 bg-white text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-[#6E3CBC] "
              placeholder="Phone"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-center">
            <Link to="/reset-password">
              <button className="bg-[#6E3CBC] rounded-full px-12 py-3 mt-3 md:mt-0 text-white font-semibold">
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forgot;
