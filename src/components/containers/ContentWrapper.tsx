import * as React from 'react';
import AnimatedBackground from '../ui/AnimatedBackground';
import { useAppContext } from '../../context/AppContext';
import ResponsiveContent from '../../layouts/ResponsiveContent';
import { useResponsive } from '../../context/ResponsiveContext';
import { useEffect, useState } from 'react';
import useLayout from '../../hooks/useLayout';

// Function to calculate the device type based on window dimensions
const CalculateDeviceType = (windowWidth, windowHeight) => {
    return useLayout(windowWidth, windowHeight);
}

const ContentWrapper = ({ children }) => {

    const { page } = useAppContext();

    // TODO: Move this out to a hook
    let backgroundImage;
    if (page == '') {
        backgroundImage = 'assets/projects-background.png';
    } else if (page == 'experience') {
        backgroundImage = 'assets/education-background.png';
    } else if (page == 'software') {
        backgroundImage = 'assets/projects-background.png';
    } else if (page == 'music') {
        backgroundImage = 'assets/music-background.png';
    }

    // TODO: Move this out to a hook
    let foregroundImage;
    if (page == '') {
        foregroundImage = 'assets/About.png';
    } else if (page == 'experience') {
        foregroundImage = 'assets/Education.png';
    } else if (page == 'software') {
        foregroundImage = 'assets/Projects.png';
    } else if (page == 'music') {
        foregroundImage = 'assets/Music.png';
    }

    const { windowWidth, windowHeight } = useResponsive(); // Access window dimensions

    // State variable to track the device type
    const [deviceType, setDeviceType] = useState(CalculateDeviceType(windowWidth, windowHeight));

    // Use useEffect to update deviceType when window dimensions change
    useEffect(() => {
        setDeviceType(CalculateDeviceType(windowWidth, windowHeight));
    }, [windowWidth, windowHeight]);

    return (
        <div className="content-wrapper">
            <AnimatedBackground imagePath={backgroundImage} />
            <ResponsiveContent imagePath={foregroundImage} children={children} deviceType={deviceType} />
        </div>
    )
}

export default ContentWrapper;