import { Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

const ButtonCom = () => {
// const [format, setformat] = useState<string|null>(null)

// const handleChange = (_event:React.MouseEvent<HTMLElement>,updatedFormats: string | null)=>{
//   setformat(updatedFormats);
// }

return (
    <>
    <Stack spacing={4}>
    <Stack spacing={2} direction='row'>
    <Button variant='text'>Text</Button>
    <Button variant='contained'>Contained</Button>
    <Button variant='outlined'>Outlined</Button>
    <Button variant='text' href='https://www.google.com'>Google</Button>
    </Stack>
   <Stack spacing={2} direction='row'>
   <Button variant='contained'color='primary'> Primary </Button>
   <Button variant='text'color='secondary'> Secondary </Button>
   <Button variant='contained'color='error'> Error </Button>
   <Button variant='contained'color='warning'> Warning </Button>
   <Button variant='outlined'color='info'> Info </Button>
   <Button variant='contained'color='success'> success </Button>
   </Stack>
   <Stack display='block' spacing={2} direction='row'>
   <Button variant='contained'size='small'> Small </Button>
   <Button variant='contained'size='medium'> Medium </Button>
   <Button variant='contained'size='large'> Large </Button>
   </Stack>
   <Stack spacing={2} direction='row'>
    <Button variant='contained' startIcon={<SendIcon/>} disableRipple onClick={()=> alert("Clicked")}>Send</Button>
    <Button variant='contained' endIcon={<SendIcon/>} disableElevation>Send</Button>  
    <IconButton aria-label='send' color='success' size="small">
    <SendIcon/>
  </IconButton>
   </Stack>
   <Stack direction='row'> 
   <ButtonGroup variant='outlined' orientation='vertical' size='small' color='secondary' aria-label='alignment button group'>
       <Button onClick={()=> alert('left')}>Left</Button>
       <Button>Center</Button>
       <Button>Right</Button>
       </ButtonGroup>
   </Stack>
  <Stack direction='row'>
     <ToggleButtonGroup 
     exclusive 
     aria-label='text formatting' 
    //  value={format} 
    //  onChange={handleChange} 
     size='small' 
     color='error' 
     orientation='vertical'>
           <ToggleButton value='bold' aria-label='bold'> <FormatBoldIcon /> </ToggleButton>
           <ToggleButton value='italic' aria-label='italic'> <FormatItalicIcon /> </ToggleButton>
           <ToggleButton value='underlined' aria-label='underlined'> <FormatUnderlinedIcon /> </ToggleButton>
     </ToggleButtonGroup>
  </Stack>
  
  </Stack> 
    </>
  )
}

export default ButtonCom