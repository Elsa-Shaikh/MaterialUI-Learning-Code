import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'

const SelectComp = () => {
 const [country, setCountry] = useState('')
 const [countries, setCountries] = useState([])
 const [dateValue, setDateValue] = useState([]);
//  console.log(country)
  console.log(countries)
//  console.log(dateValue);
 const handleChange = (e)=>{
    // setCountry(e.target.value);
    const value = e.target.value;
  //  const name = e.target.name;
  //  console.log(name);
    setCountries(typeof value === 'string' ? value.split(','): value); 
  }

  const [age, setAge] = React.useState('');

  const handleChangeS = (event) => {
    setAge(event.target.value);
  };


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
         <MenuItem value="PK">Pakistan</MenuItem>
         <MenuItem value='AU'>Australia</MenuItem>
         <MenuItem value='UK'>United Kingdom</MenuItem> 
       </TextField>
     </Box>

     <Box width='250px' sx={{m:'20px'}}>
     <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChangeS}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
     </Box>




    </>
  )
}

export default SelectComp