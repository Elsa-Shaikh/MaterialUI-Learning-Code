import { Box, ImageList, ImageListItem, ImageListItemBar, Stack } from '@mui/material'
import React from 'react'

const ImageListComp = () => {
  return (
<>
<Stack spacing={4}>
      <ImageList sx={{width:500, height:450}} cols={2} rowHeight={164}>
        {
            imageList.map((item)=>{
                return(
                    <ImageListItem key={item.img}>
                        <img src={`${item.img}?w=164&h=164&fit=crop&auto&dpr=2`} alt={item.title} loading='lazy'/>    
                    <ImageListItemBar title={item.title}/>
                    </ImageListItem>
                )
            })
        }
      </ImageList>
      <ImageList sx={{width:500, height:450}} cols={2} gap={8} variant='woven'>
        {
            imageList.map((item)=>{
                return(
                    <ImageListItem key={item.img}>
                        <img src={`${item.img}?w=164&h=164&fit=crop&auto&dpr=2`} alt={item.title} loading='lazy'/>    
                    </ImageListItem>
                )
            })
        }
      </ImageList>
      <Box sx={{width:500, height:450, overflowY:'scroll'}}>
      <ImageList cols={2} gap={8} variant='masonry'>
        {
            imageList.map((item)=>{
                return(
                    <ImageListItem key={item.img}>
                        <img src={`${item.img}?w=248&fit=crop&auto&dpr=2`} alt={item.title} loading='lazy'/>    
                    </ImageListItem>
                )
            })
        }
      </ImageList>
      </Box>
</Stack>
</>
  )
}

const imageList =[
    {
    img:'https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
    title:'Computer'
    },
    {
        img:'https://images.unsplash.com/photo-1576083788611-045a01bc89ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80',
        title:'Food'
    },
    {
        img:'https://images.unsplash.com/photo-1599163479506-2758dab1dd5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
        title:'Coffee'
        },
        {
            img:'https://images.unsplash.com/photo-1560788843-f129150a705d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1382&q=80',
            title:'Brownies'
        },
        {
            img:'https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
            title:'Computer'
            },
            {
                img:'https://images.unsplash.com/photo-1576083788611-045a01bc89ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80',
                title:'Food'
            },
            {
                img:'https://images.unsplash.com/photo-1599163479506-2758dab1dd5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
                title:'Coffee'
                },
                {
                    img:'https://images.unsplash.com/photo-1560788843-f129150a705d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1382&q=80',
                    title:'Brownies'
                },
        

    ];
export default ImageListComp