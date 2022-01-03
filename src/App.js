import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProjectLivePage from './pages/ProjectLivePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='projects' element={<Projects />} />
        <Route path='projects/:id' element={<ProjectLivePage />} />
      </Routes>
    </div>
  );
}

export default App;
