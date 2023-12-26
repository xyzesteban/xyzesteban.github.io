import React, { useState } from 'react';
import { Sidebar, Menu } from "react-pro-sidebar";
import { useAppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CodeIcon from "@mui/icons-material/Code";
import HeadsetIcon from "@mui/icons-material/Headset";

const NavigationSidebar = () => {

    const { changePage, sidebarOpen } = useAppContext(); // Use the context hook to access the state and functions
    const navigate = useNavigate();

    const navigateTo = (route) => {
        changePage(route);
        // Use the navigate function to navigate to the selected route
        navigate(`/${route}`);
    };

    return (
        <Sidebar transitionDuration={800} style={{ display: "flex", position: 'relative', height: '100%' }}>
            <Box sx={{ borderRadius: '15px', margin: '12px', height: '100%', flex: 1, boxShadow: '1px 1px 2px 1.5px rgba(0, 0, 0, 0.3)', position: 'relative', }}>
                {!sidebarOpen ?
                    <Box sx={{ height: '30px' }}></Box>
                    :
                    <Box sx={{ height: '20px' }}></Box>
                }
                <Button className="avatar">
                    <Avatar
                        alt="Profile"
                        src="assets/Main.jpg"
                        className={!sidebarOpen ? 'expanded-avatar' : 'default-avatar'}
                    />
                </Button>
                <Button className="blue-button" onClick={() => navigateTo('')}>
                    {!sidebarOpen ? <Typography>About</Typography> : <HomeIcon></HomeIcon>}
                </Button>
                <Button className="green-button" onClick={() => navigateTo('experience')}>
                    {!sidebarOpen ? <Typography>CV</Typography> : <BusinessCenterIcon></BusinessCenterIcon>}
                </Button>
                <Button className="yellow-button" onClick={() => navigateTo('software')}>
                    {!sidebarOpen ? <Typography>Software</Typography> : <CodeIcon></CodeIcon>}
                </Button>
                <Button className="red-button" onClick={() => navigateTo('music')}>
                    {!sidebarOpen ? <Typography>Music</Typography> : <HeadsetIcon></HeadsetIcon>}
                </Button>
            </Box>
        </Sidebar>
    );

}

export default NavigationSidebar;

function Large() {

}

