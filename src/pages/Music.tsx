import * as React from 'react';
import ResponsiveWrapper from '../components/containers/ResponsiveWrapper';
import LoremIpsum from '../data/LoremIpsum';

const Music = () => {
  return (
    <ResponsiveWrapper>
      <h1>Music</h1>
      <LoremIpsum/>
    </ResponsiveWrapper>
  )
}

export default Music;