import React, { useEffect, useState } from "react";
import { useAppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router

import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CodeIcon from "@mui/icons-material/Code";
import HeadsetIcon from "@mui/icons-material/Headset";


const NavigationFooter = () => {

    const { page, changePage } = useAppContext(); // Use the context hook to access the state and functions
    const [navBarValue, setNavBarValue] = useState(page);
    const navigate = useNavigate();

    const navigateTo = (route) => {
        changePage(route);
        // Use the navigate function to navigate to the selected route
        navigate(`/${route}`);
    };

    // Listen for changes in the URL and update the active value accordingly
    useEffect(() => {
        const currentRoute = window.location.pathname.replace('/', '') || '';
        if (page !== currentRoute) {
            changePage(currentRoute);
        }
        setNavBarValue(currentRoute)
    }, [page, window.location.pathname]);

    return (
        <>
            <div style={{ position: "absolute", bottom: 0, width: '100%', zIndex: 600, backgroundColor: '#ffffef' }}>
                <BottomNavigation
                    showLabels
                    value={navBarValue}
                    onChange={(event, newValue) => {
                        navigateTo(newValue);
                    }}
                    style={{backgroundColor: '#ffffef'}}
                >
                    <BottomNavigationAction label="About" icon={<HomeIcon />} value="" />
                    <BottomNavigationAction label="CV" icon={<BusinessCenterIcon />} value="experience" />
                    <BottomNavigationAction label="Tech" icon={<CodeIcon />} value="software" />
                    <BottomNavigationAction label="Music" icon={<HeadsetIcon />} value="music" />
                </BottomNavigation>
            </div>
        </>
    )
}

export default NavigationFooter;