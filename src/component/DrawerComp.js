import React, { useState } from 'react'
import { Drawer, Box , Typography,IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
const DrawerComp = () => {
const [dopen, setDopen] = useState(false)

    return (
    <>
    <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={()=> setDopen(true)}>
        <MenuIcon />
    </IconButton>
    <Drawer anchor='left' open={dopen} onClose={()=>setDopen(false)}>
        <Box p={2} width='250px' textAlign='center' role='presentation'>
            <Typography variant='h6' component='div'> Side Panel </Typography>
        </Box>
    </Drawer>
    </>
  )
}

export default DrawerComp