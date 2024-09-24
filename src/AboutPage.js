import React from 'react';
import './AboutPage.css'; 

const AboutPage = () => {
  return (
    <div className="about-container">
      <section className="biography-section">
        <h1>About Me</h1>
        <p>
        Hello! I’m Bala Prasanna, a passionate MERN stack developer with a keen interest in building dynamic and responsive web applications. My journey in web development began with a fascination for how the internet connects us and allows for creativity and innovation.
        </p>
      </section>

      <section className="skills-section">
        <h2>Skills & Expertise</h2>
        <ul>
          <li><strong>HTML/CSS:</strong> Proficient in building responsive, accessible websites.</li>
          <li><strong>JavaScript:</strong> Strong understanding of modern JavaScript (ES6+).</li>
          <li><strong>React:</strong> Experience in building dynamic and component-driven UI applications.</li>
          <li><strong>Version Control:</strong> Familiar with Git and GitHub for version tracking and collaboration.</li>
          <li><strong>Backend Development:</strong> Experienced with Node.js and Express.js for building robust server-side applications and RESTful APIs.</li>
          <li><strong>Database Management:</strong> Skilled in using MongoDB for data storage, ensuring that applications are well-structured and efficient.</li>
        </ul>
      </section>

      <section className="education-section">
        <h2>Educational Background</h2>
        <p>
          I hold a B.Tech in Mechanical Engineering from Pondicherry University and also completed a MERN stack development course from Error Makes Clever Academy. My education has provided me with a solid foundation in software development and problem-solving skills, which I apply in my professional work.
        </p>
      </section>

      <section className="experience-section">
        <h2>Professional Experience</h2>
        <p>
          Although I'm a fresher, I have worked on several personal projects, including creating fully responsive websites, single-page applications (SPAs), and contributing to open-source projects. I am continuously expanding my knowledge by taking part in hackathons and online coding challenges.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;