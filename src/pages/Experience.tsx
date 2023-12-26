import * as React from 'react';
import ResponsiveWrapper from '../components/containers/ResponsiveWrapper';
import LoremIpsum from '../data/LoremIpsum';

const Experience = () => {
  return (
    <ResponsiveWrapper>
      <h1>CV</h1>
      <LoremIpsum/>
    </ResponsiveWrapper>
  )
}

export default Experience;