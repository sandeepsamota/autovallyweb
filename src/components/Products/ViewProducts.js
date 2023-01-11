import React, { useState } from "react";
import Navbar1 from "../Header/Navbar1";
import Location from "../Header/Location";
import CarSpeed from "../../assets/hundred.png";
import Image1 from "../../assets/i20.jpg";
import Image2 from "../../assets/i201.jpg";
import Image3 from "../../assets/i203.jpg";
import Image4 from "../../assets/i204.jpg";
import Km from "../../assets/kilometer.png";
import Fuel from "../../assets/fuel.png";
import Manual from "../../assets/manual.png";
import Seating from "../../assets/seating.png";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
const Button = styled.button``;
const ButtonToggle = styled(Button)`
  opacity: 0.6;
  border: 2px solid #cfbee9;
  border-radius: 10px;
  font-size: 11.5px;

  ${({ active }) =>
    active &&
    `
    font-size:11.5px;
    opacity: 1;
    border: 2px solid #6E3CBC;
    border-radius: 10px;

  `};
`;
const ButtonGroup = styled.div``;
const types1 = [
  { title: "Max. Power", value: 220, hp: "hp" },
  { title: "0-60 mph", value: 4.4, hp: "Sec" },
  { title: "Max. Power", value: 220, hp: "mhp" },
];
const types = [{ plan: 180 }, { plan: 348 }, { plan: "unlimited" }];

function ViewProducts() {
  const navigate = useNavigate();
  const [activecar, setActiveCar] = useState(types[0]);

  const car = [
    {
      type: "car",
      name: "Hyundai i20 Asta",
      img: Image1,
      allowedkm: activecar.plan,
      dayprice: 4000,
      hourprice: 200,
      minprice: 4,
      deliveryprice: 280,
      security: 1000,
      airconditioner: "yes",
      extra: 9,
      gear: "Manual",
      seating: 4,
      fuel: "Petrol",
      speed: CarSpeed,
    },
  ];
  const slides = [
    {
      url: Image1,
    },
    {
      url: Image2,
    },
    {
      url: Image3,
    },
    {
      url: Image4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const [activeBtn, setActiveBtn] = useState(true);
  function btnHandler() {
    console.log("clicked");
    navigate("/confirm-order");
  }

  return (
    <>
      <Navbar1 />
      <div className="flex justify-center">
        <Location />
      </div>
      <div className="container flex flex-col mx-auto">
        <div className="flex items-center space-y-3 flex-col px-0 md:px-4 justify-center">
          <div className="border-none rounded-md mt-[-10px] md:m-4 max-w-5xl w-full">
            {car.map((car) => (
              <div className="flex flex-col md:flex-row md:grid md:grid-cols-2 lg:items-center space-x-4">
                <div className="rounded relative my-6 h-42 w-42 md:w-full md:h-full lg:w-full lg:h-full">
                  <div className="flex flex-col m-auto px-4 group">
                    <div>
                      <img
                        src={slides[currentIndex].url}
                        alt="..."
                        className="md:h-full md:w-full rounded bg-center bg-cover duration-500"
                      ></img>
                    </div>
                    <div className="flex flex-row top-4 border-rounded-xl justify-center py-2">
                      {slides.map((slide, slideIndex) => (
                        <div
                          key={slideIndex}
                          onClick={() => goToSlide(slideIndex)}
                          className="text-2xl md:text-4xl text-[#6E3CBC] cursor-pointer"
                        >
                          <img
                            className="h-18 rounded-md px-0.5 md:px-1"
                            src={slide.url}
                            alt="..."
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex-1 my-0 md:mt-6 lg:mt-[-55px]">
                  <p className="oneappheading rounded">{car.name}</p>
                  <div className="relative top-[-10px] xl:top-0 space-y-4">
                    <div className="grid grid-cols-2 grid-rows-2 mt-4 gap-4">
                      <p className="flex align-center space-x-1">
                        <img
                          className="rounded-xl h-6"
                          src={Km}
                          alt="..."
                        ></img>
                        {car.allowedkm}/kms
                      </p>
                      <p className="flex items-center space-x-1">
                        <img
                          className="rounded-xl h-6"
                          src={car.speed}
                          alt="..."
                        ></img>
                        Speed limit
                      </p>
                      <p className="flex align-center space-x-1">
                        <img
                          className="rounded-sm h-6"
                          src={Fuel}
                          alt="..."
                        ></img>
                        {car.fuel}
                      </p>
                      <p className="flex items-center space-x-1">
                        Extra ₹{car.extra}/km
                      </p>
                      <p className="flex align-center space-x-1">
                        <img
                          className="rounded-xl h-6"
                          src={Seating}
                          alt="..."
                        ></img>
                        {car.seating} Passanger
                      </p>
                      <p className="flex items-center space-x-1">
                        <img
                          className="rounded-sm h-6"
                          src={Manual}
                          alt="..."
                        ></img>
                        {car.gear}
                      </p>
                    </div>
                  </div>
                  <div className="hidden relative top-[-19px] xl:top-0 md:block">
                    <div className="flex px-1.5 relative top-3 xl:space-x-72">
                      <div className="text-sm font-semibold">car spec</div>
                      <div className="text-sm text-[#6E3CBC] cursor-pointer">
                        see more
                      </div>
                    </div>
                    <div className="flex justify-start my-4 space-x-3 md:space-x-3">
                      {types1.map((type1) => (
                        <div
                          key={type1.title}
                          style={{ fontSize: "13px" }}
                          className="w-32 opacity-100 border-2 rounded-lg border-[#cfbee9]"
                        >
                          <div className="grid w-full grid-rows-1">
                            <button className="flex p-1.5 w-full flex-col items-start rounded shadow-md">
                              <p className="text-center ">{type1.title}</p>
                              <p className="text-center oneappheading">
                                {type1.value}
                              </p>
                              <p className="text-center ">{type1.hp}</p>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <ButtonGroup className="flex justify-start my-4 space-x-3 md:space-x-3">
                      {types.map((type1) => (
                        <ButtonToggle
                          // key={type1.plan}
                          active={activecar === type1}
                          onClick={() => setActiveCar(type1)}
                          className="w-32"
                        >
                          <div className="grid w-full grid-rows-1">
                            <button className="flex p-1.5 w-full flex-col items-center rounded shadow-md">
                              <p className="text-center oneappheading">
                                {type1.plan}/kms/day
                              </p>
                              <hr className="my-2 w-[100%] border-2 border-[#e3d9f3]" />
                            </button>
                          </div>
                        </ButtonToggle>
                      ))}
                    </ButtonGroup>
                  </div>
                </div>
                <div className="flex-1 md:hidden my-0 md:mt-6 lg:mt-[-55px]">
                  <div className="block px-3 md:hidden">
                    <div className="flex px-1.5 relative top-3 justify-between">
                      <div className="text-sm font-semibold">car spec</div>
                      <div className="text-sm text-[#6E3CBC] cursor-pointer">
                        see more
                      </div>
                    </div>

                    <div className="flex justify-center my-4 space-x-1 md:space-x-3">
                      {types1.map((type1) => (
                        <div
                          key={type1}
                          style={{ fontSize: "13px" }}
                          className="w-28 border-2 rounded-xl border-[#cfbee9]"
                        >
                          <div className="grid w-full grid-rows-1">
                            <button className="flex p-1.5 w-full flex-col items-start rounded shadow-md">
                              <p className="text-center ">{type1.title}</p>
                              <p className="text-center oneappheading">
                                {type1.value}
                              </p>
                              <p className="text-center ">{type1.hp}</p>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <ButtonGroup className="flex lg:hidden justify-center px-3 space-x-1 md:space-x-3">
                    {types.map((type1) => (
                      <ButtonToggle
                        // key={type1.plan}
                        active={activecar === type1}
                        onClick={() => setActiveCar(type1)}
                        className="w-28 py-0.5"
                      >
                        <div className="grid w-full grid-rows-1">
                          <button className="flex p-1.5 w-full flex-col items-start rounded shadow-md">
                            <p className="text-center oneappheading">
                              {type1.plan}/kms
                            </p>
                            <hr className="my-2 w-[100%] border-2 border-[#e3d9f3]" />
                          </button>
                        </div>
                      </ButtonToggle>
                    ))}
                  </ButtonGroup>

                  <div className="rounded-md shadow-sm mt-[-15px] flex flex-col">
                    <div className="w-full px-1 pt-12 lg:mx-6 flex items-center">
                      <hr className="md:block w-full border-2 border-[#e3d9f3]" />
                      <p className="mx-4 text-base text-[#6E3CBC] oneappheading">
                        Total<span className="text-white">_</span>Fare
                      </p>
                      <hr className="md:block w-full border-2 border-[#e3d9f3]" />
                    </div>
                    <div className="mx-3.5 mt-3 md:mx-10 flex flex-row items-baseline text-sm">
                      <p className="basis-2/3 text-left  text-sm">Base fare:</p>
                      <p>
                        {localStorage.setItem(
                          "dailyfare",
                          car.dayprice * localStorage.getItem("day") +
                            car.hourprice * localStorage.getItem("hour") +
                            car.minprice * localStorage.getItem("min")
                        )}
                      </p>
                      <p className="basis-1/3">
                        ₹{" "}
                        {car.dayprice * localStorage.getItem("day") +
                          car.hourprice * localStorage.getItem("hour") +
                          car.minprice * localStorage.getItem("min")}
                      </p>
                    </div>
                    <div className="mx-3.5 mt-3 md:mx-10 flex flex-row items-baseline text-sm">
                      <p className="basis-2/3 text-left  text-sm">
                        Doorstep delivery & pickup
                      </p>
                      <p className="basis-1/3">₹ {car.deliveryprice}</p>
                    </div>
                    <div className="mx-3.5 mt-3 md:mx-10 flex flex-row items-baseline text-sm">
                      <p className="basis-2/3 text-left  text-sm">
                        Insurance & GST{" "}
                      </p>
                      <p className="basis-1/3">₹ {car.deliveryprice}</p>
                    </div>
                    <div className="mx-3.5 mt-3 md:mx-10 flex flex-row items-baseline text-sm">
                      <p className="basis-2/3 text-left  text-sm">
                        Refundable security deposit
                      </p>
                      <p className="basis-1/3">₹ {car.security}</p>
                    </div>
                    <div className="mx-3.5 mt-3 md:mx-10 flex flex-row items-baseline text-sm">
                      <hr className="md:block w-full border-2 border-[#e3d9f3]" />
                    </div>
                    <div className="mx-3.5 mt-3 md:mx-10 flex flex-row items-baseline text-sm">
                      <p className="basis-2/3 text-left oneappheading text-sm">
                        Total
                      </p>
                      {/* <p className="hidden"> */}
                      {localStorage.setItem(
                        "Fare",
                        car.dayprice * localStorage.getItem("day") +
                          car.hourprice * localStorage.getItem("hour") +
                          car.minprice * localStorage.getItem("min") +
                          car.deliveryprice +
                          car.deliveryprice +
                          car.security
                      )}
                      {/* </p> */}
                      <p className="basis-1/3 oneappheading">
                        ₹ {localStorage.getItem("Fare")}
                      </p>
                    </div>
                    <div className="flex flex-col md:flex-row md:my-3 items-center">
                      <div className="md:basis-1/2 mx-3.5 mt-3 md:mt-0 md:mx-10 flex flex-row space-x-2 items-center ">
                        <input
                          type="checkbox"
                          onChange={() => setActiveBtn(!activeBtn)}
                          className="rounded relative top-[-10px] md:top-[-10px] lg:top-0"
                        />
                        <p className="text-sm">
                          By submitting this form you agree to our
                          <Link to="/home">terms & conditions</Link>.
                        </p>
                      </div>
                      <div className="md:basis-1/3 my-3 md:my-0 flex ">
                        <button
                          disabled={activeBtn}
                          style={{
                            backgroundColor: activeBtn ? "gray" : "#6E3CBC",
                          }}
                          onClick={btnHandler}
                          className="rounded-full w-64 md:w-44 lg:w-52 lg:w-60 md:px-10 lg:px-15 py-3.5 text-white font-semibold"
                        >
                          Proceed
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-md shadow-sm bg-gray-100 mt-10 flex flex-col">
                    <div className="w-full pt-12 lg:mx-6 flex items-center">
                      <hr className="hidden md:block w-[28%] lg:w-[34%] border-2 border-[#e3d9f3]" />
                      <p className="mx-4 text-base text-[#6E3CBC] oneappheading">
                        IMPORTANT POINTS TO REMEMBER
                      </p>
                      <hr className="hidden md:block w-[28%] lg:w-[34%] border-2 border-[#e3d9f3]" />
                    </div>
                    <div className="mx-3.5 mt-6 md:mx-10 flex flex-col md:flex-row items-baseline text-sm">
                      <p className="basis-1/3 text-left oneappheading text-sm">
                        CHANGE IN PRICING PLAN:
                      </p>
                      <p className="basis-2/3">
                        For Example The pricing Plan is 6 kms/hr, without fuel
                        cannot be changed after the booking is made
                      </p>
                    </div>
                    <br />
                    <div className="mx-3.5 md:mx-10 flex flex-col md:flex-row items-baseline text-sm">
                      <p className="basis-1/3 oneappheading text-sm">FUEL:</p>
                      <p className="basis-2/3">
                        In case you are returning the car at a lower fuel level
                        than what was received, we will charge a flat Rs 500
                        refuelling service charge + actual fuel cost to get the
                        tank to the same level as what was received
                      </p>
                    </div>
                    <br />
                    <div className="mx-3.5 md:mx-10 flex flex-col md:flex-row items-baseline justify-between text-sm">
                      <p className="basis-1/3 text-left oneappheading text-sm">
                        TOLLS, PARKING, INTER-STATE TAXES:
                      </p>
                      <p className="basis-2/3">To be paid by you.</p>
                    </div>
                    <br />
                    <div className="mx-3.5 md:mx-10 flex flex-col md:flex-row items-baseline justify-between text-sm">
                      <p className="basis-1/3 oneappheading text-sm">
                        ID VERIFICATION:
                      </p>
                      <p className="basis-2/3">
                        Please keep your original Driving License handy. While
                        delivering the car to you, our executive will verify
                        your original Driving License and ID proof (same as the
                        ones whose details were provided while making the
                        booking). This verification is mandatory. In the
                        unfortunate case where you cannot show these documents,
                        we will not be able to handover the car to you, and it
                        will be treated as a late cancellation (100% of the fare
                        would be payable). Driving license printed on A4 sheet
                        of paper (original or otherwise) will not be considered
                        as a valid document.
                      </p>
                    </div>
                    <br />
                    <div className="mx-3.5 md:mx-10 flex flex-col md:flex-row items-baseline justify-between text-sm">
                      <p className="basis-1/3 oneappheading text-sm">
                        PRE-HANDOVER INSPECTION:
                      </p>
                      <p className="basis-2/3">
                        Please inspect the car (including the fuel gauge and
                        odometer) thoroughly before approving the checklist.
                      </p>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {car.map((car) => (
            <div className="hidden my-0 md:mt-6 lg:mt-[-55px] md:block">
              <div className="block px-3 md:hidden">
                <div className="flex px-1.5 relative top-3 justify-between">
                  <div className="text-sm font-semibold">car spec</div>
                  <div className="text-sm text-[#6E3CBC] cursor-pointer">
                    see more
                  </div>
                </div>

                <div className="flex justify-center my-4 space-x-1 md:space-x-3">
                  {types1.map((type1) => (
                    <div
                      key={type1}
                      style={{ fontSize: "13px" }}
                      className="w-28 border-2 rounded-xl border-[#cfbee9]"
                    >
                      <div className="grid w-full grid-rows-1">
                        <button className="flex p-1.5 w-full flex-col items-start rounded shadow-md">
                          <p className="text-center ">{type1.title}</p>
                          <p className="text-center oneappheading">
                            {type1.value}
                          </p>
                          <p className="text-center ">{type1.hp}</p>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <ButtonGroup className="flex lg:hidden justify-center px-3 space-x-1 md:space-x-3">
                {types.map((type1) => (
                  <ButtonToggle
                    // key={type1.plan}
                    active={activecar === type1}
                    onClick={() => setActiveCar(type1)}
                    className="w-28"
                  >
                    <div className="grid w-full grid-rows-1">
                      <button className="flex p-1.5 w-full flex-col items-start rounded shadow-md">
                        <p className="text-center oneappheading">
                          {type1.plan}/kms
                        </p>
                        <hr className="my-2 w-[100%] border-2 border-[#e3d9f3]" />
                      </button>
                    </div>
                  </ButtonToggle>
                ))}
              </ButtonGroup>

              <div className="rounded-md shadow-sm md:mt-[10px] lg:mt-[-50px] flex flex-col">
                <div className="w-full px-1 pt-0 lg:mx-6 flex items-center">
                  <hr className="md:block w-full border-2 border-[#e3d9f3]" />
                  <p className="mx-4 text-base text-[#6E3CBC] oneappheading">
                    Total<span className="text-white">_</span>Fare
                  </p>
                  <hr className="md:block w-full mr-10 border-2 border-[#e3d9f3]" />
                </div>
                <div className="mx-3.5 mt-3 md:mx-10 flex flex-row items-baseline text-sm">
                  <p className="basis-2/3 text-left text-sm">Base fare:</p>
                  <p>
                    {localStorage.setItem(
                      "dailyfare",
                      car.dayprice * localStorage.getItem("day") +
                        car.hourprice * localStorage.getItem("hour") +
                        car.minprice * localStorage.getItem("min")
                    )}
                  </p>
                  <p className="basis-1/3">
                    ₹{" "}
                    {car.dayprice * localStorage.getItem("day") +
                      car.hourprice * localStorage.getItem("hour") +
                      car.minprice * localStorage.getItem("min")}
                  </p>
                </div>
                <div className="mx-3.5 mt-3 md:mx-10 flex flex-row items-baseline text-sm">
                  <p className="basis-2/3 text-left  text-sm">
                    Doorstep delivery & pickup
                  </p>
                  <p className="basis-1/3">₹ {car.deliveryprice}</p>
                </div>
                <div className="mx-3.5 mt-3 md:mx-10 flex flex-row items-baseline text-sm">
                  <p className="basis-2/3 text-left  text-sm">
                    Insurance & GST
                  </p>
                  <p className="basis-1/3">₹ {car.deliveryprice}</p>
                </div>
                <div className="mx-3.5 mt-3 md:mx-10 flex flex-row items-baseline text-sm">
                  <p className="basis-2/3 text-left  text-sm">
                    Refundable security deposit
                  </p>
                  <p className="basis-1/3">₹ {car.security}</p>
                </div>
                <div className="mx-3.5 mt-3 md:mx-10 flex flex-row items-baseline text-sm">
                  <hr className="md:block w-full border-2 border-[#e3d9f3]" />
                </div>
                <div className="mx-3.5 mt-3 md:mx-10 flex flex-row items-baseline text-sm">
                  <p className="basis-2/3 text-left oneappheading text-sm">
                    Total
                  </p>
                  {/* <p className="hidden"> */}
                  {localStorage.setItem(
                    "Fare",
                    car.dayprice * localStorage.getItem("day") +
                      car.hourprice * localStorage.getItem("hour") +
                      car.minprice * localStorage.getItem("min") +
                      car.deliveryprice +
                      car.deliveryprice +
                      car.security
                  )}
                  {/* </p> */}
                  <p className="basis-1/3 oneappheading">
                    ₹ {localStorage.getItem("Fare")}
                  </p>
                </div>
                <div className="flex flex-col md:flex-row md:my-3 items-center">
                  <div className="md:basis-1/2 mx-3.5 mt-3 md:mt-0 md:mx-10 flex flex-row space-x-2 items-center ">
                    <input
                      type="checkbox"
                      onChange={() => setActiveBtn(!activeBtn)}
                      className="rounded relative top-[-10px] md:top-[-10px] lg:top-0 focus:ring-0"
                    />
                    <span className="text-sm">
                      By submitting this form you agree to our
                      <Link to="/home">terms & conditions</Link>.
                    </span>
                  </div>
                  <div className="md:basis-1/3 my-3 md:my-0 flex ">
                    <button
                      disabled={activeBtn}
                      style={{
                        backgroundColor: activeBtn ? "gray" : "#6E3CBC",
                      }}
                      onClick={btnHandler}
                      className="rounded-full w-64 md:w-44 lg:w-52 lg:w-60 md:px-10 lg:px-15 py-3.5 text-white font-semibold"
                    >
                      Proceed
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-md shadow-sm bg-gray-100 mt-10 flex flex-col">
                <div className="w-full pt-12 lg:mx-6 flex items-center">
                  <hr className="hidden md:block w-[28%] lg:w-[34%] border-2 border-[#e3d9f3]" />
                  <p className="mx-4 text-base text-[#6E3CBC] oneappheading">
                    IMPORTANT POINTS TO REMEMBER
                  </p>
                  <hr className="hidden md:block w-[28%] lg:w-[34%] border-2 border-[#e3d9f3]" />
                </div>
                <div className="mx-3.5 mt-6 md:mx-10 flex flex-col md:flex-row items-baseline text-sm">
                  <p className="basis-1/3 text-left oneappheading text-sm">
                    CHANGE IN PRICING PLAN:
                  </p>
                  <p className="basis-2/3">
                    For Example The pricing Plan is 6 kms/hr, without fuel
                    cannot be changed after the booking is made
                  </p>
                </div>
                <br />
                <div className="mx-3.5 md:mx-10 flex flex-col md:flex-row items-baseline text-sm">
                  <p className="basis-1/3 oneappheading text-sm">FUEL:</p>
                  <p className="basis-2/3">
                    In case you are returning the car at a lower fuel level than
                    what was received, we will charge a flat Rs 500 refuelling
                    service charge + actual fuel cost to get the tank to the
                    same level as what was received
                  </p>
                </div>
                <br />
                <div className="mx-3.5 md:mx-10 flex flex-col md:flex-row items-baseline justify-between text-sm">
                  <p className="basis-1/3 text-left oneappheading text-sm">
                    TOLLS, PARKING, INTER-STATE TAXES:
                  </p>
                  <p className="basis-2/3">To be paid by you.</p>
                </div>
                <br />
                <div className="mx-3.5 md:mx-10 flex flex-col md:flex-row items-baseline justify-between text-sm">
                  <p className="basis-1/3 oneappheading text-sm">
                    ID VERIFICATION:
                  </p>
                  <p className="basis-2/3">
                    Please keep your original Driving License handy. While
                    delivering the car to you, our executive will verify your
                    original Driving License and ID proof (same as the ones
                    whose details were provided while making the booking). This
                    verification is mandatory. In the unfortunate case where you
                    cannot show these documents, we will not be able to handover
                    the car to you, and it will be treated as a late
                    cancellation (100% of the fare would be payable). Driving
                    license printed on A4 sheet of paper (original or otherwise)
                    will not be considered as a valid document.
                  </p>
                </div>
                <br />
                <div className="mx-3.5 md:mx-10 flex flex-col md:flex-row items-baseline justify-between text-sm">
                  <p className="basis-1/3 oneappheading text-sm">
                    PRE-HANDOVER INSPECTION:
                  </p>
                  <p className="basis-2/3">
                    Please inspect the car (including the fuel gauge and
                    odometer) thoroughly before approving the checklist.
                  </p>
                </div>
                <br />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default ViewProducts;
