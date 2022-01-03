export const SAVE_EMAIL = 'SAVE_EMAIL';

export const SAVE_WALLET_DATA = 'WALLET';

export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  email,
});

const saveWalletData = (userInput, fetchedData) => ({
  type: SAVE_WALLET_DATA,
  userInput,
  fetchedData,
});

const saveCurrencies = (fetchedData) => ({
  type: SAVE_CURRENCIES,
  fetchedData,
});

export const fetchEconomy = (userInput) => {
  if (!userInput) {
    return (dispatch) => {
      fetch('https://economia.awesomeapi.com.br/json/all')
        .then((response) => response.json())
        .then((data) => {
          delete data.USDT;
          return data;
        })
        .then((data) => dispatch(saveCurrencies(data)));
    };
  }
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => dispatch(saveWalletData(userInput, data)));
  };
};
