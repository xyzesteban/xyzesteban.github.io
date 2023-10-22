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
    <Box sx={{ display: 'flex', flexDirection:'column', height: '100vh', width: '100%', backgroundColor: 'blue' }}>
       <Box
        position="relative"
        sx={{display: 'flex', flexDirection:'row', flex: 1}}
        aria-label="mailbox folders"
      >
        {/** Sidebar is here: */}
        <Box sx={{display: 'flex', flexDirection: 'column', height:'calc(100vh - 100px)', flex: 1 }}>
            <img
                src="assets/About.png" 
                alt="A description of your image" 
                style={{ height: 'auto', width: '56.5%', marginLeft: '-17%', position: 'fixed' }} // Adjust the margins to offset the image
                />
        </Box>
        {/** Content is here: */}
        <Box sx={{margin: '30px', borderRadius:'15px', height:'calc(100vh - 200px)', flex: 2.5, boxShadow: '1px 1px 2px 1.5px rgba(0, 0, 0, 0.3)', backgroundColor: 'white', position: 'relative', zIndex: 2 }}>
            
        </Box>
        
      </Box>
    </Box>
  );
}
