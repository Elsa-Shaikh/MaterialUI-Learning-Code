import { Avatar, AvatarGroup, Badge, Stack } from '@mui/material'
import React from 'react'
import MailIcon from '@mui/icons-material/Mail'

const AvatarComp = () => {
  return (
    <>
    <Stack spacing={4}>
         <Stack direction='row' spacing={1}>
            <Avatar
            sx={{
                bgcolor:'primary.light'
            }}
            >BW</Avatar>
            <Avatar
            sx={{
                bgcolor:'success.light'
            }}>CK</Avatar>          
         </Stack>
         <Stack direction='row' spacing={1}>
            <AvatarGroup max={3}>
            <Avatar
            sx={{
                bgcolor:'primary.light'
            }}
            >BW</Avatar>
            <Avatar
            sx={{
                bgcolor:'success.light'
            }}>CK</Avatar>
            <Avatar src='https://randomuser.me/api/portraits/women/79.jpg' alt='Jane Doe'/>
            <Avatar src='https://randomuser.me/api/portraits/women/51.jpg' alt='Jane Doe'/>
            </AvatarGroup>
         </Stack>
         <Stack direction='row' spacing={1}>
            <Avatar
            variant='square'
            sx={{
                bgcolor:'primary.light'
                ,width:48,
                height:48
            }}
            >BW</Avatar>
            <Avatar
            variant='rounded'
            sx={{
                bgcolor:'success.light'
            }}>CK</Avatar>          
         </Stack>
         <Stack spacing={2} direction='row'>
            <Badge badgeContent={5} color='primary'>
                <MailIcon/>
            </Badge>
            <Badge badgeContent={0} color='secondary' showZero> 
                <MailIcon/>
            </Badge>
            <Badge badgeContent={100} color='primary' max={999}>
                <MailIcon/>
            </Badge>
            <Badge variant='dot' color='primary' invisible={true}>
                <MailIcon/>
            </Badge>
         </Stack>
    </Stack>
    </>
  )
}

export default AvatarComp