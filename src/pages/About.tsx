import * as React from 'react';
import ResponsiveWrapper from '../components/containers/ResponsiveWrapper';
import LoremIpsum from '../data/LoremIpsum';

const About = () => {
  return (
    <ResponsiveWrapper>
      <h1>About</h1>
      <LoremIpsum/>
    </ResponsiveWrapper>
  )
}

export default About;