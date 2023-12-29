import React from 'react';
import NavigationSidebar from '../../layouts/navigation/NavigationSidebar';
import { useAppContext } from '../../context/AppContext';
import ContentWrapper from './ContentWrapper';

const AppWrapper = ({sidebarType, children }) => {

  let sidebarComponent;

  if (sidebarType == 'default') {
    // Default sidebar cannot be hidden, but can be expanded/collapsed with a button on the header:
    sidebarComponent = <NavigationSidebar isCompactSidebar={false}/>;
  } else if (sidebarType == 'compact') {
    // Compact sidebar should be swipeable and blur the content:
    sidebarComponent = <NavigationSidebar isCompactSidebar={true} />;
  } else {
    // No sidebar for other cases:
    sidebarComponent = null;
  }

  const { page } = useAppContext(); // Use the context hook to access the state and functions

  let backgroundColor;

  // TODO: Move this out to a hook
  if (page == '') {
    // About page is blue:
    backgroundColor = 'blue';
  } else if (page == 'experience') {
    // CV page is green:
    backgroundColor = 'green';
  } else if (page == 'software') {
    // Projects page is golden:
    backgroundColor = '#c78203';
  } else if (page == 'music') {
    // Music page is red:
    backgroundColor = 'red';
  }

  return (
    <div aria-label="main-wrapper" className="main-object" style={{backgroundColor}}>
      {sidebarComponent}
      <ContentWrapper children={children} />
    </div>
  );
};

export default AppWrapper;
