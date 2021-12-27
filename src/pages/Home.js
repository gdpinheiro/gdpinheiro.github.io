import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';

function Home() {
  return (
    <div>
      <Header />
      <MobileMenu />
      <h1>Hi, my name is Giovanni!</h1>
      <p>I'm a web developer with knowledge in JS and React.</p>
      <Link to='/projects'>Check out my projects!</Link>
    </div>
  );
}

export default Home;
