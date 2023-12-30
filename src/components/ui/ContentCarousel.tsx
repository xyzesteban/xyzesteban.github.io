import * as React from 'react';
import { Box } from '@mui/material';
import LoremIpsum from '../../data/LoremIpsum';

const ContentCarousel = ({children, imagePath}) => {

    // TODO: This should display a reel of pictures
    return (
        <Box className="content-carousel">
            {children}
        </Box>
    );
}

export default ContentCarousel;