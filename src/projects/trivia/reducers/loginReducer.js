import { GET_LOGIN } from '../actions/actionTypes';

const INITIAL_STATE = {
  name: '',
  email: '',
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_LOGIN:
    return {
      ...state,
      name: action.name,
      email: action.email,
    };
  default:
    return state;
  }
};

export default loginReducer;
