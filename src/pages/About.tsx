import React, { useEffect } from 'react';
import ResponsiveWrapper from '../components/containers/ResponsiveWrapper';
import LoremIpsum from '../data/LoremIpsum';
import ContentIntro from '../components/ui/ContentIntro';

const About = () => {

  return (
    <ResponsiveWrapper>
        <h2 style={{color:'white'}}>About</h2>
        <ContentIntro>
          <p><LoremIpsum/></p>
          {/* <h3>Recent Updates</h3>
          <p>To be added...</p> */}
        </ContentIntro>
        {/* <h2 style={{color:'white'}}>Contact</h2>
        <ContentIntro>
          <p>Under construction...</p>
        </ContentIntro> */}
    </ResponsiveWrapper>
  );
}

export default About;
