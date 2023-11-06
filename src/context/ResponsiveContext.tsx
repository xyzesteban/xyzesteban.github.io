// ResponsiveContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define initial dimensions to initialize the context:
const initialDimensions = {
  windowWidth: window.innerWidth,
  windowHeight: window.innerHeight,
};

// Define context using createContext hook (this requires a default value always):
const ResponsiveContext = createContext(initialDimensions);

// ResponsiveProvider is needed for accessing context
const ResponsiveProvider = ({ children }) => {
  const [windowDimensions, setWindowDimensions] = useState({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  });

  // Update the dimensions when a "resize" event is detected:
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // The context provider allows the {children} to access the window dimensions via the useResponsive function:
  return (
    <ResponsiveContext.Provider value={windowDimensions}>
      {children}
    </ResponsiveContext.Provider>
  );
};

/**
 * Custom hook to access window dimensions from the ResponsiveContext.
 *
 * @returns {{width: number, height: number}} An object containing the window width and height.
 */
const useResponsive = () => {
  return useContext(ResponsiveContext);
};

export { ResponsiveProvider, useResponsive };
