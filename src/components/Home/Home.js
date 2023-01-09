import React from "react";
import Navbar from "../Header/Navbar";
import Location from "../Header/Location";
import FirstComp from "./firstComp";
import SecondComp from "./SecondComp";
import ThiredComp from "./ThiredComp";
import FourthComp from "./FourthComp";
import FifthComp from "./FifthComp";
import SixthComp from "./SixthComp";
import SeventhComp from "./SeventhComp";
import EighthComp from "./EighthComp";
import NinthComp from "./NinthComp";
import TenthComp from "./TenthComp";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      <div>
        <Navbar />
        <div className="block flex justify-center bg-none lg:hidden">
          <Location />
        </div>
        <div className="container mx-0 sm:mx-auto">
          <FirstComp />
          <div className="custom-shape-divider-top-1671081312 border-none">
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
        </div>
        <div className="container mx-0 sm:mx-auto mt-[700px] p-6 sm:mt-[600px] md:mt-[150px] lg:mt-[150px] xl:mt-[100px]">
          <SecondComp />
        </div>
        <div className="container mx-0 sm:mx-auto mt-[280px] md:mt-[500px] lg:mt-[650px] xl:mt-20 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 md:mt-0">
          <ThiredComp />
        </div>
        <div className="container mx-0 sm:mx-auto mt-[20px] md:mt-[-290px] lg:mt-[-400px] xl:mt-20 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 md:mt-0">
          <FourthComp />
        </div>
        <div className="container mx-0 sm:mx-auto mt-[340px] md:mt-[500px] lg:mt-[610px] xl:mt-[-40px] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 md:mt-0">
          <FifthComp />
        </div>
        <div className="container mx-0 sm:mx-auto mt-[100px] md:mt-[-300px] lg:mt-[-400px] xl:mt-20 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 md:mt-0">
          <SixthComp />
        </div>
        <div className="container mx-0 sm:mx-auto mt-[250px] md:mt-[360px] lg:mt-[490px] xl:mt-[-120px] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 md:mt-0">
          <SeventhComp />
        </div>
        <div className="container mx-0 sm:mx-auto mt-[100px] md:mt-[80px] lg:mt-[60px] xl:mt-[60px] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 md:mt-0">
          <EighthComp />
        </div>
        <div className="container mx-0 sm:mx-auto mt-[100px] md:mt-[80px] lg:mt-[60px] xl:mt-[60px] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 md:mt-0">
          <NinthComp />
        </div>
        <div className="container xl:mx-auto mt-[100px] md:mt-[50px] lg:mt-[60px] xl:mt-[40px]">
          <TenthComp />
        </div>
        <div className="mx-0 sm:mx-auto md:mt-[0px] lg:mt-[0px] md:p-1.5 lg:p-2 xl:p-3">
          <Footer />
        </div>
      </div>
    </>
  );
}
export default Home;
