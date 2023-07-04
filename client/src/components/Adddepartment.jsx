import axios from 'axios';
import React, { forwardRef, useImperativeHandle } from 'react';
import { Paper, Avatar, Grid, Typography, TextField, Button, Modal, Box } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { InputLabel, Select, MenuItem, FormControl, Alert } from '@mui/material';
import BasicPopover from './popUp';
import { useNavigate } from 'react-router-dom';

const AddDepartment = forwardRef((props, ref) => {
    console.log("in add department ref", ref.current);
    const [dep_Name, setDep_Name] = React.useState('');
    const [level, setLevel] = React.useState('');
    const [applyMerit, setApplyMerit] = React.useState('');
    const [isAdmissionOpen, setIsAdmissionOpen] = React.useState('');
    const [openingDate, setOpeningDate] = React.useState('');
    const [closingDate, setClosingDate] = React.useState('');
    const [semester, setSemester] = React.useState('');
    const [fee, setFee] = React.useState('');
    const [result, setResults] = React.useState([]);
    const [error, setError] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [openSuccess, setOpenSuccess] = React.useState(false);
    const navigate = useNavigate();
    const resetForm = () => {
        setDep_Name('');
        setLevel('');
        setApplyMerit('');
        setIsAdmissionOpen('');
        setOpeningDate('');
        setClosingDate('');
        setSemester('');
        setFee('');
      };
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
        axios.post("department/add", {
            dep_Name,
            semester,
            applyMerit,
            fee,
            level,
            openingDate,
            closingDate,
            isAdmissionOpen,
        })
            .then((res) => {
                if (res.status === 201) {
                    console.log("sucess in dep", res);
                    setResults(res);
                    setOpenSuccess(true);
                    alert("Department Add sucessfully");
                    navigate("/dashboard");
                        resetForm();
                    setOpenUpper(false);
                } else {
                    setError((res.response).toString());
                    console.log("in else case error");
                    setOpen(true);
                }
            })
            .catch(err => {
                console.log("err", err.response.data.message);
                setError((err.response.data.message).toString());
                setOpen(true)

            })
    };
    const [openUpper, setOpenUpper] = React.useState(false);
    useImperativeHandle(ref, () => {
        return {
            AddDepartmentOpen() {
                setOpenUpper(true);
            },
            // id:null,
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
                    <h2 style={Style.headerStyle}>Department</h2>
                    {openSuccess && <Alert>Add Department successfully</Alert>}
                    {open && <Alert severity="error">{error}</Alert>}
                    <Typography variant='caption' gutterBottom>Please fill this form to add your department!</Typography>
                    <Button onClick={handleError}><BasicPopover error={error} open={open} /></Button>
                </Grid>
                <form onSubmit={handleSubmit} style={Style.form}>

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField fullWidth value={dep_Name} size="small" onChange={(e) => setDep_Name(e.target.value)} label='department Name' placeholder="Enter department name" required />
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <FormControl fullWidth={true} sx={{ minWidth: 120 }} size="small">
                                <InputLabel id="demo-select-small" >Level</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={level}
                                    label="Level"
                                    required
                                    onChange={(e) => setLevel(e.target.value)} >
                                    <MenuItem value={"bachelor"}>Bachelor</MenuItem>
                                    <MenuItem value={"master"}>Master</MenuItem>
                                    <MenuItem value={"phd"}>Phd</MenuItem>
                                    <MenuItem value={"mphil"}>M phil</MenuItem>
                                </Select>
                            </FormControl>
                            </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <TextField type='number' fullWidth value={applyMerit} size="small" onChange={(e) => setApplyMerit(parseFloat(e.target.value))} label='ApplyMerit' placeholder="Enter Apply Merit" required />
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <TextField type='number' size='small' fullWidth value={fee} onChange={(e) => setFee(parseFloat(e.target.value))} label='Fee' placeholder="Enter fee" required />
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <FormControl fullWidth={true} sx={{ minWidth: 120 }} size="small">
                                <InputLabel id="demo-select-small" >Semester</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={semester}
                                    label="Semester"
                                    required
                                    onChange={(e) => setSemester(parseInt(e.target.value))} >
                                    <MenuItem value={8}>8</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <FormControl fullWidth={true} sx={{ minWidth: 120 }} size="small">
                                <InputLabel id="demo-select-small">isAdmissionOpen</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={isAdmissionOpen}
                                    label="IsAdmissionOpen"
                                    required
                                    onChange={(e) => setIsAdmissionOpen(e.target.value)} >
                                    <MenuItem value={true}>Yes</MenuItem>
                                    <MenuItem value={false}>No</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField fullWidth type="date" value={openingDate} size="small" onChange={(e) => setOpeningDate(e.target.value)}  required />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField fullWidth type="date" value={closingDate} size="small" onChange={(e) => setClosingDate(e.target.value)}  required />
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Box component="span" sx={{ pt: 2 }}>
                                <Button color="warning" variant="contained" onClick={onCloseModal} style={Style.buttonCancel} >Cancel</Button>
                                <Button type='submit' variant='contained' color='primary'>Done</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Modal>
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

export default AddDepartment;