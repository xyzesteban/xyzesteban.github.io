import React from 'react';
import AnimatedForeground from '../components/ui/AnimatedForeground';
import ContentScroller from '../components/ui/ContentScroller';

const ResponsiveContent = ({ imagePath, deviceType, children }) => {
    return (
        <>
            {deviceType === 'smartphonePortrait' && (
                <div className="mobile-container">
                <ContentScroller mobile>
                    <AnimatedForeground imagePath={imagePath} mobile/>
                    {children}
                </ContentScroller>
                </div>
            )}
            {deviceType === 'smartphoneLandscape' && (
                <div className="sideways-container">
                <AnimatedForeground imagePath={imagePath}/>
                <ContentScroller>
                    {children}
                </ContentScroller>
                </div>            
            )}
            {deviceType === 'tabletPortrait' && (
                <div className="mobile-container">
                <ContentScroller mobile>
                    <AnimatedForeground imagePath={imagePath} mobile/>
                    {children}
                </ContentScroller>
                </div>          
            )}
            {deviceType === 'tabletLandscape' && (
                <div className="sideways-container">
                <AnimatedForeground imagePath={imagePath}/>
                <ContentScroller>
                    {children}
                </ContentScroller>
                </div>        
            )}
            {deviceType === 'laptopDesktop' && (
                <div className="sideways-container">
                <AnimatedForeground imagePath={imagePath}/>
                <ContentScroller>
                    {children}
                </ContentScroller>
                </div>
            )}
            {deviceType === 'veryLarge' && (
                <div className="sideways-container">
                <AnimatedForeground imagePath={imagePath}/>
                <ContentScroller>
                    {children}
                </ContentScroller>
                </div>    
            )}
        </>
    );
}

export default ResponsiveContent;