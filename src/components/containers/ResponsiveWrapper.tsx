import React, { useState, useEffect } from 'react';
import { useResponsive } from '../../context/ResponsiveContext';
import useLayout from '../../hooks/useLayout';
import ResponsiveLayout from '../../layouts/ResponsiveLayout';

// Function to calculate the device type based on window dimensions
const CalculateDeviceType = (windowWidth, windowHeight) => {
    return useLayout(windowWidth, windowHeight);
}

const ResponsiveWrapper = ({ children }) => {
    // State variables to track the screen dimensions:
    const { windowWidth, windowHeight } = useResponsive(); // Access window dimensions

    // State variable to track the device type
    const [deviceType, setDeviceType] = useState(CalculateDeviceType(windowWidth, windowHeight));

    // Use useEffect to update deviceType when window dimensions change
    useEffect(() => {
        setDeviceType(CalculateDeviceType(windowWidth, windowHeight));
    }, [windowWidth, windowHeight]);

    return <ResponsiveLayout deviceType={deviceType}>{children}</ResponsiveLayout>;
}

export default ResponsiveWrapper;