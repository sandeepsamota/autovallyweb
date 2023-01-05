import React from "react";
export default function Footer() {
  return (
    <>
      <div className="container mx-auto text-black flex flex-col md:flex-row items-center py-3 px-2 md:px-5 lg:px-8 xl:px-12 font-semibold justify-between">
        <div className="hover:underline hover:text-[#6E3CBC]">
          © autovally.in, All Right Reserved.
        </div>
        <div className="hover:underline hover:text-[#6E3CBC]">
          Designed & Developed by Captain Digital
        </div>
      </div>
    </>
  );
}
