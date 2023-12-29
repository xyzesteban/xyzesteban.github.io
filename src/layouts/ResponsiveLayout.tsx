import React from 'react';
import AppHeader from './AppHeader';
import NavigationFooter from './navigation/NavigationFooter';
import AppWrapper from '../components/containers/AppWrapper';

const ResponsiveLayout = ({ deviceType, children }) => {
    return (
        <>
            {deviceType === 'smartphonePortrait' && (
                <div className="flexible-container">
                <AppHeader isCompactHeader={true} />
                <AppWrapper sidebarType={'none'}>
                    {children}
                    <p>This website is on a phone in portrait mode</p>
                </AppWrapper>
                <NavigationFooter />
                </div>  
            )}
            {deviceType === 'smartphoneLandscape' && (
                <div className="flexible-container">
                <AppHeader isCompactHeader={true} />
                <AppWrapper sidebarType={'compact'}>
                    {children}
                    <p>This website is on a phone in landscape mode</p>
                </AppWrapper>
                </div>            
            )}
            {deviceType === 'tabletPortrait' && (
                <div className="flexible-container">
                <AppHeader isCompactHeader={true} />
                <AppWrapper sidebarType={'none'}>
                    {children}
                    <p>This website is on a Tablet in portrait mode</p>
                </AppWrapper>
                <NavigationFooter />
                </div>            
            )}
            {deviceType === 'tabletLandscape' && (
                <div className="flexible-container">
                <AppHeader isCompactHeader={true} />
                <AppWrapper sidebarType={'compact'}>
                    {children}
                    <p>This website is on a Tablet in landscape mode</p>
                </AppWrapper>
                </div>           
            )}
            {deviceType === 'laptopDesktop' && (
                <div className="flexible-container">
                    <AppHeader isCompactHeader={false} />
                    <AppWrapper sidebarType={'default'}>
                        {children}
                        <p>This website is viewed on a Laptop/Desktop</p>
                    </AppWrapper>
                </div>
            )}
            {deviceType === 'veryLarge' && (
                <div className="flexible-container">
                <AppHeader isCompactHeader={false} />
                <AppWrapper sidebarType={'default'}>
                    {children}
                    <p>This screen is very large!</p>
                </AppWrapper>
            </div>        
            )}
        </>
    );
}

export default ResponsiveLayout;