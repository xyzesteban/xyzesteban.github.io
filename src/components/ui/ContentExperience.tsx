import * as React from 'react';
import { Box } from '@mui/material';
import LoremIpsum from '../../data/LoremIpsum';

const ContentExperience = ({children, imagePath}) => {

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