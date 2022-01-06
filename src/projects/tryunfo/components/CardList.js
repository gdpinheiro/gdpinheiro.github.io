import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

function CardList(props) {
  const { savedCards, onDeleteButtonClick } = props;
  const cardsMap = savedCards.map((elem) => (
    <div key={elem.cardName}>
      <Card
        cardName={elem.cardName}
        cardDescription={elem.cardDescription}
        cardAttr1={elem.cardAttr1}
        cardAttr2={elem.cardAttr2}
        cardAttr3={elem.cardAttr3}
        cardImage={elem.cardImage}
        cardRare={elem.cardRare}
        cardTrunfo={elem.cardTrunfo}
      />
      <button
        type='button'
        data-testid='delete-button'
        onClick={onDeleteButtonClick}
      >
        Excluir
      </button>
    </div>
  ));
  return cardsMap;
}

CardList.propTypes = {
  savedCards: PropTypes.arrayOf(
    PropTypes.shape({
      cardName: PropTypes.string,
      cardDescription: PropTypes.string,
      cardAttr1: PropTypes.number,
      cardAttr2: PropTypes.number,
      cardAttr3: PropTypes.number,
      cardImage: PropTypes.string,
      cardRare: PropTypes.string,
      cardTrunfo: PropTypes.bool,
    })
  ).isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
};

export default CardList;
