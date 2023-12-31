import React, {useEffect} from 'react';
import ResponsiveWrapper from '../components/containers/ResponsiveWrapper';
import ContentExperience from '../components/ui/ContentExperience';

const Experience = () => {

  return (
    <ResponsiveWrapper>
        <h2 style={{color:'white'}}>Saint Dvorak</h2>
        <ContentExperience imagePath={""}>
        <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/track/0EPpBgDc1cR22wl2E7Rdsi?utm_source=generator" width="100%" height="160" frameBorder="0" allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/track/3UAS1pgFmumgSAtaxYjNcJ?utm_source=generator&theme=0" width="100%" height="160" frameBorder="0" allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <iframe
        width="100%"
        height="150"
        style={{borderRadius:"12px"}}
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1634225244&color=%230d4ad2&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <iframe
        width="100%"
        height="150"
        style={{borderRadius:"12px"}}
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1692846096&color=%23aca488&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      </ContentExperience>
        <h2 style={{color:'white'}}>AGES</h2>
        <ContentExperience imagePath={""}>
        <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/album/21byAK0kfxEB5C7Mcr4rHG?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>        
        </ContentExperience>
        <h2 style={{color:'white'}}>RNGLDR Records Ltd</h2>
        <ContentExperience imagePath={""}>
          <p>Under construction...</p>
        </ContentExperience>
    </ResponsiveWrapper>
  )
}

export default Experience;