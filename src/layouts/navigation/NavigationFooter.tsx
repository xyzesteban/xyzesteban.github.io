import React from "react";
import { useAppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router

import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CodeIcon from "@mui/icons-material/Code";
import HeadsetIcon from "@mui/icons-material/Headset";


const NavigationFooter = () => {

    const { page, changePage } = useAppContext(); // Use the context hook to access the state and functions
    const navigate = useNavigate();

    const navigateTo = (route) => {
        console.log(route)
        changePage(route);
        // Use the navigate function to navigate to the selected route
        navigate(`/${route}`);
    };

    return (
        <>
            <Box sx={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 600 }}>
                <BottomNavigation
                    showLabels
                    value={page}
                    onChange={(event, newValue) => {
                        navigateTo(newValue);
                    }}
                >
                    <BottomNavigationAction label="About" icon={<HomeIcon />} value="" />
                    <BottomNavigationAction label="CV" icon={<BusinessCenterIcon />} value="experience" />
                    <BottomNavigationAction label="Tech" icon={<CodeIcon />} value="software" />
                    <BottomNavigationAction label="Music" icon={<HeadsetIcon />} value="music" />
                </BottomNavigation>
            </Box>
        </>
    )
}

export default NavigationFooter;