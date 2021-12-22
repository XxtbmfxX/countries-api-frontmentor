import React from "react";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className=" text-md px-8  mx-10 h-14 rounded-lg mt-6 mb-7 w-4/5 shadow-md dark:bg-info_dark max-w-sm lg:mr-0 lg:ml-14  xl:ml-24  ">
      <span className="flex flex-row items-center">
        <MgGlass />
        <input
          className=" h-14 pl-5 focus:outline-none  dark:bg-info_dark w-full "
          type="text"
          placeholder="Search for a country..."
          onChange={(e) => handleSearch(e.target.value)}
          autoComplete="false"
        />
      </span>
    </div>
  );
};

function MgGlass() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}

export default SearchBar;
