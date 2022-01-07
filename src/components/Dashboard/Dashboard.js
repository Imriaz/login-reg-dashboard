import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Container, Grid } from '@mui/material';
import Chart from "react-apexcharts";

import logo from '../../images/logo.png';
import spider from '../../images/spider.png'
import donut from '../../images/donut.png'
import DashboardAppBar from '../Shared/Navigation/LoginAppBar';

const drawerWidth = 240;

function Dashboard(props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    // Graph value
    const options = {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
    };
    const series = [
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ];

    const optionsD = {};
    const seriesD = [44, 55, 41, 17, 15];
    const labelsD = ['A', 'B', 'C', 'D', 'E'];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <img src={logo} alt="" />
            <Toolbar />
            <ListItem>
                <ListItemIcon>
                    <i style={{ fontSize: '50px' }} class="fas fa-user-circle"></i>
                </ListItemIcon>
                <ListItemText primary='UserName' secondary='Student' />
            </ListItem>

            <Divider />
            <List>
                <ListItem>
                    <ListItemIcon>
                        <i class="far fa-chart-bar"></i>
                    </ListItemIcon>
                    <ListItemText primary='Home' />
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <i class="fas fa-history"></i>
                    </ListItemIcon>
                    <ListItemText primary='Learn' />
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <i class="fas fa-diagnoses"></i>
                    </ListItemIcon>
                    <ListItemText primary='Examination' />
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <i class="fas fa-chart-line"></i>
                    </ListItemIcon>
                    <ListItemText primary='Analytics' />
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <i class="fas fa-comments"></i>
                    </ListItemIcon>
                    <ListItemText primary='Resources' />
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <i class="far fa-calendar-alt"></i>
                    </ListItemIcon>
                    <ListItemText primary='Calendar' />
                </ListItem>
            </List>
            <Divider />

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (

        <Box sx={{ display: 'flex' }}>

            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >

                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* <Typography variant="h6" noWrap component="div">
                        Responsive drawer
                    </Typography> */}
                </Toolbar>
            </AppBar>
            {/* <DashboardAppBar /> */}
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                {/* staaaaaaaat */}
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <div sx={{ border: '5px solid red', borderRadius: '10px' }}>
                                <Button sx={{ width: '25%', m: 1, borderRadius: 2, backgroundColor: '#827717' }} type="p" variant="contained">Subject  <i class="fas fa-chevron-down"></i></Button>
                                <br />
                                <Typography sx={{ textAlign: 'left' }} variant="p" gutterBottom>Spider</Typography>
                                <Chart
                                    options={options}
                                    series={series}
                                    type="radar"
                                    width="300"
                                />
                            </div>
                        </Grid>

                        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                            <Typography sx={{ textAlign: 'left' }} variant="p" gutterBottom>Donut</Typography>
                            <Chart
                                options={optionsD}
                                series={seriesD}
                                type="donut"
                                width="300"
                            />
                        </Grid>

                        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                            <Typography sx={{ textAlign: 'left' }} variant="p">Column</Typography>
                            <div>
                                <Chart
                                    options={options}
                                    series={series}
                                    type="bar"
                                    width="300"
                                />
                            </div>
                        </Grid>

                        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                            <Typography sx={{ textAlign: 'left' }} variant="p">Line</Typography>
                            <Chart
                                options={options}
                                series={series}
                                type="line"
                                width="300"
                            />
                        </Grid>
                    </Grid>
                </Container>
                {/* staaaaaaaat */}
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
