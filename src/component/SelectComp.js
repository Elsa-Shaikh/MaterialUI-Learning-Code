import { Box, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'

const SelectComp = () => {
 const [country, setCountry] = useState('')
 const [countries, setCountries] = useState([])

//  console.log(country)
 console.log(countries)
 
 const handleChange = (e)=>{
    // setCountry(e.target.value);
    const value = e.target.value;

    setCountries(typeof value === 'string' ? value.split(','): value);
 }
    return (
    <>
    <Box width='250px' sx={{m:'20px'}}> 
       <TextField 
       label='Select Country' 
       select 
       value={countries} 
       onChange={handleChange} 
       fullWidth
       SelectProps={{
        multiple:true
       }}
       size='small'
       color='warning'
       helperText='Please Select Your Country'
       error
       >
         <MenuItem value='IN'>Pakistan</MenuItem>
         <MenuItem value='AU'>Australia</MenuItem>
         <MenuItem value='UK'>United Kingdom</MenuItem> 
       </TextField>
     </Box>
    </>
  )
}

export default SelectComp