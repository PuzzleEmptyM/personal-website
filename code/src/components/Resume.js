import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Resume = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="resume" ref={ref} className={isVisible ? 'section-visible' : ''}>
      <h2>Resume</h2>
      <p>Download my <a href="https://drive.google.com/file/d/11CjgmN-5o5gut8IpRKcg2tYUg66jGWuo/view?usp=drive_link" target="_blank" rel="noopener noreferrer">resume</a>.</p>
      <br></br>
      <br></br>

      <p><strong>IT and Data Assistant</strong></p>
      <p>Moserhaus Consulting, December 2024 - Present</p>
      <br></br>
      <p>
      ● Develop and implement VBA and Power Query solutions to automate Security Assessment processes in Excel <br></br>
      ● Enhance efficiency in data validation and reporting, ensuring accuracy and compliance with industry standards <br></br>
      ● Collaborate and communicate with the team lead to optimize secure, scalable data management practices <br></br>
      </p>
      <br></br>
      <br></br>
      <br></br>

      <p><strong>Coder - AI Training</strong></p>
      <p>Scale AI, Jan 2024 - Present</p>
      <br></br>
      <p>
      ● Leverage expertise in HTML5, JavaScript, and additional programming languages <br></br>
      ● Evaluate and enhance the quality of AI-generated code <br></br>
      ● Develop, test, and optimize code for maximum efficiency <br></br>
        </p>
      <br></br>
      <br></br>
      <br></br>

      <p><strong>Marketing Manager</strong></p>
      <p>Samuel Claus, Jan 2021 - Present</p>
      <br></br>
      <p>
      ● Manage the operations, marketing strategies, and personal website for local art business <br></br>
      ● Engage with potential customers, organize participation in art events <br></br>
      ● Refine online presence for maximum impact, manage Google Business listing <br></br>
      </p>
      <br></br>
    </section>
  );
};

export default Resume;
