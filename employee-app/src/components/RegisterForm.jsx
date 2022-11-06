import React, { useState } from 'react'
import {Box, Button, FormControl, FormControlLabel, Input, InputLabel, Radio, TextField,RadioGroup, FormLabel, Stack, FormGroup, Checkbox, Typography} from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addEmployeeData, getEmployeeData } from '../redux/action';

export const RegisterForm = () => {
    
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState("");
    const [selectedDate,setSelectedDate] = useState(dayjs('11-06-2022'))
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [gender,setGender] = useState(""); 
    const [selectHobbies,setSelectHobbies] = useState("")
 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
      if(firstName&&lastName&&selectedDate&&email&&phone&&gender&&selectHobbies){
        const payload = {
           first_name:firstName,
           last_name:lastName,
           date_of_birth:selectedDate,
           user_email:email,
           phone_number:phone,
           gender:gender,
           selected_hobbies:selectHobbies
        }
        dispatch(addEmployeeData(payload))
        .then(()=>{
          dispatch(getEmployeeData())
        })
        setTimeout(()=>{
          alert("registeration successfull")
          navigate('/display_data')
        },1000)
        
      }
      else{
        alert("Fill the missing details")
      }
    }
  
  
  return (
    <Box>
         <form onSubmit={handleSubmit} >
            <Stack spacing={3} borderRadius="5px" width="500px" margin="auto" mt={5} p={4}>
               <Box><Typography>EMPLOYEE REGISTERATION FORM</Typography></Box>
                <Stack direction="row" justifyContent="center" spacing={3}>
                  <TextField id='outlined-name'label="Firstname" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                  <TextField id='outlined-name'label="Lastname" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                </Stack>
                <Stack direction="row" justifyContent="center" spacing={8} alignItems="center">
                <Box>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <MobileDatePicker
                        label="Date picker"
                        inputFormat='MM/DD/YYYY'
                        value={selectedDate}
                        onChange={(newValue)=>setSelectedDate(newValue)}
                        renderInput={(params)=> <TextField {...params}/>}
                      />
                    </LocalizationProvider>
                </Box>
                <Box>
                    <FormControl>
                      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                          value={gender}
                          onChange={(e)=>setGender(e.target.value)}
                        >
                          <FormControlLabel value="female" control={<Radio />} label="Female" />
                          <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                      </FormControl>
                </Box>
                </Stack>
                <Stack direction="row" justifyContent="center" spacing={3}>
                  <Box><TextField id='outlined-name'label="Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/></Box>
                  <Box><TextField id='outlined-name'label="Phone number" type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}/></Box>
                </Stack>
                <Box>
                  <FormLabel>Hobbies</FormLabel>
                  <FormGroup sx={{width:"200px", margin:"auto"}} value={selectHobbies} onChange={(e)=>setSelectHobbies(e.target.value)}>
                      <FormControlLabel value="Reading Books" control={<Checkbox/>} label="Reading Books"/>
                      <FormControlLabel value="Traveling" control={<Checkbox/>} label="Traveling"/>
                      <FormControlLabel value="Playing Volleyball" control={<Checkbox/>} label="Playing Volleyball"/>
                  </FormGroup>
                </Box>
                <Box><Button type="submit">submit</Button></Box>
            </Stack>
         </form>
    </Box>
  )
}
