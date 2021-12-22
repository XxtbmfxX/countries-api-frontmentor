import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import ReactLoading from "react-loading";

const CountryInfoPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const { code } = useParams();

  const getData = () => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data[0]);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, [code]);

  if (isLoading) {
    return (
      <div className=" flex  justify-center h-full w-full ">
        <ReactLoading type="spin" color="#ABABAB" height={667} width={375} />
      </div>
    );
  }

  return (
    <div
      className=" flex flex-col items-center p-4 dark:bg-app_dark text-left lg:flex-row lg:px-10 lg:mb-44 "
      key={data.name.common}
    >
      <img
        className=" w-full max-w-lg shadow-lg lg:max-w-sm  "
        src={data.flags.png}
        alt={data.name.common}
      />

      <article
        className=" grid justify-start  sm:justify-items-center gap-10  
          w-full data-text mt-10 pb-16 sm:grid-cols-2 place-content-center

        "
      >
        <section>
          <h1 className="  text-lg font-bold my-4 "> {data.name.common} </h1>

          <p>
            Native Name:
            <span> {Object.values(data.name.nativeName)[0].official}</span>
          </p>
          <p>
            Region: <span> {data.region} </span>
          </p>
          <p>
            Sub Region: <span> {data.subregion} </span>
          </p>
          <p>
            Capital: <span> {data.capital} </span>
          </p>
        </section>
        <section className="sm:mt-2">
          <p>
            Top Level Domain: <span> {data.tld} </span>
          </p>
          <p>
            Currencies:
            {Object.keys(data.currencies).map((i) => (
              <span> {i}</span>
            ))}
          </p>
          <p>
            Laguages:
            {Object.values(data.languages).map((i) => (
              <span> {i}</span>
            ))}
          </p>
        </section>
        {data.borders ? (
          <section className=" mt-6 ">
            <h2 className="font-bold">Border Countries:</h2>
            <div className="flex max-w-screen-sm flex-wrap text-sm">
              {data.borders.map((i) => (
                <Link
                  to={`/${i}`}
                  key={i}
                  className="block px-3 py-1 m-2 shadow-md "
                >
                  {i}
                </Link>
              ))}
            </div>
          </section>
        ) : (
          <p></p>
        )}
      </article>
    </div>
  );
};

export default CountryInfoPage;
