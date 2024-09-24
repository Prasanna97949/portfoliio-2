import React from 'react';
import {Link} from 'react-router-dom'; 
import './homepage.css'; 
import profilePic from './images/profile-pic.jpg';

function HomePage() {
  return (
    <div className="home-container">
      <div className="intro-section">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi there! I’m Bala Prasanna, a MERN developer passionate about building user-friendly web applications.
        </p>
      </div>

      <div className="avatar-section">
        <img src={profilePic} alt='profile pic'
          className="avatar"
        />
      </div>

      <div className="links-section">
        <nav>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HomePage;