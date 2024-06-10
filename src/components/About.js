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
    </section>
  );
};

export default About;
