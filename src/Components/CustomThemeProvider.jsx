// src/ThemeContext.js
import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

export const ColorModeContext = createContext();

export const CustomThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => localStorage.getItem('themeMode') || 'light');

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode(prevMode => {
        const nextMode = prevMode === 'light' ? 'dark' : 'light';
        localStorage.setItem('themeMode', nextMode);
        return nextMode;
      });
    },
    mode,
  }), [mode]);

 const theme = useMemo(() =>
  createTheme({
    palette: {
      mode,
      ...(mode === 'dark' && {
        background: {
          default: '#0D1B2A', // dark blue background
          paper: '#1B263B',   // slightly lighter dark blue for surfaces
        },
        primary: {
          main: '#3498db',    // optional: blue primary color
        },
        text: {
          primary: '#E0E0E0',
          secondary: '#A0A0A0',
        },
      }),
    },
  }),
  [mode]
);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
