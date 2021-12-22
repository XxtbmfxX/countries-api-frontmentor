import React from "react";
import { Link } from "react-router-dom";

const Country = ({ flag, name, population, region, capital, code }) => {
  return (
    <div className="w-5/6 my-7  rounded-lg shadow-md dark:bg-info_dark  max-w-xs  ">
      <Link to={`/${code}`} key={code}>
        <img src={flag} className="rounded-t-lg" alt={name} />
        <div className=" p-5 p ">
          <h1 className="text-lg"> {name} </h1>
          <div className=" data-text text-left my-2   ">
            <p>
              Population:<span> {population} </span>
            </p>
            <p>
              Region:<span> {region} </span>
            </p>
            <p>
              Capital:<span> {capital} </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Country;
