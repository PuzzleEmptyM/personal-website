import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const About = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" ref={ref} className={isVisible ? 'section-visible' : ''}>
      <div className="profile-container">
        <img src={`${process.env.PUBLIC_URL}/images/puzzle_profile.jpg`} alt="Profile" className="profile-picture" />
      </div>
      <h2>About Me</h2>
      <p>Hi! I'm Puzzle, a full-stack engineering student with a passion for creating dynamic and user-friendly web applications. I love solving complex problems and bringing ideas to life through code.</p>
      <p>In my spare time, I enjoy playing puzzle games, drawing, and exploring new technologies.</p>
      <div className="shape circle blue" style={{ top: '10%', left: '5%' }}></div>
      <div className="shape triangle pink" style={{ bottom: '15%', right: '5%' }}></div>
      <div className="shape circle purple" style={{ top: '40%', left: '70%' }}></div>
      <div className="shape triangle blue" style={{ bottom: '45%', right: '70%' }}></div>
      <div className="shape circle pink" style={{ top: '25%', left: '80%' }}></div>
      <div className="shape triangle purple" style={{ bottom: '25%', right: '80%' }}></div>
    </section>
  );
};

export default About;
