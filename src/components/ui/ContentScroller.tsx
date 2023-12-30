import * as React from 'react';
import { Box } from '@mui/material';

const ContentScroller = ({ children }) => {

    return (
        <Box className="content-scroller">
            {children}
        </Box>
    );
}

export default ContentScroller;