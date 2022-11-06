import { Box, Button, Dialog, DialogContent, Typography } from '@mui/material'
import React, { useState } from 'react'
import { RegisterForm } from '../components/RegisterForm';
import { RenderTable } from '../components/RenderTable'

export const RenderData = () => {
    const [open,setOpen] = useState(false);

    const handleClickOpen = ()=>{
      setOpen(true)
    }
    const handleClose = ()=>{
      setOpen(false)
    }
  return (
    <>
      <Typography p={3} variant="h4">EMPLOYEE DETAILS</Typography>
      <Box textAlign="end" p={3}>
        <Button onClick={handleClickOpen} variant='contained'>ADD DATA</Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogContent>
                <RegisterForm/>
            </DialogContent>
        </Dialog>
      </Box>
      <Box>
        <RenderTable/>
      </Box>
    </>
  )
}
