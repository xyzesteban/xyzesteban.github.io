import React, {useEffect} from 'react';
import ResponsiveWrapper from '../components/containers/ResponsiveWrapper';
import ContentExperience from '../components/ui/ContentExperience';
import LoremIpsum from '../data/LoremIpsum';

const Experience = () => {

  return (
    <ResponsiveWrapper>
        <h2 style={{ color: 'white' }}>Education</h2>
      <ContentExperience
        imagePath={"assets/Northeastern.png"}
        title={"Northeastern University - Boston, MA"}
        date={"September 2018 - May 2022"}
        headline={"B.S. in Computer Science + Music Composition and Technology"}
      >
        <p>Activities and Societies: Generate Product Development, Husky Songwriting Club, Americorps Jumpstart Tutor/Mentor, Latin American Student Organization (LASO)</p>
      </ContentExperience>
      <ContentExperience
        imagePath={"assets/TexasAcademy.png"}
        title={"Julieta & Frank Staggs Academy of International and STEM Studies - Laredo, TX"}
        date={"September 2016 - May 2018"}
      >
        <p>Activities and Societies: TAMIU Office of Information Technology, TAMIU House of Collective Performers, Student Philanthropy Council</p>
      </ContentExperience>
      <ContentExperience
        imagePath={"assets/SAHS.jpeg"}
        title={"St. Augustine High School - Laredo, TX"}
        date={"September 2013 - May 2015"}
      >
        <p></p>
      </ContentExperience>
      <h2 style={{ color: 'white' }}>Experience</h2>
      <ContentExperience
        imagePath={"assets/IBM-Logo.jpeg"}
        title={"IBM - Lowell, MA"}
        date={"January 2021 - present"}
        headline={"Full-Stack Software Developer"}
      >
        <ul>
          {/* <li>Test</li>
          <li>Test</li>
          <li>Test</li> */}
        </ul>
      </ContentExperience>
      <ContentExperience
        imagePath={"assets/Generate.jpeg"}
        title={"Generate Product Development - Boston, MA"}
        date={"September 2020 - June 2021"}
        headline={"Technical Lead (Software)"}
      >
        <ul>
          {/* <li>Test</li>
          <li>Test</li>
          <li>Test</li> */}
        </ul>
      </ContentExperience>
      <ContentExperience
        imagePath={"assets/HarvardPublicHealth.jpg"}
        title={"Harvard T.H. Chan School of Public Health - Boston, MA"}
        date={"January 2020 - July 2020"}
        headline={"IT Project Management Intern"}
      >
        <ul>
          {/* <li>Test</li>
          <li>Test</li>
          <li>Test</li> */}
        </ul>
      </ContentExperience>
      <ContentExperience
        imagePath={"assets/TAMIU.svg.png"}
        title={"Texas A&M International University"}
        date={"May 2017 - May 2018"}
        headline={"1st Level Support Technician"}
      >
        <ul>
          {/* <li>Test</li>
          <li>Test</li>
          <li>Test</li> */}
        </ul>
      </ContentExperience>
        <h2 style={{color:'white'}}>Skills</h2>
      <ContentExperience imagePath={"assets/experience-placeholder.png"}>
          <p>Under Construction...</p>
      </ContentExperience>
    </ResponsiveWrapper>
  )
}

export default Experience;