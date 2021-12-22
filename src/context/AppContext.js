import { createContext, useState } from "react";

const AppContext = createContext();

const AppState = ({ children }) => {
  const [theme, setTheme] = useState(true);

  const handleDarkMode = () => {
    setTheme(!theme);
  };

  return (
    <AppContext.Provider
      value={{
        theme: theme,
        handleDarkMode: handleDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppState, AppContext };
