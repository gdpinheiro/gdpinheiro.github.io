// Esse reducer será responsável por tratar as informações da pessoa usuária

import { SAVE_EMAIL } from '../actions';

//! APAGAR ESSE BLOCO
const initialState = {
  email: 'teste@teste.com',
};
//! APAGAR ESSE BLOCO

// const initialState = {
//   email: '',
// };

const user = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_EMAIL:
    return { ...state, email: action.email };
  default:
    return state;
  }
};

export default user;
