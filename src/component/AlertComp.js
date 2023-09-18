import { Alert, AlertTitle, Button, Stack } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

import React from 'react'

const AlertComp = () => {
  return (
    <>
    <Stack spacing={2}>
         <Alert severity='error'> This is an error alert</Alert>
         <Alert severity='success'> This is an success alert</Alert>
         <Alert severity='warning'> This is an warning alert</Alert>
         <Alert severity='info'> This is an info alert</Alert>

         <Alert severity='error' variant='outlined'> This is an error alert</Alert>
         <Alert severity='success' variant='outlined'> This is an success alert</Alert>
         <Alert severity='warning' variant='outlined'> This is an warning alert</Alert>
         <Alert severity='info' variant='outlined'> This is an info alert</Alert>

         <Alert severity='error' variant='filled' onClose={()=>alert('Close')}> <AlertTitle>Error</AlertTitle> This is an error alert</Alert>
         <Alert severity='success' variant='filled' action={<Button color='inherit' size='small'>UNDO</Button>}> This is an success alert</Alert>
         <Alert severity='warning' variant='filled'> This is an warning alert</Alert>
         <Alert severity='info' variant='filled' icon={<CheckIcon fontSize='inherit'/>}> This is an info alert</Alert>

         </Stack>
    </>
  )
}

export default AlertComp