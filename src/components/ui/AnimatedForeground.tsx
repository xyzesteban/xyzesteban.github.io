import React, { useState } from 'react';
import { Box } from '@mui/material';

const AnimatedForeground = ({ imagePath }) => {
    const [slowFadeIn, setSlowFadeIn] = useState(false);

  const handleImageLoad = () => {
    setSlowFadeIn(true);
  };

    return (
        <Box 
            className="foreground-container"
            sx={{
                opacity: slowFadeIn ? 1 : 0,
            }}
        >
            <img
                src={imagePath}
                alt="Foreground"
                onLoad={(handleImageLoad)}
                className="foreground-picture"
            />
        </Box>
    );
}

export default AnimatedForeground;
