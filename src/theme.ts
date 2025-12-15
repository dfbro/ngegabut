// src/theme.ts
'use client';
import { createTheme } from '@mui/material/styles';
import { Poppins } from 'next/font/google'; // Changed from Roboto to Poppins

const poppins = Poppins({ // Changed from roboto to poppins
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: poppins.style.fontFamily, // Changed from roboto to poppins
  },
});

export default theme;
