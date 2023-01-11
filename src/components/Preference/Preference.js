import React, { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import DatePicker from "react-datepicker";
import addDays from "date-fns/addDays";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Preference() {
  const city = [
    {
      id: 1,
      name: "Jaipur",
      avatar:
        "https://encrypted-tbn2.gstatic.com/image?q=tbn:ANd9GcTN7IOfhAQU8UAlhvup-yPEeUcyCTwUwnc6iY3BdZFlZhrduFf4plimqkfGY_CRlVWWr9teAM2OwGoeulaNmsPOTg",
    },
    {
      id: 2,
      name: "Sikar",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkdDrTX11SIXdzn5n5kst_ocMu95OQLzlBz-6Vueuv9RS4xHOS511Cbhjk3Nmq8KtjtfE&usqp=CAU",
    },
  ];
  const [selectCity, setSelectCity] = useState(city[0]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [totalDays, setTotalDays] = useState("");
  console.log(totalDays);
  const [totalHours, setTotalhours] = useState("");
  console.log(totalHours);
  const [totalMinuates, setTotalMinuates] = useState("");
  console.log(totalMinuates);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(startDate);
  const selectedstarttime = localStorage.setItem("selectedstart", startDate);
  const selectedendtime = localStorage.setItem("selectedend", endDate);
  console.log(selectedstarttime);
  console.log(selectedendtime);
  function onFormSubmit() {
    let startDateTime = moment(startDate);
    let endDateTime = moment(endDate);
    const diff = endDateTime - startDateTime;
    const diffDuration = moment.duration(diff);
    const city = [selectCity.name];
    localStorage.setItem("City", city);
    console.log(diff);
    if (diff >= 21600836) {
      setTotalDays(diffDuration.days());
      localStorage.setItem("day", diffDuration.days());
      setTotalhours(diffDuration.hours());
      localStorage.setItem("hour", diffDuration.hours());
      setTotalMinuates(diffDuration.minutes());
      localStorage.setItem("min", diffDuration.minutes());
    } else {
      toast.warning("please go with minimum 6 hours limit", {
        autoClose: 1000,
      });
    }
  }
  function setStartdate(date) {
    setStartDate(date);
  }
  function setEnddate(date) {
    setEndDate(date);
  }
  return (
    <>
      <div className="w-full justify-center item-center flex">
        <div className="px-0 flex items-center flex-col md:flex-row space-y-4 lg:space-y-0 md:space-x-3 space-x-0">
          <div className="relative md:top-4 lg:top-2">
            <Listbox value={selectCity} onChange={setSelectCity}>
              {({ open }) => (
                <>
                  <Listbox.Label className="text-center block text-sm font-medium text-gray-700">
                    Select Location
                  </Listbox.Label>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative w-72 md:w-40 lg:w-52 px-10 py-1 cursor-default rounded-md border border-gray-300 bg-white text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-[#6E3CBC] sm:text-sm">
                      <span className="flex items-center">
                        <img
                          src={selectCity.avatar}
                          alt=""
                          className="h-10 relative left-[-20px] w-10 flex-shrink-0 rounded-full"
                        />
                        <span className="relative left-[-6px] block truncate">
                          {selectCity.name}
                        </span>
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-4">
                        <ChevronDownIcon
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
                      <Listbox.Options className="absolute z-10 mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {city.map((city) => (
                          <Listbox.Option
                            key={city.id}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? "text-white bg-[#6E3CBC]"
                                  : "text-gray-900",
                                "relative cursor-default select-none w-full py-1 pl-3 pr-9"
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
                                      active ? "text-white" : "text-indigo-600",
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
          <div className="flex items-center space-x-1 md:space-x-3">
            <div>
              <Listbox>
                <Listbox.Label className="text-center block text-sm font-medium text-gray-700">
                  Start Time
                </Listbox.Label>
              </Listbox>
              <DatePicker
                selected={startDate}
                showTimeSelect
                onChange={setStartdate}
                timeFormat="HH:mm"
                viewMode="start time"
                timeIntervals={60}
                timeCaption="time"
                dateFormat="d MMM yyyy"
                placeHolder="start time"
                placeholderText="Start Time"
                name="start time"
                minDate={new Date().getTime()}
                maxDate={addDays(new Date(), 365)}
                className="rounded-md relative text-center top-3 w-36 md:w-36 lg:w-52 xl:w-64 2xl:w-72 py-3"
              />
            </div>
            <div>
              <Listbox>
                <Listbox.Label className="text-center block text-sm font-medium text-gray-700">
                  End Time
                </Listbox.Label>
              </Listbox>
              <DatePicker
                selected={endDate}
                showTimeSelect
                onChange={setEnddate}
                timeFormat="HH:mm"
                viewMode="start time"
                timeIntervals={60}
                timeCaption="time"
                dateFormat="d MMM yyyy"
                placeHolder="start time"
                placeholderText="End Time"
                name="start time"
                minDate={startDate}
                maxDate={addDays(new Date(), 365)}
                className="rounded-md relative text-center top-3 w-36 md:w-36 lg:w-52 xl:w-64 2xl:w-72 py-3"
              />
            </div>
          </div>
          <div className="footer relative md:top-2">
            <button
              className="bg-[#6E3CBC] hover:bg-[#696969] rounded-full px-16 md:px-14 lg:px-15 py-3.5 relative top-2.5 text-white font-semibold"
              onClick={onFormSubmit}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
      {totalDays !== "" && (
        <p className="text-center mt-3">
          <span>Duration is :</span>
          <span
            style={{
              visibility: totalDays === 0 ? "hidden" : "visible",
              // position: totalDays == 0 ? "relative" : "none",
              // left: totalDays == 0 ? "0px" : "0px",
            }}
          >
            {totalDays}day
          </span>
          <span
            style={{
              visibility: totalHours === 0 ? "hidden" : "visible",
              position: totalDays === 0 ? "relative" : "static",
              left: totalDays === 0 ? "-30px" : "0px",
            }}
          >
            {totalHours}'hour or {totalMinuates}'min.
          </span>
        </p>
      )}
    </>
  );
}

export default Preference;
