import axios from 'axios';
import React, { forwardRef, useImperativeHandle } from 'react';
import { Paper, Avatar, Grid, Typography, TextField, Button, Modal, Box } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { Alert } from '@mui/material';
import BasicPopover from './popUp';
import { useNavigate } from 'react-router-dom';

const updateField = forwardRef((props, ref) => {
    const [fieldName, setFieldName] = React.useState();
    const [value, setValue] = React.useState();
    const [result, setResults] = React.useState([]);
    const [error, setError] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [openSuccess, setOpenSuccess] = React.useState(false);
    const navigate = useNavigate();
    const resetForm = () => {
        setFieldName('');
        setValue('');
    };

    const handleError = () => {
        if (open) {
            setOpen(false)
        }
    }
    const onCloseModal = () => {
        setOpenUpper(false)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        axios.put("http://localhost:5000/api/v1/auth/field", {
            fieldName,
            value,
        })
            .then((res) => {
                if (res.status === 200) {
                    console.log("sucess in dep", res);
                    setResults(res);
                    setOpenSuccess(true);
                    alert("University update sucessfully");
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
            updateFieldOpen() {
                setOpenUpper(true);
            },
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
                    <h2 style={Style.headerStyle}>Update University Field</h2>
                    {openSuccess && <Alert>action done successfully</Alert>}
                    {open && <Alert severity="error">{error}</Alert>}
                    <Typography variant='caption' gutterBottom>Please fill this form to update field!</Typography>
                    <Button onClick={handleError}><BasicPopover error={error} open={open} /></Button>
                </Grid>
                <form onSubmit={handleSubmit} style={Style.form}>

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField fullWidth value={fieldName} size="small" onChange={(e) => setFieldName(e.target.value)} label='FieldName' placeholder="Enter fieldName" required />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField fullWidth value={value} size="small" onChange={(e) => setValue(e.target.value)} label='value' placeholder="Enter value" required />
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

export default updateField;