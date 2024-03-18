
import React, {useState} from 'react';
import { ThemeContext, themes } from './colors';
import { App } from './App';
// import HomeCard1 from './app/components/HomeCard1';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
     <App/>
     {/* <HomeCard1/> */}
    </ThemeContext.Provider>
  );
};