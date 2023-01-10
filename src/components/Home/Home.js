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
