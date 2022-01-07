import { Container, Typography, TextField, Button } from '@mui/material';
import React from 'react';
import { Grid } from '@mui/material';
import './Registration.css'
import RegistrationAppBar from '../Shared/Navigation/RegistrationAppBar';
import registration_img from '../../images/registration_img.png';

const Registration = () => {
    return (
        <>
            <RegistrationAppBar />
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ textAlign: 'left', fontWeight: 'bold' }} variant="body1" gutterBottom>Sign Up</Typography>
                        <br />
                        <img className='img-reg-mobile' style={{ width: '75%', margin: '0px' }} src={registration_img} alt="" />
                    </Grid>

                    <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                        <Typography sx={{ fontWeight: 'bold' }} variant="body1" gutterBottom>Get started.</Typography>
                        <form>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="outlined-multiline-flexible"
                                label="Name"
                                multiline
                                maxRows={4}
                            />
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
                                label="Phone Number"
                                multiline
                                maxRows={4}
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="outlined-multiline-flexible"
                                label="School"
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


                            <Button sx={{ width: '75%', m: 1, borderRadius: 2, backgroundColor: '#827717' }} type="p" variant="contained">Register</Button>
                            <div>
                                <Typography sx={{}} variant="p" gutterBottom>By registering, I agree to Minimal <span><u>Terms of Services and Privacy Policy</u></span></Typography>
                            </div>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Registration;