import * as React from 'react';
import { Box } from '@mui/material';

const ContentScroller = ({ children }) => {
  
    return (
        <Box
        className="content-scroller"
        sx={{
            flex: 1,
            overflowY: 'auto',
            padding: '20px', // Adjust padding as needed
        }}
    >
        {children}
    </Box>
    );
}

export default ContentScroller;