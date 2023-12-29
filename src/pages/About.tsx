import * as React from 'react';
import ResponsiveWrapper from '../components/containers/ResponsiveWrapper';
import LoremIpsum from '../data/LoremIpsum';
import ContentScroller from '../components/ui/ContentScroller';
import ContentIntro from '../components/ui/ContentIntro';

const About = () => {
  return (
    <ResponsiveWrapper>
      <ContentScroller>
        <ContentIntro>
          <h2>About</h2>
          <LoremIpsum />
        </ContentIntro>
      </ContentScroller>
    </ResponsiveWrapper>
  )
}

export default About;