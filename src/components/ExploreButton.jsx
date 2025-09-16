import React from "react";
import { useNavigate } from "react-router-dom";

function ExploreButton() {
  const navigate = useNavigate();
  return (
    <div className="w-full p-14 md:p-32 lg:h-auto flex justify-center lg:flex-col lg:justify-around items-center mt-auto">
      {/* <div className="hidden lg:block p-48"></div> */}
      <button
        className="relative flex justify-center items-center group bg-white rounded-full w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 m-auto lg:mb-auto font-bellefair cursor-pointer"
        onClick={() => navigate("/Destination")}
      >
        <div
          id="overley"
          className="group-hover:opacity-30 absolute -top-10 -left-10 opacity-0 p-22 md:p-32 md:-left-12 md:-top-12 lg:-left-8 lg:-top-8 rounded-full bg-blue-fg/50"
        ></div>
        <span className="text-base md:text-3xl group-hover:text-gray-500 select-none">
          EXPLORE
        </span>
      </button>
    </div>
  );
}

export default ExploreButton;
