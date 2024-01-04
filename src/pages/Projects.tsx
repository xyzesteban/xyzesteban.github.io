import * as React from 'react';
import ResponsiveWrapper from '../components/containers/ResponsiveWrapper';
import ContentGrid from '../components/ui/ContentGrid';
import ContentCard from '../components/ui/ContentCard';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

// TODO - This file needs A LOT of work, including but not limited to:
// 1. Move out the projectModalData to the data or pages folder if possible
// 2. Remove repetitive definitions of ContentCards, use iteration instead
// 3. Leverage projectModalData variable which has the same data to remove repetition
// 4. Work on in progress/dead projects that are commented out ASAP

const projectModalData = {
  metaversal: {
    title: 'Metaversal',
    subtitle: 'VR-powered Business Intelligence for Meta Quest',
    imagePath: 'assets/projects-placeholder.jpg',
    description: <p><strong>Team Members</strong>: Esteban Espinoza, Casey Honaker, Christopher Jackson, Dhiraj Kamath, Evan Reilly, Sean Neary, Vanessa Reese<br/><br/>
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
                    React, Node) stack for the application. The application backend was built with Node + Express, with additional support for IBM Cloud Object Storage (COS) 
                    for storing and retrieving CSV files. The presenter may upload files to COS using a React web client, and users may interact in real-time with the 
                    VR application via the virtual reality headset of their choice, or a WebGL client in a standard web browser.
                    
                  </p>,
    additionalMedia: ['assets/projects-placeholder.jpg','assets/projects-placeholder.jpg','assets/projects-placeholder.jpg']
  },
  amadeus: {
    title: 'Amadeus',
    subtitle: 'Music composition software using a stylus and Optical Music Recognition (OMR)',
    imagePath: 'assets/projects-placeholder.jpg',
    description: <p>Amadeus is an iPad and tablet application for digital music composition, with stylus support and automatic recognition of musical notes via Optical
                    Music Recognition (OMR).<br/>The original prototype was first showcased at Northeastern's 2022 Music Technology Capstone and is being further 
                    developed independently to soon provide a digital music composition experience akin to its analog counterpart.<br/><br/>

                    User research was conducted via surveys of existing software including Sibelius, Finale, and MuseScore were conducted to better understand the 
                    current issues of digital music composition:<br/>
                    <li>
                      <ul>- Too many steps for inserting notes, such as selecting target location for notes, and browsing through menus for symbols</ul>
                      <ul>- Mapping - little similarity with the traditional process for handwritten music composition</ul>
                      <ul>- Maximum productivity requires learning complicated keyboard shortcuts</ul>
                      <ul>- Steep learning curve, low retention</ul>
                    </li><br/>

                    When devicing a solution, I explored the latest research in OMR, finding that most research in the area is focused on a top-down approach to 
                    transcribe existing handwritten compositions.<br/>
                    The first prototype of Amadeus implements a bottom-up approach to OMR, enabling input from a composer via a stylus, identifying it using 
                    an Amazon Rekognition or Tensorflow neural network, and displaying a digital note that can be re-positioned as needed.<br/>
                    Additionally, Amadeus will serve as a data collection pipeline for additional OMR training data in the future.
                  </p>,
    additionalMedia: ['assets/projects-placeholder.jpg','assets/projects-placeholder.jpg','assets/projects-placeholder.jpg']
  },
  messina: {
    title: 'Messina Digital',
    subtitle: 'Implementation of Bon Iver\'s real-time harmonizer using Max/MSP',
    imagePath: 'assets/projects-placeholder.jpg',
    description: <p><strong>Team Members</strong>: Esteban Espinoza, Emma Price<br/><br/>
                    The Messina Digital is a MIDI and vocal instrument that attempts to emulate harmonizers used by the likes of Bon Iver and Jacob Collier.<br/>
                    With the Messina Digital, a performer may sing into a microphone and use a MIDI instrument to create harmonies in real-time.<br/><br/>

                    After doing research on similar instruments that manipulate samples and real-time audio such as Bon Iver's Messina and the Eventide H6000, 
                    the Fairlight CMI, and Antares' Auto-Tune and Harmony Engine, we successfully implemented a 4-part harmonizer using Max/MSP.<br/>
                    In an attempt to follow Chris Messina's analog approach with the Eventide H6000, we provide the option to auto-tune the original vocal
                    to create a "dry" signal, and also allow MIDI input of notes in a range of two octaves to create up to four different harmonies.
                </p>,
    additionalMedia: ['assets/projects-placeholder.jpg','assets/projects-placeholder.jpg','assets/projects-placeholder.jpg']
  },
  corbal: {
    title: 'ArtistLaunch',
    subtitle: 'Corbal Distribution\'s in-house platform to connect artists with music curators',
    imagePath: 'assets/projects-placeholder.jpg',
    description: <p>ArtistLaunch description</p>,
    additionalMedia: ['assets/projects-placeholder.jpg','assets/projects-placeholder.jpg','assets/projects-placeholder.jpg']
  },
  shortfall: {
    title: 'Shortfall',
    subtitle: 'An interactive and educational manufacturing supply chain simulation for Mech Eng. students',
    imagePath: 'assets/projects-placeholder.jpg',
    description: <p>Shortfall description</p>,
    additionalMedia: ['assets/projects-placeholder.jpg','assets/projects-placeholder.jpg','assets/projects-placeholder.jpg']
  },
  burncam: {
    title: 'Burncam Medical',
    subtitle: 'Telemedicine app prototype for burn patients using React Native and AWS',
    imagePath: 'assets/projects-placeholder.jpg',
    description: <p>Burncam Medical description</p>,
    additionalMedia: ['assets/projects-placeholder.jpg','assets/projects-placeholder.jpg','assets/projects-placeholder.jpg']
  },
  gradpath: {
    title: 'GradPath',
    subtitle: 'All-in-one, cross-platform Learning Management and Student Information System (LMS+SIS)',
    imagePath: 'assets/projects-placeholder.jpg',
    description: <p>GradPath description</p>,
    additionalMedia: ['assets/projects-placeholder.jpg','assets/projects-placeholder.jpg','assets/projects-placeholder.jpg']
  },
  butter: {
    title: 'Butter',
    subtitle: 'A social media application built around crowdsourcing of food & restaurant reviews',
    imagePath: 'assets/projects-placeholder.jpg',
    description: <p>Butter description</p>,
    additionalMedia: ['assets/projects-placeholder.jpg','assets/projects-placeholder.jpg','assets/projects-placeholder.jpg']
  },
  smartypill: {
    title: 'SmartyPill',
    subtitle: 'React front-end for an automatic pill and water dispenser',
    imagePath: 'assets/projects-placeholder.jpg',
    description: <p>SmartyPill description</p>,
    additionalMedia: ['assets/projects-placeholder.jpg','assets/projects-placeholder.jpg']
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
        {/* <ContentCard imagePath='assets/projects-placeholder.jpg'>Tilted Tactics</ContentCard> */}
        {/* <ContentCard imagePath='assets/projects-placeholder.jpg'>Bibliophile Blaze Busters</ContentCard> */}
        {/* <ContentCard imagePath='assets/projects-placeholder.jpg'>Snaptag</ContentCard> */}
        {/* <ContentCard imagePath='assets/projects-placeholder.jpg'>Tetris 3D</ContentCard> */}
        {/* <ContentCard imagePath='assets/projects-placeholder.jpg'>Minesweeper</ContentCard> */}
        {/* <ContentCard imagePath='assets/projects-placeholder.jpg'>2048</ContentCard> */}
        <ContentCard onClick={() => handleOpen('metaversal')} imagePath='assets/projects-placeholder.jpg' imageAlt="" title='Metaversal'>VR-powered Business Intelligence for Meta Quest</ContentCard>
        <ContentCard onClick={() => handleOpen('amadeus')} imagePath='assets/projects-placeholder.jpg' imageAlt="" title='Amadeus'>Music composition software using a stylus and Optical Music Recognition (OMR)</ContentCard>
        <ContentCard onClick={() => handleOpen('messina')} imagePath='assets/projects-placeholder.jpg' imageAlt="" title='Messina Digital'>Implementation of Bon Iver's real-time harmonizer using Max/MSP</ContentCard>
        <ContentCard onClick={() => handleOpen('corbal')} imagePath='assets/projects-placeholder.jpg' imageAlt="" title='ArtistLaunch'>Corbal Distribution's in-house platform to connect artists with music curators</ContentCard>
        <ContentCard onClick={() => handleOpen('shortfall')} imagePath='assets/projects-placeholder.jpg' imageAlt="" title='Shortfall'>An interactive and educational manufacturing supply chain simulation for Mech Eng. students</ContentCard>
        <ContentCard onClick={() => handleOpen('burncam')} imagePath='assets/projects-placeholder.jpg' imageAlt="" title='Burncam Medical'>Telemedicine app prototype for burn patients using React Native and AWS</ContentCard>
        <ContentCard onClick={() => handleOpen('gradpath')} imagePath='assets/projects-placeholder.jpg' imageAlt="" title='GradPath'>All-in-one, cross-platform Learning Management and Student Information System (LMS+SIS)</ContentCard>
        <ContentCard onClick={() => handleOpen('butter')} imagePath='assets/projects-placeholder.jpg' imageAlt="" title='Butter'>A social media application built around crowdsourcing of food & restaurant reviews</ContentCard>
        {/* <ContentCard imagePath='assets/projects-placeholder.jpg'>Filemeister</ContentCard> */}
        <ContentCard onClick={() => handleOpen('smartypill')} imagePath='assets/projects-placeholder.jpg' imageAlt="" title='SmartyPill'>React front-end for an automatic pill and water dispenser</ContentCard>
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
                <img src={imagePath} className="project-media" alt={`Additional Media ${index + 1}`} style={{ width: '100%' }} />
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