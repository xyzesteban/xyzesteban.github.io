import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CodeIcon from "@mui/icons-material/Code";
import HeadsetIcon from "@mui/icons-material/Headset";
import SidebarAvatar from '../../components/ui/SidebarAvatar';

const NavigationSidebar = ({ isCompactSidebar }) => {
    const { changePage, sidebarOpen } = useAppContext();
    const navigate = useNavigate();

    const [showText, setShowText] = useState(sidebarOpen);

    useEffect(() => {
        if (!sidebarOpen) {
            // If sidebar is collapsed, switch to icons immediately
            setShowText(false);
        } else {
            // If sidebar is expanded, set a timer for delayed appearance of text
            const timer = setTimeout(() => {
                setShowText(true);
            }, 300);

            return () => clearTimeout(timer);
        }
    }, [sidebarOpen]);

    const navigateTo = (route) => {
        changePage(route);
        navigate(`/${route}`);
    };

    return (
        <div 
            className="sidebar-wrapper" 
            style={{ 
                    width: !isCompactSidebar && sidebarOpen ? '200px' : '100px', 
                    transition: 'width 500ms',
                    marginBottom: !isCompactSidebar ? '0px' : '45px',
                    }}
        >
            <div className="navigation-sidebar" style={{ width: !isCompactSidebar ? '200px' : '80px' }}>
                {!sidebarOpen ?
                    <Box sx={{ height: '30px' }}></Box>
                    :
                    <Box sx={{ height: '20px' }}></Box>
                }
                <SidebarAvatar isCompactSidebar={isCompactSidebar} />
                <Button
                    className="blue-button"
                    onClick={() => navigateTo('')}
                    style={{ margin: isCompactSidebar ? '1px' : '10px' }}
                >
                    {showText && !isCompactSidebar ? <h3 className="button-title">About</h3> : <div className="icon-wrapper"><HomeIcon /></div>}
                </Button>
                <Button
                    className="green-button"
                    onClick={() => navigateTo('experience')}
                    style={{ margin: isCompactSidebar ? '1px' : '10px' }}
                >
                    {showText && !isCompactSidebar ? <h3 className="button-title">CV</h3> : <div className="icon-wrapper"><BusinessCenterIcon /></div>}
                </Button>
                <Button
                    className="yellow-button"
                    onClick={() => navigateTo('software')}
                    style={{ margin: isCompactSidebar ? '1px' : '10px' }}
                >
                    {showText && !isCompactSidebar ? <h3 className="button-title">Software</h3> : <div className="icon-wrapper"><CodeIcon /></div>}
                </Button>
                <Button
                    className="red-button"
                    onClick={() => navigateTo('music')}
                    style={{ margin: isCompactSidebar ? '1px' : '10px' }}
                >
                    {showText && !isCompactSidebar ? <h3 className="button-title">Music</h3> : <div className="icon-wrapper"><HeadsetIcon /></div>}
                </Button>
            </div>
        </div>
    );
}

export default NavigationSidebar;
