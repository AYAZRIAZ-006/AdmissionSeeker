import axios from 'axios';
import React, { forwardRef, useImperativeHandle } from 'react';
import { Paper, Avatar, Grid, Typography, TextField, Button, Modal, Box } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { InputLabel, Select, MenuItem, FormControl, Alert } from '@mui/material';
import BasicPopover from './popUp';
import { useNavigate } from 'react-router-dom';

const Signup = forwardRef((props, ref) => {

    const [sector, setSector] = React.useState('');
    const [universityName, setUniversityName] = React.useState('');
    const [website, setWebsite] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [campusID, setCampusId] = React.useState('');
    const [city, setCity] = React.useState('');
    const [province, setProvince] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [result, setResults] = React.useState([]);
    const [error, setError] = React.useState("");
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
            website,
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
                    navigate("/");
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
        <Modal
            open={openUpper}
            onClose={() => setOpenUpper(false)}
            maxWidth="lg">
            <Paper style={Style.paperStyle}>
                <Grid align='center'>
                    <Avatar style={Style.avatarStyle}>
                        <SchoolIcon />
                    </Avatar>
                    <h2 style={Style.headerStyle}>Sign Up</h2>
                    {openSuccess && <Alert>you are register successfully</Alert>}
                    {open && <Alert severity="error">{error}</Alert>}
                    <Typography variant='caption' gutterBottom>Please fill this form to register your university!</Typography>
                    <Button onClick={handleError}><BasicPopover error={error} open={open} /></Button>
                </Grid>
                <form onSubmit={handleSubmit} style={Style.form}>

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField fullWidth value={universityName} size="small" onChange={(e) => setUniversityName(e.target.value)} label='university Name' placeholder="Enter your university name" required />
                        </Grid>



                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField fullWidth value={email} size="small" onChange={(e) => setEmail(e.target.value)} label='email' placeholder="Enter your email" required />
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <TextField fullWidth value={city} size="small" onChange={(e) => setCity(e.target.value)} label='city' placeholder="Enter your city" required />
                        </Grid>

                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <FormControl fullWidth={true} sx={{ minWidth: 120 }} size="small">
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
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField fullWidth value={campusID} size="small" onChange={(e) => setCampusId(e.target.value)} label='Campus Id' placeholder="Enter your phone number" required />
                        </Grid>

                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <FormControl fullWidth={true} sx={{ minWidth: 120 }} size="small">
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
                        </Grid>
                        
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <TextField size='small' fullWidth value={website} onChange={(e) => setWebsite(e.target.value)} label='website' placeholder="https://www.website.edu.pk/" required />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField fullWidth value={password} size="small" onChange={(e) => setPassword(e.target.value)} label='Password' placeholder="Enter your password" required />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField fullWidth value={confirmPassword} size="small" onChange={(e) => setConfirmPassword(e.target.value)} label='Confirm Password' placeholder="Confirm your password" required />
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Box component="span" sx={{ pt: 2 }}>
                                <Button color="warning" variant="contained" onClick={onCloseModal} style={Style.buttonCancel} >Cancel</Button>
                                <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Modal >
    )
})

const Style = {
    paperStyle: {
        padding: '30px 20px', width: "40%", margin: "20px auto"
    },
    headerStyle: { margin: 0 },
    avatarStyle: { backgroundColor: '#1bbd7e' },
    form: { display: "flex", flexDirection: "column", gap: "10px" },
    buttonCancel: { marginRight: "10px" }
}

export default Signup;