import React from "react";
// import  { useState, Fragment } from "react";
// import { Listbox, Transition } from "@headlessui/react";
// import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SignUp() {
  //   let navigate = useNavigate();

  return (
    <>
      <div className="LoginBackground flex justify-center">
        <div className="w-fit mt-16">
          <div className="title flex flex-col justify-center">
            <p className="font-semibold text-[#5C329D] text-2xl">
              Getting Started
            </p>
            <p className="text-[#947db8] text-sm my-1">
              Create an account to continue
            </p>
          </div>
          <div className="flex flex-col">
            <input
              className="relative mt-3 my-2 w-72 md:w-80 px-2 py-3 cursor-default rounded-md border border-gray-300 bg-white text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-[#6E3CBC] "
              placeholder="Name"
            />
            <input
              className="relative mt-3 my-2 w-72 md:w-80 px-2 py-3 cursor-default rounded-md border border-gray-300 bg-white text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-[#6E3CBC] "
              placeholder="Email"
            />
            <input
              className="relative mt-3 my-2 w-72 md:w-80 px-2 py-3 cursor-default rounded-md border border-gray-300 bg-white text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-[#6E3CBC] "
              placeholder="Phone"
            />
            <input
              className="relative mt-2 mb-3 w-72 md:w-80 px-2 py-3 cursor-default rounded-md border border-gray-300 bg-white text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-[#6E3CBC] "
              placeholder="Password"
            />
          </div>

          <div className="flex justify-center">
            <Link to="/otp">
              <button className="bg-[#6E3CBC] rounded px-12 py-3 mt-3 md:mt-0 text-white font-semibold">
                Sign Up
              </button>
            </Link>
          </div>
          <br />
          <hr></hr>
          <div className="flex mt-5 justify-center items-center">
            <p className="mx-1">Already have an account?</p>
            <Link to="/sign-in">
              <button className="text-[#6E3CBC] font-semibold">Log In</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
