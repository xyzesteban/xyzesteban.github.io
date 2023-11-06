import React, { useState, useEffect } from 'react';
import { useResponsive } from '../../context/ResponsiveContext';
import useLayout from '../../hooks/useLayout';
import ResponsiveLayout from '../../layouts/ResponsiveLayout';

const ResponsiveWrapper = ({ children }) => {
    // State variables to track the screen dimensions:
    const { windowWidth, windowHeight } = useResponsive(); // Access window dimensions

    // Function to calculate the device type based on window dimensions
    const calculateDeviceType = () => {
        return useLayout(windowWidth, windowHeight);
    };

    // State variable to track the device type
    const [deviceType, setDeviceType] = useState(calculateDeviceType());

    // Use useEffect to update deviceType when window dimensions change
    useEffect(() => {
        setDeviceType(calculateDeviceType());
    }, [windowWidth, windowHeight]);

    return <ResponsiveLayout deviceType={deviceType}>{children}</ResponsiveLayout>;
}

export default ResponsiveWrapper;