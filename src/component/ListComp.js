import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import MailIcon from '@mui/icons-material/Mail'

const ListComp = () => {
  return (
   <>
   <Box sx={{width:'400px', bgcolor:'#efefef', m:20}}>
       <List>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
                <ListItemAvatar>
                <Avatar><MailIcon/></Avatar>
                </ListItemAvatar>
                </ListItemIcon>
            <ListItemText primary='List Item1' secondary='Secondary text'/>
            </ListItemButton>
        </ListItem>
        <Divider/>
        <ListItem>
        <ListItemIcon><MailIcon/></ListItemIcon>
            <ListItemText primary='List Item2'/>
        </ListItem>
        <ListItem>
        <ListItemIcon><MailIcon/></ListItemIcon>
            <ListItemText primary='List Item3'/>
        </ListItem>
        
       </List>
   </Box>
   </>
    )
}

export default ListComp