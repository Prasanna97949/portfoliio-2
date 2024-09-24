import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './homepage.js';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage.js';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
