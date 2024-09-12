import React from 'react';
import ResponsiveWrapper from '../components/containers/ResponsiveWrapper';
import ContentMedia from '../components/ui/ContentMedia';

const Experience = () => {

  return (
    <ResponsiveWrapper>
      <h2 style={{ color: 'white' }}>Music</h2>
      <ContentMedia
        imagePath={"assets/SoloBanner.jpg"}
        imageAlt="Saint Dvorak banner picture - holding a guitar"
        title="Saint Dvorak"
        mediaText={
          <p><strong>Saint Dvorak</strong> is a solo music project by Esteban D. Espinoza. Originally performing original songs and covers with only an
            acoustic guitar, a backing track, and live vocals, the project now has a focus on recording and production of <strong>alternative </strong>
            and <strong>electronic rock</strong>, and makes heavy use of both virtual and live instruments to craft its sound.<br /><br />

            Among the project's sonic influences are Tame Impala, LCD Soundsystem, Empire of the Sun, The 1975, and Joywave, and its 
            lyrical styles and themes take inspiration from pop culture and modern technology. <strong>Saint Dvorak's debut album, Daydreamer, 
            is currently being recorded</strong> and will be released in Q1 2025.
          </p>
        }
      >
        <iframe 
          title="Technicolor Paradise Preview from Spotify"
          style={{ borderRadius: "12px" }} 
          src="https://open.spotify.com/embed/track/0EPpBgDc1cR22wl2E7Rdsi?utm_source=generator"
          width="100%" 
          height="160" 
          frameBorder="0" 
          allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy" 
        />
        <iframe 
          title="Nomad Preview from Spotify"
          style={{ borderRadius: "12px" }} 
          src="https://open.spotify.com/embed/track/3UAS1pgFmumgSAtaxYjNcJ?utm_source=generator&theme=0" 
          width="100%" 
          height="160" 
          frameBorder="0" 
          allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
        />
        <iframe
          title="Synth Party People Full Demo from Soundcloud"
          width="100%"
          height="150"
          style={{ borderRadius: "15px", border: "0px", paddingBottom: "12px" }}
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1634225244&color=%230d4ad2&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        />
        <iframe
          title="Fantastic Full Demo from Soundcloud"
          width="100%"
          height="150"
          style={{ borderRadius: "15px", border: "0px", paddingBottom: "12px" }}
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1692846096&color=%23aca488&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        />
      </ContentMedia>
      <ContentMedia
        imagePath={"assets/AgesBanner.jpg"}
        imageAlt="Studio set up for the band AGES at The Record Co"
        title="AGES"
        mediaText={
          <p><strong>AGES</strong> is an alternative rock band formed at Northeastern University by Amani Cavender, Chuck Stein, Esteban Espinoza, and Reece Graham.<br /><br />

            The group's sound bears influences ranging from Deafheaven to Burial, infusing various subgenres of rock music with electronic and orchestral
            elements, along with a wall-of-sound production style inspired by <strong>shoegaze</strong> and <strong>post-rock</strong>.<br /><br />

            Our flagship EP release, Bury the Tone, was recorded at The Record Co in Boston, MA. All four songs of the EP were showcased for the first time at
            <strong> Northeastern's 2022 Music Technology Capstone</strong>, and the EP was released for streaming the following year.
          </p>
        }
      >
        <iframe
          title="Bury the Tone Preview from Spotify"
          style={{ borderRadius: "12px" }} 
          src="https://open.spotify.com/embed/album/21byAK0kfxEB5C7Mcr4rHG?utm_source=generator&theme=0" 
          width="100%" 
          height="152" 
          frameBorder="0" 
          allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
        />
      </ContentMedia>
      {/* TODO: <h2 style={{color:'white'}}>RNGLDR Records Ltd</h2>
        <ContentMedia imagePath={""}>
          <p>Under construction...</p>
        </ContentMedia> */}
    </ResponsiveWrapper>
  )
}

export default Experience;