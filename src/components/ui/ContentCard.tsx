import * as React from 'react';
import { Box } from '@mui/material';

const ContentCard = ({children, title, imagePath}) => {
  
    // TODO: Add logic to open a modal according to title:
    return (
          <div className="content-card">
            {imagePath && 
                <img src={imagePath} className="project-thumbnail"/>
            }
            <div>
            <h3 className="project-title">{title}</h3>
            <p className="project-description-short">{children}</p>
            </div>
          </div>
    );
}

export default ContentCard;