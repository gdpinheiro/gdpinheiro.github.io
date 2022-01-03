import { GET_SCORE } from '../actions/actionTypes';

const INITIAL_STATE = {
  score: 0,
};

const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_SCORE:
    return {
      ...state,
      score: state.score + action.score,
    };
  default:
    return state;
  }
};

export default gameReducer;
