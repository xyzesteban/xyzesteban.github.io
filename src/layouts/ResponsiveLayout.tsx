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
                </AppWrapper>
                <NavigationFooter />
                </div>  
            )}
            {deviceType === 'smartphoneLandscape' && (
                <div className="flexible-container">
                <AppHeader isCompactHeader={true} />
                <AppWrapper sidebarType={'compact'}>
                    {children}
                </AppWrapper>
                </div>            
            )}
            {deviceType === 'tabletPortrait' && (
                <div className="flexible-container">
                <AppHeader isCompactHeader={true} />
                <AppWrapper sidebarType={'none'}>
                    {children}
                </AppWrapper>
                <NavigationFooter />
                </div>            
            )}
            {deviceType === 'tabletLandscape' && (
                <div className="flexible-container">
                <AppHeader isCompactHeader={true} />
                <AppWrapper sidebarType={'compact'}>
                    {children}
                </AppWrapper>
                </div>           
            )}
            {deviceType === 'laptopDesktop' && (
                <div className="flexible-container">
                    <AppHeader isCompactHeader={false} />
                    <AppWrapper sidebarType={'default'}>
                        {children}
                    </AppWrapper>
                </div>
            )}
            {deviceType === 'veryLarge' && (
                <div className="flexible-container">
                <AppHeader isCompactHeader={false} />
                <AppWrapper sidebarType={'default'}>
                    {children}
                </AppWrapper>
            </div>        
            )}
        </>
    );
}

export default ResponsiveLayout;