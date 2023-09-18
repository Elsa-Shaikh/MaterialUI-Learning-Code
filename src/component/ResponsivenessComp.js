import { Box, ThemeProvider, colors, createTheme } from '@mui/material'
import React from 'react'

const theme = createTheme({
    status:{
        danger: '#e53e3e'
    },
    palette:{
        secondary:{
            main: colors.orange[500]
        },
        neutral: {
            main: colors.grey[500],
            darker: colors.grey[700]
        }

    }
})
const ResponsivenessComp = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Box m='20px'
    sx={{
        height:'300px',
        width:{
            xs: 100, //0
            sm: 200, // 600>
            md: 300,//900>
            lg: 400,//1200>
            xl: 500//1536>
        },
        bgcolor:'secondary.dark'
    }}>
    </Box>
    </ThemeProvider>
    </>
  )
}

export default ResponsivenessComp