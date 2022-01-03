import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import projectToRender from '../services/projectToRender';

function Projects() {
  const { id: currentPage } = useParams();

  return (
    <div>
      <Header />
      <MobileMenu />
      <h3>This is the {currentPage} page.</h3>
      {projectToRender(currentPage)}
      <Link to='/projects'>Back to projects.</Link>
    </div>
  );
}

export default Projects;
