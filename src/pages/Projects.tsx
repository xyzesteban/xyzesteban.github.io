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
                    <strong>Tech Stack</strong>: Unity Engine, OpenXR, MongoDB, Express, React, Node.js<br/><br/>
                    <strong>Client/Stakeholders:</strong> Dr. Michael Haydock<br/><br/>
                    Metaversal is a research project with the goal of exploring VR technology to optimize the work of B2B customers, with a focus 
                    on business intelligence and collaboration.<br/> The project was conducted at IBM as part of the 2022 First-Year Developer Challenge and received
                    the IBM Jumpstart Developer Judges' Choice Winner Award.<br/><br/>
                    
                    Requirements gathered via user research and supported by our original MVP include: 
                    <li>
                      <ul>- A virtual room/space where data can be displayed</ul>
                      <ul>- Compatibility with standard data types (Particularly CSV files)</ul>
                      <ul>- Generating basic data visualizations</ul>
                      <ul>- Multiple users able to work in the same space, real-time streaming, and cross-platform support</ul>
                      <ul>- Real-time streaming and cross-platform support for users without a headset</ul>
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
                    <strong>Tech Stack</strong>: React Native, AWS Lambda, Python, Tensorflow, Rekognition<br/><br/>
                    Amadeus is an iPad and tablet application for digital music composition, with stylus support and automatic recognition of musical notes via Optical
                    Music Recognition (OMR).<br/>The original prototype was first showcased at Northeastern's 2022 Music Technology Capstone and is being further 
                    developed independently to soon provide a digital music composition experience akin to its analog counterpart.<br/><br/>

                    User research was conducted via surveys of existing software including Sibelius, Finale, and MuseScore, to better understand the 
                    current issues of digital music composition:<br/>
                    <li>
                      <ul>- Too many steps for inserting notes, such as selecting target location for notes, and browsing through menus for symbols</ul>
                      <ul>- Mapping - little similarity with the traditional process for handwritten music composition</ul>
                      <ul>- Maximum productivity requires learning complicated keyboard shortcuts</ul>
                      <ul>- Steep learning curve, low retention</ul>
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
    subtitle: 'Implementation of Bon Iver\'s real-time harmonizer using Max/MSP',
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
                    <strong>Tech Stack</strong>: React, Python, Django, Microsoft SQL Server<br/><br/>
                    <strong>Client/Stakeholders</strong>: Corbal Distribution/Records<br/><br/>
                  </p>,
    additionalMedia: ['assets/CorbalCurator.png','assets/CorbalWireframes.png','assets/CorbalDatabase.png', 'assets/CorbalFeed.png']
  },
  shortfall: {
    id: 'shortfall',
    title: 'Shortfall',
    subtitle: 'An interactive and educational manufacturing supply chain simulation for Mech Eng. students',
    imagePath: 'assets/ShortfallHome.png',
    description: <p><strong>Team Members</strong>: Ryan Gehrlein, Esteban D. Espinoza, Alex Swenson, Dominik Ritzenhoff, Ashna Srivastava, Julia Golison, Henry Stachowiak, Luca Sharbani<br/><br/>
                    <strong>Tech Stack</strong>: React, MongoDB, Express, Node.js, GraphQL<br/><br/>
                    <strong>Client/Stakeholders</strong>: Dr. Jacqueline Isaacs & Dr. Mark Sivak<br/><br/>
                  </p>,
    additionalMedia: ['assets/ShortfallHome.png','assets/ShortfallWireframe.png','assets/ShortfallFlow.png', 'assets/ShortfallDev1.png', 'assets/ShortfallDev2.png', 'assets/ShortfallDev3.png']
  },
  burncam: {
    id: 'burncam',
    title: 'BurnCam Medical',
    subtitle: 'An augmented telemedicine platform for burn patients using React Native and AWS',
    imagePath: 'assets/BurncamFinal.png',
    description: <p><strong>Team Members</strong>: Nikhil Bhat, Ryan Gehrlein, Esteban D. Espinoza, Rochen Zhuang, Alex Nikanov, Cynthia Xie, Matt Tong<br/><br/>
                    <strong>Tech Stack</strong>: React, MongoDB, Express, Node.js, GraphQL<br/><br/>
                    <strong>Client/Stakeholders</strong>: Orion Wilmerding<br/><br/>
                </p>,
    additionalMedia: ['assets/BurncamFinal.png','assets/BurncamHiFi.png','assets/BurncamFlow.jpg', 'assets/BurncamFiles.png', 'assets/BurncamWireframe.png']
  },
  butter: {
    id: 'butter',
    title: 'Butter',
    subtitle: 'A social media application built around crowdsourcing of food & restaurant reviews',
    imagePath: 'assets/ButterLogo.png',
    description: <p><strong>Team Members</strong>: Cullen Lampasso, Jason Crouse, Esteban D. Espinoza, Unnas Hussain, Elena Silva, Cynthia Xie, Cathleen Zhang<br/><br/>
                    <strong>Tech Stack</strong>: React Native<br/><br/>
                    <strong>Client/Stakeholders</strong>: Olivia Laskowski<br/><br/>
                </p>,
    additionalMedia: ['assets/ButterLogo.png','assets/ButterApp.png','assets/ButterRecForm.png']
  },
  smartypill: {
    title: 'SmartyPill',
    subtitle: 'An automatic pill and water dispenser that ensures you\'re taking the right pills at the right time.',
    imagePath: 'assets/SmartyPillLogo.png',
    description: <p><strong>Team Members</strong>: Noah Appleby, Elena Silva, Esteban D. Espinoza, Haley Fogelson, Thomas Keith, Zachary Hillman<br/><br/>
                    <strong>Tech Stack</strong>: React, Flask, Python<br/><br/>
                    <strong>Client/Stakeholders</strong>: Matthew Swenson<br/><br/>
                  </p>,
    additionalMedia: ['assets/SmartyPillLogo.png','assets/SmartyPillHome.png','assets/SmartyPillPrescriptions.png','assets/SmartyPillModal.png','assets/SmartyPillTeam.webp']
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