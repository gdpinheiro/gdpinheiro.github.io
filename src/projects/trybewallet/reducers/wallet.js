// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { SAVE_WALLET_DATA, SAVE_CURRENCIES } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, action) => {
  const { expenses } = state;
  switch (action.type) {
  case SAVE_WALLET_DATA:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          id: expenses.length,
          value: action.userInput.value,
          description: action.userInput.description,
          currency: action.userInput.currency,
          method: action.userInput.method,
          tag: action.userInput.tag,
          exchangeRates: action.fetchedData,
        },
      ],
    };
  case SAVE_CURRENCIES:
    return {
      ...state,
      currencies: action.fetchedData,
    };
  default:
    return state;
  }
};

export default wallet;
