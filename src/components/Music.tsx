import * as React from 'react';
import Box from '@mui/material/Box';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
  }

export default function About(props: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <Box sx={{ display: 'flex', flexDirection:'column', height: '100vh', width: '100%', backgroundColor: 'red' }}>
        <img
        src="assets/music-background.png" // Replace with your background image
        alt="Background"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          marginLeft: '-2.5px',
          objectFit: 'cover',
          opacity: 0.5, // Adjust the opacity
          zIndex: 0, // Place it behind other elements
        }}
      />
       <Box
        position="relative"
        sx={{display: 'flex', flexDirection:'row', flex: 1}}
        aria-label="mailbox folders"
      >
        {/** Sidebar is here: */}
        <Box sx={{display: 'flex', flexDirection: 'column', height:'calc(100vh - 100px)', flex: 1 }}>
            <img
                src="assets/Music.png" 
                alt="A description of your image" 
                style={{ height: 'auto', width: '50%', marginLeft: '-14.5%', marginTop: '1%', position: 'fixed' }} // Adjust the margins to offset the image
                />
        </Box>
        {/** Content is here: */}
        <Box sx={{margin: '30px', borderRadius:'15px', height:'calc(100vh - 200px)', flex: 2.5, boxShadow: '1px 1px 2px 1.5px rgba(0, 0, 0, 0.3)', backgroundColor: 'white', position: 'relative', zIndex: 2 }}>
            
        </Box>
        
      </Box>
    </Box>
  );
}
