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
        <p>Welcome! I’m <b>Esteban</b>, an engineer with experience in web development, UI/UX research & design, and IT consulting. I am interested in <strong>identifying problems</strong> in enterprise processes and <strong>resolving them with robust and easily maintainable solutions</strong>, to create a better experience <strong>for both my customers and my colleagues.</strong><br /><br />
          I currently work as a <strong>Technical Sales Consultant II</strong> for Xfinity, where I deliver holistic communication, entertainment, and networking solutions for Comcast Business and Xfinity residential customers. In this position, I function as a <strong>technical mentor</strong>, exploring customer needs and building the right solutions, sharing product knowledge 
          and educating customers on company offerings, coordinating and guiding field work and installations, and addressing concerns via elite technical support and customer service.
          <br /><br />During my free time, I enjoy writing, recording, and publishing music. First specializing in Spanish classical guitar, I now have a focus on alternative and electronic rock, produced with Ableton Live in my home studio.
          I am <strong>recording an album</strong> with a target release date of Q1 2026.<br /><br /><strong>Originally from Nuevo Laredo, Mexico</strong>, I started my career in its sister city of Laredo, TX where I took the initiative to teach myself the fundamentals of programming and write and perform music before college. After completing my
          university studies, I am <strong>now based in Boston, MA</strong>, where I am looking to make new connections in the technology & music industries.<br /><br />See my resume <a href={'assets/EstebanEspinoza_Resume[Full].pdf'} target="_blank" rel="noopener noreferrer">here</a>.</p>
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
