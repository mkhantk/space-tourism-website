import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateVartical } from "../store/varticalSlice";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const varticalNav = useSelector((state) => state.varticalNav);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="absolute top-0 right-0 left-0 bg-transparent">
      <nav className="flex justify-between  items-center relative md:justify-start">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          {/* logo */}
          <img
            src="/assets/shared/logo.svg"
            alt="logo"
            className="p-5 xl:p-10 w-20 md:w-26 xl:w-44 cursor-pointer"
          />
        </div>
        {/* vartical nav */}
        <div className="">
          {!varticalNav && (
            <img
              src="/assets/shared/icon-hamburger.svg"
              alt="hamburger"
              className="p-5 md:hidden"
              onClick={() => dispatch(updateVartical())}
            />
          )}
        </div>
        {/* horizontal nav */}
        <div className="md:flex items-center w-full text-white font-barlow-condensed text-lg lg:text-xl tracking-widest hidden">
          <div className="hidden xl:inline-block h-0.5 w-full -mr-10 z-40 bg-white/15 flex-1"></div>
          <div className="backdrop-blur-3xl bg-white/15 pl-16 lg:pl-24 xl:pl-36 p-8.5   md:flex xl:flex-1 justify-around gap-16 items-center w-full">
            <div
              className="relative cursor-pointer group"
              onClick={() => navigate("/")}
            >
              <span className="mr-2 font-bold opacity-0 md:opacity-100 select-none">
                00
              </span>
              <span className="select-none">HOME</span>

              <span
                className={`absolute -bottom-8 lg:-bottom-8.5  left-0 right-0 w-full h-1 bg-white group-hover:opacity-70 ${
                  location.pathname === "/" ? "opacity-100" : "opacity-0"
                }`}
              ></span>
            </div>
            <div
              className="relative cursor-pointer group"
              onClick={() => navigate("/Destination")}
            >
              <span className="mr-2 font-bold select-none">01</span>
              <span className="select-none">DESTINATION</span>
              <span
                className={`absolute -bottom-8 lg:-bottom-8.5  left-0 right-0 w-full h-1 bg-white group-hover:opacity-70 ${
                  location.pathname === "/Destination"
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              ></span>
            </div>
            <div
              className="relative cursor-pointer group"
              onClick={() => navigate("/Crew")}
            >
              <span className="mr-2 font-bold select-none">02</span>
              <span className="select-none">CREW</span>
              <span
                className={`absolute -bottom-8 lg:-bottom-8.5  left-0 right-0 w-full h-1 bg-white group-hover:opacity-70 ${
                  location.pathname === "/Crew" ? "opacity-100" : "opacity-0"
                }`}
              ></span>
            </div>
            <div
              className="relative cursor-pointer group"
              onClick={() => navigate("/Technology")}
            >
              <span className="mr-2 font-bold select-none">03</span>
              <span className="select-none">TECHNOLOGY</span>
              <span
                className={`absolute -bottom-8 lg:-bottom-8.5  left-0 right-0 w-full h-1 bg-white group-hover:opacity-70 ${
                  location.pathname === "/Technology"
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              ></span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
