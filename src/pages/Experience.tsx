import React, {useEffect} from 'react';
import ResponsiveWrapper from '../components/containers/ResponsiveWrapper';
import ContentExperience from '../components/ui/ContentExperience';
import LoremIpsum from '../data/LoremIpsum';

const Experience = () => {

  return (
    <ResponsiveWrapper>
        <h2 style={{color:'white'}}>Education</h2>
        <ContentExperience imagePath={"assets/education-placeholder.jpg"}>
          <p>Northeastern University - B.S. in Computer Science and Music Composition and Technology</p>
        </ContentExperience>
        <ContentExperience imagePath={"assets/education-placeholder.jpg"}>
          <p>Julieta & Frank Staggs Academy of International and STEM Studies - Laredo, TX</p>
        </ContentExperience>
        <ContentExperience imagePath={"assets/education-placeholder.jpg"}>
          <p>Saint Augustine High School - Laredo, TX</p>
        </ContentExperience>
        <h2 style={{color:'white'}}>Experience</h2>
        <ContentExperience imagePath={"assets/experience-placeholder.png"}>
          <p>IBM</p>
        </ContentExperience>
        <ContentExperience imagePath={"assets/experience-placeholder.png"}>
          <p>Harvard T.H. Chan School of Public Health</p>
        </ContentExperience>
        <ContentExperience imagePath={"assets/experience-placeholder.png"}>
          <p>Texas A&M International University</p>
        </ContentExperience>
        <h2 style={{color:'white'}}>Skills</h2>
        <ContentExperience imagePath={"assets/experience-placeholder.png"}>
          <p></p>
        </ContentExperience>
    </ResponsiveWrapper>
  )
}

export default Experience;