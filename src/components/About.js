import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const About = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" ref={ref} className={isVisible ? 'section-visible' : ''}>
      <div className="profile-container">
        <img src={`${process.env.PUBLIC_URL}/images/puzzle_profile.jpg`} alt="Profile" className="profile-picture" />
      </div>
      <h2>About Me</h2>
      <br></br>
      <p>As a Full Stack Developer student at Atlas School, I’ve embraced a curriculum that emphasizes practical experience over traditional lectures. The school's hands-on, project-based approach has allowed me to gain in-depth knowledge of both front-end and back-end technologies, including JavaScript, HTML, Python, and C.</p>
      <br></br>
      <p>Outside of my studies, I’ve taken on projects that provide invaluable real-world experience. For example, I am developing a website for Samuel Claus and am currently optimizing AI-generated code for Scale AI. These experiences have honed my ability to deliver efficient and user-friendly solutions. Additionally, my background in customer service and project management from Genesis Health Clubs has equipped me with strong communication skills and a unique perspective on user experience and business strategy.</p>
      <br></br>
      <p>I’m eager to bring my skills and enthusiasm to a dynamic tech team and contribute to impactful projects. As I approach graduation, I look forward to joining an innovative organization where I can continue to grow and make a tangible difference through my work.</p>
      <br></br>
      <p>Let's connect and collaborate in the ever-evolving world of technology!</p>
      <div className="shape circle blue" style={{ top: '10%', left: '5%' }}></div>
      <div className="shape triangle pink" style={{ bottom: '15%', right: '5%' }}></div>
      <div className="shape circle purple" style={{ top: '40%', left: '70%' }}></div>
      <div className="shape triangle blue" style={{ bottom: '45%', right: '70%' }}></div>
      <div className="shape circle pink" style={{ top: '25%', left: '80%' }}></div>
      <div className="shape triangle purple" style={{ bottom: '25%', right: '80%' }}></div>
    </section>
  );
};

export default About;
