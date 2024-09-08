
import React, { useEffect } from "react";
import './About.css';

function About() {
  useEffect(() => {
    const handleScroll = () => {
      const aboutElement = document.querySelector('.aboutname');
      const aboutSection = document.querySelector('.AboutPageMainBody');
      const projectSection = document.querySelector('.ProjectPage');

      const aboutInView = window.scrollY + window.innerHeight >= aboutSection.offsetTop;
      const projectMiddleInView = projectSection
      ? window.scrollY + window.innerHeight >= projectSection.offsetTop + projectSection.offsetHeight / 2
      : false;

    if (aboutInView && !projectMiddleInView) {
      aboutElement.classList.add('slide-down');
    } else {
      aboutElement.classList.remove('slide-down');
    }
  };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="AboutPageMainBody">
        <div className="aboutcontent Homeinfo">
          I am a final-year Computer Science undergraduate at IIIT Nagpur. My academic and project experiences have provided me with a strong foundation in computer science and hands-on expertise in the latest technologies. I am passionate about solving real-world problems and creating innovative solutions.
        </div>
        <div className="aboutname">ABOUT</div>
      </div>
    </>
  );
}

export default About;
