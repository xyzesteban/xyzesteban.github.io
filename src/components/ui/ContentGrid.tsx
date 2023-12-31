import React from 'react';
import { Box } from '@mui/material';

const ContentGrid = ({ children }) => {
  return (
    <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '15px'}}>
      {children}
    </Box>
  );
};

export default ContentGrid;