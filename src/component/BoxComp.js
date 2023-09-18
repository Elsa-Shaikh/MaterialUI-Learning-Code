import { Box, Divider, Grid, Paper, Stack } from '@mui/material'
import React from 'react'

const BoxComp = () => {
  return (
    <Paper sx={{p:'32px',m:'30px'}} elevation={4}>
    <Stack  // one dimensional 
    sx={{border:'1px solid'}} 
    direction='row' 
    spacing={2} 
    divider={<Divider orientation='vertical' flexItem />}>
     <Box 
    //  component='span' 
     sx={{
        // m:'20px',
        backgroundColor:'primary.main',
        height:'100px',
        p:'16px',
        width:'100px',
        color:'white',
        '&:hover':{
            backgroundColor:'primary.light'
     },
    }}>
        Box Component 
     </Box>
     <Box display='flex' width='100px' height='100px' bgcolor='success.light' p={2}></Box>
    </Stack>
    <Grid container my={4} mx={4} 
    // spacing={2}
    rowSpacing={2}
    columnSpacing={1}
    >
        <Grid item xs={12} sm={6}
        //sx 
        //sx='auto'
        //sx={6}
        > <Box bgcolor='primary.light' p={2}>Item 1</Box> </Grid>
        <Grid item xs={12} sm={6}> <Box bgcolor='primary.light' p={2}>Item 2</Box> </Grid>
        <Grid item xs={12} sm={6}>  <Box bgcolor='primary.light' p={2}>Item 3</Box> </Grid>
        <Grid item xs={12} sm={6}> <Box bgcolor='primary.light' p={2}>Item 4</Box> </Grid>
    </Grid>
    </Paper>
  )
}

export default BoxComp