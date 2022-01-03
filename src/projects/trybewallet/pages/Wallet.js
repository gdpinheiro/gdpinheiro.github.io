// import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { fetchEconomy } from '../actions';

// class Wallet extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       value: 0,
//       description: '',
//       moeda: 'USD',
//       method: 'Dinheiro',
//       tag: 'Alimentação',
//       totalDispenses: 0,
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.saveExpense = this.saveExpense.bind(this);
//   }

//   componentDidMount() {
//     const { fetchEconomyAPI } = this.props;
//     fetchEconomyAPI();
//   }

//   handleChange({ target }) {
//     this.setState({
//       [target.name]: target.value,
//     });
//   }

//   clearForm() {
//     this.setState({
//       value: 0,
//     });
//   }

//   saveExpense() {
//     const { fetchEconomyAPI, currencies } = this.props;
//     const {
//       value,
//       description,
//       moeda: currency,
//       method,
//       tag,
//       totalDispenses,
//     } = this.state;
//     fetchEconomyAPI({
//       value,
//       description,
//       currency,
//       method,
//       tag,
//     });
//     this.setState(
//       {
//         totalDispenses:
//           totalDispenses + parseFloat(value * currencies[currency].ask),
//       },
//       this.clearForm(),
//     );
//   }

//   currencyEntries() {
//     const { currencies } = this.props;
//     return Object.entries(currencies).map((elem) => (
//       <option key={ elem[0] } value={ elem[0] } data-testid={ elem[0] }>
//         {elem[0]}
//       </option>
//     ));
//   }

//   tagInput() {
//     return (
//       <select name="tag" data-testid="tag-input" onChange={ this.handleChange }>
//         <option value="Alimentação">Alimentação</option>
//         <option value="Lazer">Lazer</option>
//         <option value="Trabalho">Trabalho</option>
//         <option value="Transporte">Transporte</option>
//         <option value="Saúde">Saúde</option>
//       </select>
//     );
//   }

//   methodInput() {
//     return (
//       <select
//         name="method"
//         data-testid="method-input"
//         onChange={ this.handleChange }
//       >
//         <option value="Dinheiro">Dinheiro</option>
//         <option value="Cartão de crédito">Cartão de crédito</option>
//         <option value="Cartão de débito">Cartão de débito</option>
//       </select>
//     );
//   }

//   createTableTr(expense) {
//     const { description, tag, method, value, currency, exchangeRates } = expense;
//     return (
//       <tr key={ expense.id }>
//         <td>{description}</td>
//         <td>{tag}</td>
//         <td>{method}</td>
//         <td>{value}</td>
//         <td>{exchangeRates[currency].name}</td>
//         <td>{(exchangeRates[currency].ask * 1).toFixed(2)}</td>
//         <td>{(value * exchangeRates[currency].ask).toFixed(2)}</td>
//         <td>Real</td>
//         <td>
//           <button type="button">Editar</button>
//           <button type="button">Excluir</button>
//         </td>
//       </tr>
//     );
//   }

//   table() {
//     const { expenses } = this.props;
//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Descrição</th>
//             <th>Tag</th>
//             <th>Método de pagamento</th>
//             <th>Valor</th>
//             <th>Moeda</th>
//             <th>Câmbio utilizado</th>
//             <th>Valor convertido</th>
//             <th>Moeda de conversão</th>
//             <th>Editar/Excluir</th>
//           </tr>
//         </thead>
//         <tbody>{expenses.map((expense) => this.createTableTr(expense))}</tbody>
//       </table>
//     );
//   }

//   render() {
//     const { email } = this.props;
//     const { totalDispenses, value } = this.state;

//     return (
//       <div>
//         <header>
//           <p data-testid="email-field">{email}</p>
//           <span data-testid="total-field">{totalDispenses}</span>
//           <span data-testid="header-currency-field"> BRL</span>
//         </header>
//         <input
//           type="text"
//           data-testid="value-input"
//           name="value"
//           value={ value }
//           onChange={ this.handleChange }
//         />
//         <label htmlFor="moeda">
//           Moeda:
//           <select
//             name="moeda"
//             id="moeda"
//             data-testid="currency-input"
//             onChange={ this.handleChange }
//           >
//             {this.currencyEntries()}
//           </select>
//         </label>
//         {this.methodInput()}
//         {this.tagInput()}
//         <input
//           type="text"
//           data-testid="description-input"
//           name="description"
//           onChange={ this.handleChange }
//         />
//         <button type="button" onClick={ this.saveExpense }>
//           Adicionar despesa
//         </button>
//         {this.table()}
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   email: state.user.email,
//   currencies: state.wallet.currencies,
//   expenses: state.wallet.expenses,
// });

// const mapDispatchToProps = (dispatch) => ({
//   fetchEconomyAPI: (userInput) => dispatch(fetchEconomy(userInput)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

// Wallet.propTypes = {
//   email: PropTypes.string.isRequired,
//   fetchEconomyAPI: PropTypes.func.isRequired,
//   currencies: PropTypes.oneOfType([
//     PropTypes.objectOf(PropTypes.any),
//     PropTypes.arrayOf(PropTypes.any),
//   ]).isRequired,
//   expenses: PropTypes.oneOfType([
//     PropTypes.objectOf(PropTypes.any),
//     PropTypes.arrayOf(PropTypes.any),
//   ]).isRequired,
// };
