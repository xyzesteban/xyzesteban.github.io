import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import './App.css';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import About from './components/About.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import Music from './components/Music.tsx';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeComponent, setActiveComponent] = useState('about'); // Initialize with the default component you want to show

  const handleButtonClick = (component) => {
    console.log("Set active component: ", component);
    setActiveComponent(component);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection:'column', height: '100vh' }}>
      {/* <CssBaseline /> */}
      {/* Header at top with my name: */}
      <Box sx ={{ display: 'flex', height: '100px', borderColor: 'gray', boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.0)', position: 'relative', zIndex: 3,  }}>
        <AppBar position="static">
          <Toolbar disableGutters sx={{ display: 'flex', backgroundColor: 'white', justifyContent: 'center', alignItems: 'flex-end', height: '100%' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2}}
          >
          </IconButton>
          <Typography variant="h6" component="div" align='center' sx={{ color: 'black', backgroundColor:'white', fontSize: 42 }}>
            ESTEBAN D. ESPINOZA
          </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {/* Content box at bottom of page: */}
      <Box
        position="relative"
        sx={{display: 'flex', flexDirection:'row', flex: 1}}
        aria-label="mailbox folders"
      >
        {/** Sidebar is here: */}
        <Box sx={{margin: '30px', borderRadius:'15px', height:'calc(100vh - 200px)', flex: 1, boxShadow: '1px 1px 2px 1.5px rgba(0, 0, 0, 0.3)', position: 'relative', zIndex: 2, backgroundColor: 'white' }}>
        <List>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Avatar alt="Profile" src="assets/Main.jpg" sx={{ width: 180, height: 180, margin: 5, boxShadow: '1px 1px 2px 2px rgba(0, 0, 0, 0.3)'}} />
            </Box>
            <ListItem>
              <Button className="blue-button" onClick={() => handleButtonClick('about')}>About</Button>
            </ListItem>
            <ListItem>
              <Button className="green-button" onClick={() => handleButtonClick('experience')}>Experience</Button>
            </ListItem>
            <ListItem>
              <Button className="yellow-button" onClick={() => handleButtonClick('projects')}>Projects</Button>
            </ListItem>
            <ListItem>
              <Button className="red-button" onClick={() => handleButtonClick('music')}>Music</Button>
            </ListItem>
          </List>
        </Box>
        {/** Content is here: */}
        <Box sx={{display: 'flex', flexDirection: 'column', height:'calc(100vh - 100px)', flex: 5.5, position: 'relative', zIndex: 1 }}>
          {activeComponent === 'about' && <About />}
          {activeComponent === 'experience' && <Experience />}
          {activeComponent === 'projects' && <Projects />}
          {activeComponent === 'music' && <Music />}
        </Box>
      </Box>
    </Box>
  );
}
