import React from 'react';
import { Box } from '@mui/material';

const ContentGrid = ({ children }) => {
  return (
    <Box className="content-grid">
      {children}
    </Box>
  );
};

export default ContentGrid;