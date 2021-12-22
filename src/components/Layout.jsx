import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Header from "./Header";

const Layout = ({ children }) => {
  const { theme } = useContext(AppContext);

  return (
    <div
      className={`${
        theme
          ? "dark text-white bg-app_dark pb-64 mb-10 "
          : "light text-black pb-64 mb-10 "
      }`}
    >
      <Header />
      {children}
    </div>
  );
};

export default Layout;
