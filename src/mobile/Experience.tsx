import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
  }

export default function About(props: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [fadeIn, setFadeIn] = React.useState(false);
  const [slowFadeIn, setSlowFadeIn] = React.useState(false);

  React.useEffect(() => {
    // After the component is mounted, trigger the fade-in effect
    setFadeIn(true);
  }, []);

  React.useEffect(() => {
    // Use setTimeout to delay the start of the fade-in effect by one second
    const delay = setTimeout(() => {
      setSlowFadeIn(true); // Trigger the fade-in effect after the delay
    }, 500); // 1000 milliseconds = 1 second

    // Clear the timeout when the component unmounts to prevent memory leaks
    return () => clearTimeout(delay);
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', height: '100%', width: '100%', backgroundColor: 'green', position: 'absolute' }}>
    <img
      src="assets/education-background.png" // Replace with your background image
      alt="Background"
      className={`fast-fade-in ${fadeIn ? 'show' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '175%',
        height: '100%',
        marginLeft: '-2.5px',
        transform: 'scaleY(1)',
        objectFit: 'cover',
        opacity: 0.6,
        zIndex: 0, // Place it behind other elements
      }}
    />
    <div className="content-section">
      {/* Add your title */}
      <Typography variant="h2" className="cv-title" sx={{ color: 'white' }}>
          CV
        </Typography>

      {/* Fading image */}
      <div className="fading-image">
        <img src="assets/Education.png" alt="Section Image" style={{ height: 'auto', width: '100%' }} />
      </div>

      {/* Scrollable list of cards */}
      <div className="card-list">
        {/* Add your cards here */}
        <Box sx={{margin: '15px', borderRadius:'15px', height:'200px', width:'90%', boxShadow: '1px 1px 2px 1.5px rgba(0, 0, 0, 0.3)', backgroundColor: 'white', position: 'relative', zIndex: 5 }}>
          
        </Box>
        <Box sx={{margin: '15px', borderRadius:'15px', height:'200px', width:'90%', boxShadow: '1px 1px 2px 1.5px rgba(0, 0, 0, 0.3)', backgroundColor: 'white', position: 'relative', zIndex: 5 }}>
          
        </Box>
        <Box sx={{margin: '15px', borderRadius:'15px', height:'200px', width:'90%', boxShadow: '1px 1px 2px 1.5px rgba(0, 0, 0, 0.3)', backgroundColor: 'white', position: 'relative', zIndex: 5 }}>
          
        </Box>
        <Box sx={{margin: '15px', borderRadius:'15px', height:'200px', width:'90%', boxShadow: '1px 1px 2px 1.5px rgba(0, 0, 0, 0.3)', backgroundColor: 'white', position: 'relative', zIndex: 5 }}>
          
        </Box>
        {/* Add as many cards as needed */}
      </div>
    </div>
  </Box>
  );
}
