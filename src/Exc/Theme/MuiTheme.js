import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import MuiGrid from '../Layout/MuiGrid';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#ff4081',
    },
  },
});

function ThemedComponent() {
    console.log(createTheme, "ccccccccccc");
  return (
    <ThemeProvider theme={theme}>
        <MuiGrid />
      <Button variant="contained" color="primary">
        Click me
      </Button>
    </ThemeProvider>
  );
}

export default ThemedComponent;
