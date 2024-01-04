import React from 'react';
import ResponsiveWrapper from '../components/containers/ResponsiveWrapper';
import ContentExperience from '../components/ui/ContentExperience';
import ContentIntro from '../components/ui/ContentIntro';

const Experience = () => {

  return (
    <ResponsiveWrapper>
      <h2 style={{ color: 'white' }}>Education</h2>
      <ContentExperience
        imagePath={"assets/Northeastern.png"}
        imageAlt=""
        title={"Northeastern University - Boston, MA"}
        date={"September 2018 - May 2022"}
        headline={"B.S. in Computer Science + Music Composition and Technology"}
      >
        <p>Activities and Societies: Generate Product Development, Husky Songwriting Club, Americorps Jumpstart Tutor/Mentor, Latin American Student Organization (LASO)</p>
      </ContentExperience>
      <ContentExperience
        imagePath={"assets/TexasAcademy.png"}
        imageAlt=""
        title={"Julieta & Frank Staggs Academy of International and STEM Studies - Laredo, TX"}
        date={"September 2016 - May 2018"}
      >
        <p>Activities and Societies: TAMIU Office of Information Technology, TAMIU House of Collective Performers, Student Philanthropy Council</p>
      </ContentExperience>
      <ContentExperience
        imagePath={"assets/SAHS.jpeg"}
        imageAlt=""
        title={"St. Augustine High School - Laredo, TX"}
        date={"September 2013 - May 2015"}
      >
        
      </ContentExperience>
      <h2 style={{ color: 'white' }}>Experience</h2>
      <ContentExperience
        imagePath={"assets/IBM-Logo.jpeg"}
        imageAlt=""
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
        imageAlt=""
        title={"Generate Product Development - Boston, MA"}
        date={"July 2021 - May 2022"}
        headline={"Software Technical Lead"}
      >
        <ul>
          {/* <li>Test</li>
          <li>Test</li>
          <li>Test</li> */}
        </ul>
      </ContentExperience>
      <ContentExperience
        imagePath={"assets/Generate.jpeg"}
        imageAlt=""
        title={"Generate Product Development - Boston, MA"}
        date={"September 2019 - June 2021"}
        headline={"Build Studio Engineer in Software"}
      >
        <ul>
          {/* <li>Test</li>
          <li>Test</li>
          <li>Test</li> */}
        </ul>
      </ContentExperience>
      <ContentExperience
        imagePath={"assets/HarvardPublicHealth.jpg"}
        imageAlt=""
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
        imageAlt=""
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
      <h2 style={{ color: 'white' }}>Skills</h2>
      <ContentIntro>
        <p>
          <h3 className="project-title">Languages</h3>
          <img alt="" src="https://img.shields.io/static/v1?label=&message=Javascript&color=F7DF1E&logo=javascript&logoColor=black" /> 
          <img alt="" src="https://img.shields.io/static/v1?label=&message=Max%2FMSP&color=525252&logo=max&logoColor=white" /> 
          <img alt="" src="https://img.shields.io/static/v1?label=&message=Node.js&color=339933&logo=node.js&logoColor=white" /> 
          <img alt="" src="https://img.shields.io/static/v1?label=&message=Python&color=3776AB&logo=python&logoColor=white" /> 
          <img alt="" src="https://img.shields.io/static/v1?label=&message=TypeScript&color=007ACC&logo=typescript&logoColor=white" /> 
          
          <h3 className="project-title">Development & Frameworks</h3>
          <img alt="" src="https://img.shields.io/static/v1?label=&message=Django&color=092E20&logo=django&logoColor=white" />
          <img alt="" src="https://img.shields.io/static/v1?label=&message=GraphQL&color=white&logo=graphql&logoColor=E10098" />
          <img alt="" src="https://img.shields.io/static/v1?label=&message=MUI&color=007FFF&logo=mui&logoColor=white" /> 
          <img alt="" src="https://img.shields.io/static/v1?label=&message=React&color=61DAFB&logo=react&logoColor=white" /> 
          <img alt="" src="https://img.shields.io/static/v1?label=&message=React%20Native&color=61DAFB&logo=react&logoColor=white" /> 
          <img alt="" src="https://img.shields.io/static/v1?label=&message=Spring&20Boot&color=6DB33F&logo=spring&logoColor=white" />
          
          <h3 className="project-title">Testing & Automation</h3>
          <img alt="" src="https://img.shields.io/static/v1?label=&message=Cypress&color=17202C&logo=cypress&logoColor=white" />
          <img alt="" src="https://img.shields.io/static/v1?label=&message=Expo&color=000020&logo=expo&logoColor=white" />
          <img alt="" src="https://img.shields.io/static/v1?label=&message=Selenium&color=43B02A&logo=selenium&logoColor=white" />

          <h3 className="project-title">Infrastructure</h3>
          <img alt="" src="https://img.shields.io/static/v1?label=&message=Amazon%20AWS&color=232F3E&logo=amazon-aws&logoColor=white" /> 
          <img alt="" src="https://img.shields.io/static/v1?label=&message=AWS%20Lambda&color=FF9900&logo=awslambda&logoColor=white" /> 
          <img alt="" src="https://img.shields.io/static/v1?label=&message=CircleCI&color=343434&logo=circleci&logoColor=white" />
          <img alt="" src="https://img.shields.io/static/v1?label=&message=Docker&color=2496ED&logo=docker&logoColor=white" /> 
          <img alt="" src="https://img.shields.io/static/v1?label=&message=GitHub&color=181717&logo=github&logoColor=white" /> 
          <img alt="" src="https://img.shields.io/static/v1?label=&message=GitKraken&color=179287&logo=gitkraken&logoColor=white" /> 
          <img alt="" src="https://img.shields.io/static/v1?label=&message=Heroku&color=430098&logo=heroku&logoColor=white" /> 
          <img alt="" src="https://img.shields.io/static/v1?label=&message=Travis CI&color=3EAAAF&logo=travis-ci&logoColor=white" /> 

          <h3 className="project-title">Databases</h3>
          <img alt="" src="https://img.shields.io/static/v1?label=&message=DynamoDB&color=4053D6&logo=amazon-dynamodb&logoColor=white" />
          <img alt="" src="https://img.shields.io/static/v1?label=&message=Microsoft%20SQL%20Server&color=CC2927&logo=microsoft-sql-server&logoColor=white" /> 
          <img alt="" src="https://img.shields.io/static/v1?label=&message=MongoDB&color=47A24A&logo=mongodb&logoColor=white" /> 

          <h3 className="project-title">Multimedia & Design</h3>
          <img alt="" src="https://img.shields.io/static/v1?label=&message=Adobe%20Audition&color=9999FF&logo=adobe-audition&logoColor=white" /> 
          <img alt="" src="https://img.shields.io/static/v1?label=&message=Adobe%20Photoshop&color=31A8FF&logo=adobe-photoshop&logoColor=white" />
          <img alt="" src="https://img.shields.io/static/v1?label=&message=Adobe%20XD&color=FF61F6&logo=adobe-xd&logoColor=white" />
          <img alt="" src="https://img.shields.io/static/v1?label=&message=Figma&color=F24E1E&logo=figma&logoColor=white" /> 
          <img alt="" src="https://img.shields.io/static/v1?label=&message=Pro%20Tools&color=7ACB10&logo=pro-tools&logoColor=white" /> 

          <h3 className="project-title">Tools & Productivity</h3>
          <img alt="" src="https://img.shields.io/static/v1?label=&message=IntelliJ%20Idea&color=000000&logo=intellij-idea&logoColor=white" /> 
          <img alt="" src="https://img.shields.io/static/v1?label=&message=Notion&color=000000&logo=Notion&logoColor=white" /> 
          <img alt="" src="https://img.shields.io/static/v1?label=&message=Visual%20Studio&color=5C2D91&logo=visual-studio&logoColor=white" /> 
          <img alt="" src="https://img.shields.io/static/v1?label=&message=Visual%20Studio%20Code&color=007ACC&logo=visual-studio-code&logoColor=white" />
        
        </p>
      </ContentIntro>
    </ResponsiveWrapper>
  )
}

export default Experience;