import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { RegisterForm } from '../components/RegisterForm';

export const Home = () => {
  const [open,setOpen] = useState(false);

  const handleClickOpen = ()=>{
    setOpen(true)
  }
  const handleClose = ()=>{
    setOpen(false)
  }
  return (
    <Box sx={{background:"orange",height:"100vh"}}>
       <Box sx={{background:"black",color:"white",padding:"15px"}}>
          <Typography>TERICSOFT</Typography>
       </Box>
       <Box sx={{mt:"15%"}}>
          <Typography variant="h3">EMPLOYEE REGISTERATION</Typography>
          <Box sx={{mt:"2%"}}>
            <Button onClick={handleClickOpen} variant="contained">ADD YOUR DATA</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                     <RegisterForm/>
                </DialogContent>
            </Dialog>
          </Box>
       </Box>
    </Box>
  )
}
