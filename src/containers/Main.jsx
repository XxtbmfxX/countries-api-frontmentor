import { useEffect, useState } from "react";

import React from "react";
import Country from "../components/Country";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";

import ReactLoading from "react-loading";

const Main = () => {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");
  const [filterCountries, setFilterCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((resp) => resp.json())
      .then((data) => {
        setCountries(data);
        setFilterCountries(data);
        setIsLoading(false);
      });
  };
  const getRegion = async (r) => {
    const resp = await fetch(`https://restcountries.com/v3.1/region/${r}/`);
    const data = await resp.json();
    setFilterCountries(data);
  };

  const handleRegion = (e) => {
    setRegion(e);
    getRegion(e.toLowerCase());
  };

  const handleSearch = (searchValue) => {
    setSearch(searchValue);

    const filteredCountries = countries.filter((country) => {
      if (country.name.common.toLowerCase().includes(search.toLowerCase())) {
        return country;
      }
    });
    setFilterCountries(filteredCountries);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <div className=" flex  flex-col justify-center items-center h-full w-full ">
        <div className=" flex flex-col w-full md:flex-row lg:justify-between  ">
          <SearchBar handleSearch={handleSearch} search={search} />

          <Filter handleRegion={handleRegion} region={region} />
        </div>
        <ReactLoading type="spin" color="#ABABAB" height={667} width={375} />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center pb-40 bg-gray-50  dark:bg-app_dark  lg:pb-64 ">
      <div className=" flex flex-col w-full md:flex-row lg:justify-between  ">
        <SearchBar handleSearch={handleSearch} search={search} />

        <Filter handleRegion={handleRegion} region={region} />
      </div>
      <div className="grid grid-cols justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {filterCountries.length > 0 ? (
          region === "" ? (
            filterCountries.map((country) => (
              <Country
                key={country.name.common}
                flag={country.flags.png}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
                code={country.cca2}
              />
            ))
          ) : (
            filterCountries.map((country) => {
              if (country.region === region) {
                return (
                  <Country
                    key={country.name.common}
                    flag={country.flags.png}
                    name={country.name.common}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                    code={country.cca2}
                  />
                );
              }
            })
          )
        ) : (
          <div className="flex justify-center mt-28 w-4/5 ">
            <h1>No country whit that name here broh (￣﹃￣)</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
