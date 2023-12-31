import React, {useEffect} from 'react';
import ResponsiveWrapper from '../components/containers/ResponsiveWrapper';
import ContentExperience from '../components/ui/ContentExperience';

const Experience = () => {

  return (
    <ResponsiveWrapper>
        <h2 style={{color:'white'}}>Saint Dvorak</h2>
        <ContentExperience imagePath={""}>
          <p>To Be Added...</p>
        </ContentExperience>
        <h2 style={{color:'white'}}>AGES</h2>
        <ContentExperience imagePath={""}>
          <p>To be added...</p>
        </ContentExperience>
        <h2 style={{color:'white'}}>RNGLDR Records Ltd</h2>
        <ContentExperience imagePath={""}>
          <p>To be added...</p>
        </ContentExperience>
    </ResponsiveWrapper>
  )
}

export default Experience;