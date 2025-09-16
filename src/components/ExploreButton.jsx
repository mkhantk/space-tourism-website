import React from "react";
import { useNavigate } from "react-router-dom";

function ExploreButton() {
  const navigate = useNavigate();
  return (
    <div className="w-full p-5 h-svh lg:h-auto flex justify-center lg:flex-col lg:justify-around items-center m-auto">
      <div className="hidden lg:block p-48"></div>
      <button
        className="relative flex justify-center items-center group bg-white rounded-full w-24 h-24 md:w-40 md:h-40 m-auto lg:mb-auto font-bellefair cursor-pointer"
        onClick={() => navigate("/Destination")}
      >
        <div
          id="overley"
          className="group-hover:opacity-30 absolute -top-10 -left-10 opacity-0 p-22 md:p-44 md:-left-12 md:-top-12 rounded-full bg-blue-fg/50"
        ></div>
        <span className="text-base md:text-3xl group-hover:text-gray-500 select-none">
          EXPLORE
        </span>
      </button>
    </div>
  );
}

export default ExploreButton;
