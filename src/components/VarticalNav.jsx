import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeVartical, updateVartical } from "../store/varticalSlice";
import { useLocation, useNavigate } from "react-router-dom";

function VarticalNav() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  return (
    <div className="absolute w-3/4 z-50 top-0 bottom-0  right-0 flex flex-col justify-start gap-20 font-barlow-condensed text-lg tracking-widest text-white backdrop-blur-lg md:opacity-0">
      <img
        src="/assets/shared/icon-close.svg"
        alt=""
        className="ml-auto py-8 px-6"
        onClick={() => dispatch(updateVartical())}
      />
      <div className="flex flex-col justify-normal gap-5">
        <div
          className="w-full  grid grid-cols-5 justify-start items-center gap-2 cursor-pointer group"
          onClick={() => {
            navigate("/");
            dispatch(closeVartical());
          }}
        >
          <span className="text-end">00</span>
          <span className="col-span-3">HOME</span>
          <span
            className={`ml-auto group-hover:opacity-50 ${
              location.pathname === "/" ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="px-0.5 bg-white"></span>
          </span>
        </div>
        <div
          className="w-full grid grid-cols-5 justify-start items-center gap-2 cursor-pointer group"
          onClick={() => {
            navigate("/Destination");
            dispatch(closeVartical());
          }}
        >
          <span className="text-end">01</span>
          <span className="col-span-3">DESTINATION</span>
          <span
            className={`ml-auto group-hover:opacity-50 ${
              location.pathname === "/Destination" ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="px-0.5 bg-white"></span>
          </span>
        </div>
        <div
          className="w-full grid grid-cols-5 justify-start items-center gap-2 cursor-pointer group"
          onClick={() => {
            navigate("/Crew");
            dispatch(closeVartical());
          }}
        >
          <span className="text-end">02</span>
          <span className="col-span-3">CREW</span>
          <span
            className={`ml-auto group-hover:opacity-50 ${
              location.pathname === "/Crew" ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="px-0.5 bg-white"></span>
          </span>
        </div>
        <div
          className="w-full grid grid-cols-5 justify-start items-center gap-2 cursor-pointer group"
          onClick={() => {
            navigate("/Technology");
            dispatch(closeVartical());
          }}
        >
          <span className="text-end">03</span>
          <span className="col-span-3">TECHNOLOGY</span>
          <span
            className={`ml-auto group-hover:opacity-50 ${
              location.pathname === "/Technology" ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="px-0.5 bg-white"></span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default VarticalNav;
