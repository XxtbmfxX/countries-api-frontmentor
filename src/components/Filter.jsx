import React from "react";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const Filter = ({ handleRegion, region }) => {
  return (
    <div className="   self-start rounded-lg ml-6 mt-6 lg:mr-14  ">
      <Menu
        as="div"
        className="relative inline-block text-left rounded-lg dark:bg-info_dark md:ml-16   xl:mr-12"
      >
        <div className="">
          <Menu.Button className="inline-flex shadow-md justify-between  p-5 text-base  rounded-md  ">
            Filter by Region{` ${region}`}
            <ChevronDownIcon
              className="w-5 h-5 ml-10 -mr-1 "
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Menu.Items className=" ">
          <div className=" absolute flex flex-col text-left text-base pl-4 mt-4 bg-white w-full rounded-md shadow-lg dark:bg-info_dark ">
            <Menu.Item className="m-2">
              {({ active }) => (
                <span
                  onClick={(e) => {
                    handleRegion(e.target.innerText);
                  }}
                  className={`${active && "border-b border-black"}`}
                >
                  Africa
                </span>
              )}
            </Menu.Item>
            <Menu.Item className="m-2">
              {({ active }) => (
                <span
                  onClick={(e) => {
                    handleRegion(e.target.innerText);
                  }}
                  className={`${active && "border-b border-black"}`}
                >
                  Americas
                </span>
              )}
            </Menu.Item>
            <Menu.Item className="m-2">
              {({ active }) => (
                <span
                  onClick={(e) => {
                    handleRegion(e.target.innerText);
                  }}
                  className={`${active && "border-b border-black"}`}
                >
                  Asia
                </span>
              )}
            </Menu.Item>
            <Menu.Item className="m-2">
              {({ active }) => (
                <span
                  onClick={(e) => {
                    handleRegion(e.target.innerText);
                  }}
                  className={`${active && "border-b border-black"}`}
                >
                  Europe
                </span>
              )}
            </Menu.Item>
            <Menu.Item className="m-2">
              {({ active }) => (
                <span
                  onClick={(e) => {
                    handleRegion(e.target.innerText);
                  }}
                  className={`${active && "border-b border-black"}`}
                >
                  Oceania
                </span>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default Filter;
