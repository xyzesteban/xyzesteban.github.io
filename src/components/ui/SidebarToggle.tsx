import React from 'react';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useAppContext } from '../../context/AppContext';

const SidebarToggle = () => {

    const { toggleSidebar } = useAppContext(); // Use the context hook to access the state and functions

    return (
                        <IconButton
                            aria-label="expand-sidebar"
                            color="info"
                            onClick={() => {
                                toggleSidebar();
                            }}
                            className="sidebar-button"
                        >
                            <MenuIcon />
                        </IconButton>
    );
}

export default SidebarToggle;