import React from 'react';
import Card from './components/Card';
import CardList from './components/CardList';
import Form from './components/Form';

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      //! ALTERAR
      isSaveButtonDisabled: true,
      savedCards: [],
    };
  }

  checkTextInput = (state) => {
    if (state.cardName && state.cardDescription && state.cardImage) {
      return true;
    }
    return false;
  };

  checkAttributes = (state) => {
    const attributes = [state.cardAttr1, state.cardAttr2, state.cardAttr3];
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

  saveButtonDisabled = () => {
    const { state } = this;
    if (this.checkTextInput(state) && this.checkAttributes(state)) {
      return this.setState({ isSaveButtonDisabled: false });
    }
    this.setState({ isSaveButtonDisabled: true });
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
      },
      this.saveButtonDisabled
    );
  };

  resetFields = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { state } = this;
    this.setState(
      (prev) => ({
        hasTrunfo: state.cardTrunfo,
        savedCards: [
          ...prev.savedCards,
          {
            cardName: state.cardName,
            cardDescription: state.cardDescription,
            cardAttr1: state.cardAttr1,
            cardAttr2: state.cardAttr2,
            cardAttr3: state.cardAttr3,
            cardImage: state.cardImage,
            cardRare: state.cardRare,
            cardTrunfo: state.cardTrunfo,
          },
        ],
      }),
      this.resetFields()
    );
  };

  onDeleteButtonClick = (event) => {
    const { innerText } = event.target.parentElement.firstChild.firstChild;
    const { state } = this;
    let cardIsTrunfo = true;
    const filteredSavedCardsState = state.savedCards.filter((elem) => {
      if (elem.cardTrunfo === true) cardIsTrunfo = false;
      return elem.cardName !== innerText;
    });
    this.setState(() => ({
      hasTrunfo: cardIsTrunfo,
      savedCards: filteredSavedCardsState,
    }));
  };

  render() {
    const { state } = this;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={state.cardName}
          cardDescription={state.cardDescription}
          cardAttr1={state.cardAttr1}
          cardAttr2={state.cardAttr2}
          cardAttr3={state.cardAttr3}
          cardImage={state.cardImage}
          cardRare={state.cardRare}
          cardTrunfo={state.cardTrunfo}
          hasTrunfo={state.hasTrunfo}
          isSaveButtonDisabled={state.isSaveButtonDisabled}
          onInputChange={this.onInputChange}
          onSaveButtonClick={this.onSaveButtonClick}
        />
        <Card
          cardName={state.cardName}
          cardDescription={state.cardDescription}
          cardAttr1={state.cardAttr1}
          cardAttr2={state.cardAttr2}
          cardAttr3={state.cardAttr3}
          cardImage={state.cardImage}
          cardRare={state.cardRare}
          cardTrunfo={state.cardTrunfo}
        />
        <div>
          Todas as Cartas
          <CardList
            savedCards={state.savedCards}
            onDeleteButtonClick={this.onDeleteButtonClick}
          />
        </div>
      </div>
    );
  }
}

export default index;
