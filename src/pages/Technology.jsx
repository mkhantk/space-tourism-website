import React, { useEffect, useState } from "react";

function Technology() {
  const [current, setCurrent] = useState("0");
  const [currentData, setCurrentData] = useState();

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setCurrentData(data.technology[current]));
  }, [current]);
  console.log(currentData);

  return (
    currentData && (
      <main className="min-h-screen w-full bg-blue-bg transition-colors duration-700 bg-[url('/assets/technology/background-technology-mobile.jpg')] md:bg-[url('/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('/assets/technology/background-technology-mobile.jpg')] pt-20 bg-cover bg-center bg-no-repeat lg:flex flex-col lg:pl-20 xl:pl-36 xl:pt-36">
        <h1 className="text-center font-barlow-condensed tracking-widest text-white py-5 md:text-start md:px-5 md:py-10 lg:px-0  lg:text-lg ">
          {/* header */}
          <span className="text-base font-bold text-gray-500 mx-5 lg:text-lg lg:ml-0">
            03
          </span>
          <span>SPACE LAUNCH 101</span>
        </h1>
        <div className="lg:flex flex-row-reverse justify-end items-center gap-5 lg:grow ">
          {/* content */}
          <div className="lg:w-1/2 xl:w-1/3">
            {/* image */}
            <picture className="">
              <source
                media="(min-width:1024px)"
                srcset={currentData.images.portrait}
              />
              <source
                media="(min-width:768px)"
                srcset={currentData.images.landscape}
              />
              <img
                src={currentData.images.portrait}
                alt=""
                className="h-60 object-cover object-center w-full md:h-full my-8 "
              />
            </picture>
          </div>
          <div className="lg:flex flex-row justify-start items-center gap-5 grow lg:w-1/2 xl:w-2/6 lg:gap-8 xl:gap-10">
            <div className="flex justify-center items-center gap-5 lg:gap-8 font-bellefair lg:flex-col">
              {/* nav */}
              <div
                className={`${
                  current === "0"
                    ? "bg-white text-black"
                    : "bg-blue-bg text-white border border-blue-fg"
                } w-8 h-8 flex justify-center items-center  text-center rounded-full md:w-10 md:h-10 lg:w-14 lg:h-14 lg:text-xl xl:text-3xl xl:w-20 xl:h-20 hover:border-blue-fg/50 select-none`}
                onClick={() => setCurrent("0")}
              >
                1
              </div>
              <div
                className={`${
                  current === "1"
                    ? "bg-white text-black"
                    : "bg-blue-bg text-white border border-blue-fg"
                } h-8 flex justify-center items-center w-8 text-center rounded-full md:w-10 md:h-10 lg:w-14 lg:h-14 lg:text-xl xl:text-3xl xl:w-20 xl:h-20 hover:border-blue-fg/50 select-none`}
                onClick={() => setCurrent("1")}
              >
                2
              </div>
              <div
                className={`${
                  current === "2"
                    ? "bg-white text-black"
                    : "bg-blue-bg text-white border border-blue-fg"
                } h-8 flex justify-center items-center w-8 text-center rounded-full md:w-10 md:h-10 lg:w-14 lg:h-14 lg:text-xl xl:text-3xl xl:w-20 xl:h-20 hover:border-blue-fg/50 select-none`}
                onClick={() => setCurrent("2")}
              >
                3
              </div>
            </div>
            <div className="p-5 lg:p-0">
              {/* texts */}

              <h2 className="text-base text-center font-bellefair text-gray-500 md:text-lg lg:text-start xl:text-3xl">
                THE TERMINOLOGY...
              </h2>
              <h1 className="text-white text-xl font-bellefair uppercase text-center p-2 md:text-3xl lg:text-start lg:text-4xl xl:text-5xl lg:py-5 tracking-wide">
                {currentData.name}
              </h1>
              <p className="text-center font-barlow text-blue-fg text-sm leading-relaxed md:w-4/5 md:m-auto md:leading-loose lg:text-start lg:m-0 lg:w-auto lg:text-lg xl:text-xl">
                {currentData.description}
              </p>
            </div>
          </div>
        </div>
      </main>
    )
  );
}

export default Technology;
