import React from 'react';
import Large from './Large.tsx';
import Mobile from './Mobile.tsx';

function App() {
  // You can define a state variable to track the screen width
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  // Function to update the windowWidth state when the window is resized
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // Add an event listener for window resize
  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  // Determine which component to render based on the screen size
  const isSmallScreen = windowWidth <= 1200; // Adjust the breakpoint as needed

  return (
    <div>
      {isSmallScreen ? <Mobile /> : <Large />}
    </div>
  );
}

export default App;