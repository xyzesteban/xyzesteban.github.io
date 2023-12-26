import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const AppHeader = ({ isCompact }) => {

    const { toggleSidebar } = useAppContext(); // Use the context hook to access the state and functions

    return (
                <Toolbar disableGutters sx={{ backgroundColor: 'white' }}>
                    {!isCompact && (
                        <IconButton
                            aria-label="add"
                            color="info"
                            onClick={() => {
                                toggleSidebar();
                            }}
                            style={{ borderRadius: "0px 0px 0px 0px", textAlign: "center", height: '100%', position: 'absolute', alignSelf: 'left' }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Typography component="h1" align='center' sx={{ fontFamily: 'Helvetica', color: 'black', width: '100%', fontSize: 24 }}>
                        Esteban D. Espinoza
                    </Typography>
                </Toolbar>
    );
}

export default AppHeader;