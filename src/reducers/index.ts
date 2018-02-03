import { combineReducers } from 'redux';
import { room } from './roomReducer';

const wholeState = combineReducers({
  room
});

export default wholeState;