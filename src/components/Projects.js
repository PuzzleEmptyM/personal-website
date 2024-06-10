import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Projects = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="projects" ref={ref} className={isVisible ? 'section-visible' : ''}>
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project">
          <img src={`${process.env.PUBLIC_URL}/images/project1.jpg`} alt="Project One" />
          <h3>Project One</h3>
          <p>Description of project one. This project involves creating a web application that helps users manage their tasks efficiently.</p>
        </div>
        <div className="project">
          <img src={`${process.env.PUBLIC_URL}/images/project2.jpg`} alt="Project Two" />
          <h3>Project Two</h3>
          <p>Description of project two. This project is a mobile app that tracks daily habits and provides insights to help improve productivity.</p>
        </div>
        <div className="project">
          <img src={`${process.env.PUBLIC_URL}/images/project3.jpg`} alt="Project Three" />
          <h3>Project Three</h3>
          <p>Description of project three. This project is a game developed using Unity, featuring challenging puzzles and a captivating storyline.</p>
        </div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );
};

export default Projects;
