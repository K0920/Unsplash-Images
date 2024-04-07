import React, { createContext, useState } from "react";
import { useContext } from "react";

const AppContext = createContext();

export const useGlobalContext = () => {
  return useContext(AppContext);
};

const GlobalContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchText, setSearchText] = useState("cat");

  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", !isDarkTheme);
  };
  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchText, setSearchText }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default GlobalContextProvider;
