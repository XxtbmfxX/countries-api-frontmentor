import React from "react";
import { Link } from "react-router-dom";
import CountryInfoPage from "../components/CountryInfoPage";

const FlagInfo = () => {
  return (
    <div className="patata flex flex-col justify-center dark:bg-app_dark  max-h-screen  ">
      <div className="my-10 mb-8 ml-4 ">
        <Link
          to="/"
          key="home"
          className="  flex flex-row justify-evenly  dark:bg-info_dark  w-28 p-3   shadow-lg rounded-lg  "
        >
          <BackArrow />
          Back
        </Link>
      </div>

      <CountryInfoPage />
    </div>
  );
};

export default FlagInfo;

function BackArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  );
}
