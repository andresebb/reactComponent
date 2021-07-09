import React, {createContext} from 'react';

interface ThemeContextProps {
  theme: any;
  setDarkMode: () => void;
  setLightMode: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  const theme = {};

  const setDarkMode = () => {};
  const setLightMode = () => {};

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setDarkMode,
        setLightMode,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
