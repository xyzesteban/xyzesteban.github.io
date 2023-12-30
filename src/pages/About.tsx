import React, { useEffect } from 'react';
import ResponsiveWrapper from '../components/containers/ResponsiveWrapper';
import LoremIpsum from '../data/LoremIpsum';
import ContentIntro from '../components/ui/ContentIntro';

const About = () => {
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
        <h2>About</h2>
        <ContentIntro>
          <p><LoremIpsum/></p>
        </ContentIntro>
        <h2>Brief Education Summary</h2>
        <ContentIntro>
          <p>To be added...</p>
        </ContentIntro>
        <h2>Brief Music Summary</h2>
        <ContentIntro>
          <p>To be added...</p>
        </ContentIntro>
        <h2>Contact</h2>
        <ContentIntro>
          <p>To be added...</p>
        </ContentIntro>
    </ResponsiveWrapper>
  );
}

export default About;
