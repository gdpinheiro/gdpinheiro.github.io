import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    let trunfo;

    if (cardTrunfo) {
      trunfo = <p data-testid="trunfo-card">Super Trunfo</p>;
    }

    return (
      <div>
        <h1 data-testid="name-card">
          {cardName}
          {' '}
        </h1>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">
          {cardDescription}
          {' '}
        </p>
        <p data-testid="attr1-card">
          {cardAttr1}
          {' '}
        </p>
        <p data-testid="attr2-card">
          {cardAttr2}
          {' '}
        </p>
        <p data-testid="attr3-card">
          {cardAttr3}
          {' '}
        </p>
        <p data-testid="rare-card">
          {cardRare}
          {' '}
        </p>
        {trunfo}
      </div>
    );
  }
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
