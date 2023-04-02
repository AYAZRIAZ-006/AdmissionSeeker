import React, { forwardRef, useImperativeHandle } from 'react';
import axios from 'axios';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, Modal, Alert } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import BasicPopover from './popUp';
import { useNavigate } from 'react-router-dom';

const Login = forwardRef((props, ref) => {
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [result, setResults] = React.useState(null);
    let [error, setError] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [openSuccess, setOpenSuccess] = React.useState(false);
    const navigate = useNavigate();


    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 15px', }
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
        axios.post("http://localhost:5000/api/v1/auth/signin", {
            email,
            password,
        }).then((res) => {
            if (res.status === 200) {
                setResults(res.data.results);
                console.log(res.data.results);
                setOpenSuccess(true);
                alert("You are login sucessfully");
                navigate("/contact");
                setOpenUpper(false);

            } else {
                // setError((res.response.data).toString());
                console.log("aya");
                // setOpen(true);
                // throw (res.response.data.message).toString();
            }
        })
            .catch(err => {
                console.log("err", err);
                setError((err.response.data.message || err.message).toString());
                setOpen(true)

            })

    };

    const [openUpper, setOpenUpper] = React.useState(false);

    useImperativeHandle(ref, () => {
        return {
            logInOpen() {
                setOpenUpper(true)
            }
        }

    })

    return (
        <Modal open={openUpper} onClose={() => setOpenUpper(false)}>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                        <h2>Sign In</h2>
                        {openSuccess && <Alert>Welcome {result.university.universityName}</Alert>}
                        {open && <Alert severity="error">{error}</Alert>}
                        <Button type='button' onClick={handleError}><BasicPopover error={error} open={open} /></Button>

                    </Grid>
                    <form onSubmit={handleSubmit}>
                        <TextField label='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' fullWidth required />
                        <TextField label='Password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' type='password' fullWidth required />
                        {/* <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 /> */}
                        <Button color="warning" variant="text" style={btnstyle} onClick={onCloseModal}>Cancel</Button>
                        <Button type='submit' color='primary' variant="contained" style={btnstyle} >Sign in</Button>
                        <Typography >
                            <Link href="#" >
                                Forgot password ?
                            </Link>
                        </Typography>
                        <Typography > Do you have an account ?
                            <Link href="#" >
                                Sign Up
                            </Link>
                        </Typography>
                    </form>
                </Paper>
            </Grid>
        </Modal>
    )
})

export default Login;