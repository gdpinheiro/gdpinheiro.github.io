import { GET_LOGIN, GET_SCORE } from './actionTypes';

export const getLogin = (name, email) => ({
  type: GET_LOGIN,
  name,
  email,
});

export const getScore = (score) => ({
  type: GET_SCORE,
  score,
});
