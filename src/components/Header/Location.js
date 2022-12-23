import React from "react";
// import { Fragment } from "react";
import { Menu } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import LocationIcon from "../../assets/location.png";

function Location() {
  const Country = localStorage.getItem("Country");
  const CountImg = localStorage.getItem("CountImg");
  const City = localStorage.getItem("City");
  console.log(Country);
  console.log(City);

  return (
    <>
      <div className="relative inline-block w-24">
        <div>
          <div className="inline-flex w-full justify-center border-2 border-t-white border-r-white border-l-white border-b-white hover:border-b-[#6E3CBC] px-4 py-2 text-sm font-medium text-gray-700  hover:bg-gray-50 ">
            <span>
              <img
                src={CountImg}
                alt=""
                className="h-6 w-6 flex-shrink-0 rounded-full"
              />
            </span>
            <span className="pl-1">{Country}</span>
          </div>
        </div>
      </div>{" "}
      <Menu as="div" className="relative inline-block w-24 text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:border-2 focus:border-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
            <span>
              <img
                src={LocationIcon}
                alt=""
                className="h-6 w-6 flex-shrink-0 rounded-full"
              />
            </span>
            <span>{City}</span>
          </Menu.Button>
        </div>
      </Menu>
    </>
  );
}
export default Location;
