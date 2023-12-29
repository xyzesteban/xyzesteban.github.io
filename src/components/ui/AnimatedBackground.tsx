import React, { useState } from 'react';
import Box from '@mui/material/Box';

const AnimatedBackground = ({ imagePath }) => {
  const [fadeIn, setFadeIn] = useState(false);

  const handleImageLoad = () => {
    setFadeIn(true);
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        opacity: fadeIn ? 0.4 : 0,
        transition: 'opacity 500ms ease-in-out',
      }}
    >
      <img
        src={imagePath}
        alt="Background"
        onLoad={handleImageLoad}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />
    </Box>
  );
};

export default AnimatedBackground;
