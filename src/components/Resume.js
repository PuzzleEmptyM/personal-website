import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Resume = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="resume" ref={ref} className={isVisible ? 'section-visible' : ''}>
      <h2>Resume</h2>
      <p>Download my <a href="path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer">resume</a>.</p>
      <h3>Education</h3>
      <p><strong>Full-Stack Engineering Student</strong></p>
      <p>XYZ University, 2022 - Present</p>
      <h3>Experience</h3>
      <p><strong>Software Engineering Intern</strong></p>
      <p>ABC Company, Summer 2023</p>
      <p>Worked on developing and maintaining web applications, collaborating with senior developers, and participating in code reviews.</p>
      <h3>Certifications</h3>
      <p>Certified JavaScript Developer</p>
    </section>
  );
};

export default Resume;
