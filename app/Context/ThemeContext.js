import React, {createContext, useContext, useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {darkTheme, getColors, lightTheme} from '../theme';
import App from '../../App';

const ThemeContext = createContext({
  dark: false,
  colors: lightTheme,
  setScheme: () => {},
});

export const ThemeProvider = () => {
  const colorScheme = useColorScheme();
  const [dark, setDark] = useState(colorScheme === 'dark');

  const localStoreFun = () => {
    setDark(colorScheme === 'dark');
  };

  useEffect(() => {
    localStoreFun();
  }, [colorScheme]);

  const defaultThemes = {
    dark: dark,
    colors: dark ? darkTheme : lightTheme,
    setScheme: scheme => {
      setDark(scheme === 'dark');
      getColors(scheme, colorScheme);
    },
  };
  return (
    <ThemeContext.Provider value={defaultThemes}>
      <App />
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

export const useTheme = () => useContext(ThemeContext);
