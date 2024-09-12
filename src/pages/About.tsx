import React from 'react';
import ResponsiveWrapper from '../components/containers/ResponsiveWrapper';
import ContentIntro from '../components/ui/ContentIntro';

const About = () => {

  return (
    <ResponsiveWrapper>
      <h2 style={{ color: 'white' }}>About</h2>
      <ContentIntro>
        <p>Welcome! I’m <b>Esteban</b>, a software engineer with experience in full-stack web development, UI/UX research & design, and project management. I am interested in <strong>identifying problems</strong> in high-level processes and <strong>resolving them with reliable and maintainable code</strong>, to create a better experience <strong>for both users and developers.</strong><br /><br />
          I currently work as a <strong>Full-Stack Software Developer</strong> for IBM, where I have delved in DevOps, API development, test automation, design thinking, and Agile software development. In this position, I functioned as a <strong>technical leader</strong>, leading scrum meetings and retrospectives, bringing attention to pain points in our development
          process and addressing them, and enabling other team members in technical areas as needed.<br /><br />During my free time, I enjoy writing, recording, and publishing music. First specializing in Spanish classical guitar, I now have a focus on alternative and electronic rock, produced with Ableton Live in my home studio.
          I am currently <strong>in the process of recording an album</strong> with a target release date of Q1 2025.<br /><br /><strong>Originally from Nuevo Laredo, Mexico</strong>, I started my career in its sister city of Laredo, TX where I took the initiative to teach myself the fundamentals of programming and write and perform music before college. After completing my
          university studies, I am <strong>now based in Boston, MA</strong>, where I am looking to make new connections in both the technology & music industries.<br /><br />See my resume <a href={'assets/EstebanEspinoza_Resume.pdf'} target="_blank" rel="noopener noreferrer">here</a>.</p>
        {/* <h3>Recent Updates</h3>
          <p>To be added...</p> */}
      </ContentIntro>
      <h2 style={{ color: 'white' }}>Contact</h2>
      <ContentIntro>
        <p>
          <a href="mailto:espinoza.e@northeastern.edu"><img alt="" src="https://img.shields.io/twitter/url?label=E-mail&logo=Proton%20Mail&style=social&url=https%3A%2F%2Foutlook.live.com%2Fmail%2F0%2Finbox" /></a>
          <a href="https://www.github.com/xyzesteban/"><img alt="" src="https://img.shields.io/twitter/url?label=GitHub&logo=GitHub&style=social&url=https%3A%2F%2Fwww.github.com%2Fxyzesteban%2F" /></a>
          <a href="https://www.linkedin.com/in/xyzesteban/"><img alt="" src="https://img.shields.io/twitter/url?label=LinkedIn&logo=LinkedIn&style=social&url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fxyzesteban%2F" /></a>
          <a href="https://www.facebook.com/xyzesteban"><img alt="" src="https://img.shields.io/twitter/url?color=1877F2&label=Facebook&logo=facebook&style=social&url=https%3A%2F%2Fwww.facebook.com%2Fxyzesteban" /></a>
          <a href="https://twitter.com/xyzesteban"><img alt="" src="https://img.shields.io/twitter/url?label=Twitter&logo=X&style=social&url=https%3A%2F%2Ftwitter.com%2Fxyzesteban" /></a>
        </p>
      </ContentIntro>
    </ResponsiveWrapper>
  );
}

export default About;
