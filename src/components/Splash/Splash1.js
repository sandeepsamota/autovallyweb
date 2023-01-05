import React, { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

import "./Splash.css";
import { useNavigate } from "react-router-dom";

function Splash1() {
  let navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(true);
  const country = [
    {
      id: 1,
      name: "India",
      avatar:
        "https://www.transparentpng.com/thumb/hindu-flag/india-circle-flag-grapplestudio-10.png",
    },
  ];
  const city = [
    {
      id: 1,
      name: "Jaipur",
      avatar:
        "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTN7IOfhAQU8UAlhvup-yPEeUcyCTwUwnc6iY3BdZFlZhrduFf4plimqkfGY_CRlVWWr9teAM2OwGoeulaNmsPOTg",
    },
    {
      id: 2,
      name: "Sikar",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkdDrTX11SIXdzn5n5kst_ocMu95OQLzlBz-6Vueuv9RS4xHOS511Cbhjk3Nmq8KtjtfE&usqp=CAU",
    },
  ];
  const [selectCountry, setSelectCountry] = useState(country[0]);
  const [selectCity, setSelectCity] = useState(city[0]);

  function cityHandler() {
    const Country = [selectCountry.name];
    const CountImg = [selectCountry.avatar];
    const City = [selectCity.name];
    // const CitImg = [selectCity.avatar];
    localStorage.setItem("Country", Country);
    localStorage.setItem("CountImg", CountImg);
    localStorage.setItem("City", City);
    // localStorage.setItem("CitImg", CitImg);
    setTimeout(() => {
      navigate("/home");
      setModalOpen(false);
    }, 3000);
  }
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      {modalOpen && (
        <div className="modalBackground">
          <div className="modalContainer px-11 py-10">
            <div className="body">
              <p className="font-semibold">Select your pickup country/city</p>
            </div>
            <div>
              <Listbox value={selectCountry} onChange={setSelectCountry}>
                {({ open }) => (
                  <>
                    <Listbox.Label className="block text-sm font-medium text-gray-700">
                      Select Country
                    </Listbox.Label>
                    <div className="relative mt-1">
                      <Listbox.Button
                        lable="select country"
                        className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-3 px-5 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-[#6E3CBC] sm:text-sm"
                      >
                        <span className="flex items-center">
                          <img
                            src={selectCountry.avatar}
                            alt=""
                            className="h-10 w-10 flex-shrink-0 rounded-full"
                          />
                          <span className="ml-3 block truncate">
                            {selectCountry.name}
                          </span>
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-4">
                          <ChevronUpDownIcon
                            className="h-5 w-5 text-[#6E3CBC]"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {country.map((person) => (
                            <Listbox.Option
                              key={person.id}
                              className={({ active }) =>
                                classNames(
                                  active
                                    ? "text-white bg-[#6E3CBC]"
                                    : "text-gray-900",
                                  "relative cursor-default select-none py-2 pl-3 pr-9"
                                )
                              }
                              value={person}
                            >
                              {({ selectCountry, active }) => (
                                <>
                                  <div className="flex items-center">
                                    <img
                                      src={person.avatar}
                                      alt=""
                                      className="h-10 w-10 flex-shrink-0 rounded-full"
                                    />
                                    <span
                                      className={classNames(
                                        selectCountry
                                          ? "font-semibold"
                                          : "font-normal",
                                        "ml-3 block truncate"
                                      )}
                                    >
                                      {person.name}
                                    </span>
                                  </div>

                                  {selectCountry ? (
                                    <span
                                      className={classNames(
                                        active
                                          ? "text-white"
                                          : "text-indigo-600",
                                        "absolute inset-y-0 right-0 flex items-center pr-4"
                                      )}
                                    >
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>
            </div>
            <div>
              <Listbox value={selectCity} onChange={setSelectCity}>
                {({ open }) => (
                  <>
                    <Listbox.Label className=" block text-sm font-medium text-gray-700">
                      Select City
                    </Listbox.Label>
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full px-5 py-3 cursor-default rounded-md border border-gray-300 bg-white text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-[#6E3CBC] sm:text-sm">
                        <span className="flex items-center">
                          <img
                            src={selectCity.avatar}
                            alt=""
                            className="h-10 w-10 flex-shrink-0 rounded-full"
                          />
                          <span className="ml-3 block truncate">
                            {selectCity.name}
                          </span>
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-4">
                          <ChevronUpDownIcon
                            className="h-5 w-5 text-[#6E3CBC]"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {city.map((city) => (
                            <Listbox.Option
                              key={city.id}
                              className={({ active }) =>
                                classNames(
                                  active
                                    ? "text-white bg-[#6E3CBC]"
                                    : "text-gray-900",
                                  "relative cursor-default select-none py-2 pl-3 pr-9"
                                )
                              }
                              value={city}
                            >
                              {({ selectCity, active }) => (
                                <>
                                  <div className="flex items-center">
                                    <img
                                      src={city.avatar}
                                      alt=""
                                      className="h-10 w-10 flex-shrink-0 rounded-full"
                                    />
                                    <span
                                      className={classNames(
                                        selectCity
                                          ? "font-semibold"
                                          : "font-normal",
                                        "ml-3 block truncate"
                                      )}
                                    >
                                      {city.name}
                                    </span>
                                  </div>

                                  {selectCity ? (
                                    <span
                                      className={classNames(
                                        active
                                          ? "text-white"
                                          : "text-indigo-600",
                                        "absolute inset-y-0 right-0 flex items-center pr-4"
                                      )}
                                    >
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>
            </div>
            <div className="footer">
              <button
                className="bg-[#6E3CBC] rounded-full px-24 py-4  text-white font-semibold"
                onClick={cityHandler}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Splash1;
