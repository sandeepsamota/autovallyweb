import React from "react";
import { Menu } from "@headlessui/react";

function Subscription() {
  return (
    <>
      <Menu
        as="div"
        className="relative hidden md:block inline-block text-left"
      >
        <div className="flex space-x-2">
          <Menu.Button className="inline-flex w-full justify-center p-2">
            <p className="w-max font-semibold">Get Your Subscription</p>
          </Menu.Button>
          <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:border-2 focus:border-[#6E3CBC] focus:ring-offset-2 focus:ring-offset-[#6E3CBC]">
            <span>
              <img
                src="https://res.cloudinary.com/dumwnul1q/image/upload/v1672655909/zizltkerrjsyqelqt9ay.png"
                alt=""
                className="h-6 w-6 relative top-[-1px]"
              />
            </span>
          </Menu.Button>
          <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:border-2 focus:border-[#6E3CBC] focus:ring-offset-2 focus:ring-offset-[#6E3CBC]">
            <span>
              <img
                src="https://res.cloudinary.com/dumwnul1q/image/upload/v1672659702/autovally/glefkhsbfw7ia2ctckkp.png"
                alt=""
                className="h-6 w-5 relative top-[-1px]"
              />
            </span>
          </Menu.Button>
          <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:border-2 focus:border-[#6E3CBC] focus:ring-offset-2 focus:ring-offset-[#6E3CBC]">
            <span>
              <img
                src="https://res.cloudinary.com/dumwnul1q/image/upload/v1672655913/gsa3gs7vwc1mj9nyalva.png"
                alt=""
                className="h-6 w-5 relative top-[-1px]"
              />
            </span>
          </Menu.Button>
          <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:border-2 focus:border-[#6E3CBC] focus:ring-offset-2 focus:ring-offset-[#6E3CBC]">
            <span>
              <img
                src="https://res.cloudinary.com/dumwnul1q/image/upload/v1672655911/s2jjlwamr1srslkbounx.png"
                alt=""
                className="h-6 relative top-[-1px] w-6 "
              />
            </span>
          </Menu.Button>
          <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:border-2 focus:border-[#6E3CBC] focus:ring-offset-2 focus:ring-offset-[#6E3CBC]">
            <span>
              <img
                src="https://res.cloudinary.com/dumwnul1q/image/upload/v1672655913/z5eisb8ij6s91z2mml77.png"
                alt=""
                className="h-6 relative top-[-1px] w-6 "
              />
            </span>
          </Menu.Button>
        </div>
      </Menu>
    </>
  );
}
export default Subscription;
