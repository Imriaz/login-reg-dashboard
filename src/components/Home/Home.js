import { Button } from '@mui/material';
import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Link style={{ textDecoration: 'none', color: 'black' }} to={'/login'}>
                <Button sx={{ m: 1, borderRadius: 2, backgroundColor: 'skyblue' }} variant="contained" color="inherit">Login</Button>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to={'/registration'}>
                <Button sx={{ m: 1, borderRadius: 2, backgroundColor: 'skyblue' }} variant="contained" color="inherit">Registration</Button>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to={'/dashboard'}>
                <Button sx={{ m: 1, borderRadius: 2, backgroundColor: 'skyblue' }} variant="contained" color="inherit">Dashboard</Button>
            </Link>
        </div>
    );
};

export default Home;