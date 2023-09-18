import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'

const BottomNaviComp = () => {
    const [value, setValue] = useState(0)
  return (
    <>
    <BottomNavigation
    sx={{
        width:'100%',
        position:'absolute',
        bottom:0
    }}
    showLabels
    value={value}
    onChange={(e,newValue)=> { setValue(newValue)}}
    >
        <BottomNavigationAction label='Home' icon={<HomeIcon/>}/>        
        <BottomNavigationAction label='Favorites' icon={<FavoriteIcon/>}/>        
        <BottomNavigationAction label='Person' icon={<PersonIcon/>}/>        
    </BottomNavigation>
    </>
  )
}

export default BottomNaviComp