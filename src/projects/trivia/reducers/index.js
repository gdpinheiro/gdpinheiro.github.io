import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import gameReducer from './gameReducer';

const reducers = combineReducers({
  loginReducer,
  gameReducer,
});

export default reducers;
