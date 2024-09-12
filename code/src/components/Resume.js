import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Resume = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="resume" ref={ref} className={isVisible ? 'section-visible' : ''}>
      <h2>Resume</h2>
      <p>Download my <a href="https://drive.google.com/file/d/1vZATnAUZw0pJxdJZ3e1aSkgqTfHdHIRN/view?usp=sharing" target="_blank" rel="noopener noreferrer">resume</a>.</p>
      <br></br>
      <br></br>

      <p><strong>Marketing Manager</strong></p>
      <p>Samuel Claus, Jan 2021 - Present</p>
      <br></br>
      <p>Manager, Marketer and Designer of samuelclaus.com. Job consists in contacting potential customers, reaching out to local art events, constantly updating the website, accompanying Samuel at every art event to help manage sales, and strategizing for constant improvement of our services.</p>
      <br></br>
      <p><strong>Coder - AI Training</strong></p>
      <p>Scale AI, Jan 2024 - Present</p>
      <br></br>
      <p>
        - Evaluating the quality of AI-generated code.<br></br>
        - Writing functional and efficient code.<br></br>
        - Optimizing code to run at maximum efficiency.<br></br>
        - Writing robust test cases to confirm code works efficiently.<br></br>
        - Writing human-readable summaries of coding problems.<br></br>
        - Writing explanations of how code can solve problems.</p>
    </section>
  );
};

export default Resume;
