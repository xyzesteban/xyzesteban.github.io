import React from 'react';

import Toolbar from '@mui/material/Toolbar';
import SidebarToggle from '../components/ui/SidebarToggle';

const AppHeader = ({ isCompactHeader }) => {
    return (
                <Toolbar aria-label="app-header" disableGutters className={isCompactHeader? "compact-title header-object" : "header-object"}>
                    {!isCompactHeader && (
                        <SidebarToggle />
                    )}
                    <h1 className={isCompactHeader? "compact-title disable-select" : "disable-select"}>
                        Esteban D. Espinoza
                    </h1>
                </Toolbar>
    );
}

export default AppHeader;