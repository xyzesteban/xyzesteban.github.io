import React, {useEffect} from 'react';
import ResponsiveWrapper from '../components/containers/ResponsiveWrapper';
import ContentExperience from '../components/ui/ContentExperience';
import LoremIpsum from '../data/LoremIpsum';

const Experience = () => {
  useEffect(() => {
    const contentScroller = document.querySelector('.content-scroller');
    const contentIntros = document.querySelectorAll('.content-intro');

    const handleScroll = () => {
      let lastIntro: HTMLElement | null = null;
    
      contentIntros.forEach((intro, index) => {
        const rect = intro.getBoundingClientRect();
        const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
        const isPartiallyInView = rect.top < window.innerHeight && rect.bottom >= 0;
    
        if (isInView || isPartiallyInView) {
          (intro as HTMLElement).style.transition = 'opacity 0.5s ease';
          (intro as HTMLElement).style.opacity = '1';
          lastIntro = intro as HTMLElement;
        } else {
          (intro as HTMLElement).style.transition = 'none';
          (intro as HTMLElement).style.opacity = '0';
        }
      });
    
      if (lastIntro) {
        (lastIntro as any).scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    (contentScroller as any).addEventListener('scroll', handleScroll);

    return () => {
      (contentScroller as any).removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ResponsiveWrapper>
        <h2 style={{color:'white'}}>Education</h2>
        <ContentExperience imagePath={"assets/education-placeholder.jpg"}>
          <p>Northeastern University - B.S. in Computer Science and Music Composition and Technology</p>
        </ContentExperience>
        <ContentExperience imagePath={"assets/education-placeholder.jpg"}>
          <p>Julieta & Frank Staggs Academy of International and STEM Studies - Laredo, TX</p>
        </ContentExperience>
        <ContentExperience imagePath={"assets/education-placeholder.jpg"}>
          <p>Saint Augustine High School - Laredo, TX</p>
        </ContentExperience>
        <h2 style={{color:'white'}}>Experience</h2>
        <ContentExperience imagePath={"assets/experience-placeholder.png"}>
          <p>IBM</p>
        </ContentExperience>
        <ContentExperience imagePath={"assets/experience-placeholder.png"}>
          <p>Harvard T.H. Chan School of Public Health</p>
        </ContentExperience>
        <ContentExperience imagePath={"assets/experience-placeholder.png"}>
          <p>Texas A&M International University</p>
        </ContentExperience>
        <h2 style={{color:'white'}}>Skills</h2>
        <ContentExperience imagePath={"assets/experience-placeholder.png"}>
          <p></p>
        </ContentExperience>
    </ResponsiveWrapper>
  )
}

export default Experience;