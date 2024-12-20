import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Resume = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="resume" ref={ref} className={isVisible ? 'section-visible' : ''}>
      <h2>Resume</h2>
      <p>Download my <a href="https://drive.google.com/file/d/1qaZLtY4LiR_A5jDQELbc1tLI7NDDdNXk/view?usp=drive_link" target="_blank" rel="noopener noreferrer">resume</a>.</p>
      <br></br>
      <br></br>

      <p><strong>Marketing Manager</strong></p>
      <p>Samuel Claus, Jan 2021 - Present</p>
      <br></br>
      <p>Manager, Marketer and Designer of samuelclaus.com. Job consists in: <br></br>
        - Contacting potential customers <br></br>
        - Reaching out to local art events <br></br>
        - Constantly updating the website <br></br>
        - Upkeep for Yelp and Google business pages <br></br>
        - Accompanying Samuel at every art event to help manage sales <br></br>
        - Strategizing for constant improvement of our services</p>
      <br></br>
      <p><strong>Coder - AI Training</strong></p>
      <p>Scale AI, Jan 2024 - Present</p>
      <br></br>
      <p>
        - Evaluating the quality of AI-generated code<br></br>
        - Writing functional and efficient code<br></br>
        - Optimizing code to run at maximum efficiency<br></br>
        - Writing robust test cases to confirm code works efficiently<br></br>
        - Writing human-readable summaries of coding problems<br></br>
        - Writing explanations of how code can solve problems</p>
    </section>
  );
};

export default Resume;
