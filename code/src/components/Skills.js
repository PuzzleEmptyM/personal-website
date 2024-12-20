import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const skills = [
  { name: 'JavaScript (ES6+)', logo: '/images/logos/javascript.svg' },
  { name: 'React', logo: '/images/logos/react.svg' },
  { name: 'Node.js', logo: '/images/logos/nodejs.svg' },
  { name: 'Git & GitHub', logo: '/images/logos/git.svg' },
  { name: 'PostgreSQL', logo: '/images/logos/postgresql.svg' },
  { name: 'MongoDB', logo: '/images/logos/mongodb.svg' },
  { name: 'TailwindCSS', logo: '/images/logos/tailwindcss.svg' },
  { name: 'Vercel', logo: '/images/logos/vercel.svg' },
];

const Skills = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="skills" ref={ref} className={isVisible ? 'section-visible' : ''}>
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
