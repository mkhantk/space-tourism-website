import { current } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";

function Destination() {
  const [destination, setDestination] = useState("Moon");
  const [data, setData] = useState();

  useEffect(() => {
    fetch("./data.json")
      .then((respnse) => respnse.json())
      .then((data) => {
        let current = data.destinations.filter(
          (item) => item.name === destination
        );
        setData(current);
      });
  }, [destination]);
  const handleDestination = (e) => {
    setDestination(e.currentTarget.id);
  };
  return (
    data && (
      <main className="min-h-screen w-full bg-cover bg-center bg-blue-bg transition-colors duration-700 bg-[url('/assets/destination/background-destination-mobile.jpg')] md:bg-[url('/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('/assets/destination/background-destination-desktop.jpg')] text-white flex flex-col xl:justify-around items-center gap-5 md:gap-8 lg:gap-16 pt-20 p-5 md:pt-36">
        <h1 className="font-barlow-condensed tracking-widest md:text-start md:w-full lg:text-lg">
          <span className="text-base lg:text-lg text-gray-500 font-bold mx-5">
            01
          </span>
          <span>PICK YOUR DESTINATION</span>
        </h1>
        <div className="w-full h-full flex flex-col items-center gap-5 md:gap-8 lg:flex-row lg:justify-center 2xl:justify-around lg:gap-10 xl:gap-16">
          <div>
            {/* images */}
            <img
              src={data[0].images.png}
              alt=""
              className="w-1/2 lg:w-5/6 xl:w-lg 2xl:w-3xl m-auto p-3 "
            />
          </div>
          <div className="flex flex-col items-center gap-5 lg:w-1/2 lg:items-start">
            <div className="flex justify-center items-center gap-5 lg:gap-8 text-sm md:text-base xl:text-lg font-barlow-condensed tracking-widest">
              <div
                id="Moon"
                className="relative cursor-pointer group"
                onClick={(e) => handleDestination(e)}
              >
                <span
                  className={`${
                    destination === "Moon" ? "text-white" : "text-blue-fg"
                  } hover:text-white select-none`}
                >
                  MOON
                </span>
                <span
                  className={`${
                    destination === "Moon" && "opacity-100"
                  } opacity-0 absolute -bottom-2 right-0 left-0 w-full h-[1px] bg-white group-hover:opacity-75`}
                ></span>
              </div>
              <div
                id="Mars"
                className="relative cursor-pointer group"
                onClick={(e) => handleDestination(e)}
              >
                <span
                  className={`${
                    destination === "Mars" ? "text-white" : "text-blue-fg"
                  } hover:text-white select-none`}
                >
                  MARS
                </span>
                <span
                  className={`${
                    destination === "Mars" && "opacity-100"
                  } opacity-0 absolute -bottom-2 right-0 left-0 w-full h-[1px] bg-white group-hover:opacity-75`}
                ></span>
              </div>
              <div
                id="Europa"
                className="relative cursor-pointer group"
                onClick={(e) => handleDestination(e)}
              >
                <span
                  className={`${
                    destination === "Europa" ? "text-white" : "text-blue-fg"
                  } hover:text-white select-none`}
                >
                  EUROPA
                </span>
                <span
                  className={`${
                    destination === "Europa" && "opacity-100"
                  } opacity-0 absolute -bottom-2 right-0 left-0 w-full h-[1px] bg-white group-hover:opacity-75`}
                ></span>
              </div>
              <div
                id="Titan"
                className="relative cursor-pointer group"
                onClick={(e) => handleDestination(e)}
              >
                <span
                  className={`${
                    destination === "Titan" ? "text-white" : "text-blue-fg"
                  } hover:text-white select-none`}
                >
                  TITAN
                </span>
                <span
                  className={`${
                    destination === "Titan" && "opacity-100"
                  } opacity-0 absolute -bottom-2 right-0 left-0 w-full h-[1px] bg-white group-hover:opacity-75`}
                ></span>
              </div>
            </div>
            <div className="flex flex-col justify-center lg:items-start items-center gap-5 md:w-4/5 lg:w-5/6">
              <header className="font-bellefair text-5xl tracking-wide uppercase leading-relaxed md:text-7xl lg:text-start xl:text-8xl ">
                {data[0].name}
              </header>
              <p className="text-center lg:text-start xl:text-lg text-blue-fg">
                {data[0].description}
              </p>
              <hr className="text-white w-full" />
              <div className="md:flex justify-around lg:justify-start  lg:gap-18 xl:gap-32 items-center md:w-full">
                <div className="mb-5">
                  <h2 className="font-barlow-condensed text-sm tracking-widest leading-normal text-center lg:text-start text-blue-fg">
                    AVE. DISTANCE
                  </h2>
                  <p className="font-bellefair text-3xl uppercase text-center lg:text-start my-2">
                    {data[0].distance}
                  </p>
                </div>

                <div className="mb-5">
                  <h2 className="font-barlow-condensed text-sm tracking-widest leading-normal text-center text-blue-fg lg:text-start">
                    EST. TRAVEL TIME
                  </h2>
                  <p className="font-bellefair text-3xl uppercase text-center lg:text-start my-2">
                    {data[0].travel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  );
}

export default Destination;
