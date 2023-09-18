import { DatePicker } from '@mui/lab'
import { Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import dayjs from 'dayjs';

const DateComp = () => {
const [selected, setSelected] = useState(null)
    return (
    <>
    <Stack spacing={4} sx={{width:'250px'}}>
    <DatePicker label="Uncontrolled picker" defaultValue={dayjs('2022-04-17')} />
        <DatePicker 
        label='Date Picker' 
        renderInput={(params)=> <TextField {...params}/>}
        value={selected}
        onChange={(newValue)=> {
            setSelected(newValue);
        }}
        />
    </Stack>
    </>
  )
}

export default DateComp