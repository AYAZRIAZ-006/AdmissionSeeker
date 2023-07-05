import React, { forwardRef, useImperativeHandle } from 'react';
import { Grid, Paper, Avatar, TextField, Button, Modal, Alert, Box } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import BasicPopover from './popUp';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/auth';

const Login = forwardRef((props, ref) => {
    const dispatch = useDispatch();
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [result, setResults] = React.useState(null);
    const [error, setError] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [openSuccess, setOpenSuccess] = React.useState(false);
    const navigate = useNavigate();


    const paperStyle = { padding: 20, width: "40%", margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
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
        console.log('calling dispatch')
        dispatch(login({
            email,
            password,
        }))
        closeModal();
        alert("You are login SucessFully");
        setTimeout(() => {
            navigate("/dashboard");
        }, 700);

    };

    const [openUpper, setOpenUpper] = React.useState(false);

    useImperativeHandle(ref, () => {
        return {
            logInOpen() {
                setOpenUpper(true)
            }
        }

    })

    const closeModal=() => setOpenUpper(false)
    return (
        <Modal open={openUpper} onClose={closeModal}>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                        <h2>Sign In</h2>
                        {openSuccess && <Alert>Welcome {result.university.universityName}</Alert>}
                        {open && <Alert severity="error">{error}</Alert>}
                        <Button type='button' onClick={handleError}><BasicPopover error={error} open={open} /></Button>

                    </Grid>
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <TextField label='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' fullWidth required />
                        <TextField label='Password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' type='password' fullWidth required />
                        <Box>
                            <Button color="warning" variant="contained" onClick={onCloseModal} style={{marginRight:"10px"}}>Cancel</Button>
                            <Button type='submit' color='primary' variant="contained" >Sign in</Button>
                        </Box>
                    </form>
                </Paper>
            </Grid>
        </Modal>
    )
})

export default Login;