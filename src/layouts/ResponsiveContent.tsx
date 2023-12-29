import React from 'react';
import AnimatedForeground from '../components/ui/AnimatedForeground';
import ContentScroller from '../components/ui/ContentScroller';

const ResponsiveContent = ({ imagePath, deviceType, children }) => {
    return (
        <>
            {deviceType === 'smartphonePortrait' && (
                <div className="sideways-container">
                <AnimatedForeground imagePath={imagePath}/>
                <ContentScroller children={children} />
                </div>
            )}
            {deviceType === 'smartphoneLandscape' && (
                <div className="sideways-container">
                <AnimatedForeground imagePath={imagePath}/>
                <ContentScroller children={children} />
                </div>            
            )}
            {deviceType === 'tabletPortrait' && (
                <div className="sideways-container">
                <AnimatedForeground imagePath={imagePath}/>
                <ContentScroller children={children} />
                </div>          
            )}
            {deviceType === 'tabletLandscape' && (
                <div className="sideways-container">
                <AnimatedForeground imagePath={imagePath}/>
                <ContentScroller children={children} />
                </div>        
            )}
            {deviceType === 'laptopDesktop' && (
                <div className="sideways-container">
                <AnimatedForeground imagePath={imagePath}/>
                <ContentScroller children={children} />
                </div>
            )}
            {deviceType === 'veryLarge' && (
                <div className="sideways-container">
                <AnimatedForeground imagePath={imagePath}/>
                <ContentScroller children={children} />
                </div>    
            )}
        </>
    );
}

export default ResponsiveContent;