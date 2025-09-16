import React from "react";
import ExploreButton from "../components/ExploreButton";

function Homepage() {
  return (
    <main className="bg-[url('/assets/home/background-home-mobile.jpg')] md:bg-[url('/assets/home/background-home-tablet.jpg')] lg:bg-[url('/assets/home/background-home-desktop.jpg')] bg-cover bg-center min-h-screen w-full pt-20 px-5 pb-24 md:pb-5 flex flex-col justify-between lg:flex-row    lg:items-end lg:pt-0 ">
      <div className="text-white flex flex-col justify-center items-center mt-12 md:mt-36 gap-5 lg:items-start lg:p-20">
        <h2 className="font-barlow-condensed tracking-widest text-base md:text-3xl">
          SO, YOU WANT TO TRAVEL TO
        </h2>
        <h1 className="font-bellefair text-7xl md:text-[8.5rem] ">SPACE</h1>
        <p className="font-barlow text-sm  leading-[180%] text-center md:text-xl md:w-5/6 lg:text-start">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <ExploreButton />
    </main>
  );
}

export default Homepage;
