import * as React from 'react';
import ResponsiveWrapper from '../components/containers/ResponsiveWrapper';
import LoremIpsum from '../data/LoremIpsum';

const Projects = () => {
  return (
    <ResponsiveWrapper>
      <h1>Software</h1>
      <LoremIpsum/>
    </ResponsiveWrapper>
  )
}

export default Projects;