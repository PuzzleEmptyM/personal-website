import React from 'react';
import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaDatabase,
  FaNodeJs,
  FaReact
} from 'react-icons/fa';
import {
  SiMysql,
  SiMongodb,
  SiVisualbasic,
  SiMicrosoftexcel,
  SiPostgresql,
  SiTailwindcss
} from 'react-icons/si';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import '../GlobalStyles';

const skills = [
  { icon: <FaJs />,            name: 'JavaScript' },
  { icon: <FaHtml5 />,         name: 'HTML' },
  { icon: <FaCss3Alt />,       name: 'CSS' },
  { icon: <FaBootstrap />,     name: 'Bootstrap' },
  { icon: <SiTailwindcss />,   name: 'Tailwind CSS' },
  { icon: <FaReact />,         name: 'React' },
  { icon: <FaGitAlt />,        name: 'Git' },
  { icon: <FaGithub />,        name: 'GitHub' },
  { icon: <FaPython />,        name: 'Python' },
  { icon: <SiMysql />,         name: 'MySQL' },
  { icon: <SiPostgresql />,    name: 'PostgreSQL' },
  { icon: <SiMongodb />,       name: 'MongoDB' },
  { icon: <FaNodeJs />,        name: 'Node.js' },
  { icon: <SiVisualbasic />,   name: 'VBA' },
  { icon: <SiMicrosoftexcel />,name: 'Power Query' },
  { icon: <FaDatabase />,      name: 'SQL' }
];

const getRandomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(2);

const Skills = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="skills"
      ref={ref}
      className={`skills-section ${isVisible ? 'section-visible' : ''}`}
    >
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, idx) => {
          const style = {
            animationDuration: `${getRandomFloat(6, 12)}s`,
            animationDelay:    `${getRandomFloat(0, 5)}s`,
          };
          return (
            <div key={idx} className="skill-item floating" style={style}>
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
