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
    description: <p>Metaversal description</p>,
    additionalMedia: ['assets/projects-placeholder.jpg','assets/projects-placeholder.jpg','assets/projects-placeholder.jpg']
  },
  amadeus: {
    title: 'Amadeus',
    subtitle: 'Music composition software using a stylus and Optical Music Recognition (OMR)',
    imagePath: 'assets/projects-placeholder.jpg',
    description: <p>Amadeus description</p>,
    additionalMedia: ['assets/projects-placeholder.jpg','assets/projects-placeholder.jpg','assets/projects-placeholder.jpg']
  },
  messina: {
    title: 'Messina Digital',
    subtitle: 'Implementation of Bon Iver\'s real-time harmonizer using Max/MSP',
    imagePath: 'assets/projects-placeholder.jpg',
    description: <p>Messina Digital description</p>,
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