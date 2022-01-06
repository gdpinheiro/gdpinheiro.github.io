import React from 'react';
import trybewartsHeaderLogo from '../images/trybewartsHeaderLogo.svg';
import Login from './Login';

function Header() {
  return (
    <header className='header'>
      <img
        src={trybewartsHeaderLogo}
        alt='logo trybe'
        height='100px'
        className='trybewarts-header-logo'
      />
      <h1 id='trybewarts-header-title'>Trybewarts</h1>
      <Login />
    </header>
  );
}

export default Header;
