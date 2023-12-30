import * as React from 'react';
import { Box } from '@mui/material';

const ContentCard = ({children, imagePath}) => {
  
    return (
          <div className="content-card">
            {imagePath && 
                <img src={imagePath} style={{width: '100px', height: '100px'}}/>
            }
            {children}
          </div>
    );
}

export default ContentCard;