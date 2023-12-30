import * as React from 'react';
import { Box } from '@mui/material';
import LoremIpsum from '../../data/LoremIpsum';

const ContentExperience = ({children, imagePath}) => {

    // TODO: Make it so that it formats the fields properly and displays an image:
    return (
        <Box className="content-experience">
            {imagePath && 
                <img src={imagePath} style={{width: '100px', height: '100px'}}/>
            }
            <div>
            {children}
            </div>
        </Box>
    );
}

export default ContentExperience;