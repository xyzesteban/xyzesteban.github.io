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
        <ContentCard imagePath='assets/projects-placeholder.jpg'>Metaversal</ContentCard>
        <ContentCard imagePath='assets/projects-placeholder.jpg'>Amadeus</ContentCard>
        <ContentCard imagePath='assets/projects-placeholder.jpg'>Corbal ArtistLaunch</ContentCard>
        <ContentCard imagePath='assets/projects-placeholder.jpg'>Max/MSP Messina</ContentCard>
        <ContentCard imagePath='assets/projects-placeholder.jpg'>Burncam</ContentCard>
        <ContentCard imagePath='assets/projects-placeholder.jpg'>Gradpath</ContentCard>
        <ContentCard imagePath='assets/projects-placeholder.jpg'>Butter</ContentCard>
        {/* <ContentCard imagePath='assets/projects-placeholder.jpg'>Filemeister</ContentCard> */}
        <ContentCard imagePath='assets/projects-placeholder.jpg'>SmartyPill</ContentCard>
        {/* <ContentCard imagePath='assets/projects-placeholder.jpg'>Asteroids</ContentCard> */}
      </ContentGrid>
    </ResponsiveWrapper>
  )
}

export default Projects;