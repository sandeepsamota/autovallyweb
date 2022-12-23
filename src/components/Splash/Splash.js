import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Animation from "../../assets/animation.gif";

function Spalsh() {
  let navigate = useNavigate();
  setTimeout(() => {
    navigate("/select");
  }, 4000);
  return (
    <>
      <div className="bg-white relative h-[100vh] w-[100vw] flex flex-col justify-center items-center	">
        <img
          className="h-min absolute top-[0px] w-full md:h-min md:w-1/2 lg:h-min lg:w-1/3"
          src={Animation}
          alt=""
        />
        <img
          className="h-min absolute bottom-[180px] w-full md:h-min md:w-1/2 lg:h-min lg:w-1/3"
          src={Logo}
          alt=""
        />
      </div>
    </>
  );
}
export default Spalsh;
