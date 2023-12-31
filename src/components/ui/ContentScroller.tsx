import * as React from 'react';
import { Box } from '@mui/material';

const ContentScroller = ({ children, mobile = false }) => {

    return (
        <Box className={mobile ? "content-scroller content-full" : "content-scroller"}>
            {children}
        </Box>
    );
}

export default ContentScroller;