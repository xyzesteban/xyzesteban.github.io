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
        <p>Welcome! I’m <b>Esteban</b>, an IT professional with experience in advanced technical support, system design, product development, infrastructure engineering,
          and business consulting. I am passionate and motivated to <strong>identify problems and pain points</strong> in enterprise processes and
          <strong> resolving them with robust and easily maintainable solutions</strong>, to create a better experience <strong>for my customers and my peers.</strong><br /><br />

          I currently work as a <strong>Score Advisor</strong> for DeleteMe, where I help protect the information of B2B customers from misuse of their data in 
          cyberattacks, identity theft, and threats to personal security and property. In this role, I protect personally identifying information (PII) by investigating 
          data brokers and non-compliant sites, documenting site changes and activity, identifying the most successful removal methods, 
          building site opt out and internal process automation, and completing custom requests for VIP customers.

          <br /><br />During my free time, I enjoy writing, recording, and publishing music. First specializing in Spanish classical guitar, I now have a focus 
          on alternative/indie rock, produced with Ableton Live in my home studio. I am <strong>recording an album</strong> with a target release date of Q1 2027.
          <br /><br /><strong>Originally from Nuevo Laredo, Mexico</strong>, I started my career in its sister city of Laredo, TX where I took the initiative to 
          teach myself the fundamentals of programming and write and perform music before college. After completing my university studies, I am looking to make 
          new connections in the technology & music industries.<br /><br />See my resume <a href={'assets/EstebanEspinoza_Resume.pdf'} target="_blank" rel="noopener noreferrer">here</a>.
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
