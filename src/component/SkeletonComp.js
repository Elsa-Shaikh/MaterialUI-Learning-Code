import { LoadingButton } from '@mui/lab'
import { Avatar, Box, Skeleton, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SaveIcon from '@mui/icons-material/Save'


export const SkeletonComp = () => {
const [loading, setLoading] = useState(true)
useEffect(()=>{
    setTimeout(()=>{
          setLoading(false)
    },3000)
},[])

    return (
    <>
<Box sx={{width:'250px'}}>
 {
    loading ? (
        <Skeleton variant='rectangular' width={256} height={144} animation='wave'/>
    ):(
        <img src='https://images.unsplash.com/photo-1530210124550-912dc1381cb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80' alt='SKeleton' width={256} height={144}/>
    )
 }
<Stack direction='row' spacing={1} sx={{width:'100%', marginTop:'12px'}}>
    {
        loading ?(
            <Skeleton variant='circular' width={40} height={40} animation='wave'/>
        ):(
            <Avatar>V</Avatar>
        )
    }
</Stack>

<Stack sx={{width:'80%'}}>
    {
        loading?(
            <>
     <Typography variant='body1'> <Skeleton variant='text' width='100%' animation='wave'/> </Typography>
     <Typography variant='body2'> <Skeleton variant='text' width='100%' animation='wave'/> </Typography>
            </>
        ):(
<>
     <Typography variant='body1'> React Material UI</Typography>
            </>
        )
    }
</Stack>

</Box>
    <Stack spacing={1} width='250px' m='20px'>
        <Skeleton variant='text'/>
        <Skeleton variant='circular' width={40} height={40}/>
        <Skeleton variant='rectangular' width={250} height={125} animation='wave'/>
    </Stack>
<Stack spacing={2} direction='row'>
    <LoadingButton variant='outlined'>Submit</LoadingButton>
    <LoadingButton variant='outlined' loading>Submit</LoadingButton>
    <LoadingButton variant='outlined' loadingIndicator='Loading...'>Fetch Data</LoadingButton>
    <LoadingButton variant='outlined' loadingIndicator='Loading...' loading>Fetch Data</LoadingButton>
    <LoadingButton variant='outlined' loadingPosition='start' startIcon={<SaveIcon/>}>Save</LoadingButton>
    <LoadingButton variant='outlined' loadingPosition='start' startIcon={<SaveIcon/>} loading>Save</LoadingButton>
</Stack>


    </>
  )
}
