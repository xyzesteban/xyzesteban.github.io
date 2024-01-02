import * as React from 'react';
import ResponsiveWrapper from '../components/containers/ResponsiveWrapper';
import LoremIpsum from '../data/LoremIpsum';
import ContentGrid from '../components/ui/ContentGrid';
import ContentCard from '../components/ui/ContentCard';

const Projects = () => {

  // TODO: Work on in progress/dead projects that are commented out:
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
        <ContentCard imagePath='assets/projects-placeholder.jpg' title='Metaversal'>VR-powered Business Intelligence for Meta Quest</ContentCard>
        <ContentCard imagePath='assets/projects-placeholder.jpg' title='Amadeus'>Music composition software using a stylus and Optical Music Recognition (OMR)</ContentCard>
        <ContentCard imagePath='assets/projects-placeholder.jpg' title='Max/MSP Messina'>Implementation of Bon Iver's real-time harmonizer using Max/MSP</ContentCard>
        <ContentCard imagePath='assets/projects-placeholder.jpg' title='ArtistLaunch'>Corbal Distribution's in-house platform to connect artists with music curators</ContentCard>
        <ContentCard imagePath='assets/projects-placeholder.jpg' title='Shortfall'>An interactive and educational manufacturing supply chain simulation for Mech Eng. students</ContentCard>
        <ContentCard imagePath='assets/projects-placeholder.jpg' title='Burncam Medical'>Telemedicine app prototype for burn patients using React Native and AWS</ContentCard>
        <ContentCard imagePath='assets/projects-placeholder.jpg' title='GradPath'>All-in-one, cross-platform Learning Management and Student Information System (LMS+SIS)</ContentCard>
        <ContentCard imagePath='assets/projects-placeholder.jpg' title='Butter'>A social media application built around crowdsourcing of food & restaurant reviews</ContentCard>
        {/* <ContentCard imagePath='assets/projects-placeholder.jpg'>Filemeister</ContentCard> */}
        <ContentCard imagePath='assets/projects-placeholder.jpg' title='SmartyPill'>React front-end for an automatic pill and water dispenser</ContentCard>
        {/* <ContentCard imagePath='assets/projects-placeholder.jpg'>Asteroids</ContentCard> */}
      </ContentGrid>
    </ResponsiveWrapper>
  )
}

export default Projects;