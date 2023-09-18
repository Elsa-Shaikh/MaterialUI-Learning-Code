import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const CardComp = () => {
  return (
    <>
    <Box width='300px'>
        <Card>
            <CardMedia component='img' height='140' image='https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80' alt='Unsplash img' />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>React</Typography>
                <Typography variant='body2' color='text.secondary'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, eveniet?
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
            </CardActions>
        </Card>

    </Box>
    </>
  )
}

export default CardComp