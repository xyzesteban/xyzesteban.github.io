import React, { useState, useEffect } from 'react';

const ContentWrapper = ({ children }) => {

  return (
    <div style={{outlineColor: 'red', outlineWidth: '2px'}}>
      {children}
    </div>
  );
};

export default ContentWrapper;
