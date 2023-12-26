import React from 'react';
import AppHeader from './AppHeader';
import NavigationFooter from './navigation/NavigationFooter';
import NavigationSidebar from './navigation/NavigationSidebar';
import ContentWrapper from '../components/containers/ContentWrapper';

const ResponsiveLayout = ({ deviceType, children }) => {
    return (
        <>
            {deviceType === 'smartphonePortrait' && (
                <>
                <AppHeader isCompact={true} />
                <ContentWrapper>
                    {children}
                </ContentWrapper>
                <NavigationFooter />
                </>
            )}
            {deviceType === 'smartphoneLandscape' && (
                <>
                <AppHeader isCompact={true} />
                <NavigationSidebar />
                <ContentWrapper>
                {children}
                </ContentWrapper>
                </>            
            )}
            {deviceType === 'tabletPortrait' && (
                <>
                <AppHeader isCompact={false} />
                <NavigationSidebar/>
                <ContentWrapper>
                {children}                
                </ContentWrapper>
                </>            
            )}
            {deviceType === 'tabletLandscape' && (
                <>
                <AppHeader isCompact={false} />
                <NavigationSidebar/>
                <ContentWrapper>
                {children}                
                </ContentWrapper>
                </>            )}
            {deviceType === 'laptopDesktop' && (
                <div className="flexible-container">
                    <div className="header-object" style={{flex: 1}}><AppHeader isCompact={false} />
                
                </div>
                <div className="main-object">{/* <ContentWrapper>
                {children}                
                </ContentWrapper> */} <NavigationSidebar /></div>
                </div>
                      
            )}
            {deviceType === 'veryLarge' && (
                <>
                <AppHeader isCompact={false} />
                <NavigationSidebar />
                <ContentWrapper>
                {children}
                </ContentWrapper>
                </>            
            )}
        </>
    );
}

export default ResponsiveLayout;