import React, { useState } from 'react'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Link,AppBar, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'

const NavbarComp = () => {

const [anchor, setAchor] = useState(null)
const open = Boolean(anchor);
const handleClick = (e)=>{
   setAchor(e.target);
}
const handleClose = ()=>{
    setAchor(null);
}
return (
    <>
    <AppBar position='static'>
       <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
            <CatchingPokemonIcon/>
        </IconButton>
        <Typography variant='h6' component='div' sx={{flexGrow:1}}> Pokemon </Typography>
       <Stack direction='row' spacing={2}>
        <Button color='inherit'>Features</Button>
        <Button color='inherit'>Services</Button>
        <Button color='inherit'>About</Button>
        <Button color='inherit' id='resources-button' onClick={handleClick} aria-controls={open ? 'resources-menu':undefined}
        aria-aria-haspopup='true'
        aria-expanded={open ? 'true': undefined}
        endIcon={<KeyboardArrowDownIcon/>}
        >Resources</Button>
        <Button color='inherit'>Login</Button>
       </Stack>
       <Menu id='resources-menu' anchorEl={anchor} open={open} MenuListProps={{
        'aria-labelledby':'resources-button'
       }}
       onClose={handleClose}
       anchorOrigin={{
        vertical:'bottom',
        horizontal:'right'
       }}
       transformOrigin={{
        vertical:'top',
        horizontal:'right'
       }}
       >
        <MenuItem onClick={handleClose}>Blog</MenuItem>
        <MenuItem onClick={handleClose}>Podcast</MenuItem>
       </Menu>
       </Toolbar>
    </AppBar>
    <Stack spacing={2} direction='row' m={4}>
           <Link href='#' variant='body2'> Link 1 </Link>
           <Typography variant='h6'>
           <Link href='#' color='secondary' underline='hover' component="button">Link 2</Link>
           </Typography>
    </Stack>
    </>
  )
}

export default NavbarComp