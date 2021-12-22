import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const { handleDarkMode } = useContext(AppContext);
  return (
    <header className="flex items-center justify-between w-full h-24 px-5  mb-8 shadow-md  dark:bg-info_dark  ">
      <Link to="/">
        <h1 className="font-bold text-sm ">Where in the world?</h1>
      </Link>

      <span
        className="flex flex-row items-center font-bold
         text-xs w-24 justify-evenly cursor-pointer "
        onClick={handleDarkMode}
      >
        <Luna />
        Dark Mode
      </span>
    </header>
  );
};

export default Header;

function Luna() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 "
      fill="none" //dark mode uwu
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );
}
