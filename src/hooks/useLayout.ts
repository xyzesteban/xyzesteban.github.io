const useLayout = (windowWidth, windowHeight) => {
  // Smartphone under 480 x 1024 (Portrait)
  if (windowHeight > windowWidth 
            && windowWidth <= 480
            && windowHeight < 1024) {
    return 'smartphonePortrait';
  }
  // Smartphone under 1024 x 480 (Landscape)
  else if (windowWidth >= windowHeight
            && windowWidth < 1024
            && windowHeight <= 480) {
    return 'smartphoneLandscape';
  }
  // Tablet under 1024 x 1200 (Portrait)
  else if (windowHeight > windowWidth
            && windowWidth < 1024
            && windowHeight <= 1200) {
    return 'tabletPortrait';
  }
  // Tablet under 1200 x 1024 (Landscape)
  else if (windowWidth >= windowHeight
            && windowWidth <= 1200
            && windowHeight < 1024) {
    return 'tabletLandscape';
  }
  else if ((windowWidth > 1200 && windowWidth < 3840)
            || (windowHeight >= 1024 && windowHeight <= 2160)) {
    return 'laptopDesktop';
  }
  else {
    return 'veryLarge';
  }
}

export default useLayout;
