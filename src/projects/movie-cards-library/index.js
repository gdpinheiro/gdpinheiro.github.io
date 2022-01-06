import React from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';

function MovieList() {
  return (
    <div className='App'>
      <Header />
      <List />
    </div>
  );
}

export default MovieList;
