import { combineReducers } from 'redux';
import { INITIALIZE_BOARD } from '../actions';

const board = (state = [], action) => {
  switch(action.type) {
    case INITIALIZE_BOARD: 
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  board,
})