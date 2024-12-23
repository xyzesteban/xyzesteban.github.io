import * as React from 'react';
import ResponsiveWrapper from '../components/containers/ResponsiveWrapper';
import ContentGrid from '../components/ui/ContentGrid';
import ContentCard from '../components/ui/ContentCard';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

// TODO - This file needs A LOT of work, including but not limited to:
// 1. Move out the projectModalData to the data or pages folder if possible
// 2. Work on in progress/dead projects that are commented out ASAP

const projectModalData = {
  metaversal: {
    id: 'metaversal',
    title: 'Metaversal',
    subtitle: 'VR-powered Business Intelligence for Meta Quest',
    imagePath: 'assets/MetaversalBarGraph.png',
    description: <p><strong>Team Members</strong>: Esteban D. Espinoza, Casey Honaker, Christopher Jackson, Dhiraj Kamath, Evan Reilly, Sean Neary, Vanessa Reese<br/><br/>
                    <strong>Tech Stack</strong>: Unity Engine, OpenXR, React, Node.js, Express, MongoDB, IBM Cloud<br/><br/>
                    <strong>Client/Stakeholders:</strong> Dr. Michael Haydock<br/><br/>
                    <strong>My Role:</strong> Back-End Developer, Infrastructure Developer<br/><br/>
                    Metaversal is a research project with the goal of exploring VR technology to optimize the work of B2B customers, with a focus 
                    on business intelligence and collaboration.<br/> The project was conducted at IBM as part of the 2022 First-Year Developer Challenge and received
                    the IBM Jumpstart Developer Judges' Choice Winner Award.<br/><br/>
                    
                    Requirements gathered via user research and supported by our original MVP include: 
                    <li>
                      <ul>• A virtual room/space where data can be displayed</ul>
                      <ul>• Compatibility with standard data types (Particularly CSV files)</ul>
                      <ul>• Generating basic data visualizations</ul>
                      <ul>• Multiple users able to work in the same space, real-time streaming, and cross-platform support</ul>
                      <ul>• Real-time streaming and cross-platform support for users without a headset</ul>
                    </li><br/>
                    
                    The project was implemented using the OpenXR framework as a foundation to enable cross-platform support, with a traditional MERN (MongoDB, Express, 
                    React, Node) stack for the back-end and web client and Unity for the VR application. The server was built with Node + Express, with additional support 
                    for IBM Cloud Object Storage (COS) to store and retrieve CSV files. The presenter may upload files to COS using a React web client, and users may interact in real-time with the 
                    VR application via the virtual reality headset of their choice, or a WebGL client in a standard web browser.
                  </p>,
    additionalMedia: ['assets/MetaversalBarGraph.png','assets/MetaversalScatterplot2.png', 'assets/MetaversalUnity.png', 'assets/MetaversalScatterplot1.png', 'assets/MetaversalFlow.png']
  },
  amadeus: {
    id: 'amadeus',
    title: 'Amadeus',
    subtitle: 'Music composition software using a stylus and Optical Music Recognition (OMR)',
    imagePath: 'assets/AmadeusLogo.png',
    description: <p>
                    <strong>Tech Stack</strong>: React Native, Typescript, AWS Lambda, Amazon S3, Tensorflow, Rekognition<br/><br/>
                    Amadeus is an iPad and tablet application for digital music composition, with stylus support and automatic recognition of musical notes via Optical
                    Music Recognition (OMR).<br/>The original prototype was first showcased at Northeastern's 2022 Music Technology Capstone and is being further 
                    developed independently to soon provide a digital music composition experience akin to its analog counterpart.<br/><br/>

                    User research was conducted via surveys of existing software including Sibelius, Finale, and MuseScore, to better understand the 
                    current issues of digital music composition:<br/>
                    <li>
                      <ul>• Too many steps for inserting notes, such as selecting target location for notes, and browsing through menus for symbols</ul>
                      <ul>• Mapping: little similarity with the traditional process for handwritten music composition</ul>
                      <ul>• Maximum productivity requires learning complicated keyboard shortcuts</ul>
                      <ul>• Steep learning curve, low retention</ul>
                    </li><br/>

                    When creating this solution, I explored the latest research in OMR, finding that most research in the area is focused on a top-down approach to 
                    transcribe existing handwritten compositions.<br/>
                    The first prototype of Amadeus implements a bottom-up approach to OMR, enabling input from a composer via a stylus, identifying it using 
                    an Amazon Rekognition or Tensorflow neural network, and displaying a digital note that can be re-positioned as needed.<br/>
                    Additionally, Amadeus will serve as a data collection pipeline for additional OMR training data in the future.
                  </p>,
    additionalMedia: ['assets/AmadeusLogo.png','assets/AmadeusHome.png','assets/AmadeusDemo.gif']
  },
  messina: {
    id: 'messina',
    title: 'Messina Digital',
    subtitle: 'Implementation of Bon Iver + Chris Messina\'s real-time harmonizer using Max/MSP',
    imagePath: 'assets/MessinaCompact.png',
    description: <p><strong>Team Members</strong>: Esteban D. Espinoza, Emma Price<br/><br/>
                    The Messina Digital is a MIDI and vocal instrument that attempts to emulate harmonizers used by the likes of Bon Iver and Jacob Collier.<br/>
                    With the Messina Digital, a performer may sing into a microphone and use a MIDI instrument to create harmonies in real-time.<br/><br/>

                    After doing research on similar instruments that manipulate samples and real-time audio such as Bon Iver's Messina and the Eventide H6000, 
                    the Fairlight CMI, and Antares' Auto-Tune and Harmony Engine, we successfully implemented a 4-part harmonizer using Max/MSP.<br/>
                    In an attempt to follow Chris Messina's analog approach with the Eventide H6000, we provide the option to auto-tune the original vocal
                    to create a "dry" signal, and also allow MIDI input of notes in a range of two octaves to create up to four different harmonies.
                </p>,
    additionalMedia: ['assets/MessinaCompact.png','assets/MessinaFull.png']
  },
  corbal: {
    id: 'corbal',
    title: 'ArtistLaunch',
    subtitle: 'Corbal Distribution\'s in-house platform to connect artists with music curators',
    imagePath: 'assets/CorbalLogo.png',
    description: <p><strong>Team Members</strong>: Jason P. Darimevula, Esteban D. Espinoza, Salil Khan, Jay Srinivasan, Omar Shoura, Brian Nguyen, Gerri Fox, Jason Cheung<br/><br/>
                    <strong>Tech Stack</strong>: React, Redux, Typescript, Django, Python, Microsoft SQL Server<br/><br/>
                    <strong>Client/Stakeholders</strong>: Corbal Distribution/Records<br/><br/>
                    <strong>My Role:</strong> Software Technical Lead<br/><br/>
                    ArtistLaunch is a full-stack application looking to provide a system that artists and playlist curators can use to collaborate and do business with each other.<br/>
                    The first full MVP was designed and developed by Generate Product Development, as a contractor for Corbal Distribution/Records.<br/><br/>

                    Some existing issues in the natural process for music discovery and outreach:
                    <li>
                      <ul>• Lack of exposure and promotion: it is difficult for new artists to break into the market by themselves</ul>
                      <ul>• Lack of connections with curators: it is difficult for artists to obtain contact information of playlist curators</ul>
                      <ul>• Lack of monetary security: artists have to pay curators upfront but there are no guarantees or systems to ensure the agreement is honored</ul>
                      <ul>• Lack of incentive: there is typically no room for artist to negotiate for better fees, and curators are not incentivized for playlist performance</ul>
                    </li><br/>

                    In ArtistLaunch, artists are the driving force behind Artist Launch. With this application, they will be able to pitch songs to curators and choose to take or
                    negotiate any received offers. Playlist curators can see songs pitched by artists and will be able to bid on a song if it is relevant to their content. If the bid
                    is accepted, they can place the song on one of their playlists.<br/><br/>

                    ArtistLaunch's API is built using Python and Django, with support for Microsoft SQL Server to support existing Corbal services, and the front-end was developed 
                    with React and Redux. As part of the MVP, the development team implemented the front-end for the Artist Dashboard + Feed, as well as Curator Dashboard + 
                    Feed and a mock and functional API, and the design team completed branding materials as well as an additional view for Stats.
                  </p>,
    additionalMedia: ['assets/CorbalCurator.png','assets/CorbalWireframes.png','assets/CorbalDatabase.png', 'assets/CorbalFeed.png']
  },
  shortfall: {
    id: 'shortfall',
    title: 'Shortfall',
    subtitle: 'An interactive and educational manufacturing supply chain simulation for Mech Eng. students',
    imagePath: 'assets/ShortfallHome.png',
    description: <p><strong>Team Members</strong>: Ryan Gehrlein, Esteban D. Espinoza, Alex Swenson, Dominik Ritzenhoff, Ashna Srivastava, Julia Golison, Henry Stachowiak, Luca Sharbani<br/><br/>
                    <strong>Tech Stack</strong>: React, Javascript, Node.js, Express, GraphQL, MongoDB<br/><br/>
                    <strong>Client/Stakeholders</strong>: Dr. Jacqueline Isaacs & Dr. Mark Sivak<br/><br/>
                    <strong>My Role:</strong> Software Technical Lead<br/><br/>
                    Shortfall is an educational business simulation game where students can see how their decisions impact their company's economic, ecological, and social impact.<br/>
                    The primary goal of this project was for Generate Product Development to rebuild the no longer supported Adobe Flash prototype from the ground up using modern tools and platform.<br/><br/>

                    A prototype was completed as a collaboration between Generate Product Development's software development, UI/UX design, and branding teams. The software team for Shortfall 
                    implemented the latest Shortfall prototype using a MERN (MongoDB, Express, React, Node.js) + GraphQL, and a functioning prototype for both the front-end and back-end was developed.<br/>
                    Additionally, the product was designed with further development in mind and was made to be easy to expand upon or refactor later as needed. An in-depth API spec and development guide
                    was created by the development team and delivered to the clients to enable development by a future team.
                  </p>,
    additionalMedia: ['assets/ShortfallHome.png','assets/ShortfallWireframe.png','assets/ShortfallFlow.png', 'assets/ShortfallDev1.png', 'assets/ShortfallDev2.png', 'assets/ShortfallDev3.png']
  },
  burncam: {
    id: 'burncam',
    title: 'BurnCam Medical',
    subtitle: 'An augmented telemedicine platform for burn patients using React Native and AWS',
    imagePath: 'assets/BurncamFinal.png',
    description: <p><strong>Team Members</strong>: Nikhil Bhat, Ryan Gehrlein, Esteban D. Espinoza, Rochen Zhuang, Alex Nikanov, Cynthia Xie, Matt Tong<br/><br/>
                    <strong>Tech Stack</strong>: React Native, Javascript, Node.js, AWS Lambda, DynamoDB<br/><br/>
                    <strong>Client/Stakeholders</strong>: Orion Wilmerding<br/><br/>
                    <strong>My Role:</strong> Full-Stack Developer<br/><br/>
                    BurnCam is an augmented telemedicine platform that fits right in your pocket, seeking to conveniently connect burn patients with experts at any time.<br/>
                    Burns need an expert, but experts are rare. This scarcity affects triage and transfers, where 50% of transfers made by local providers are 
                    unnecessary, and 8% are not transferred soon enough. It also affects follow-up care, as long transport times lowers patient compliance and can 
                    cause relapses or complications.<br/>The foundation of the software is a HIPAA compliant, lightweight telemedicine service that runs on any smartphone or computer browser, meeting 
                    health provider's main three needs: accessibility, simplicity, and security.
                    <br/><br/>

                    Generate Product Development worked with BurnCam Medical Inc. to develop on an existing MVP written in plain HTML and JavaScript and redesigned 
                    the UI, re-worked the back-end and transitioned to a cross-platform application that runs on both mobile and web.<br/>
                    The new BurnCam Medical application was developed using React Native, with heavy use of the Expo platform to deploy testing environments and 
                    implement a front-end with responsive design in mind. The app is powered by a combination of multiple AWS services, including Cognito, API Gateway, 
                    AWS Lambda, S3, and DynamoDB.<br/><br/>

                    Burncam was released on the Apple App Store and Google Play Store in Q4 2023.
                </p>,
    additionalMedia: ['assets/BurncamFinal.png','assets/BurncamHiFi.png','assets/BurncamFlow.jpg', 'assets/BurncamFiles.png', 'assets/BurncamWireframe.png']
  },
  butter: {
    id: 'butter',
    title: 'Butter',
    subtitle: 'A social media application built around crowdsourcing of food & restaurant reviews',
    imagePath: 'assets/ButterLogo.png',
    description: <p><strong>Team Members</strong>: Cullen Lampasso, Jason Crouse, Esteban D. Espinoza, Unnas Hussain, Elena Silva, Cynthia Xie, Cathleen Zhang<br/><br/>
                    <strong>Tech Stack</strong>: React Native, Typescript, Node.js, Express, PostgreSQL<br/><br/>
                    <strong>Client/Stakeholders</strong>: Olivia Laskowski<br/><br/>
                    <strong>My Role:</strong> Front-End Developer<br/><br/>
                    Butter is a social media application focused on providing its users with reliable food & restaurant reviews in any city.<br/>
                    Trying to find a great new place to eat around your own home is unnecessarily difficult. There are countless resources for those wishing to 
                    explore the culinary scene in any city; however, the desired information is obscured by vast amounts of low-quality reviews.
                    Butter seeks to build a unique community of trusted local recommenders and a repository of high-quality recommendations by using a unique 
                    methodology and implementing high standards for content and information verification.<br/><br/>

                    Generate Product Development received branding materials created by Northeastern University's Scout and used that to develop the app's first MVP.<br/>
                    Butter's front-end was developed using React Native, with iOS and Android smartphones in mind, and its back-end was implemented with Express and 
                    PostgreSQL.
                </p>,
    additionalMedia: ['assets/ButterLogo.png','assets/ButterApp.png','assets/ButterRecForm.png']
  },
  smartypill: {
    title: 'SmartyPill',
    subtitle: 'An automatic pill and water dispenser that ensures you\'re taking the right pills at the right time.',
    imagePath: 'assets/SmartyPillLogo.png',
    description: <p><strong>Team Members</strong>: Noah Appleby, Elena Silva, Esteban D. Espinoza, Haley Fogelson, Thomas Keith, Zachary Hillman<br/><br/>
                    <strong>Tech Stack</strong>: React, Javascript, Flask, Python, PostgreSQL<br/><br/>
                    <strong>Client/Stakeholders</strong>: Matthew Swenson<br/><br/>
                    <strong>My Role:</strong> Front-End Developer<br/><br/>
                    SmartyPill is an automatic pill dispenser designed to help senior citizens and medically compromised people take their medications on 
                    time and as prescribed. Generate Product Development worked with SmartyPill founders to develop the product's 4th prototype.<br/><br/>

                    This project was a collaboration between Generate's hardware and software divisions, with the former implementing a novel universal 
                    pill canister design that can dispense a single pill of a large range of sizes, and the former implementing an application for 
                    prescription management and device integration that can be connected to the hardware. The team implemented an API using Flask, and a 
                    dynamic web app prototype using React.
                  </p>,
    additionalMedia: ['assets/SmartyPillLogo.png','assets/SmartyPillHardware.jpeg','assets/SmartyPillHome.png','assets/SmartyPillPrescriptions.png','assets/SmartyPillModal.png','assets/SmartyPillTeam.webp']
  }
}

const Projects = () => {

  const [open, setOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState(0);
  const handleOpen = (content) => {
    setModalContent(content);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <ResponsiveWrapper>
      <h2 style={{color: 'white'}}>Software</h2>
      <ContentGrid>
      {Object.entries(projectModalData).map(([projectId, project]) => (
        <ContentCard
          key={projectId}
          onClick={() => handleOpen(projectId)}
          imagePath={project.imagePath}
          imageAlt=""
          title={project.title}
          subtitle={project.subtitle}
        />
      ))}
        {/* TODO: In Progress/Dead projects */}
        {/* <ContentCard imagePath='assets/projects-placeholder.jpg'>Tilted Tactics</ContentCard> */}
        {/* <ContentCard imagePath='assets/projects-placeholder.jpg'>Bibliophile Blaze Busters</ContentCard> */}
        {/* <ContentCard imagePath='assets/projects-placeholder.jpg'>Snaptag</ContentCard> */}
        {/* <ContentCard imagePath='assets/projects-placeholder.jpg'>Tetris 3D</ContentCard> */}
        {/* <ContentCard imagePath='assets/projects-placeholder.jpg'>Filemeister</ContentCard> */}
        {/* <ContentCard imagePath='assets/projects-placeholder.jpg'>Minesweeper</ContentCard> */}
        {/* <ContentCard imagePath='assets/projects-placeholder.jpg'>2048</ContentCard> */}
        {/* <ContentCard imagePath='assets/projects-placeholder.jpg'>Asteroids</ContentCard> */}
      </ContentGrid>
      <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="project-modal-title"
            aria-describedby="project-modal-description"
        >
        <Box className="modal-style">
          <div>
            <h2 className="media-title content-text">
              {projectModalData[modalContent]?.title}
            </h2>
          </div>
          {/* Slider to display project media */}
          <div className="project-scroller">
            {projectModalData[modalContent]?.additionalMedia.map((imagePath, index) => (
              <div key={index} className="project-container">
                <img src={imagePath} className="project-media" alt={`Additional Media ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="media-container">
              <p><h5 style={{ margin: '0px' }}>{projectModalData[modalContent]?.subtitle}</h5></p>
              <p className="media-text">{projectModalData[modalContent]?.description}</p>
          </div>
        </Box>
      </Modal>
    </ResponsiveWrapper>
  )
}

export default Projects;