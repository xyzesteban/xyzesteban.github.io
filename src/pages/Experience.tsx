import React from 'react';
import ResponsiveWrapper from '../components/containers/ResponsiveWrapper';
import ContentExperience from '../components/ui/ContentExperience';
import ContentIntro from '../components/ui/ContentIntro';

const Experience = () => {

  return (
    <ResponsiveWrapper>
      <h2 style={{ color: 'white' }}>Experience</h2>
      <ContentExperience
        imagePath={"assets/Xfinity.png"}
        imageAlt="Logo of Xfinity)"
        title={"Xfinity - Cambridge, MA"}
        date={"March 2025 - Present"}
        headline={"Technical Sales Consultant II"}
      >
        <ul>
          <li>• Added ~$8K average new monthly revenue from Internet, TV, Mobile, Smart Home, and Comcast Business services</li>
          <li>• Delivered tailored consultations and solutions to ~180 customers per month, maintaining top spot in NPS metrics
          for Cambridge, MA district for three consecutive months</li>
          <li>• Served as designated store Apple Expert, delivering product education, technical support, and seamless device
          activations and transfers for iPhone, iPad, and Apple Watch users</li>
        </ul>
      </ContentExperience>
      <ContentExperience
        imagePath={"assets/Starbucks.png"}
        imageAlt="Logo of Starbucks)"
        title={"Starbucks - Cambridge, MA"}
        date={"Nov 2024 - March 2025"}
        headline={"Barista Trainer"}
      >
        <ul>
          <li>• Trained new partners on beverage routines, store standards, and the LATTE framework for customer engagement, contributing to the third top-selling store in the district (Harvard Square - Grab n' Go)</li>
          <li>• Elevated café operations through precision, speed, and authentic customer connection</li>
          <li>• Led a high-quality café experience by example during peak hours, maintaining composure and delivering handcrafted beverages with accuracy and care in a fast-paced environment</li>
        </ul>
      </ContentExperience>
      <ContentExperience
        imagePath={"assets/IBM-Logo.jpeg"}
        imageAlt="Logo of IBM (International Business Machines)"
        title={"IBM - Lowell, MA"}
        date={"January 2021 - Oct 2024"}
        headline={"Software Developer"}
      >
        <ul>
          <li>• Implemented and maintained services and third-party integrations for IBM governance, risk, and compliance (GRC) on-prem and SaaS offerings, enhancing data processing efficiency and improving security and compliance metrics</li>
          <li>• Developed pipeline and build reporting system for 80+ product deployments, reducing build reporting time and errors, and resulting in a tripled increase in developer productivity</li>
          <li>• Oversaw development of server-side logic for award-winning VR business intelligence prototype as part of the IBM Jumpstart Developer Challenge</li>
          <li>• Contributed to development of OpenPages installer in Node.js and release management for three major releases</li>
          <li>• Served as Scrum Master for three major releases, coordinating a cross-functional team of 20+ back-end developers, AI developers, and offering managers to deliver key features and enhancements</li>
          <li>• Developed JUnit tests for application SDK with support for IBM Cloud Pak for Data (CP4D) product deployments</li>
          <li>• Reported, tracked, and resolved issues related to Cypress automated testing suite of 140+ test cases and Jest suite of 200+ test cases</li>
          <li>• Mentored dozens of developers in areas such as development environment setup, dependency management, CI/CD, vulnerability scanning and remediation, build certification & testing, configuration management, and third-party upgrades & integrations</li>
        </ul>
      </ContentExperience>
      <ContentExperience
        imagePath={"assets/Generate.jpeg"}
        imageAlt=""
        title={"Generate Product Development - Boston, MA"}
        date={"July 2021 - May 2022"}
        headline={"Software Technical Lead"}
      >
        <>
          <ul>
            <li>• Served as technical lead for two teams of 6-8 university students, overseeing feature development and code handoff of two prototypes for early-stage startups</li>
            <li>• Conducted over fifty behavioral and technical interviews for aspiring engineering and design candidates</li>
            <li>• Hosted knowledge sharing-sessions for system design, UI development, Rest API development, and DevOps tools</li>
            <li>• Enabled all DevOps tasks (version control, CI/CD pipelines, product deployment) as outlined in project requirements</li>
            <li>• Authored and delivered in-depth onboarding, development environment setup, and handoff documentation for future developers, showcasing strong technical writing skills</li>
          </ul>
        </>
      </ContentExperience>
      <ContentExperience
        imagePath={"assets/Generate.jpeg"}
        imageAlt=""
        title={"Generate Product Development - Boston, MA"}
        date={"September 2019 - June 2021"}
        headline={"Software Engineer"}
      >
        <>
          <ul>
            <li>• Created modular and re-usable UI components for five different Series A and B startups</li>
            <li>• Implemented responsive dashboards and components for product MVPs, enabling cross-platform support and consistent experiences across devices</li>
            <li>• Completed high fidelity UI styling, following the latest accessibility practices</li>
            <li>• Enhanced existing codebases with modern technologies as requested by the client, while providing the original functionality</li>
            <li>• Assisted with infrastructure development and project management tasks such as version control, development documentation, prototype deployment and testing, and product handoff</li>
          </ul>
        </>
      </ContentExperience>
      <ContentExperience
        imagePath={"assets/HarvardPublicHealth.jpg"}
        imageAlt=""
        title={"Harvard T.H. Chan School of Public Health - Boston, MA"}
        date={"January 2020 - July 2020"}
        headline={"IT Project Management Intern"}
      >
        <ul>
          <li>• Designed and delivered functional wireframe design for A/V inventory application and relational database</li>
          <li>• Managed OS upgrades and cross-platform software migrations for 150+ staff virtual environments</li>
          <li>• Completed technical support tasks for administrators and researchers, as assigned by Senior IT Project Manager</li>
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
          <li>• Provided first line of defense technical support both in-person, and remotely via phone, e-mail, and chat for TAMIU students, professors, and administrators</li>
          <li>• Maintained 40+ student PC kiosks across campus and reported their daily status to key stakeholders, increasing self-service usage</li>
          <li>• Decommissioned and disabled unused storage devices to comply with security policies</li>
          <li>• Documented and transported surplus A/V equipment as requested by the CIO office</li>
        </ul>
      </ContentExperience>
      <h2 style={{ color: 'white' }}>Education</h2>
      <ContentExperience
        imagePath={"assets/Northeastern.png"}
        imageAlt="seal of Northeastern University in Boston, Massachusetts"
        title={"Northeastern University - Boston, MA"}
        date={"September 2018 - May 2022"}
        headline={"B.S. in Computer Science + Music Composition and Technology"}
      >
        <p>Activities and Societies: Americorps Jumpstart Tutor/Mentor, Husky Songwriting Club, Latin American Student Organization (LASO)</p>
      </ContentExperience>
      <ContentExperience
        imagePath={"assets/TexasAcademy.png"}
        imageAlt="logo of Texas Academy of STEM Studies in Laredo Texas"
        title={"Julieta & Frank Staggs Academy of International and STEM Studies - Laredo, TX"}
        date={"September 2016 - May 2018"}
      >
        <p>Activities and Societies: TAMIU Office of Information Technology, TAMIU House of Collective Performers, Student Philanthropy Council</p>
      </ContentExperience>
      <ContentExperience
        imagePath={"assets/SAHS.jpeg"}
        imageAlt="seal of Saint Augustine High School"
        title={"St. Augustine High School - Laredo, TX"}
        date={"September 2013 - May 2015"}
      />
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