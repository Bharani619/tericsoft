import {
  Button,
  Dialog,
  DialogContent,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
  Box,
  Typography,
  TextField,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Checkbox,
  FormLabel,
  FormGroup
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editEmployeeData, getEmployeeData } from "../redux/action";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';
import { useNavigate } from "react-router-dom";

export const RenderTable = () => {
  const data = useSelector((store) => store.employeeData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState("");
  const [selectedDate,setSelectedDate] = useState(dayjs('11-06-2022'))
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [gender,setGender] = useState(""); 
  const [selectHobbies,setSelectHobbies] = useState("")
  const [currentId,setCurrentId] = useState('')
  
  const handleClickOpen = (id) => {
    setCurrentId(id)   
    console.log(currentId)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        dispatch(editEmployeeData(currentId,payload))
        .then(()=>{
            dispatch(getEmployeeData())
        })
     }
}

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getEmployeeData());
    }
  }, []);

  console.log(data);

  return (
    <>
      <TableContainer component={Paper} sx={{ width: "80%", margin: "auto",mb:3}}>
        <Table aria-label="simple table">
          <TableHead sx={{ background: "lightgrey" }}>
            <TableRow>
              <TableCell>S.NO</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Date of birth</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Hobbies</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.length>0 &&
              data?.map((el) => {
                return (
                  <TableRow key={el.id}>
                    <TableCell>{el.id}</TableCell>
                    <TableCell>
                      {el.first_name} {el.last_name}
                    </TableCell>
                    <TableCell>{el.user_email}</TableCell>
                    <TableCell>{el.phone_number}</TableCell>
                    <TableCell>{el.date_of_birth}</TableCell>
                    <TableCell>{el.gender}</TableCell>
                    <TableCell>{el.selected_hobbies}</TableCell>
                    <TableCell>
                      <Button onClick={()=>handleClickOpen(el.id)} variant="contained">
                        EDIT
                      </Button>
                      <Dialog open={open} onClose={handleClose}>
                        <DialogContent>
                          <form onSubmit={handleSubmit}>
                            <Stack
                              spacing={3}
                              borderRadius="5px"
                              width="500px"
                              margin="auto"
                              mt={5}
                              p={4}
                            >
                              <Box>
                                <Typography>
                                  EMPLOYEE REGISTERATION FORM
                                </Typography>
                              </Box>
                              <Stack
                                direction="row"
                                justifyContent="center"
                                spacing={3}
                              >
                                <TextField
                                  id="outlined-name"
                                  label="Firstname"
                                  value={firstName}
                                  onChange={(e) => setFirstName(e.target.value)}
                                />
                                <TextField
                                  id="outlined-name"
                                  label="Lastname"
                                  value={lastName}
                                  onChange={(e) => setLastName(e.target.value)}
                                />
                              </Stack>
                              <Stack
                                direction="row"
                                justifyContent="center"
                                spacing={8}
                                alignItems="center"
                              >
                                <Box>
                                  <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                  >
                                    <MobileDatePicker
                                      label="Date picker"
                                      inputFormat="MM/DD/YYYY"
                                      value={selectedDate}
                                      onChange={(newValue) =>
                                        setSelectedDate(newValue)
                                      }
                                      renderInput={(params) => (
                                        <TextField {...params} />
                                      )}
                                    />
                                  </LocalizationProvider>
                                </Box>
                                <Box>
                                  <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label">
                                      Gender
                                    </FormLabel>
                                    <RadioGroup
                                      row
                                      aria-labelledby="demo-row-radio-buttons-group-label"
                                      name="row-radio-buttons-group"
                                      value={gender}
                                      onChange={(e) =>
                                        setGender(e.target.value)
                                      }
                                    >
                                      <FormControlLabel
                                        value="female"
                                        control={<Radio />}
                                        label="Female"
                                      />
                                      <FormControlLabel
                                        value="male"
                                        control={<Radio />}
                                        label="Male"
                                      />
                                    </RadioGroup>
                                  </FormControl>
                                </Box>
                              </Stack>
                              <Stack
                                direction="row"
                                justifyContent="center"
                                spacing={3}
                              >
                                <Box>
                                  <TextField
                                    id="outlined-name"
                                    label="Email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                  />
                                </Box>
                                <Box>
                                  <TextField
                                    id="outlined-name"
                                    label="Phone number"
                                    type="text"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                  />
                                </Box>
                              </Stack>
                              <Box>
                                <FormLabel>Hobbies</FormLabel>
                                <FormGroup
                                  sx={{ width: "200px", margin: "auto" }}
                                  value={selectHobbies}
                                  onChange={(e) =>
                                    setSelectHobbies(e.target.value)
                                  }
                                >
                                  <FormControlLabel
                                    value="Reading Books"
                                    control={<Checkbox />}
                                    label="Reading Books"
                                  />
                                  <FormControlLabel
                                    value="Traveling"
                                    control={<Checkbox />}
                                    label="Traveling"
                                  />
                                  <FormControlLabel
                                    value="Playing Volleyball"
                                    control={<Checkbox />}
                                    label="Playing Volleyball"
                                  />
                                </FormGroup>
                              </Box>
                              <Box>
                                <Button type="submit">submit</Button>
                              </Box>
                            </Stack>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
