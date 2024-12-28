import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-5">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex gap-2 items-center">
        <DarkModeSwitch></DarkModeSwitch>
        <span className="3xl font-bold bg-amber-500 py-1 px-2 rounded-lg text-white">IMDB</span>
        <span className="hidden text-xl sm:inline">Clone</span>
      </div>
    </div>
  );
}
