import React from 'react';
import { Link } from 'react-router-dom';

function MobileMenu() {
  return (
    <div>
      <button>
        <i className='fas fa-times'></i>
      </button>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  );
}

export default MobileMenu;
