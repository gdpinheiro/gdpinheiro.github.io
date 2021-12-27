import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';

function About() {
  return (
    <div>
      <Header />
      <MobileMenu />
      <h1>About Me</h1>
      <Link to='/projects'>Check out my projects!</Link>
    </div>
  );
}

export default About;
