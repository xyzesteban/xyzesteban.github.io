import * as React from 'react';
import { Box } from '@mui/material';

const ContentIntro = ({children}) => {

    return (
        <Box
            className="content-intro"
        >
            {children}
        </Box>
    );
}

export default ContentIntro;