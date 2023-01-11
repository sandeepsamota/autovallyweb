import React, { useState } from "react";
import Navbar1 from "../Header/Navbar1";
import Paytm from "../../assets/paytm.png";
import Image1 from "../../assets/i20.jpg";
import "../Products/ViewProduct.css";

function ConfirmOrder() {
  const [quantity, setQuantity] = useState(1);
  const countedfare = localStorage.getItem("dailyfare");
  const fare = countedfare * quantity;
  const tax = Math.floor((fare * 9) / 100);
  const security = 5000;
  const coast = fare + tax + security;
  function incHandler() {
    if (quantity < 3) {
      setQuantity(quantity + 1);
    }
  }
  function decHandler() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  return (
    <>
      <Navbar1 />
      <div className="container mx-auto md:w-[450px] lg:w-full flex flex-col lg:flex-row justify-center">
        <div className="lg:w-3/5 xl:w-1/2">
          <div className="bg-gray-100 rounded-sm p-1.5 m-2 shadow-sm">
            <p className="text-sm font-semibold my-1.5">
              Your Vehicle has been reserved for 15 minute.
            </p>
            <p className="my-1 text-sm">
              Complete your booking before expiry to make sure you get your
              favourite car!
            </p>
          </div>
          <p className="bg-gray-100 font-semibold text-sm lg:hidden rounded-sm p-1.5 m-2 shadow-sm">
            Your Items:
          </p>
          <div className="bg-gray-100 w-fit flex rounded-sm p-1.5 m-2 shadow-sm">
            <div>
              <img
                className="w-[500px] rounded-md"
                src={Image1}
                alt="..."
              ></img>
              <p className="text-sm text-center font-semibold px-2 md:px-6 my-1.5">
                Maruti Suzuki Swift.
              </p>
            </div>
            <div>
              <div className="flex items-center mx-1 md:mx-10 lg:mx-24 md:my-1 space-x-1.5">
                <button
                  onClick={decHandler}
                  className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  type="button"
                >
                  <span className="sr-only">Quantity button</span>
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div>
                  <div
                    type="number"
                    id="first_product"
                    className="quantityinput flex- justify-center h-8 bg-gray-50 w-12 text-center border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="1"
                    required
                  >
                    {quantity}
                  </div>
                </div>
                <button
                  onClick={incHandler}
                  className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  type="button"
                >
                  <span className="sr-only">Quantity button</span>
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="rounded-md md:px-3 shadow-sm flex flex-col space-y-0.5 md:space-y-1 lg:space-y-2">
                <div className="px-1 flex flex-row justify-between items-baseline">
                  <p className="text-sm text-[#808080] font-semibold">Fare:</p>
                  <p className="text-sm text-[#808080] font-semibold">
                    ₹ {fare}
                  </p>
                </div>
                <div className="px-1 flex flex-row justify-between items-baseline">
                  <p className="text-sm text-[#808080] font-semibold">Tax:</p>
                  <p className="text-sm text-[#808080] font-semibold">
                    ₹ {tax}
                  </p>
                </div>
                <div className="px-1 flex flex-row justify-between items-baseline">
                  <p className="text-sm text-[#808080] font-semibold">
                    Security:
                  </p>
                  <p className="text-sm text-[#808080] font-semibold">
                    ₹ {security}
                  </p>
                </div>
                <hr className="md:block w-full border-1.5 border-[#e3d9f3]" />

                <div className="px-1 flex flex-row justify-between items-baseline">
                  <p className="text-sm text-[#6E3CBC] oneappheading">Total:</p>
                  <p className="text-[#6E3CBC] oneappheading text-sm">
                    {coast}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 bg-gray-100 shadow-sm rounded-sm m-2 relative flex align-center space-x-2 items-center">
            <span className="text-sm font-semibold">Duration:</span>
            <span className="text-sm font-semibold text-[#808080]">{`${localStorage.getItem(
              "day"
            )}day, ${localStorage.getItem("hour")}hour, ${localStorage.getItem(
              "min"
            )}min`}</span>
          </div>
          <div className="p-3 bg-gray-100 shadow-sm rounded-sm m-2 relative flex align-center space-x-2 items-center">
            <div className="flex relative top-2 justify-between flex-col space-y-12">
              <div className="bg-red-500 relative -top-8 md:-top-5 h-5 w-5 rounded-full"></div>
              <div className="bg-green-500 relative -top-6 md:-top-8 h-5 w-5 rounded-full"></div>
            </div>
            <div className="flex absolute top-8 md:top-6 left-3 flex-col space-y-4">
              <hr className="border-2 border-black h-[58px] md:h-9"></hr>
            </div>
            <div className="md:relative md:-top-2.5 space-y-4">
              <div className="flex space-x-4">
                <p className="text-sm">
                  <span className="font-semibold">Pick Up : </span>
                  <span className="font-semibold text-[#808080]">
                    {localStorage.getItem("City")}
                  </span>
                  <br />
                  <span className="font-semibold text-[#808080]">
                    {localStorage.getItem("selectedstart")}
                  </span>
                </p>
              </div>
              <div className="flex space-x-4">
                <p className="text-sm">
                  <span className="font-semibold">Drop On : </span>
                  <span className="font-semibold text-[#808080]">
                    {localStorage.getItem("City")}
                  </span>
                  <br />
                  <span className="font-semibold text-[#808080]">
                    {localStorage.getItem("selectedend")}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="conatiner m-2 md:m-0 md:mx-auto">
            <div className="rounded-md md:m-0 shadow-sm">
              <p className="text-sm bg-gray-100 p-1 rounded-sm font-semibold">
                Preferred Payment Options
              </p>
              <button className="p-3 w-full flex items-center justiyfy-center space-x-2 text-sm">
                <img
                  className="h-10 rounded-full"
                  src="https://play-lh.googleusercontent.com/HArtbyi53u0jnqhnnxkQnMx9dHOERNcprZyKnInd2nrfM7Wd9ivMNTiz7IJP6-mSpwk=s96-rw"
                  alt="..."
                ></img>
                <p>Google Pay</p>
              </button>
              <hr />
              <button className="p-3 w-full flex items-center justiyfy-center space-x-2 text-sm">
                <img
                  className="h-10 rounded-full"
                  src="https://play-lh.googleusercontent.com/6iyA2zVz5PyyMjK5SIxdUhrb7oh9cYVXJ93q6DZkmx07Er1o90PXYeo6mzL4VC2Gj9s=w480-h960-rw"
                  alt="..."
                ></img>
                <p>PhonePe</p>
              </button>
              <hr />
              <button className="p-3 w-full flex items-center justiyfy-center space-x-2 text-sm">
                <img
                  className="h-10 w-10 p-1 rounded-full"
                  src={Paytm}
                  alt="..."
                ></img>
                <p>Paytm UPI</p>
              </button>
              <hr />
            </div>
            <div className="rounded-md md:m-0 shadow-sm">
              <p className="text-sm bg-gray-100 p-1 rounded-sm font-semibold">
                Other Payment Options
              </p>
              <hr />
              <button className="p-3 w-full flex items-center space-x-2 text-sm">
                <img
                  className="h-10 w-10 p-1 rounded-lg"
                  src="https://zoomcar-assets.zoomcar.com/images/original/9fcb8335a89265849f23225858489f2a9ce8e121.png?1584453574"
                  alt="..."
                ></img>
                <div className="flex flex-col">
                  <p className="text-left text-base">UPI</p>
                  <p className="text-left text-[12px]">
                    Google Pay, PhonePe, BHIM UPI
                  </p>
                </div>
              </button>
              <hr />
              <button className="p-3 w-full flex items-center space-x-2 text-sm">
                <img
                  className="h-10 w-10 p-1 rounded-lg"
                  src="https://zoomcar-assets.zoomcar.com/images/original/97f051d76793fffe5ab182ffa58b8eb47c5ba0cf.png?1584453494"
                  alt="..."
                ></img>
                <div className="flex flex-col">
                  <p className="text-left text-base">
                    Credit / Debit / ATM Card
                  </p>
                  <p className="text-left text-[12px]">
                    All major card providers are supported
                  </p>
                </div>
              </button>
              <hr />
              <button className="p-3 w-full flex items-center space-x-2 text-sm">
                <img
                  className="h-10 w-10 p-1 rounded-lg"
                  src="https://zoomcar-assets.zoomcar.com/images/original/1317404625e385185d23ea43a0c34569d6432d09.png?1632130014"
                  alt="..."
                ></img>
                <div className="flex flex-col">
                  <p className="text-left text-base">Mobile Wallet</p>
                  <p className="text-left text-[12px]">
                    All major wallets are supported
                  </p>
                </div>
              </button>
              <hr />
              <button className="p-3 w-full flex items-center space-x-2 text-sm">
                <img
                  className="h-10 w-10 p-1 rounded-lg"
                  src="https://zoomcar-assets.zoomcar.com/images/original/4dd051886e5403aafb9725b7d2ab42c80f9b1df6.png?1584453529"
                  alt="..."
                ></img>
                <div className="flex flex-col">
                  <p className="text-left text-base">Net Banking</p>
                  <p className="text-left text-[12px]">
                    All major banks are supported
                  </p>
                </div>
              </button>
            </div>
          </div>
          <div className="rounded-md shadow-sm">
            <div className="m-3 flex items-center space-x-2">
              <img
                className="h-10 rounded-lg"
                src="data:image/jpeg;base64,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butqYTmtfHjHQAZD/UBoV++GL5a5PhTrl1jtX5T3CWz+3X91fI0GGhZkf9R2cfTJVfn5enH0/Kbh4+q/V8Ldxhqex0vFAOtRVMb6Au/tVXgV3l/0sc2dY9fKocIqXtdVulI/4eme4HwJIb/urfPtrDr91bh1/UmfiHY54YqmF8UzGyRvBa9jhkHyWPvU7hqTET2cy1pw6paOjqbnZZjE2JrpJKWQ5bgddp6j4HPyWlx+bMzFMkKOfixETanZSdJ109t1HQVFK4h5lbG4D9TXHmCr3IpF8cxKpgtNckaXXjHdy+eks0L/AHWD2ifzPRg9Mn0VL6dj7Tk/9+6zzb71WFe0DqO26ZnrKqup6qaeVrY4zC1uGNByepHU7fQKxy8N8sRFPEIePlpj7zHdDamrae6XutrqOOSOGofvDJANwJ69PNTYaTTHFZ9kWa0XtMx7u66KrfxDS1tqCcuMLWu+I5H7LE5FenLaGvht1Y4lNqFKICAgICAgICAgICAgICAgIIPWlu/E9L3ClaAXmIuZn95vMfZS4L9GSJRZqdeOYfn32efB/wDwmx1/Zu5fRfQdVfaYY2rfDuvDmy/g2mYGSt21NQe3m8i7oPkAB6rC5WX1MszDW4uP08cR7qrxplkkqLTSRMe5rWyyv2tJwfdDf7lb+nxEdVlfm7nUPXBejewXarkY4ZMUTdzSDy3E/dvovPqF4ma1h7wq66rSqt2vl+td/uNRBPWUQlqXu2uBDTz5cjyVnHiw3x1idSr5MmSuSZjbTr9T3++QGkqK+aoid+aKJoG747RzUlePixzuI04tmyXjUys2hNG1cNYy93qN1NSUgMscTh78jh0JHcB9VV5XJiY9Ok7mU/HwTE9dvEKjeKisvl6qa18EvaVMuWNLDyHRo9MK3j6ceOI34V8k2veZ06NT8J7e6GN09yr2yFoLw3s8A45491Z8/Ubb7VXY4VfeVV15pBmmn0ZopqmpjqA/JkaCWubj90Dlg/RWuNyfW31ahX5HHjHrW124P1Mj9OTUsjHMNPUuDQ4EHa4B2fUn0VLnRHq7j3W+Jvo0vo6KktiAgICAgICAgICAgICAgICAefVB47GL/ls/pC93LzUPQAHQLx68vjY45cxpPmEGWxsaPdY0fAYQeXxRycpI2O/zNBSOxrbyymgjOWQRtPi1gC9mZl5qH1LWkYIBC8evHYxZ/Zs/pC93LzUPphePXlzGO/M1p+IQGsY3O1rRnwCD0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDCDKDCDKAgwgygICAgICAgICAg//2Q=="
                alt="..."
              ></img>
              <img
                className="h-10 rounded-lg"
                src="data:image/png;base64,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"
                alt="..."
              ></img>
              <img
                className="h-10 rounded-lg"
                src="data:image/png;base64,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"
                alt="..."
              ></img>
              <img
                className="h-10 rounded-lg"
                src="data:image/png;base64,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"
                alt="..."
              ></img>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}
export default ConfirmOrder;
