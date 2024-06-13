import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Skills = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="skills" ref={ref} className={isVisible ? 'section-visible' : ''}>
      <h2>Skills</h2>
      <br></br>
      <ul>
        <li>JavaScript (ES6+)</li>
        <li>HTML & CSS</li>
        <li>Bootstrap (Responsive Web Design)</li>
        <li>Git & GitHub</li>
        <li>Python</li>
        <li>SQL</li>
        <li>MySQL</li>
        <li>NoSQL</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>React</li>
      </ul>
    </section>
  );
};

export default Skills;
