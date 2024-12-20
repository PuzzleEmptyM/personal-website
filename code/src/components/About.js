import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const About = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" ref={ref} className={isVisible ? 'section-visible' : ''}>
      <h2>About Me</h2>
      <br></br>
      <p>My name is Michael Moser, but I'm better known as Puzzle. As a Full Stack Developer student at Atlas School, I've benefited from a hands-on, project-based curriculum that covers front-end and back-end technologies like ReactJs, Python, PostgreSql, and TailwindCSS. Outside the classroom, I've developed practical skills through projects such as building a website for my brother (SamuelClaus.com) and optimizing AI-generated code for Scale AI.</p>
      <br></br>
      <p>As I step into the professional world, I am eager to join a dynamic tech team where I can contribute to meaningful projects and continue my professional growth.</p>
      <br></br>
      <p>Let's connect and explore opportunities in the vibrant tech landscape!</p>
    </section>
  );
};

export default About;
