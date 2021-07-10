import React, {createContext, useReducer, useState} from 'react';
import {useColorScheme} from 'react-native';
import {ThemeState, themeReducer, lightTheme, darkTheme} from './ThemeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  dark: boolean;
  cambiarDarkBoolean: (tipo: boolean) => void;
  setDarkMode: () => void;
  setLightMode: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  const colorScheme = useColorScheme();

  const [theme, dispatch] = useReducer(
    themeReducer,
    colorScheme === 'dark' ? darkTheme : lightTheme,
  );

  //Mantener estado del switch change theme
  const [dark, setDark] = useState(false);
  const cambiarDarkBoolean = (tipo: boolean) => {
    setDark(tipo);
  };

  const setDarkMode = () => {
    dispatch({type: 'set_dark_theme'});
  };
  const setLightMode = () => {
    dispatch({type: 'set_light_theme'});
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setDarkMode,
        setLightMode,
        dark,
        cambiarDarkBoolean,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
