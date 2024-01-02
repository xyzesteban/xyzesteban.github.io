import * as React from 'react';
import { Box } from '@mui/material';
import LoremIpsum from '../../data/LoremIpsum';

const ContentExperience = ({children, imagePath, title = "", date = "", headline = ""}) => {

    // TODO: Make it so that it formats the fields properly and displays an image:
    return (
        <div className="content-experience">
            <div className="experience-container">
            {imagePath &&
                <div className="experience-image">
                    <img src={imagePath} style={{width: '100px', height: '100px', fill: 'cover', borderRadius: '10px'}}/>
                </div>
            }
            <div className="experience-text">
                <h3>{title}</h3>
                <p>{date}</p>
                <p><h5>{headline}</h5></p>
            </div>
            
            </div>
        {children}
        </div>
    );
}

export default ContentExperience;