import React, {useEffect, useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import DinnerReservation from '../pages/DinnerReservation';
import NavBar from '../components/NavBar';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import { PaletteType } from '@material-ui/core';


function Router(){
  useEffect(() =>{
    const storedTheme = localStorage.getItem("theme");
    if(storedTheme !== null)
      setIsDarkTheme(storedTheme !== 'light');
  }, []);

  const NotFound = () => (
    <div>
      <h1>Not Found!</h1>
    </div>
  );

  const light = {
    palette: {
      mode: 'light' as PaletteType,
    },
  };

  const dark = {
    palette: {
      mode: 'dark' as PaletteType,
    },
  };

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const changeTheme = () => {
    localStorage.setItem("theme", isDarkTheme ? "light" : "dark");
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <CssBaseline/>
      <BrowserRouter>
        <NavBar changeTheme={changeTheme} isDarkTheme={isDarkTheme}/>
        <Routes>
          <Route  path="/" element={<HomePage />} />
          <Route  path="/DinnerReservation" element={<DinnerReservation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default Router;
