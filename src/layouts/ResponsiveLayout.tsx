import React from 'react';

const ResponsiveLayout = ({ deviceType, children }) => {

    return (
        <>
            {deviceType === 'smartphonePortrait' && (
                <p>This content is displayed on smartphones in portrait mode.</p>
            )}
            {deviceType === 'smartphoneLandscape' && (
                <p>This content is displayed on smartphones in landscape mode.</p>
            )}
            {deviceType === 'tabletPortrait' && (
                <p>This content is displayed on tablets in portrait mode.</p>
            )}
            {deviceType === 'tabletLandscape' && (
                <p>This content is displayed on tablets in landscape mode.</p>
            )}
            {deviceType === 'laptopDesktop' && (
                <p>This content is displayed on laptops & desktops.</p>
            )}
            {deviceType === 'veryLarge' && (
                <p>This content is displayed on really large screens!.</p>
            )}
            <main>
                {children}
            </main>

        </>
    );
}

export default ResponsiveLayout;