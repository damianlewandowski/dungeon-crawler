import { combineReducers } from 'redux';
import { UPDATE_BOARD, UPDATE_ROOMS } from '../actions';

const board = (state = [], action) => {
  switch(action.type) {
    case UPDATE_BOARD: 
      return action.payload;
    default:
      return state;
  }
}

const rooms = (state = [], action) => {
  switch(action.type) {
    case UPDATE_ROOMS: 
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  board,
  rooms
})