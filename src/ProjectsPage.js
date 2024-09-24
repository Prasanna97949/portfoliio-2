import React from 'react';
import './ProjectsPage.css'; 
import Nostar from './images/nostar.jpg';
import Greenden from './images/greenden.jpg';
import Udemy from './images/udemy.jpg';
import Taskmanager from './images/taskmanager.jpg';
import Weatherapp from './images/weatherapp.jpg';
import Portfollio from './images/portfollio.jpg';

const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'I developed a user-friendly e-commerce website that streamlines online shopping, featuring seamless navigation, secure payment processing, and an intuitive product management system.',
    image: `${Nostar}`, 
    liveLink: 'https://prasanna97949.github.io/Nostar/', 
    codeLink: 'https://github.com/Prasanna97949/Nostar' 
  },
  {
    id: 2,
    title: 'Indoor Plants Website',
    description: 'I created an indoor plants selling website that offers a diverse selection of plants with detailed care guides, user-friendly navigation, and a secure shopping experience.',
    image: `${Greenden}`,
    liveLink: 'https://prasanna97949.github.io/Greenden/',
    codeLink: 'https://github.com/Prasanna97949/Greenden'
  },
  {
    id: 3,
    title: 'Udemy Clone',
    description: 'I developed a Udemy clone using React, featuring an intuitive user interface, course management system, and secure payment integration for a seamless online learning experience.',
    image: `${Udemy}`,
    liveLink: 'https://udemy-react-tau.vercel.app/',
    codeLink: 'https://github.com/Prasanna97949/Udemy-React'
  },
  {
    id: 4,
    title: 'Task Manager',
    description: 'A simple task manager app to keep track of daily tasks and to-dos.',
    image: `${Taskmanager}`,
    liveLink: 'https://actodo-react-rosy.vercel.app/landing',
    codeLink: 'https://github.com/Prasanna97949/Actodo-React'
  },
  {
    id: 5,
    title: 'Weather App',
    description: 'I created a weather app that provides real-time weather updates and forecasts, featuring an interactive user interface and location-based services for a personalized experience.',
    image: `${Weatherapp}`,
    liveLink: 'https://weather-app-chi-liard-85.vercel.app/',
    codeLink: 'https://github.com/Prasanna97949/weather-app'
  },
  {
    id: 6,
    title: 'Portfollio Page',
    description: 'I designed my portfolio page to showcase my skills and projects as a MERN stack developer, highlighting my creativity and technical expertise through an engaging and user-friendly interface.',
    image: `${Portfollio}`,
    liveLink: 'https://prasanna97949.github.io/portfollio/',
    codeLink: 'https://github.com/Prasanna97949/portfollio'
  }
  
];

const ProjectsPage = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={`${project.title} Thumbnail`} className="project-thumbnail" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Project</a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;