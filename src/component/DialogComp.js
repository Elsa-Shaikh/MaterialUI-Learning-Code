import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, LinearProgress, Stack } from '@mui/material'
import React, { useState } from 'react'

const DialogComp = () => {
const [open, setOpen] = useState(false)
return (
    <>
    <Stack spacing={2}>
        <CircularProgress />
        <CircularProgress variant='determinate' value={60}/>
        <CircularProgress color='secondary'/>
        <LinearProgress />
        <LinearProgress variant='determinate' value={50}/>
        <LinearProgress color='warning'/>      
    </Stack>
    <Button onClick={()=> setOpen(true)}>Open Dialog</Button>
    <Dialog aria-labelledby='dialog-title' aria-describedby='dialog-description' open={open} onClose={()=> setOpen(false)}> 
        <DialogTitle id='dialog-title'>Submit the Test?</DialogTitle>
        <DialogContent>
            <DialogContentText id='dialog-description'>
                Are you sure you want to submit the test? You will not ne able to edit after submitting!
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={()=> setOpen(false)}>Cancel</Button>
            <Button autoFocus onClick={()=> setOpen(false)}>Submit</Button>
        </DialogActions>
    </Dialog>
    </>
  )
}

export default DialogComp