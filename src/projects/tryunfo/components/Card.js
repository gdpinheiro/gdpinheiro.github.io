import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  const {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
    cardTrunfo,
  } = props;

  let trunfo;

  if (cardTrunfo) {
    trunfo = <p>Super Trunfo</p>;
  }

  return (
    <div>
      <h1>{cardName} </h1>
      <img src={cardImage} alt={cardName} />
      <p>{cardDescription} </p>
      <p>{cardAttr1} </p>
      <p>{cardAttr2} </p>
      <p>{cardAttr3} </p>
      <p>{cardRare} </p>
      {trunfo}
    </div>
  );
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  cardAttr2: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  cardAttr3: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
