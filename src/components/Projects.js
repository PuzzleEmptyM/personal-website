import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Projects = () => {
  const [ref] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="projects" ref={ref}>
      <h2>Projects</h2>
      <br></br>
      <div className="projects-grid">
        <div className="project">
          <img src={`${process.env.PUBLIC_URL}/images/samuelclaus.png`} alt="Project One" />
          <h3>SamuelClaus.com</h3>
          <p>Website for Samuel Claus greeting cards and live caricatures. Customers can browse his portfolio and contact him through a secure contact method.</p>
        </div>
        <div className="project">
          <img src={`${process.env.PUBLIC_URL}/images/plantclicker.png`} alt="Project Two" />
          <h3>Plant Clicker</h3>
          <p>Plant Clicker is an engaging clicker game where players cultivate a virtual garden. The game blends simple click mechanics with complex strategy elements, allowing players to experience the joys of gardening and plant evolution.</p>
        </div>
        <div className="project">
          <img src={`${process.env.PUBLIC_URL}/images/presentpopper.png`} alt="Project Three" />
          <h3>Present Popper</h3>
          <p>This was our final one-week project for Trimester 2 at Atlas School. The goal of Present Popper was to create an immersive gaming experience, focusing on fun gameplay mechanics, interactive elements, and a compelling story premise.</p>
        </div>
        <div className="project">
          <img src={`${process.env.PUBLIC_URL}/images/smiling.png`} alt="Project Three" />
          <h3>Atlas Smiling School</h3>
          <p>These group of web pages were coded with the help of the Boostrap Framework and based on some design models given on Figma.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
