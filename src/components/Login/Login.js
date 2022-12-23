import React from "react";
// import  { useState, Fragment } from "react";
// import { Listbox, Transition } from "@headlessui/react";
// import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  //   let navigate = useNavigate();

  return (
    <>
      <div className="LoginBackground flex justify-center">
        <div className="w-fit mt-24 py-10">
          <div className="title flex flex-col justify-center">
            <p className="font-semibold text-[#5C329D] text-2xl">
              Welcome Back
            </p>
            <p className="text-[#947db8] text-sm my-1">
              Sign in to your account
            </p>
          </div>
          <div className="flex flex-col">
            <input
              className="relative mt-3 my-2 w-72 md:w-80 px-2 py-3 cursor-default rounded-md border border-gray-300 bg-white text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-[#6E3CBC] "
              placeholder="Email or Phone"
            />
            <input
              className="relative mt-2 mb-3 w-full px-2 py-3 cursor-default rounded-md border border-gray-300 bg-white text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-[#6E3CBC] "
              placeholder="Password"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link to="/forgot-password">
              <button className="text-[#6E3CBC] font-semibold">
                Forgot Password ?
              </button>
            </Link>
            <Link to="/home">
              <button className="bg-[#6E3CBC] rounded px-12 py-3 mt-3 md:mt-0 text-white font-semibold">
                Login
              </button>
            </Link>
          </div>
          <br />
          <hr></hr>
          <div className="flex mt-5 justify-center items-center">
            <p className="mx-1">Don't have an account?</p>
            <Link to="/sign-up">
              <button className="text-[#6E3CBC] font-semibold">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
