import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { fetchEconomy } from '../actions';

function Wallet(props) {
  const [value, setValue] = useState(0);
  const [description, setDescription] = useState('');
  const [moeda, setMoeda] = useState('USD');
  const [method, setMethod] = useState('Dinheiro');
  const [tag, setTag] = useState('Alimentação');
  const [totalDispenses, setTotalDispenses] = useState(0);

  // componentDidMount() {
  //   const { fetchEconomyAPI } = props;
  //   fetchEconomyAPI();
  // }

  const handleChange = ({ target }) => {
    // setState({
    //   [target.name]: target.value,
    // });
  };

  const clearForm = () => {
    // setState({
    //   value: 0,
    // });
  };

  const saveExpense = () => {
    const { fetchEconomyAPI, currencies } = props;
    // fetchEconomyAPI({
    //   value,
    //   description,
    //   currency,
    //   method,
    //   tag,
    // });
    // setState(
    //   {
    //     totalDispenses:
    //       totalDispenses + parseFloat(value * currencies[currency].ask),
    //   },
    //   clearForm()
    // );
  };

  const currencyEntries = () => {
    const { currencies } = props;
    return Object.entries(currencies).map((elem) => (
      <option key={elem[0]} value={elem[0]} data-testid={elem[0]}>
        {elem[0]}
      </option>
    ));
  };

  const tagInput = () => {
    return (
      <select name='tag' data-testid='tag-input' onChange={handleChange}>
        <option value='Alimentação'>Alimentação</option>
        <option value='Lazer'>Lazer</option>
        <option value='Trabalho'>Trabalho</option>
        <option value='Transporte'>Transporte</option>
        <option value='Saúde'>Saúde</option>
      </select>
    );
  };

  const methodInput = () => {
    return (
      <select name='method' data-testid='method-input' onChange={handleChange}>
        <option value='Dinheiro'>Dinheiro</option>
        <option value='Cartão de crédito'>Cartão de crédito</option>
        <option value='Cartão de débito'>Cartão de débito</option>
      </select>
    );
  };

  const createTableTr = (expense) => {
    const { description, tag, method, value, currency, exchangeRates } =
      expense;
    return (
      <tr key={expense.id}>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>{exchangeRates[currency].name}</td>
        <td>{(exchangeRates[currency].ask * 1).toFixed(2)}</td>
        <td>{(value * exchangeRates[currency].ask).toFixed(2)}</td>
        <td>Real</td>
        <td>
          <button type='button'>Editar</button>
          <button type='button'>Excluir</button>
        </td>
      </tr>
    );
  };

  const table = () => {
    const { expenses } = props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>{expenses.map((expense) => createTableTr(expense))}</tbody>
      </table>
    );
  };

  const { email } = props;

  return (
    <div>
      <header>
        <p data-testid='email-field'>{email}</p>
        <span data-testid='total-field'>{totalDispenses}</span>
        <span data-testid='header-currency-field'> BRL</span>
      </header>
      <input
        type='text'
        data-testid='value-input'
        name='value'
        value={value}
        onChange={handleChange}
      />
      <label htmlFor='moeda'>
        Moeda:
        <select
          name='moeda'
          id='moeda'
          data-testid='currency-input'
          onChange={handleChange}
        >
          {currencyEntries()}
        </select>
      </label>
      {methodInput()}
      {tagInput()}
      <input
        type='text'
        data-testid='description-input'
        name='description'
        onChange={handleChange}
      />
      <button type='button' onClick={saveExpense}>
        Adicionar despesa
      </button>
      {table()}
    </div>
  );
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchEconomyAPI: (userInput) => dispatch(fetchEconomy(userInput)),
});

export default Wallet;

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  fetchEconomyAPI: PropTypes.func.isRequired,
  currencies: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.arrayOf(PropTypes.any),
  ]).isRequired,
  expenses: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.arrayOf(PropTypes.any),
  ]).isRequired,
};
