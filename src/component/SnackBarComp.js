import { Alert, Button, Snackbar,AlertProps } from '@mui/material'
import React, { forwardRef, useState } from 'react'


const SnackBarAlert = forwardRef(
    function SnackbarAlert(props,ref){
        return <Alert elevation={6} ref={ref} {...props}/>
    }
)

const SnackBarComp = () => {
const [open, setOpen] = useState(false)
const handleClose = (e,reason)=>{
    if(reason === 'clickaway'){
        return
    }
    setOpen(false);
} 
return (
    <>
    <Button onClick={()=> setOpen(true)}>Submit</Button>
    {/* <Snackbar 
    open={open}
    onClose={handleClose}
    message='Form Submitted!' 
    autoHideDuration={4000}
    anchorOrigin={{
        vertical:'bottom',
        horizontal:'center'
    }}
    /> */}
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <SnackBarAlert onClose={handleClose} severity='success'> Form Submitted Successfully!</SnackBarAlert>
    </Snackbar>
    </>
  )
}

export default SnackBarComp