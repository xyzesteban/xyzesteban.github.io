import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CodeIcon from "@mui/icons-material/Code";
import HeadsetIcon from "@mui/icons-material/Headset";
import SidebarAvatar from '../../components/ui/SidebarAvatar';
import Typography from '@mui/material/Typography';

const NavigationSidebar = ({ isCompactSidebar }) => {

    const { changePage, sidebarOpen } = useAppContext(); // Use the context hook to access the state and functions
    const navigate = useNavigate();

    const navigateTo = (route) => {
        changePage(route);
        // Use the navigate function to navigate to the selected route
        navigate(`/${route}`);
    };

    return (
        <div className="sidebar-wrapper" style={{ width: !isCompactSidebar && sidebarOpen ? '200px' : '100px' }}>
            <div className="navigation-sidebar" style={{ width: !isCompactSidebar ? '200px' : '80px'}}>
                {!sidebarOpen ?
                    <Box sx={{ height: '30px' }}></Box>
                    :
                    <Box sx={{ height: '20px' }}></Box>
                }
                <SidebarAvatar isCompactSidebar={isCompactSidebar}/>
                <Button className="blue-button" onClick={() => navigateTo('')} sx={{margin: isCompactSidebar ? '1px' : '10px' }}>
                    {sidebarOpen && !isCompactSidebar ? <h2 className="button-text">About</h2> : <div className="icon-wrapper"><HomeIcon/></div>}
                </Button>
                <Button className="green-button" onClick={() => navigateTo('experience')} sx={{margin: isCompactSidebar ? '1px' : '10px' }}>
                    {sidebarOpen && !isCompactSidebar ? <h2 className="button-text">CV</h2> : <div className="icon-wrapper"><BusinessCenterIcon/></div>}
                </Button>
                <Button className="yellow-button" onClick={() => navigateTo('software')} sx={{margin: isCompactSidebar ? '1px' : '10px' }}>
                    {sidebarOpen && !isCompactSidebar ? <h2 className="button-text">Software</h2> : <div className="icon-wrapper"><CodeIcon/></div>}
                </Button>
                <Button className="red-button" onClick={() => navigateTo('music')} sx={{margin: isCompactSidebar ? '1px' : '10px' }}>
                    {sidebarOpen && !isCompactSidebar ? <h2 className="button-text">Music</h2> :<div className="icon-wrapper"><HeadsetIcon/></div>}
                </Button>
            </div>
        </div>
    );

}

export default NavigationSidebar;
