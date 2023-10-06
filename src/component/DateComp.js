// import { DatePicker } from '@mui/lab'
// import { Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
// import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker, TimePicker } from '@mui/x-date-pickers';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { Autocomplete, Box, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { CheckBox } from '@mui/icons-material';


const DateComp = () => {
 const [selected, setSelected] = useState(null)
 const [selectedT, setSelectedT] = useState(null)
 const [selectedDT, setSelectedDT] = useState(null)
 const [value, setValue] = useState([null,null])
// console.log(selected);
// console.log({
//     // selectedT: selectedT && selectedT.toLocaleTimeString(),
// selectedT
// });
// console.log(selectedDT);

console.log(value);
const [startDate, setStartDate] = useState(null);
const [endDate, setEndDate] = useState(null);

const handleStartDateChange = (date) => {
  setStartDate(date);
};

const handleEndDateChange = (date) => {
  setEndDate(date);
};

const [auto, setAuto] = useState(null)
const handleAutoChange = (e,newAuto)=>{
    setAuto(newAuto);
 }
 const [datePicker, setDatePicler] = useState([])

 //  console.log(country)
  console.log(datePicker)
  
  const handleChange = (e)=>{
     // setCountry(e.target.value);
     const value = e.target.value;
 
     setDatePicler(typeof value === 'string' ? value.split(','): value);
  }
   
  const [age, setAge] = React.useState('');

  const handleChangeS = (event) => {
    setAge(event.target.value);
  };

 return (
    <>
       <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker 
        label="Basic date picker" 
        sx={{m:'20px'}} 
        value={selected} 
        onChange={(newValue)=> {
            setSelected(newValue);
        }}/>
        <TimePicker 
        label='Basic Time Picker'
        sx={{m:'20px'}} 
        value={selectedT} 
        onChange={(newValue)=> {
            setSelectedT(newValue);
        }}
        />
        <DateTimePicker 
        label='Basic Date and Time Picker'
        sx={{m:'20px'}} 
        value={selectedDT} 
        onChange={(newValue)=> {
            setSelectedDT(newValue);
        }}
        
        />
<Box width='500px'>
<DateRangePicker 
localeText={{ start: 'Check-in', end: 'Check-out' }} 
 sx={{m:'20px'}}
 value={value}
 onChange={(newValue)=>{
    setValue(newValue);
 }}
/>
</Box>

<DemoContainer components={['DateRangePicker']} sx={{width:'500px',p:3}}>
        <DateRangePicker
          slotProps={{
            textField: ({ position }) => ({
              color: position === 'start' ? 'success' : 'warning',
              focused: true,
            }),
          }}
          defaultValue={[dayjs('2022-04-17'), null]}
        /></DemoContainer>

      {/* <div> */}
      {/* <DemoContainer components={['DateRangePicker']} sx={{width:'500px',p:3,border:'1px solid red'}}> */}

          {/* <label>This Month </label> */}
          {/* <DatePicker
            value={startDate}
            onChange={handleStartDateChange}
            renderInput={(params) => <TextField {...params} />}
          /> */}
          {/* <DateRangePicker 
localeText={{ start: 'Start Date', end: 'End Date' }} 
 sx={{m:'20px'}}
 value={value}
 onChange={(newValue)=>{
    setValue(newValue);
 }}
/> */}
{/* </DemoContainer> */}
    {/* </div> */}
    
        {/* <div>
          <label>End Date: </label>
          <DatePicker
            value={endDate}
            onChange={handleEndDateChange}
            renderInput={(params) => <TextField {...params} />}
            minDate={startDate}
          />
        </div> */}
{/* <Stack width='250px' spacing={2}>
         <Autocomplete 
         options={skills} 
         renderInput={(params)=><TextField {...params} label='Dates'/>}
         value={auto}
         onChange={handleAutoChange}
         freeSolo
         />
</Stack> */}
    <Box width='300px' sx={{m:'20px'}}> 
       <TextField 
      //  label='Date'
      placeholder='Date' 
       select 
       value={datePicker} 
       onChange={handleChange} 
       fullWidth
       SelectProps={{
        multiple:true
       }}
       size='medium'
       color='primary'
    //    helperText='Please Select Your Country'
    //    error
       >
         {/* <MenuItem value='IN'> 
         <Stack spacing={2} direction={'row'}>
         <Typography>Start</Typography>
         <Typography>End</Typography>    
         </Stack>
         </MenuItem> */}
         <MenuItem value='DatePicker'>
      <DemoContainer components={['DateRangePicker']} sx={{width:'200px'}}>
          <label>This Month </label>
          <DateRangePicker 
localeText={{ start: 'Start Date', end: 'End Date' }} 
 sx={{m:'20px'}}
 value={value}
 onChange={(newValue)=>{
    setValue(newValue);
 }}
/>
</DemoContainer>

         </MenuItem>

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
         <MenuItem value='DatePicker'>
      <DemoContainer components={['DateRangePicker']} sx={{width:'200px'}}>
          <label>This Month </label>
          <DateRangePicker 
localeText={{ start: 'Start Date', end: 'End Date' }} 
 sx={{m:'20px'}}
 value={value}
 onChange={(newValue)=>{
    setValue(newValue);
    console.log(newValue);
 }}
/>
</DemoContainer>

         </MenuItem>

        </Select>
      </FormControl>
    </Box>
     </Box>





<div>
      <DemoContainer components={['DateRangePicker']} sx={{width:'500px',p:3,border:'1px solid red'}}>

          <label>This Month </label>
          <DateRangePicker 
localeText={{ start: 'Start Date', end: 'End Date' }} 
 sx={{m:'20px'}}
 value={value}
 onChange={(newValue)=>{
    setValue(newValue);
 }}
/>
</DemoContainer>
    </div>
    

       </LocalizationProvider>



   {/* <Stack spacing={4} sx={{width:'250px'}}>
<DatePicker label="Uncontrolled picker" defaultValue={dayjs('2022-04-17')} />
    <DatePicker 
    label='Date Picker' 
    renderInput={(params)=> <TextField {...params}/>}
    value={selected}
    onChange={(newValue)=> {
        setSelected(newValue);
    }}
    />
</Stack> */}

    </>
)
}

export default DateComp

