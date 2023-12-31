import React, {useEffect} from 'react';
import ResponsiveWrapper from '../components/containers/ResponsiveWrapper';
import ContentExperience from '../components/ui/ContentExperience';
import LoremIpsum from '../data/LoremIpsum';

const Experience = () => {

  return (
    <ResponsiveWrapper>
        <h2 style={{color:'white'}}>Education</h2>
        <ContentExperience imagePath={"assets/Northeastern.png"}>
          <h3>Northeastern University - Boston, MA</h3><p>2018-2022</p>
          <p>B.S. in Computer Science + Music Composition and Technology</p>
        </ContentExperience>
        <ContentExperience imagePath={"assets/TAMIU.svg.png"}>
          <h3>Julieta & Frank Staggs Academy of International and STEM Studies - Laredo, TX</h3><p>2016-2018</p>
        </ContentExperience>
        <ContentExperience imagePath={"assets/SAHS.jpeg"}>
          <h3>Saint Augustine High School - Laredo, TX</h3><p>2013-2015</p>
        </ContentExperience>
        <h2 style={{color:'white'}}>Experience</h2>
        <ContentExperience imagePath={"assets/IBM-Logo.jpeg"}>
          <h3>IBM</h3><p>2021-present</p>
          <p>Full-Stack Software Developer</p>
        </ContentExperience>
        <ContentExperience imagePath={"assets/HarvardPublicHealth.jpg"}>
          <h3>Harvard T.H. Chan School of Public Health</h3><p>2019-2020</p>
          <p>IT Project Management Co-op</p>
        </ContentExperience>
        <ContentExperience imagePath={"assets/TAMIU.svg.png"}>
          <h3>Texas A&M International University</h3><p>2017-2018</p>
          <p>1st Level Support Technician</p>
        </ContentExperience>
        <h2 style={{color:'white'}}>Skills</h2>
        <ContentExperience imagePath={"assets/experience-placeholder.png"}>
          <p>Under Construction...</p>
        </ContentExperience>
    </ResponsiveWrapper>
  )
}

export default Experience;