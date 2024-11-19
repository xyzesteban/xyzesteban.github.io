import React from 'react';
import { Box } from '@mui/material';

const ContentContactGrid = ({ children }) => {
  return (
    <Box className="content-contact-grid">
      {children}
    </Box>
  );
};

export default ContentContactGrid;