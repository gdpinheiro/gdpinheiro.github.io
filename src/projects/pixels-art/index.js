import React from 'react';
import './style.css';

function index() {
  return (
    <div>
      <h1 id='title'>Paleta de Cores</h1>
      <section id='color-palette'>
        <div className='color' id='black'></div>
        <div className='color' id='red'></div>
        <div className='color' id='green'></div>
        <div className='color' id='blue'></div>
      </section>
      <button id='clear-board'>Limpar</button>
      <section id='pixel-board'></section>
    </div>
  );
}

export default index;
