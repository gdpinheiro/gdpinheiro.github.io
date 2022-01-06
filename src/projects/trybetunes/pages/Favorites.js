import React from 'react';
import Header from '../components/Header';

function Favorites() {
  return (
    <div data-testid='page-favorites'>
      <h1>Favorites</h1>
      <Header page='/favorites' />
    </div>
  );
}

export default Favorites;
