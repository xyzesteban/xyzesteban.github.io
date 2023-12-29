import React from 'react';
import AnimatedForeground from '../components/ui/AnimatedForeground';
import ContentScroller from '../components/ui/ContentScroller';

const ResponsiveContent = ({ imagePath, deviceType, children }) => {
    return (
        <>
            {deviceType === 'smartphonePortrait' && (
                <>
                {children}
                </> 
            )}
            {deviceType === 'smartphoneLandscape' && (
                <>
                {children}
                </>            
            )}
            {deviceType === 'tabletPortrait' && (
                <>
                {children}
                </>           
            )}
            {deviceType === 'tabletLandscape' && (
                <>
                {children}
                </>          
            )}
            {deviceType === 'laptopDesktop' && (
                <div className="sideways-container">
                <AnimatedForeground imagePath={imagePath}/>
                <ContentScroller children={children} />
                </div>
            )}
            {deviceType === 'veryLarge' && (
                <>
                {children}
                </>       
            )}
        </>
    );
}

export default ResponsiveContent;