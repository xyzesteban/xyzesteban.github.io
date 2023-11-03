import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import AppBar from '@mui/material/AppBar';
import './App.css';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import About from './components/About.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import Music from './components/Music.tsx';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CodeIcon from "@mui/icons-material/Code";
import HeadsetIcon from "@mui/icons-material/Headset";

function App() {
  const { collapseSidebar, broken } = useProSidebar();
  const [activeComponent, setActiveComponent] = useState('about'); // Initialize with the default component you want to show
  const [collapsedSidebar, setCollapsedSidebar] = useState(false);

  const handleButtonClick = (component) => {
    console.log("Set active component: ", component);
    setActiveComponent(component);
  };

  const toggleSize = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="app" style={({ display: "flex" })}>
      <header>
        <AppBar position="static">
          <Toolbar disableGutters sx={{ display: 'flex', backgroundColor: 'white', alignItems: 'flex-end', height: '100%', width: '100%' }}>
            {!broken && (
              <IconButton 
                  aria-label="add" 
                  color="info"
                  onClick={() => {
                    collapseSidebar();
                    setCollapsedSidebar(!collapsedSidebar);
                  }}
                  style={{ borderRadius: "0px 0px 0px 0px", textAlign: "center", width: '100px', height: '100%', position: 'absolute', alignSelf: 'left' }}
                >
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" component="div" align='center' sx={{ color: 'black', width:'100%', justifyContent: 'center', backgroundColor: 'white', fontSize: 45 }}>
              ESTEBAN D. ESPINOZA
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
      <Sidebar breakPoint="sm" collapsedWidth='100px' transitionDuration={800} style={{ height: "100%" }}>
        <AppBar position="static">
          <Toolbar/>
        </AppBar>
        <Menu style={{flex:'row', textAlign: 'center'}}>
          <Box sx={{position: 'relative', height:'100vh', zIndex: 2, backgroundColor: 'transparent', overflow: 'hidden' }}>
            <Box sx={{height:'30px'}}></Box>
            <Box sx={{borderRadius:'15px', margin:'15px', height: '100%', boxShadow: '1px 1px 2px 1.5px rgba(0, 0, 0, 0.3)', position: 'relative', zIndex: 2, backgroundColor: 'white' }}>
            {collapsedSidebar ? 
                <Box sx={{height:'30px'}}></Box>
              :
              <Box sx={{height:'20px'}}></Box>
            }
            
            <Button className="avatar">
              <Avatar
                alt="Profile"
                src="assets/Main.jpg"
                className={!collapsedSidebar ? 'expanded-avatar' : 'default-avatar'}
              />
            </Button>
            <Box sx={{height:'20px'}}></Box>
            <Button className="blue-button" onClick={() => handleButtonClick('about')}>
              {!collapsedSidebar ? <Typography>About</Typography>: <HomeIcon></HomeIcon>}
            </Button>

            <Box sx={{height:'20px'}}></Box>
            <Button className="green-button" onClick={() => handleButtonClick('experience')}>
              {!collapsedSidebar ? <Typography>CV</Typography>: <BusinessCenterIcon></BusinessCenterIcon>}
            </Button>
            <Box sx={{height:'20px'}}></Box>
            <Button className="yellow-button" onClick={() => handleButtonClick('projects')}>
              {!collapsedSidebar ? <Typography>Software</Typography>: <CodeIcon></CodeIcon>}
            </Button>

            <Box sx={{height:'20px'}}></Box>
            <Button className="red-button" onClick={() => handleButtonClick('music')}>
              {!collapsedSidebar ? <Typography>Music</Typography>: <HeadsetIcon></HeadsetIcon>}
            </Button>
            <Box sx={{height:'100px'}}></Box>
            </Box>
          </Box>
          
          
        </Menu>
      </Sidebar>
      <main style={{width: '100%'}}>
        <AppBar position="static">
          <Toolbar disableGutters sx={{ display: 'flex', height: '70px' }}/>
        </AppBar>
        
        <Box sx={{height:'calc(100vh - 100px)', position: 'relative', backgroundColor:'red', zIndex: 1 }}>
          {activeComponent === 'about' && <About />}
          {activeComponent === 'experience' && <Experience />}
          {activeComponent === 'projects' && <Projects />}
          {activeComponent === 'music' && <Music />}
        </Box>
        {broken && (
          <h1 style={{ color: "black", marginLeft: "5rem" }}>Small screen</h1>
        )}
      </main>
    </div>
  );
}

export default App;