import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Skills = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="skills" ref={ref} className={isVisible ? 'section-visible' : ''}>
      <h2>Skills</h2>
      <ul>
        <li>JavaScript (ES6+)</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>HTML & CSS</li>
        <li>Git & GitHub</li>
        <li>Responsive Web Design</li>
        <li>Problem Solving</li>
        <li>Team Collaboration</li>
      </ul>
    </section>
  );
};

export default Skills;
