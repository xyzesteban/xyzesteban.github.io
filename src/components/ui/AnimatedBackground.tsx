import React, { useState } from 'react';
import Box from '@mui/material/Box';

const AnimatedBackground = ({ imagePath }) => {
  const [fadeIn, setFadeIn] = useState(false);

  const handleImageLoad = () => {
    setFadeIn(true);
  };

  return (
    <Box
      className="background-container"
      sx={{
        opacity: fadeIn ? 0.4 : 0,
      }}
    >
      <img
        src={imagePath}
        alt="Background"
        onLoad={handleImageLoad}
        className="background-picture"
      />
    </Box>
  );
};

export default AnimatedBackground;
