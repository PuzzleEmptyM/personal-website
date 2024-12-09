import React from 'react';
import { scrollToSection } from '../utils/smoothScroll';

const Home = () => (
  <section id="home">
    <div className="profile-container">
      <img src={`${process.env.PUBLIC_URL}/images/puzzle_profile.jpg`} alt="Profile" className="profile-picture" />
    </div>
    <h1 className="home-heading">Hi, I'm Puzzle.</h1>
    <h2 className="home-subheading">Full-Stack Engineering Student <br/> based in Tulsa, OK.</h2>
    <p className="home-description">
      Dynamic and highly motivated Software Engineer with extensive experience. Proficient in both front-end and back-end development.
    </p>
    <div className="home-buttons">
      <button onClick={() => scrollToSection('contact')}>Contact me</button>
      <button onClick={() => scrollToSection('resume')}>My Resume</button>
    </div>
  </section>
);

export default Home;
