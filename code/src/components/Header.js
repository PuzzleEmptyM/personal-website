import React from 'react';
import { scrollToSection } from '../utils/smoothScroll';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
        <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
        <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
        <li><a href="#resume" onClick={(e) => { e.preventDefault(); scrollToSection('resume'); }}>Resume</a></li>
        <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
