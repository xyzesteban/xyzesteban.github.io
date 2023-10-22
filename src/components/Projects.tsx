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
    <Box sx={{ display: 'flex', flexDirection:'column', height: '100vh', width: '100%', backgroundColor: '#c78203' }}>
    <img
        src="assets/projects-background.png" // Replace with your background image
        alt="Background"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          marginLeft: '-2.5px',
          objectFit: 'cover',
          zIndex: 0, // Place it behind other elements
        }}
      />
      {/** White box over half of the image */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: 'calc(50vh + 70px)',
          backgroundColor: 'white',
          opacity: 0.8, // Adjust the opacity
          zIndex: 0, // Place it behind the content
        }}
      />
       <Box
        position="relative"
        sx={{display: 'flex', flexDirection:'row', flex: 1}}
        aria-label="mailbox folders"
      >
        {/** Sidebar is here: */}
        <Box sx={{display: 'flex', flexDirection: 'column', height:'calc(100vh - 100px)', flex: 1, zIndex:1 }}>
            <img
                src="assets/Projects.png" 
                alt="A description of your image" 
                style={{ height: 'auto', width: '54%', right:'calc(100vw - 50%)', position: 'fixed' }} // Adjust the margins to offset the image
                /> 
        </Box>
        {/** Content is here: */}
        <Box sx={{margin: '30px', borderRadius:'15px', height:'calc(100vh - 200px)', flex: 2.5, boxShadow: '1px 1px 2px 1.5px rgba(0, 0, 0, 0.3)', backgroundColor: 'white', position: 'relative', zIndex: 2 }}>
            
        </Box>
        
      </Box>
    </Box>
  );
}
