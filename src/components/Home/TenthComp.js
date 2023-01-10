import React from "react";
import LImg from "../../assets/bg-circle.png";
import RImg from "../../assets/bg-triangle.png";
import Send from "../../assets/send.png";
import Arrow from "../../assets/arrow.png";
import Place from "../../assets/place.png";
import Phone from "../../assets/phone.png";
import Email from "../../assets/emails.png";
import Whatsapp from "../../assets/whatsapp.svg";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";

import "./TenthComp.css";

function TenthComp() {
  return (
    <>
      <div className="custom-shape-divider-bottom-1671876357">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
            fill="#CFBEE9"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
            fill="#CFBEE9"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
            fill="#CFBEE9"
          ></path>
        </svg>
      </div>
      <div className="w-full flex relative justify-between h-[1015px] md:h-[950px] lg:h-[322px] xl:h-[320px] bg-[#CFBEE9]">
        <img className="h-32 md:h-64" src={LImg} alt="..." />
        <div className="flex absolute 2xl:relative flex-col lg:flex-row mt-0 px-5 md:px-32 lg:px-5 xl:px-12 xl:pt-10 justify-between space-y-4 lg:space-y-0 md:justify-between">
          <div className="flex flex-col w-full items-left rounded-lg">
            <div className="flex items-center  text-center space-x-4 mb-1">
              <p className="text-purple-800 text-xl font-semibold">Address</p>
            </div>
            <hr className="my-2 border-2 lg:w-[75%] border-[#e3d9f3]" />
            <div className="flex relative cursor-pointer my-1 space-x-1 items-center">
              <img className="h-5 placeicon" src={Place} alt="..."></img>

              <p className="text-lg hover:text-xl text-left">
                HM Tech Park, Whitefield, Bengaluru
              </p>
            </div>
            <div className="flex my-1 cursor-pointer space-x-1 items-center">
              <img className="h-5" src={Phone} alt="..."></img>

              <a href="tel:+919460451905">
                <p className="text-lg hover:text-xl text-left">
                  +91 9460451905
                </p>
              </a>
            </div>
            <div className="flex my-1 cursor-pointer space-x-1 items-center">
              <img className="h-5" src={Email} alt="..."></img>

              <a href="mailto:autovallyrentals@gmail.com">
                <p className="text-lg hover:text-xl text-left">
                  autovallyrentals@gmail.com
                </p>
              </a>
            </div>
            <div className="flex items-center  text-center space-x-3 my-2">
              <div className=" bg-[#6E3CBC]  h-9 w-9 rounded-full">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://api.whatsapp.com/send?phone=9460451905"
                >
                  <img
                    className="p-1.5 cursor-pointer"
                    src={Whatsapp}
                    alt="..."
                  />
                </a>
              </div>
              <div className=" bg-[#6E3CBC] h-9 w-9 rounded-full">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/profile.php?id=100078417337455"
                >
                  <img
                    className="p-1.5 cursor-pointer"
                    src={Facebook}
                    alt="..."
                  />
                </a>
              </div>
              <div className=" bg-[#6E3CBC] h-9 w-9 rounded-full">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/autovallyrentals/"
                >
                  <img
                    className="p-1.5 cursor-pointer"
                    src={Instagram}
                    alt="..."
                  />
                </a>
              </div>
              <div className=" bg-[#6E3CBC] h-9 w-9 rounded-full">
                <img
                  className="p-1.5 cursor-pointer"
                  src={Instagram}
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full items-left  rounded-lg">
            <div className="flex items-center  text-center space-x-4 mb-1">
              <p className="text-purple-800 text-xl font-semibold">
                Quick Link
              </p>
            </div>
            <hr className="my-2 lg:w-[75%] border-2 border-[#e3d9f3]" />
            <div className="flex my-1 cursor-pointer space-x-1 items-center">
              <img className="h-5" src={Arrow} alt="..."></img>

              <p className="text-lg hover:text-xl text-left">About Us</p>
            </div>
            <div className="flex my-1 cursor-pointer space-x-1 items-center">
              <img className="h-5" src={Arrow} alt="..."></img>

              <p className="text-lg hover:text-xl text-left">Contact Us</p>
            </div>
            <div className="flex my-1 cursor-pointer space-x-1 items-center">
              <img className="h-5" src={Arrow} alt="..."></img>

              <p className="text-lg hover:text-xl text-left">Privacy Policy</p>
            </div>
            <div className="flex my-1 cursor-pointer space-x-1 items-center">
              <img className="h-5" src={Arrow} alt="..."></img>

              <p className="text-lg hover:text-xl text-left">
                Terms & Condition
              </p>
            </div>
            <div className="flex my-1 cursor-pointer space-x-1 items-center">
              <img className="h-5" src={Arrow} alt="..."></img>

              <p className="text-lg hover:text-xl text-left">Carrer</p>
            </div>
          </div>
          <div className="flex flex-col w-full items-left rounded-lg">
            <div className="flex items-center  text-center space-x-4 mb-1">
              <p className="text-purple-800 text-xl font-semibold">
                Popular Link
              </p>
            </div>
            <hr className="my-2 lg:w-[75%] border-2 border-[#e3d9f3]" />

            <div className="flex my-1 cursor-pointer space-x-1 items-center">
              <img className="h-5" src={Arrow} alt="..."></img>

              <p className="text-lg hover:text-xl text-left">About Us</p>
            </div>
            <div className="flex my-1 cursor-pointer space-x-1 items-center">
              <img className="h-5" src={Arrow} alt="..."></img>

              <p className="text-lg hover:text-xl text-left">Contact Us</p>
            </div>
            <div className="flex my-1 cursor-pointer space-x-1 items-center">
              <img className="h-5" src={Arrow} alt="..."></img>

              <p className="text-lg hover:text-xl text-left">
                Privacy & Policy
              </p>
            </div>
            <div className="flex my-1 cursor-pointer space-x-1 items-center">
              <img className="h-5" src={Arrow} alt="..."></img>

              <p className="text-lg hover:text-xl text-left">
                Terms & Condition
              </p>
            </div>
            <div className="flex cursor-pointer my-1 space-x-1 items-center">
              <img className="h-5" src={Arrow} alt="..."></img>

              <p className="text-lg hover:text-xl text-left">Carrer</p>
            </div>
          </div>
          <div className="flex flex-col w-full items-left rounded-lg">
            <div className="flex items-center  text-center space-x-4 mb-1">
              <p className="text-purple-800 text-xl font-semibold">
                Newsletter
              </p>
            </div>
            <hr className="my-2 lg:w-[100%] border-2 border-[#e3d9f3]" />
            <p className="w-[100%] md:w-[100%] lg:w-[100%] font-none mt-2 text-md text-left md:text-center lg:text-left">
              Message us for AutoVally Rentals Franchise & be a part of India’s
              largest Self Drive Rental chain. Invest in AutoVally Rentals
              Franchise with low setup cost and high margins on the revenue.
            </p>
            <div className="flex relative items-center">
              <input
                className="px-5 my-1.5 w-full py-3 rounded-full"
                placeholder="Your Email"
              ></input>
              <a href="mailto:autovallyrentals@gmail.com">
                <img
                  className="absolute top-[15px] right-5 h-7"
                  src={Send}
                  alt="../"
                ></img>
              </a>
            </div>
          </div>
        </div>

        <img
          className="mt-48 md:mt-32 lg:mt-16 h-32 md:h-64"
          src={RImg}
          alt="..."
        />
      </div>
    </>
  );
}
export default TenthComp;
