import * as React from 'react';
import { Box } from '@mui/material';
import LoremIpsum from '../../data/LoremIpsum';

const ContentExperience = ({children, imagePath}) => {

    // TODO: Make it so that it formats the fields properly and displays an image:
    return (
        <div className="content-experience">
            {imagePath &&
                <div className="experience-image">
                    <img src={imagePath} style={{width: '100px', height: '100px', fill: 'cover', borderRadius: '10px'}}/>
                </div>
            }
            <div className="experience-text">
            {children}
            </div>
        </div>
    );
}

export default ContentExperience;