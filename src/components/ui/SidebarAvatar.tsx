import React from 'react';
import { useAppContext } from '../../context/AppContext';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

const SidebarAvatar = ({ isCompactSidebar }) => {

    const { sidebarOpen } = useAppContext(); // Use the context hook to access the state and functions

    return (
                <Button className="avatar" disabled>
                    
                    <Avatar
                        alt="Profile"
                        src="assets/Main.jpg"
                        className={sidebarOpen && !isCompactSidebar ? 'expanded-avatar' : 'collapsed-avatar'}
                    />
                </Button>
    );

}

export default SidebarAvatar;
