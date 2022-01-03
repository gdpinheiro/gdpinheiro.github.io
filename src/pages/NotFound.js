import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';

function Home() {
  return (
    <div>
      <Header />
      <MobileMenu />
      <h1>Page not found.</h1>
      <Link to='/'>Back to Home.</Link>
    </div>
  );
}

export default Home;
