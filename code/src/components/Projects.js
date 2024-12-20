import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Projects = () => {
  const [ref] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="projects" ref={ref}>
      <h2>Projects</h2>
      <br></br>
      <div className="projects-grid">
        <div className="project" onClick={() => window.open('https://vital-bite-pi.vercel.app/')}>
          <img src={`${process.env.PUBLIC_URL}/images/vitalbite.png`} alt="Project One" />
          <h3>Vital Bite</h3>
          <p>"Simple food guidance for complex needs." A full stack react app created to help people navigate their diets. Includes an A.I. chatbot that creates custom recipes catered to the user's needs. This was my capstone project at Atlas School.</p>
        </div>
        <div className="project" onClick={() => window.open('https://www.nostalgiafy.store/')}>
          <img src={`${process.env.PUBLIC_URL}/images/nostalgiafy.png`} alt="Project Two" />
          <h3>Nostalgiafy</h3>
          <p>Welcome to Nostalgiafy - an online store that brings back the treasures of your childhood! This project is a Shopify clone focused on nostalgic childhood items, created as the final 2-week project for Trimester 4 at Atlas School.</p>
        </div>
        <div className="project" onClick={() => window.open('https://samuelclaus.com')}>
          <img src={`${process.env.PUBLIC_URL}/images/samuelclaus.png`} alt="Project Three" />
          <h3>SamuelClaus.com</h3>
          <p>Website for Samuel Claus greeting cards and live caricatures. Customers can browse his portfolio and contact him through a secure contact method.</p>
        </div>
        <div className="project" onClick={() => window.open('https://puzzleemptym.github.io/plant-clicker/')}>
          <img src={`${process.env.PUBLIC_URL}/images/plantclicker.png`} alt="Project Four" />
          <h3>Plant Clicker</h3>
          <p>Plant Clicker is an engaging clicker game where players cultivate a virtual garden. The game blends simple click mechanics with complex strategy and mathematics. This was my final two-week project for Trimester 3 at Atlas School.</p>
        </div>
        <div className="project" onClick={() => window.open('https://github.com/PuzzleEmptyM/present_popper_NEW/blob/main/README.md')}>
          <img src={`${process.env.PUBLIC_URL}/images/presentpopper.png`} alt="Project Five" />
          <h3>Present Popper</h3>
          <p>The goal of Present Popper was to create an immersive gaming experience, focusing on fun gameplay mechanics, interactive elements, and a compelling story premise. This was my final one-week project for Trimester 2 at Atlas School. </p>
        </div>
        <div className="project" onClick={() => window.open('https://puzzleemptym.github.io/atlas-smiling-school-javascript/')}>
          <img src={`${process.env.PUBLIC_URL}/images/smiling.png`} alt="Project Six" />
          <h3>Atlas Smiling School</h3>
          <p>This group of web pages was coded with the Bootstrap Framework and based on some design models given on Figma. The goal of this project was to learn the basics of multi-page websites and Bootstrap CSS.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
