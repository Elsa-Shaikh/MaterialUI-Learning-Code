import { Avatar, Chip, IconButton, Stack, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import FaceIcon from '@mui/icons-material/Face'
import DeleteIcon from '@mui/icons-material/Delete'


const ChipComp = () => {
const [chip, setChip] = useState(['Chip1','Chip2','Chip3'])
const handleDelete = (chipToDelete)=>{
    setChip(chip => chip.filter((chip)=> chip !== chipToDelete))
}
    return (
    <>
    <Stack spacing={1} direction='row' sx={{m:20}}>
         <Chip label='Chip' color='primary' size='small'/>
         <Chip label='Chip Outlined' color='secondary' size='small' variant='outlined'/>
         <Chip avatar={<Avatar>V</Avatar>} label='Chip Outlined' color='secondary' size='small' variant='outlined'/>
         <Chip label='Chip' color='primary' size='small' icon={<FaceIcon/>}/>
         <Chip label='Click' color='warning' onClick={()=> alert('Clicked')}/>
         <Chip label='Delete' color='error' size='small' onClick={()=> alert('Clicked')} onDelete={()=> alert('Delete')}/>
       { chip.map((chips) => {
             return (
                <Chip key={chips} label={chips} onDelete={()=> handleDelete(chips)}/>
             )
        })}
    </Stack>
   
        <Tooltip title='Delete' placement='right' arrow enterDelay={500} leaveDelay={200}>
      <IconButton>
        <DeleteIcon />
      </IconButton>
      </Tooltip>
   

    </>
  )
}

export default ChipComp