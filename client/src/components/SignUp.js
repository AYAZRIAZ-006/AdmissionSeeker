import axios from 'axios';
import React, { forwardRef, useImperativeHandle } from 'react';
import { Paper, Avatar, Grid, Typography, TextField, Button, Modal } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { InputLabel, Select, MenuItem, FormControl, Alert } from '@mui/material';
import BasicPopover from './popUp';
import { useNavigate } from 'react-router-dom';

const Signup = forwardRef((props, ref) => {
    const paperStyle = { padding: '30px 20px', width: 350, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const [sector, setSector] = React.useState('');
    const [universityName, setUniversityName] = React.useState('');
    const [universityID, setUniversityID] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [campusID, setCampusId] = React.useState('');
    const [city, setCity] = React.useState('');
    const [province, setProvince] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [result, setResults] = React.useState([]);
    let [error, setError] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [openSuccess, setOpenSuccess] = React.useState(false);
    const navigate = useNavigate();
    const handleError = (event) => {
        if (open) {
            setOpen(false)
        }
    }
    const onCloseModal = (event) => {
        setOpenUpper(false)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        axios.post("http://localhost:5000/api/v1/auth/signup", {
            universityName,
            email,
            universityID,
            password,
            confirmPassword,
            campusID,
            city,
            sector,
            province
        })
            .then((res) => {
                if (res.status === 201) {
                    console.log(res.data);
                    setResults(res.data.results);
                    setOpenSuccess(true);
                    alert("You are Register sucessfully");
                    navigate("/contact");
                    setOpenUpper(false);
                } else {
                    setError((res.response.data).toString());
                    console.log(error);
                    setOpen(true);
                }
            })
            .catch(err => {
                console.log("err", err.response);
                setError((err.response.data.message).toString());
                setOpen(true)

            })
    };
    const [openUpper, setOpenUpper] = React.useState(false);
    useImperativeHandle(ref, () => {
        return {
            signUpOpen() {
                setOpenUpper(true);
            }
        }
    })
    return (
        <Modal open={openUpper} onClose={() => setOpenUpper(false)} >
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}>
                            <SchoolIcon />
                        </Avatar>
                        <h2 style={headerStyle}>Sign Up</h2>
                        {openSuccess && <Alert>you are register successfully</Alert>}
                        {open && <Alert severity="error">{error}</Alert>}
                        <Typography variant='caption' gutterBottom>Please fill this form to register your university!</Typography>
                        <Button onClick={handleError}><BasicPopover error={error} open={open} /></Button>
                    </Grid>
                    <form onSubmit={handleSubmit}>
                        <TextField size='small' fullWidth value={universityID} onChange={(e) => setUniversityID(e.target.value)} label='university ID' placeholder="Enter your university ID" required />
                        <TextField fullWidth value={universityName} size="small" onChange={(e) => setUniversityName(e.target.value)} label='university Name' placeholder="Enter your university name" required />
                        <TextField fullWidth value={email} size="small" onChange={(e) => setEmail(e.target.value)} label='email' placeholder="Enter your email" required />
                        <TextField fullWidth value={city} size="small" onChange={(e) => setCity(e.target.value)} label='city' placeholder="Enter your city" required />
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small" >Province</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={province}
                                label="Province"
                                required
                                onChange={(e) => setProvince(e.target.value)} >
                                <MenuItem value="punjab">Punjab</MenuItem>
                                <MenuItem value="sindh">Sindh</MenuItem>
                                <MenuItem value="kpk">KPK</MenuItem>
                                <MenuItem value="blochistan">Blochistan</MenuItem>
                                <MenuItem value="fedral">Fedral</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small">sector</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={sector}
                                label="Sector"
                                required
                                onChange={(e) => setSector(e.target.value)} >
                                <MenuItem value="private">Private</MenuItem>
                                <MenuItem value="public">Public</MenuItem>
                                <MenuItem value="semi">Semi Government</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField fullWidth value={campusID} size="small" onChange={(e) => setCampusId(e.target.value)} label='Campus Id' placeholder="Enter your phone number" required />
                        <TextField fullWidth value={password} size="small" onChange={(e) => setPassword(e.target.value)} label='Password' placeholder="Enter your password" required />
                        <TextField fullWidth value={confirmPassword} size="small" onChange={(e) => setConfirmPassword(e.target.value)} label='Confirm Password' placeholder="Confirm your password" required />
                        <Button color="warning" variant="text" onClick={onCloseModal}>Cancel</Button>
                        <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                    </form>
                </Paper>
            </Grid>
        </Modal>
    )
})

export default Signup;