import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from 'react-redux';
import {
  themeSelect,
} from '../../features/theme/themeSlice';
import SideBar from './SideBar'

export default function Layout({ children }) {

const [selectTheme, setSelectTheme] = useState('light')
  const themeSlice = useSelector(themeSelect) //pass this directly in mode dont work
  useEffect(() => {
    setSelectTheme(themeSlice);
  }, [useSelector(themeSelect)]);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#EF4B4B'
      },
      mode: selectTheme,
    }
  });
return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SideBar/>
        {children}
      </ThemeProvider>
    </>
  );
}