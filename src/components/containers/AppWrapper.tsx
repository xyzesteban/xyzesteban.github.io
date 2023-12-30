import React, { useEffect, useState } from 'react';
import NavigationSidebar from '../../layouts/navigation/NavigationSidebar';
import ContentWrapper from './ContentWrapper';
import { useLocation } from 'react-router-dom';

const AppWrapper = ({ sidebarType, children }) => {
  const { pathname } = useLocation(); // Use react-router-dom's useLocation hook
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    // Update background based on the current route
    if (pathname === '/') {
      setBackgroundColor('blue');
    } else if (pathname === '/experience') {
      setBackgroundColor('green');
    } else if (pathname === '/software') {
      setBackgroundColor('#c78203');
    } else if (pathname === '/music') {
      setBackgroundColor('red');
    }
  }, [pathname]);

  let sidebarComponent;

  if (sidebarType === 'default') {
    sidebarComponent = <NavigationSidebar isCompactSidebar={false} />;
  } else if (sidebarType === 'compact') {
    sidebarComponent = <NavigationSidebar isCompactSidebar={true} />;
  } else {
    sidebarComponent = null;
  }

  return (
    <div aria-label="main-wrapper" className="main-object" style={{ backgroundColor }}>
      {sidebarComponent}
      <ContentWrapper children={children}/>
    </div>
  );
};

export default AppWrapper;
