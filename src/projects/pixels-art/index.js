import React, { useEffect, useState } from 'react';
import './style.css';
import './components/Pixel';
import Pixel from './components/Pixel';

function Index() {
  const [selectedHeight, setSelectedHeight] = useState(5);
  const [selectedWidth, setSelectedWidth] = useState(5);
  const [selectedColor, setSelectedColor] = useState('');

  // Create Board of pixels
  function createPixelBoard(height, width) {
    const pixelBoard = [];
    for (let i = 0; i < height; i += 1) {
      pixelBoard.push(
        <div className='pixel-row' key={i}>
          {createPixelColumn(width)}
        </div>
      );
    }
    return pixelBoard;
  }

  // Create column of pixels
  const createPixelColumn = (width) => {
    const pixelColumn = [];
    for (let i = 0; i < width; i += 1) {
      pixelColumn.push(<Pixel key={i} selectedColor={selectedColor} />);
    }
    return pixelColumn;
  };

  // Select a Color
  const selectColor = ({ target: { id } }) => {
    switch (id) {
      case 'black':
        setSelectedColor(id);
        break;
      case 'red':
        setSelectedColor(id);
        break;
      case 'green':
        setSelectedColor(id);
        break;
      case 'blue':
        setSelectedColor(id);
        break;
      default:
        break;
    }
  };

  // Board Cleaner
  const cleanBoard = () => {};

  return (
    <div>
      <h1 id='title'>Paleta de Cores</h1>
      <section id='color-palette'>
        <div className='color black' id='black' onClick={selectColor}></div>
        <div className='color red' id='red' onClick={selectColor}></div>
        <div className='color green' id='green' onClick={selectColor}></div>
        <div className='color blue' id='blue' onClick={selectColor}></div>
      </section>
      <button id='clear-board'>Limpar</button>
      <section id='pixel-board'>
        {createPixelBoard(selectedHeight, selectedWidth)}
      </section>
    </div>
  );
}

export default Index;
