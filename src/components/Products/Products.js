import React from "react";
import { useState } from "react";
import "../Home/SecondComp.css";
import Preference from "../Preference/Preference";
import Km from "../../assets/kilometer.png";
import Fuel from "../../assets/fuel.png";
import Manual from "../../assets/manual.png";
import Seating from "../../assets/seating.png";
import CarSpeed from "../../assets/hundred.png";
import BikeSpeed from "../../assets/eighty.png";
import Car1 from "../../assets/i20.jpg";
import Car2 from "../../assets/i10.png";
import Car3 from "../../assets/swift.png";
import Car4 from "../../assets/verna.png";
import Car5 from "../../assets/scorpio.png";
import Car6 from "../../assets/thar.png";
import Bike1 from "../../assets/standred.png";
import Bike2 from "../../assets/hunter.webp";
import Bike3 from "../../assets/rc_200.png";
import Bike4 from "../../assets/r15_v4.png";
import Bike5 from "../../assets/xtereme.png";
import Bike6 from "../../assets/splendor.gif";
import Scotter from "../../assets/activa.png";
import Navbar1 from "../Header/Navbar1";
import { Link } from "react-router-dom";

function Products() {
  let day = localStorage.getItem("day");
  let hour = localStorage.getItem("hour");
  let min = localStorage.getItem("min");
  const [coast, setCoast] = useState("");

  console.log(day);
  console.log(hour);
  console.log(min);
  console.log(setCoast);
  const car = [
    {
      type: "car",
      name: "Hyundai i20 Asta",
      img: Car1,
      allowedkm: 349,
      dayprice: 4000,
      extra: 9,
      price: coast,
      gear: "Manual",
      seating: 4,
      fuel: "Petrol",
      speed: CarSpeed,
    },
    {
      type: "car",
      name: "Hyundai Grand i10",
      img: Car2,
      allowedkm: 349,
      extra: 8,
      dayprice: 3500,
      price: coast,
      gear: "Manual",
      seating: 4,
      fuel: "Petrol",
      speed: CarSpeed,
    },
    {
      type: "car",
      name: "Maruti Suzuki Swift",
      img: Car3,
      allowedkm: 349,
      extra: 7,
      dayprice: 3200,
      price: coast,
      gear: "Manual",
      seating: 4,
      fuel: "Petrol",
      speed: CarSpeed,
    },
    {
      type: "car",
      name: "Hyundai Verna",
      img: Car4,
      allowedkm: 349,
      extra: 10,
      dayprice: 4500,
      price: coast,
      gear: "Manual",
      seating: 5,
      fuel: "Petrol",
      speed: CarSpeed,
    },
    {
      type: "car",
      name: "Mahindra Scropio Classic",
      img: Car5,
      allowedkm: 349,
      extra: 14,
      dayprice: 5500,
      price: coast,
      gear: "Manual",
      seating: 7,
      fuel: "Diesel",
      speed: CarSpeed,
    },
    {
      type: "car",
      name: "Mahindra Thar",
      img: Car6,
      allowedkm: 349,
      extra: 18,
      dayprice: 5000,
      price: coast,
      gear: "Manual",
      seating: 5,
      fuel: "Diesel",
      speed: CarSpeed,
    },
  ];
  const scotter = [
    {
      type: "scooter",
      name: "Honda Activa",
      img: Scotter,
      allowedkm: 248,
      extra: 3,
      dayprice: 700,
      price: coast,
      gear: "Automatic",
      seating: 2,
      fuel: "Petrol",
      speed: BikeSpeed,
    },
  ];
  const bike = [
    {
      type: "bike",
      name: "Royal Enfield Standred",
      img: Bike1,
      allowedkm: 248,
      extra: 4,
      dayprice: 1500,
      price: coast,
      gear: "Manual",
      seating: 2,
      fuel: "Petrol",
      speed: BikeSpeed,
    },
    {
      type: "bike",
      name: "Royal Enfield Hunter",
      img: Bike2,
      allowedkm: 248,
      extra: 4,
      dayprice: 1500,
      price: coast,
      gear: "Manual",
      seating: 2,
      fuel: "Petrol",
      speed: BikeSpeed,
    },
    {
      type: "bike",
      name: "KTM Rc 200",
      img: Bike3,
      allowedkm: 248,
      extra: 5,
      dayprice: 1600,
      price: coast,
      gear: "Manual",
      seating: 2,
      fuel: "Petrol",
      speed: BikeSpeed,
    },
    {
      type: "bike",
      name: "R15 V4",
      img: Bike4,
      allowedkm: 248,
      extra: 4,
      dayprice: 1500,
      price: coast,
      gear: "Manual",
      seating: 2,
      fuel: "Petrol",
      speed: BikeSpeed,
    },
    {
      type: "bike",
      name: "Hero Xtereme",
      img: Bike5,
      allowedkm: 248,
      extra: 3,
      dayprice: 900,
      price: coast,
      gear: "Manual",
      seating: 2,
      fuel: "Petrol",
      speed: BikeSpeed,
    },
    {
      type: "bike",
      name: "Hero Splendor X-Tech",
      img: Bike6,
      allowedkm: 248,
      extra: 3,
      dayprice: 700,
      price: coast,
      gear: "Manual",
      seating: 2,
      fuel: "Petrol",
      speed: BikeSpeed,
    },
  ];
  // function priceCalcultion() {
  //   const dayprice = 3500;
  //   const hourprice = 200;
  //   const semiday = 180;
  //   const halfday = 160;
  //   const morehalfday = 150;
  //   const minprice = 4;
  //   if (day === 0) {
  //     setDayCoast(0);
  //   } else if (day !== 0) {
  //     setDayCoast(day * dayprice);
  //   } else {
  //     console.log("clicked");
  //   }
  //   if (hour === 0) {
  //     setHourCoast(0);
  //   } else if (hour < 6) {
  //     setHourCoast(hour * hourprice);
  //   } else if (hour < 12) {
  //     setHourCoast(hour * semiday);
  //   } else if (hour < 18) {
  //     setHourCoast(hour * halfday);
  //   } else if (hour > 18) {
  //     setHourCoast(hour * morehalfday);
  //   } else {
  //     console.log("clicked");
  //   }
  //   if (min === 0) {
  //     setMinCoast(0);
  //   } else if (min !== 0) {
  //     setMinCoast(min * minprice);
  //   } else {
  //     console.log("clicked");
  //   }
  //   setCoast(days + hours + mins);
  // }
  // console.log(days);
  // console.log(hours);
  // console.log(mins);
  // console.log(coast);

  return (
    <>
      <Navbar1 />
      <div className="relative mt-3 top-0">
        <Preference />
      </div>
      <div className="container flex flex-col space-y-0 md:space-y-5  mx-auto">
        <div className="text-center text-[#6E3CBC] text-xl md:mt-6 oneappheading">
          Cars
        </div>

        {car.map((car) => (
          <div className="flex items-center space-y-3 flex-col px-4 justify-center">
            <div className="border-none shadow-md rounded-md m-4 max-w-3xl w-full">
              <div className="flex flex-col md:flex-row lg:items-center space-x-4">
                <div className="rounded relative my-6 h-42 w-42 md:w-80 lg:w-64 lg:h-32">
                  <div className="flex bg-[#6E3CBC] rounded-md w-fit px-2 py-1 absolute top-0.5 right-1">
                    <p className="text-white">₹{car.dayprice}/Day</p>
                  </div>
                  <img
                    className="rounded-xl lg:h-32"
                    src={car.img}
                    alt="..."
                  ></img>
                </div>
                <div className="flex-1 my-auto">
                  <p className="oneappheading rounded">{car.name}</p>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-3 mt-4 gap-4">
                      <p className="flex align-center">
                        <img
                          className="rounded-xl h-6"
                          src={Km}
                          alt="..."
                        ></img>
                        {car.allowedkm}/kms
                      </p>
                      <p className="flex items-center">
                        <img
                          className="rounded-xl h-6"
                          src={car.speed}
                          alt="..."
                        ></img>
                        speed limit
                      </p>
                      <p className="flex align-center">
                        <img
                          className="rounded-sm h-6"
                          src={Fuel}
                          alt="..."
                        ></img>
                        {car.fuel}
                      </p>
                      <p className="flex items-center">Extra ₹{car.extra}/km</p>
                      <p className="flex align-center">
                        <img
                          className="rounded-xl h-6"
                          src={Seating}
                          alt="..."
                        ></img>
                        {car.seating} Passanger
                      </p>
                      <div className="flex items-center space-x-1">
                        <img
                          className="rounded-sm h-6"
                          src={Manual}
                          alt="..."
                        ></img>
                        <p>{car.gear}</p>
                      </div>
                    </div>

                    <div className="grid relative top-[-8px] md:grid-cols-3 justify-start">
                      <Link to="/view-products">
                        <button
                          // onClick={priceCalcultion}
                          className="bg-[#6e3cbc] px-9 md:px-7  py-3 text-white rounded"
                        >
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="text-center text-[#6E3CBC] text-xl oneappheading">
          Bikes
        </div>
        {bike.map((bike) => (
          <div className="flex items-center space-y-3 flex-col px-4 justify-center">
            <div className="border-none shadow-md rounded-md m-4 max-w-3xl w-full">
              <div className="flex flex-col md:flex-row lg:items-center space-x-4">
                <div className="rounded relative my-6 h-42 w-42 md:w-80 lg:w-64 lg:h-32">
                  <div className="flex bg-[#6E3CBC] rounded-md w-fit px-2 py-1 absolute top-[-30px] right-1">
                    <p className="text-white">₹{bike.dayprice}/Day</p>
                  </div>
                  <img className="rounded-xl" src={bike.img} alt="..."></img>
                </div>
                <div className="flex-1 my-auto">
                  <p className="oneappheading rounded">{bike.name}</p>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-3 mt-4 gap-4">
                      <p className="flex align-center">
                        <img
                          className="rounded-xl h-6"
                          src={Km}
                          alt="..."
                        ></img>
                        {bike.allowedkm}/kms
                      </p>
                      <p className="flex items-center">
                        <img
                          className="rounded-xl h-6"
                          src={bike.speed}
                          alt="..."
                        ></img>
                        speed limit
                      </p>
                      <p className="flex align-center">
                        <img
                          className="rounded-sm h-6"
                          src={Fuel}
                          alt="..."
                        ></img>
                        {bike.fuel}
                      </p>
                      <p className="flex items-center">
                        Extra ₹{bike.extra}/km
                      </p>
                      <p className="flex align-center">
                        <img
                          className="rounded-xl h-6"
                          src={Seating}
                          alt="..."
                        ></img>
                        {bike.seating} Passanger
                      </p>
                      <div className="flex items-center space-x-1">
                        <img
                          className="rounded-sm h-6"
                          src={Manual}
                          alt="..."
                        ></img>
                        <p>{bike.gear}</p>
                      </div>
                    </div>

                    <div className="grid relative top-[-8px] md:grid-cols-3 justify-start">
                      <Link to="/view-products">
                        <button
                          // onClick={priceCalcultion}
                          className="bg-[#6e3cbc] px-9 md:px-7  py-3 text-white rounded"
                        >
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="text-center text-[#6E3CBC] text-xl oneappheading">
          Scotter
        </div>
        {scotter.map((scotter) => (
          <div className="flex items-center space-y-3 flex-col px-4 justify-center">
            <div className="border-none shadow-md rounded-md m-4 max-w-3xl w-full">
              <div className="flex flex-col md:flex-row lg:items-center space-x-4">
                <div className="rounded relative my-6 h-42 w-42 md:w-80 lg:w-64 lg:h-32">
                  <div className="flex bg-[#6E3CBC] rounded-md w-fit px-2 py-1 absolute top-[-15px] right-0">
                    <p className="text-white">₹{scotter.dayprice}/Day</p>
                  </div>
                  <img className="rounded-xl" src={scotter.img} alt="..."></img>
                </div>
                <div className="flex-1 my-auto">
                  <p className="oneappheading rounded">{scotter.name}</p>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-3 mt-4 gap-4">
                      <p className="flex align-center">
                        <img
                          className="rounded-xl h-6"
                          src={Km}
                          alt="..."
                        ></img>
                        {scotter.allowedkm}/kms
                      </p>
                      <p className="flex items-center">
                        <img
                          className="rounded-xl h-6"
                          src={scotter.speed}
                          alt="..."
                        ></img>
                        speed limit
                      </p>
                      <p className="flex align-center">
                        <img
                          className="rounded-sm h-6"
                          src={Fuel}
                          alt="..."
                        ></img>
                        {scotter.fuel}
                      </p>
                      <p className="flex items-center">
                        Extra ₹{scotter.extra}/km
                      </p>
                      <p className="flex align-center">
                        <img
                          className="rounded-xl h-6"
                          src={Seating}
                          alt="..."
                        ></img>
                        {scotter.seating} Passanger
                      </p>
                      <div className="flex items-center space-x-1">
                        <img
                          className="rounded-sm h-6"
                          src={Manual}
                          alt="..."
                        ></img>
                        <p>{scotter.gear}</p>
                      </div>
                    </div>

                    <div className="grid relative top-[-8px] md:grid-cols-3 justify-start">
                      <Link to="/view-products">
                        <button
                          // onClick={priceCalcultion}
                          className="bg-[#6e3cbc] px-9 md:px-7  py-3 text-white rounded"
                        >
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="flex items-center space-y-3 flex-col px-4 justify-center">
          <div className="border-none shadow-md rounded-md m-4 max-w-3xl w-full">
            <div className="flex flex-col md:flex-row lg:items-center space-x-4">
              <div className="rounded my-6 h-42 w-42 md:w-80 lg:w-64 lg:h-32">
                <img className="rounded-xl" src={Car1} alt="..."></img>
              </div>
              <div className="flex-1 my-auto">
                <p className="oneappheading rounded">Hyundai i20 Asta</p>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 mt-4 gap-4">
                    <p>120Km Allowed</p>
                    <p>Excess ₹8/km</p>
                  </div>
                  

                  <div className="grid relative top-[-8px] md:grid-cols-3 justify-start">
                    <button className="bg-[#6e3cbc] px-9 md:px-7  py-3 text-white rounded">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-none shadow-md rounded-md m-4 max-w-3xl w-full">
            <div className="flex flex-col md:flex-row lg:items-center space-x-4">
              <div className="rounded  h-42 w-42  md:w-80 lg:w-64 lg:h-32">
                <img className="rounded-xl" src={Car2} alt="..."></img>
              </div>
              <div className="flex-1 my-auto">
                <p className="oneappheading rounded">Hyundai Grand i10</p>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 mt-4 gap-4">
                    <p>120Km Allowed</p>
                    <p>Excess ₹8/km</p>
                  </div>
                  

                  <div className="grid relative top-[-8px] md:grid-cols-3 justify-start">
                    <button className="bg-[#6e3cbc] px-9 md:px-7  py-3 text-white rounded">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-none shadow-md rounded-md m-4 max-w-3xl w-full">
            <div className="flex flex-col md:flex-row lg:items-center space-x-4">
              <div className="rounded  h-42 w-42 md:w-80 lg:w-64 lg:h-32">
                <img className="rounded-xl" src={Car3} alt="..."></img>
              </div>
              <div className="flex-1 items-center my-auto">
                <p className="oneappheading rounded">Maruti Suzuki Swift</p>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 mt-4 gap-4">
                    <p>120Km Allowed</p>
                    <p>Excess ₹8/km</p>
                  </div>
                  

                  <div className="grid relative top-[-8px] md:grid-cols-3 justify-start">
                    <button className="bg-[#6e3cbc] px-9 md:px-7  py-3 text-white rounded">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-none shadow-md rounded-md m-4 max-w-3xl w-full">
            <div className="flex flex-col md:flex-row lg:items-center space-x-4">
              <div className="rounded  h-42 w-42 md:w-80 lg:w-64 lg:h-32">
                <img className="rounded-xl" src={Car4} alt="..."></img>
              </div>
              <div className="flex-1 items-center my-auto">
                <p className="oneappheading rounded">Hyundai Verna</p>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 mt-4 gap-4">
                    <p>120Km Allowed</p>
                    <p>Excess ₹8/km</p>
                  </div>
                  

                  <div className="grid relative top-[-8px] md:grid-cols-3 justify-start">
                    <button className="bg-[#6e3cbc] px-9 md:px-7  py-3 text-white rounded">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="text-center text-[#6E3CBC] text-xl oneappheading">
          Bikes
        </div> */}
        {/* <div className="flex items-center space-y-3 flex-col px-4 justify-center">
          <div className="border-none shadow-md rounded-md m-4 max-w-3xl w-full">
            <div className="flex flex-col md:flex-row lg:items-center space-x-4">
              <div className="rounded  h-42 w-42  md:w-80 lg:w-64 lg:h-44">
                <img className="rounded-xl" src={Bike1} alt="..."></img>
              </div>
              <div className="flex-1 items-center my-auto">
                <p className="oneappheading rounded">Royal Enfield Standred</p>
                <div className="space-y-8">
                  <div className="grid grid-cols-2 mt-4 gap-4">
                    <p>120Km Allowed</p>
                    <p>Excess ₹4/km</p>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 mt-4 gap-4">
                      <p>120Km Allowed</p>
                      <p>Excess ₹8/km</p>
                    </div>
                    <ButtonGroup className="flex justify-start space-x-3 md:space-x-5">
                      {types.map((type) => (
                        <ButtonToggle
                          key={type}
                          active={active === type}
                          onClick={() => setActive(type)}
                        >
                          <div className="grid w-full grid-rows-1">
                            <button className="flex p-1.5 w-full flex-col items-center rounded shadow-md">
                              <p className="text-center oneappheading">
                                {type.km}
                              </p>
                              <hr className="my-2 w-[100%] border-2 border-[#e3d9f3]" />
                              <p>₹{type.plan}</p>
                            </button>
                          </div>
                     
                    <div className="grid relative top-[-8px] md:grid-cols-3 justify-start">
                      <button className="bg-[#6e3cbc] px-9 md:px-7  py-3 text-white rounded">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-none shadow-md rounded-md m-4 max-w-3xl w-full">
            <div className="flex flex-col md:flex-row lg:items-center space-x-4">
              <div className="rounded  h-42 w-42  md:w-80 lg:w-64 lg:h-44">
                <img className="rounded-xl" src={Bike2} alt="..."></img>
              </div>
              <div className="flex-1 items-center my-auto">
                <p className="oneappheading rounded">KTM RC 200</p>
                <div className="space-y-8">
                  <div className="grid grid-cols-2 mt-4 gap-4">
                    <p>120Km Allowed</p>
                    <p>Excess ₹5/km</p>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 mt-4 gap-4">
                      <p>120Km Allowed</p>
                      <p>Excess ₹8/km</p>
                    </div>
                    

                    <div className="grid relative top-[-8px] md:grid-cols-3 justify-start">
                      <button className="bg-[#6e3cbc] px-9 md:px-7  py-3 text-white rounded">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-none shadow-md rounded-md m-4 max-w-3xl w-full">
            <div className="flex flex-col md:flex-row lg:items-center space-x-4">
              <div className="rounded  h-42 w-42  md:w-80 lg:w-64 lg:h-44">
                <img className="rounded-xl" src={Bike3} alt="..."></img>
              </div>
              <div className="flex-1 items-center my-auto">
                <p className="oneappheading rounded">R15 V4</p>
                <div className="space-y-8">
                  <div className="grid grid-cols-2 mt-4 gap-4">
                    <p>120Km Allowed</p>
                    <p>Excess ₹4/km</p>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 mt-4 gap-4">
                      <p>120Km Allowed</p>
                      <p>Excess ₹8/km</p>
                    </div>
                    

                    <div className="grid relative top-[-8px] md:grid-cols-3 justify-start">
                      <button className="bg-[#6e3cbc] px-9 md:px-7  py-3 text-white rounded">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-none shadow-md rounded-md m-4 max-w-3xl w-full">
            <div className="flex flex-col md:flex-row lg:items-center space-x-4">
              <div className="rounded  h-42 w-42 md:w-80 lg:w-64 lg:h-44">
                <img className="rounded-xl" src={Bike4} alt="..."></img>
              </div>
              <div className="flex-1 items-center my-auto">
                <p className="oneappheading rounded">Hero Xtereme</p>
                <div className="space-y-8">
                  <div className="grid grid-cols-2 mt-4 gap-4">
                    <p>120Km Allowed</p>
                    <p>Excess ₹3/km</p>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 mt-4 gap-4">
                      <p>120Km Allowed</p>
                      <p>Excess ₹8/km</p>
                    </div>
                    

                    <div className="grid relative top-[-8px] md:grid-cols-3 justify-start">
                      <button className="bg-[#6e3cbc] px-9 md:px-7  py-3 text-white rounded">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-none shadow-md rounded-md m-4 max-w-3xl w-full">
            <div className="flex flex-col md:flex-row lg:items-center space-x-4">
              <div className="rounded  h-42 w-42 md:w-80 lg:w-64 lg:h-44">
                <img className="rounded-xl" src={Bike5} alt="..."></img>
              </div>
              <div className="flex-1 items-center my-auto">
                <p className="oneappheading rounded">Hero Splendor X-tech</p>
                <div className="space-y-8">
                  <div className="grid grid-cols-2 mt-4 gap-4">
                    <p>120Km Allowed</p>
                    <p>Excess ₹3/km</p>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 mt-4 gap-4">
                      <p>120Km Allowed</p>
                      <p>Excess ₹8/km</p>
                    </div>
                    

                    <div className="grid relative top-[-8px] md:grid-cols-3 justify-start">
                      <button className="bg-[#6e3cbc] px-9 md:px-7  py-3 text-white rounded">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="text-center text-[#6E3CBC] text-xl oneappheading">
          Scotter
        </div> */}
        {/* <div className="flex items-center space-y-3 flex-col px-4 justify-center">
          <div className="border-none shadow-md rounded-md m-4 max-w-3xl w-full">
            <div className="flex flex-col md:flex-row lg:items-center space-x-4">
              <div className="rounded  h-42 w-42 md:w-80 lg:w-64 lg:h-44">
                <img className="rounded-xl" src={Scotter} alt="..."></img>
              </div>
              <div className="flex-1 items-center my-auto">
                <p className="oneappheading rounded">Honda Activa 5G</p>
                <div className="space-y-8">
                  <div className="grid grid-cols-2 mt-4 gap-4">
                    <p>120Km Allowed</p>
                    <p>Excess ₹3/km</p>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 mt-4 gap-4">
                      <p>120Km Allowed</p>
                      <p>Excess ₹8/km</p>
                    </div>
                    <ButtonGroup className="flex justify-start space-x-3 md:space-x-5">
                      {types.map((type) => (
                        <ButtonToggle
                          key={type}
                          active={active === type}
                          onClick={() => setActive(type)}
                        >
                          <div className="grid w-full grid-rows-1">
                            <button className="flex p-1.5 w-full flex-col items-center rounded shadow-md">
                              <p className="text-center oneappheading">
                                {type.km}
                              </p>
                              <hr className="my-2 w-[100%] border-2 border-[#e3d9f3]" />
                              <p>₹{type.plan}</p>
                            </button>
                          </div>
                        </ButtonToggle>
                      ))}
                    </ButtonGroup>

                    <div className="grid relative top-[-8px] md:grid-cols-3 justify-start">
                      <button className="bg-[#6e3cbc] px-9 md:px-7  py-3 text-white rounded">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* Loading Animation */}
        {/* <div className="border-none shadow-md rounded-md p-4 max-w-3xl w-full">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded bg-slate-300 h-28 w-28 md:h-48 md:w-48">
                //product images
              </div>
              <div className="flex-1 items-center space-y-6 my-auto">
                <div className="h-2 bg-slate-300 rounded">
                  //product name
                </div>
                <div className="space-y-5">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-300 rounded col-span-2">
                      //details
                    </div>
                    <div className="h-2 bg-slate-300 rounded col-span-1">
                      //details
                    </div>
                  </div>
                  <div className="h-2 bg-slate-300 rounded">
                    //book now button
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-300 rounded col-span-1">
                      //details
                    </div>
                    <div className="h-2 bg-slate-300 rounded col-span-2">
                      //details
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
      </div>
    </>
  );
}

export default Products;
