import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import VarticalNav from "./components/VarticalNav";

function App() {
  const varticalNav = useSelector((state) => state.varticalNav);
  // console.log(varticalNav);

  return (
    <main className="min-h-screen w-full relative transition-all duration-500 ease-in-out">
      <Navbar />
      {varticalNav && <VarticalNav />}
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/Destination" element={<Destination />}></Route>
        <Route path="/Crew" element={<Crew />}></Route>
        <Route path="/Technology" element={<Technology />}></Route>
      </Routes>
    </main>
  );
}

export default App;
