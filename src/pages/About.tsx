import React from 'react';
import ResponsiveWrapper from '../components/containers/ResponsiveWrapper';
import ContentIntro from '../components/ui/ContentIntro';
import ContentContact from '../components/ui/ContentContact';
import ContentGrid from '../components/ui/ContentGrid';

const About = () => {

  return (
    <ResponsiveWrapper>
      <h2 style={{ color: 'white' }}>About</h2>
      <ContentIntro>
        <p>Welcome! I’m <b>Esteban</b>, an IT professional with experience in systems and network administration, infrastructure engineering, technical support, 
          and business consulting. I am passionate and motivated to <strong>identify problems and pain points</strong> in enterprise processes and 
          <strong>resolving them with robust and easily maintainable solutions</strong>, to create a better experience <strong>for my customers and my peers</strong><br /><br />

          I currently work as an <strong>IT Sales Consultant II</strong> for Comcast, where I help the company deliver holistic communication, entertainment, 
          and networking solutions for Comcast business and residential customers. In this position, I function as a <strong>technical leader</strong>, 
          serving as the main point of contact for technical demonstrations and advanced troubleshooting for consumer and enterprise use cases, coordinating
          and guiding field work and installations, and analyzing data to guide improvements in operational efficiency at regional sales locations.

          <br /><br />During my free time, I enjoy writing, recording, and publishing music. First specializing in Spanish classical guitar, I now have a focus 
          on alternative/indie rock, produced with Ableton Live in my home studio. I am <strong>recording an album</strong> with a target release date of Q1 2027.
          <br /><br /><strong>Originally from Nuevo Laredo, Mexico</strong>, I started my career in its sister city of Laredo, TX where I took the initiative to 
          teach myself the fundamentals of programming and write and perform music before college. After completing my university studies, I am <strong>now based 
          in Boston, MA</strong>, where I am looking to make new connections in the technology & music industries.<br /><br />See my resume <a href={'assets/EstebanEspinoza_Resume.pdf'} target="_blank" rel="noopener noreferrer">here</a>.
        </p>
        {/* <h3>Recent Updates</h3>
          <p>To be added...</p> */}
      </ContentIntro>
      <h2 style={{ color: 'white' }}>Contact</h2>
      <ContentIntro>
          <ContentContact title="E-mail" link="mailto:espinoza.e@northeastern.edu" icon="assets/contact-email.png" />
          <ContentContact title="LinkedIn" link="https://www.linkedin.com/in/xyzesteban/" icon="assets/contact-linkedin.png" />
          <ContentContact title="GitHub" link="https://www.github.com/xyzesteban/" icon="assets/contact-github.png" />
          <ContentContact title="Twitter" link="https://x.com/xyzesteban" icon="assets/contact-twitter.png" />
      </ContentIntro>
    </ResponsiveWrapper>
  );
}

export default About;
