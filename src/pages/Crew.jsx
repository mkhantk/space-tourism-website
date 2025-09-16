import React, { useEffect, useState } from "react";

function Crew() {
  const [current, setCurrent] = useState("0");
  const [currentData, setCurrentData] = useState();

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);

        setCurrentData(data.crew[current]);
      });
  }, [current]);
  // console.log(currentData);

  return (
    currentData && (
      <main className="min-h-screen bg-[url('./assets/crew/background-crew-mobile.jpg')]  md:bg-[url('./assets/crew/background-crew-tablet.jpg')] lg:bg-[url('./assets/crew/background-crew-desktop.jpg')] bg-cover bg-center bg-no-repeat pt-20 lg:pb-12 flex flex-col justify-center items-center lg:justify-start gap-8 lg:gap-0 lg:px-16 xl:px-24 xl:pt-24">
        <h1 className="font-barlow-condensed text-center tracking-widest my-8 md:my-10 md:text-lg md:text-start w-full ">
          <span className="text-base font-bold text-gray-500 mx-3 lg:text-lg">
            02
          </span>
          <span className="text-white">MEET YOUR CREW</span>
        </h1>
        <div className="lg:flex lg:flex-row justify-between grow">
          {/* final wrapper */}

          <div className="lg:flex lg:flex-col grow justify-between items-start lg:w-4/6 xl:w-3/6">
            {/* texts */}

            <div className="p-5 md:w-5/6 m-auto lg:mx-0 lg:my-auto lg:p-0 ">
              {/* contents */}
              <h2 className="text-white/70 font-bellefair uppercase text-lg text-center md:text-xl lg:text-start lg:w-full xl:text-2xl">
                {currentData.role}
              </h2>
              <h1 className="text-white font-bellefair uppercase text-2xl text-center md:text-4xl lg:text-start lg:w-full my-2 xl:text-6xl">
                {currentData.name}
              </h1>
              <p className="text-white font-barlow my-8 text-center lg:text-start leading-relaxed md:text-lg xl:text-xl">
                {currentData.bio}
              </p>
            </div>
            <div className="flex justify-center items-center gap-5 lg:gap-8 lg:justify-self-start">
              {/* nav */}
              <div
                id="1"
                className={`p-1 lg:p-1.5 rounded-full cursor-pointer hover:bg-blue-fg/50 ${
                  current === "0" ? "bg-white" : "bg-blue-fg/20"
                }`}
                onClick={() => setCurrent("0")}
              ></div>
              <div
                id="2"
                className={`p-1 lg:p-1.5 rounded-full cursor-pointer hover:bg-blue-fg/50 ${
                  current === "1" ? "bg-white" : "bg-blue-fg/20"
                }`}
                onClick={() => setCurrent("1")}
              ></div>
              <div
                id="3"
                className={`p-1 lg:p-1.5 rounded-full cursor-pointer hover:bg-blue-fg/50 ${
                  current === "2" ? "bg-white" : "bg-blue-fg/20"
                }`}
                onClick={() => setCurrent("2")}
              ></div>
              <div
                id="4"
                className={`p-1 lg:p-1.5 rounded-full cursor-pointer hover:bg-blue-fg/50 ${
                  current === "3" ? "bg-white" : "bg-blue-fg/20"
                }`}
                onClick={() => setCurrent("3")}
              ></div>
            </div>
          </div>
          <div className="relative lg:mt-auto">
            {/* img */}
            <img
              src={currentData.images.png}
              alt=""
              className="w-4/5 md:w-3/6 m-auto p-5  lg:w-11/12 md:pb-0 lg:pb-5"
            />
            <div className=" z-48 absolute md:opacity-0 lg:opacity-100 bottom-5 lg:bottom-2 left-0 right-0 h-12 lg:h-32 bg-gradient-to-t from-blue-bg to-transparent"></div>
          </div>
        </div>
      </main>
    )
  );
}

export default Crew;
