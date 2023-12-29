import React from 'react';
import { Box } from '@mui/material';

const AnimatedForeground = ({ imagePath }) => {
    const [slowFadeIn, setSlowFadeIn] = React.useState(false);

    return (
        <Box
            sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                maxHeight: '100vh',
                overflow: 'hidden',
                zIndex: 300,
            }}
        >
            <img
                src={imagePath}
                alt="Foreground"
                className={`fade-in ${slowFadeIn ? 'show' : ''}`}
                style={{
                    width: '100%',
                    maxHeight: '100%', // Set max height to 100% of the parent Box
                    objectFit: 'cover',
                    zIndex: 1,
                    transition: 'opacity 500ms ease-in-out',
                }}
            />
        </Box>
    );
}

export default AnimatedForeground;
