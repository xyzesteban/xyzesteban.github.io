import React from 'react';

import SidebarToggle from '../components/ui/SidebarToggle';

const AppHeader = ({ isCompactHeader }) => {
    return (
                <div aria-label="app-header" className={isCompactHeader? "compact-title header-object" : "header-object"}>
                    {!isCompactHeader && (
                        <SidebarToggle />
                    )}
                    <h1 className={isCompactHeader? "compact-title disable-select" : "disable-select"}>
                        Esteban D. Espinoza
                    </h1>
                </div>
    );
}

export default AppHeader;