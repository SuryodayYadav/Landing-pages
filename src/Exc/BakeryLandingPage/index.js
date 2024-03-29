import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import React from "react";
import Header from "./Header";

const theme = createTheme({
    palette: {
        primary: {
            main: '#FE7170',
            light: '#FE6261',
            dark: '#CB4E4D',
            contrastText: '#fff'
        },
        common: {
            black: '#000',
            white: '#fff'
        },
        mode: 'light',
        text: {
            primary: '#000',
            secondary: '#6D6875',
        },
        background: {
            paper: '#fff',
            default: '#fff'
        },
        action: {
            active: '',
            hover: '',
            selected: '',
            selectedOpacity: '',
            disabled: ''
        }
    }
})

function Shop(){
    return(
        <ThemeProvider theme={theme}>
            <Header />
        </ThemeProvider>
    )
}

export default Shop