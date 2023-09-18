import { Typography } from '@mui/material'
import React from 'react'

const TypographyComp = () => {
  return (
    <>
    
   <Typography variant='h1'> Heading 1</Typography>
   <Typography variant='h2'> Heading 2</Typography>
   <Typography variant='h3'> Heading 3</Typography>
   <Typography variant='h4' component='h1' gutterBottom> Heading 4</Typography>
   <Typography variant='h5'> Heading 5</Typography>
   <Typography variant='h6'> Heading 6</Typography>

   <Typography variant='subtitle1'> subtitle 1</Typography>
   <Typography variant='subtitle2'> subtitle 2</Typography>

   <Typography variant='body1'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, nam!</Typography>
   <Typography variant='body2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio laudantium odit iure enim magni repellat voluptatibus atque reiciendis ipsum quisquam!</Typography>

    </>
  )
}

export default TypographyComp