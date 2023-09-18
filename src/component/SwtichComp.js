import { Autocomplete, Box, FormControlLabel, Rating, Stack, Switch, TextField } from '@mui/material'
import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'


const SwtichComp = () => {
const [value, setValue] = useState(false)
const [rate, setRate] = useState(3)
const [auto, setAuto] = useState(null)


console.log(value);
const handleChange = (e)=>{
   setValue(e.target.checked);

}

const handleRateChange = (e,newRate)=>{
    setRate(newRate);
 }
const handleAutoChange = (e,newAuto)=>{
    setAuto(newAuto);
 }
 

    return (
    <>
    <Box sx={{m:'20px'}}>
        <FormControlLabel label='Dark Mode' control={<Switch checked={value} onChange={handleChange} size='small' color='success'/>}/>
    </Box>
    <Box sx={{m:'20px'}}>
    <Stack spacing={2}>
        <Rating 
        // readOnly 
        highlightSelectedOnly value={rate} onChange={handleRateChange} precision={0.5} size='large' icon={<FavoriteIcon fontSize='inherit' color='error'/>} emptyIcon={<FavoriteBorderIcon fontSize='inherit'/>}/>
    </Stack>
<Stack width='250px' spacing={2}>
         <Autocomplete 
         options={skills} 
         renderInput={(params)=><TextField {...params} label='Skills'/>}
         value={auto}
         onChange={handleAutoChange}
         freeSolo
         />
</Stack>

    </Box>
    </>
  )
}

const skills = [
    'HTML',
    'CSS',
    'Javascript',
    'PHP',
    'MySQL'
];

// const skill = {
//     id: Number,
//     label: String
// }
// const skillOptions = skill.map((skill,index)=>{
//     id: index+1,
//     label:skill,
// })

export default SwtichComp