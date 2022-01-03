import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    let deckHasTrunfo = (
      <div>
        Super Trybe Trunfo
        <Input
          type="checkbox"
          name="cardTrunfo"
          testid="trunfo-input"
          value={ cardTrunfo }
          onChange={ onInputChange }
        />
      </div>
    );

    if (hasTrunfo) {
      deckHasTrunfo = <p>Você já tem um Super Trunfo em seu baralho</p>;
    }

    return (
      <form>
        <div>
          Nome
          <Input
            type="text"
            name="cardName"
            testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </div>
        <div>
          <label htmlFor="descrição">
            Descrição
            <textarea
              name="cardDescription"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          Attr01
          <Input
            type="number"
            name="cardAttr1"
            testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </div>
        <div>
          Attr02
          <Input
            type="number"
            name="cardAttr2"
            testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </div>
        <div>
          Attr03
          <Input
            type="number"
            name="cardAttr3"
            testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </div>
        <div>
          Imagem
          <Input
            type="text"
            name="cardImage"
            testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </div>
        <div>
          <label htmlFor="raridade">
            Raridade
            <select
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
        </div>
        {deckHasTrunfo}
        <div>
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
