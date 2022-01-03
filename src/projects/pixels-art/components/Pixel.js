import React, { useState } from 'react';

function Pixel(props) {
  const [currentColor, setCurrentColor] = useState('white');

  const { selectedColor } = props;

  // Paint a Pixel
  const paintPixel = ({ target }) => {
    setCurrentColor(selectedColor);
  };

  return <div className={`pixel ${currentColor}`} onClick={paintPixel}></div>;
}

export default Pixel;
