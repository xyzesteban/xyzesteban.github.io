import * as React from 'react';
import AnimatedBackground from '../ui/AnimatedBackground';
import ResponsiveContent from '../../layouts/ResponsiveContent';
import { useResponsive } from '../../context/ResponsiveContext';
import useLayout from '../../hooks/useLayout';
import { useAppContext } from '../../context/AppContext';
import { useEffect, useState } from 'react';

const CalculateDeviceType = (windowWidth, windowHeight) => {
  return useLayout(windowWidth, windowHeight);
};

const ContentWrapper = ({ children }) => {
  const { page } = useAppContext();
  const { windowWidth, windowHeight } = useResponsive();
  const [deviceType, setDeviceType] = useState(CalculateDeviceType(windowWidth, windowHeight));
  const [backgroundImage, setBackgroundImage] = useState('');
  const [foregroundImage, setForegroundImage] = useState('');

  useEffect(() => {
    // Update images based on the current route
    const currentRoute = window.location.pathname;
    if (currentRoute === '/') {
      setBackgroundImage('assets/projects-background.png');
      if (deviceType === 'smartphonePortrait' || deviceType === 'tabletPortrait') {
        setForegroundImage('assets/About-Center.png');
      }
      else {
        setForegroundImage('assets/About.png');
      }
    } else if (currentRoute === '/experience') {
      setBackgroundImage('assets/education-background.png');
      if (deviceType === 'smartphonePortrait' || deviceType === 'tabletPortrait') {
        setForegroundImage('assets/Education-Center.png');
      }
      else {
        setForegroundImage('assets/Education.png');
      }
    } else if (currentRoute === '/software') {
      setBackgroundImage('assets/projects-background.png');
      if (deviceType === 'smartphonePortrait' || deviceType === 'tabletPortrait') {
        setForegroundImage('assets/Projects-Center.png');
      }
      else {
        setForegroundImage('assets/Projects.png');
      }
    } else if (currentRoute === '/music') {
      setBackgroundImage('assets/music-background.png');
      
      if (deviceType === 'smartphonePortrait' || deviceType === 'tabletPortrait') {
        setForegroundImage('assets/Music-Center.png');
      }
      else {
        setForegroundImage('assets/Music.png');
      }
    }

    // Trigger a re-render by updating state
    setDeviceType(CalculateDeviceType(windowWidth, windowHeight));
  }, [page, windowWidth, windowHeight]);

  return (
    <div className="content-wrapper">
      <AnimatedBackground imagePath={backgroundImage} />
      <ResponsiveContent imagePath={foregroundImage} children={children} deviceType={deviceType} />
    </div>
  );
};

export default ContentWrapper;
