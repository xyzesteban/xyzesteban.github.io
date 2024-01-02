import * as React from 'react';
import { Box } from '@mui/material';
import LoremIpsum from '../../data/LoremIpsum';

const ContentMedia = ({children, imagePath, title = "", mediaText}) => {

    // TODO: Make it so that it formats the fields properly and displays an image:
    return (
        <div className="content-media">
            <p className="media-text"><h2 className="media-title content-text">{title}</h2></p>
            {imagePath &&
                    <img src={imagePath} className="media-thumbnail"/>
            }
            <div className="media-container">
            <p className="media-text">{mediaText}</p>
            {children}
            </div>
            
        </div>
    );
}

export default ContentMedia;