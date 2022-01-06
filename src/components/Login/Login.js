import { Container, Typography, TextField, Button, Checkbox } from '@mui/material';
import React from 'react';
import { Grid } from '@mui/material';
import login_img from '../../images/login_img.png';

const Login = () => {
    return (
        <>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ textAlign: 'left', fontWeight: 'bold' }} variant="body1" gutterBottom>Hi, Welcome Back</Typography>
                        <br />
                        <img style={{ width: '75%', margin: '0px' }} src={login_img} alt="" />
                    </Grid>

                    <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                        <Typography sx={{ fontWeight: 'bold' }} variant="body1" gutterBottom>Sign in to AcadME</Typography>
                        <Button sx={{ width: '25%', m: 1 }} variant="outlined"><i class="fab fa-google"></i></Button>
                        <Button sx={{ width: '25%', m: 1 }} variant="outlined"><i class="fab fa-windows"></i></Button>
                        <br />
                        <Typography variant="body1" gutterBottom>OR</Typography>
                        <form>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="outlined-multiline-flexible"
                                label="Email address"
                                multiline
                                maxRows={4}
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="outlined-multiline-flexible"
                                label="Your Password"
                                type="password"
                                name="password"
                            />

                            <Button sx={{ width: '75%', m: 1, borderRadius: 2, backgroundColor: '#827717' }} type="p" variant="contained">Login</Button>
                            <div>
                                <Checkbox /><Typography sx={{ textAlign: 'left' }} variant="p" gutterBottom>Remember me</Typography>
                            </div>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Login;