import React, { useState } from 'react';
import './App.css';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'; // or import from your UI library
import MenuIcon from '@mui/icons-material/Menu'; // or import the MenuIcon from your icon library
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import About from './mobile/About.tsx';
import Experience from './mobile/Experience.tsx';
import Projects from './mobile/Projects.tsx';
import Music from './mobile/Music.tsx';
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CodeIcon from "@mui/icons-material/Code";
import HeadsetIcon from "@mui/icons-material/Headset";



function Mobile() {

  const [activeComponent, setActiveComponent] = useState('about'); // Initialize with the default component you want to show
  const [collapsedSidebar, setCollapsedSidebar] = useState(false);
  const [value, setValue] = React.useState(0);

  return (
    <div id="app">
      <header>
        <AppBar position="static">
          <Toolbar disableGutters sx={{ display: 'flex', backgroundColor: 'white', alignItems: 'flex-end', verticalAlign: 'middle', width: '100%' }}>
            <Typography variant="h1" component="div" align='center' sx={{ color: 'black', width: '100%', verticalAlign: 'middle', justifyContent: 'center', backgroundColor: 'white', fontSize: 24 }}>
              ESTEBAN D. ESPINOZA
            </Typography>
          </Toolbar>
        </AppBar>
      </header>

      <main style={{ width: '100%' }}>
        <AppBar position="static">
          <Toolbar disableGutters sx={{ display: 'flex', height: '50px' }} />
        </AppBar>
        <Box sx={{ height: 'calc(100vh - 100px)', position: 'relative', backgroundColor: 'red', zIndex: 1 }}>
          {activeComponent === 'about' && <About />}
          {activeComponent === 'experience' && <Experience />}
          {activeComponent === 'projects' && <Projects />}
          {activeComponent === 'music' && <Music />}
        </Box>
      </main>
      <Box sx={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 101 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setActiveComponent(newValue);
          }}
        >
          <BottomNavigationAction label="About" icon={<HomeIcon />} value="about" />
          <BottomNavigationAction label="CV" icon={<BusinessCenterIcon />} value="experience" />
          <BottomNavigationAction label="Tech" icon={<CodeIcon />} value="projects" />
          <BottomNavigationAction label="Software" icon={<HeadsetIcon />} value="music" />
        </BottomNavigation>
      </Box>
    </div>
  );
}

export default Mobile;