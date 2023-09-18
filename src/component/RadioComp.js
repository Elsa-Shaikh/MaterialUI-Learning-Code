import { Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'

const RadioComp = () => {
const [value, setValue] = useState('')
console.log(value);
const handleChange = (e)=>{
      setValue(e.target.value);
}
    return (
    <>
    <Box sx={{m:'20px'}}>
          <FormControl error>
            <FormLabel id='job-experience-group-label'>Years of Experience</FormLabel>
            <RadioGroup 
            name='job-experience-group' 
            value={value}
            onChange={handleChange}
            row
            aria-labelledby='job-experience-group-label'>
                <FormControlLabel control={<Radio size='medium' color='secondary'/>} label='0-2' value='0-2'></FormControlLabel>
                <FormControlLabel control={<Radio/>} label='3-5' value='3-5'></FormControlLabel>
                <FormControlLabel control={<Radio/>} label='6-10' value='6-10'></FormControlLabel>
            </RadioGroup>
            <FormHelperText> Invalid selection</FormHelperText>
          </FormControl>

    </Box>
    </>
  )
}

export default RadioComp