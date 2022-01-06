import React, { useState } from 'react';
import Card from './components/Card';
import CardList from './components/CardList';
import Form from './components/Form';

function Tryunfo() {
  const [cardName, setCardName] = useState('');
  const [cardDescription, setCardDescription] = useState('');
  const [cardAttr1, setCardAttr1] = useState(0);
  const [cardAttr2, setCardAttr2] = useState(0);
  const [cardAttr3, setCardAttr3] = useState(0);
  const [cardImage, setCardImage] = useState('');
  const [cardRare, setCardRare] = useState('');
  const [cardTrunfo, setCardTrunfo] = useState(false);
  const [hasTrunfo, setHasTrunfo] = useState(false);
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);
  const [savedCards, setSavedCards] = useState([]);

  const checkTextInput = () => {
    if (cardName && cardDescription && cardImage) {
      return true;
    }
    return false;
  };

  const checkAttributes = () => {
    const attributes = [cardAttr1, cardAttr2, cardAttr3];
    const checks = [];
    const maxValue = 90;
    const maxSum = 210;
    attributes.forEach((attr) => {
      if (attr < 0 || attr > maxValue) {
        checks.push(false);
      }
    });
    const checkTotal = attributes.reduce(
      (total, attr) => parseInt(total, 10) + parseInt(attr, 10),
      0
    );
    if (checks.includes(false) || checkTotal > maxSum) {
      return false;
    }
    return true;
  };

  const saveButtonDisabled = () => {
    if (checkTextInput() && checkAttributes()) {
      return setIsSaveButtonDisabled(false);
    }
    setIsSaveButtonDisabled(true);
  };

  const onInputChange = ({ target }) => {
    // const { name, type } = target;
    // const value = type === 'checkbox' ? target.checked : target.value;
    // setState(
    //   {
    //     [name]: value,
    //   },
    //   saveButtonDisabled
    // );
  };

  const resetFields = () => {
    setCardName('');
    setCardDescription('');
    setCardAttr1(0);
    setCardAttr2(0);
    setCardAttr3(0);
    setCardImage('');
    setCardRare('');
    setCardTrunfo(false);
    setIsSaveButtonDisabled(true);
  };

  const onSaveButtonClick = (event) => {
    setHasTrunfo(cardTrunfo);
    setSavedCards([
      ...savedCards,
      {
        cardName: cardName,
        cardDescription: cardDescription,
        cardAttr1: cardAttr1,
        cardAttr2: cardAttr2,
        cardAttr3: cardAttr3,
        cardImage: cardImage,
        cardRare: cardRare,
        cardTrunfo: cardTrunfo,
      },
    ]);
    resetFields();
  };

  const onDeleteButtonClick = (event) => {
    const { innerText } = event.target.parentElement.firstChild.firstChild;
    let cardIsTrunfo = true;
    const filteredSavedCardsState = savedCards.filter((elem) => {
      if (elem.cardTrunfo === true) cardIsTrunfo = false;
      return elem.cardName !== innerText;
    });
    setHasTrunfo(cardIsTrunfo);
    setSavedCards(filteredSavedCardsState);
  };

  return (
    <div>
      <h1>Tryunfo</h1>
      <Form
        cardName={cardName}
        cardDescription={cardDescription}
        cardAttr1={cardAttr1}
        cardAttr2={cardAttr2}
        cardAttr3={cardAttr3}
        cardImage={cardImage}
        cardRare={cardRare}
        cardTrunfo={cardTrunfo}
        hasTrunfo={hasTrunfo}
        isSaveButtonDisabled={isSaveButtonDisabled}
        onInputChange={onInputChange}
        onSaveButtonClick={onSaveButtonClick}
      />
      <Card
        cardName={cardName}
        cardDescription={cardDescription}
        cardAttr1={cardAttr1}
        cardAttr2={cardAttr2}
        cardAttr3={cardAttr3}
        cardImage={cardImage}
        cardRare={cardRare}
        cardTrunfo={cardTrunfo}
      />
      <div>
        Todas as Cartas
        <CardList
          savedCards={savedCards}
          onDeleteButtonClick={onDeleteButtonClick}
        />
      </div>
    </div>
  );
}

export default Tryunfo;
