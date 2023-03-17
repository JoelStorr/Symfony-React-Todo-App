import React from 'react'
import { CssBaseline } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
    palette:{
        mode: 'dark'
    }
})



export default function DefaultThemeProvider(props) {
  return (

        <ThemeProvider theme={theme}>
        <CssBaseline />
            {props.children}
        </ThemeProvider>

  )
}
