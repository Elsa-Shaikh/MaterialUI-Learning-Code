import { Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

const TextfieldComp = () => {

    const [value, setValue] = useState('')

    return (
    <>
      <Stack spacing={4} sx={{m:'20px'}}>
        <Stack direction='row' spacing={2}>
            <TextField label='Name' variant='outlined'/>
            <TextField label='Name' variant='filled'/>
            <TextField label='Name' variant='standard'/>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Small Secondary' size='small' color='secondary'/>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Form input' required/>
            <TextField label='Form input' required error={!value} helperText={!value?'Required':'Do not share your password'} value={value} onChange={e=> setValue(e.target.value)}/>
            <TextField label='Password' type='password' disabled helperText='Do not share your password with anyone'/>
            <TextField label='Read Only' InputProps={{readOnly:true}}/>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Amount' InputProps={{
                startAdornment: <startAdornment position='start'>$</startAdornment>
            }}/>
            <TextField label='Weight' InputProps={{
                endAdornment: <startAdornment position='end'>kg</startAdornment>
            }}/>
        </Stack>
      </Stack>
    </>
  )
}

export default TextfieldComp