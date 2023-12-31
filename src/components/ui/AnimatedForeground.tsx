import React, { useState } from 'react';
import { Box } from '@mui/material';

const AnimatedForeground = ({ imagePath, mobile = false }) => {
    const [slowFadeIn, setSlowFadeIn] = useState(false);

  const handleImageLoad = () => {
    setSlowFadeIn(true);
  };

    return (
        <Box 
            className={mobile? "foreground-container foreground-center" : "foreground-container"}
            sx={{
                display: 'flex',
                justifyContent: mobile ? 'center' : 'initial', // Center horizontally if mobile is true
                opacity: slowFadeIn ? 1 : 0,
            }}
        >
            <img
                src={imagePath}
                alt="Foreground"
                onLoad={(handleImageLoad)}
                className={mobile? "foreground-picture foreground-mobile" : "foreground-picture"}
                style={{flex: 1}}
            />
        </Box>
    );
}

export default AnimatedForeground;
