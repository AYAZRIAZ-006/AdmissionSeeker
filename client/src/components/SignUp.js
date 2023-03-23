import React from 'react'
import { Paper, Avatar, Grid, Typography, TextField, Button } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import { InputLabel, Select, MenuItem, FormControl } from '@mui/material';

const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 400, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const [age, setAge] = React.useState('');

    const handleChange = (e) => {
        setAge(e.target.value);
    };
    // const marginTop = { marginTop: 5 }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='university Name' placeholder="Enter your name" />
                    <TextField fullWidth label='email' placeholder="Enter your email" />
                    <TextField fullWidth label='city' placeholder="Enter your city" />
                    <TextField fullWidth label='province' placeholder="Enter your province" />
                    {/* <TextField fullWidth label='sector' placeholder="Enter your sector" />
                     */}
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="large">
                        <InputLabel id="demo-select-small">sector</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"private"}>Private</MenuItem>
                            <MenuItem value={"public"}>Public</MenuItem>
                            <MenuItem value={"semi"}>Semi Government</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField fullWidth label='Campus Id' placeholder="Enter your phone number" />
                    <TextField fullWidth label='Password' placeholder="Enter your password" />
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password" />
                    <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;