import React, { useState } from 'react';
import './style.css';
import './components/Pixel';
import Pixel from './components/Pixel';

function Index() {
  const [selectedHeight, setSelectedHeight] = useState(5);
  const [selectedWidth, setSelectedWidth] = useState(5);
  const [selectedColor, setSelectedColor] = useState('');
  const [hasTheDrawingStarted, setHasTheDrawingStarted] = useState(false);

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

  // Start Drawing
  const startDrawing = () => {
    setHasTheDrawingStarted(true);
  };

  // Board Cleaner
  const cleanBoardButton = () => {
    setHasTheDrawingStarted(false);
  };

  return (
    <div>
      <h1 id='title'>Paleta de Cores</h1>
      <div id='color-palette'>
        <div className='color black' id='black' onClick={selectColor}></div>
        <div className='color red' id='red' onClick={selectColor}></div>
        <div className='color green' id='green' onClick={selectColor}></div>
        <div className='color blue' id='blue' onClick={selectColor}></div>
      </div>
      <div id='select-size'>
        <h1>Selecione o tamanho do quadro:</h1>
        <label htmlFor='input-altura'>
          Altura:
          <input
            type='number'
            name='altura'
            id='input-altura'
            defaultValue='5'
            min='1'
            onChange={({ target: { value } }) => setSelectedHeight(value)}
          />
        </label>
        <label htmlFor='input-largura'>
          Largura:
          <input
            type='number'
            name='largura'
            id='input-largura'
            defaultValue='5'
            min='1'
            onChange={({ target: { value } }) => setSelectedWidth(value)}
          />
        </label>
      </div>
      <div id='start-clean-button'>
        {hasTheDrawingStarted ? (
          <button id='clear-board' onClick={cleanBoardButton}>
            Limpar
          </button>
        ) : (
          <button id='start-drawing' onClick={startDrawing}>
            Começar a desenhar
          </button>
        )}
      </div>
      <div id='pixel-board'>
        {hasTheDrawingStarted && (
          <div>{createPixelBoard(selectedHeight, selectedWidth)}</div>
        )}
      </div>
    </div>
  );
}

export default Index;
