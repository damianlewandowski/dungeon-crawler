import { combineReducers } from 'redux';
import {
  UPDATE_PLAYER_HP,
  UPDATE_PLAYER_POS,
} from '../actions';

const playerHp = (state = 0, action) => {
  switch(action.type) {
    case UPDATE_PLAYER_HP:
      return action.payload;
    default:
      return state;
  }
}

const playerPos = (state = [], action) => {
  switch(action.type) {
    case UPDATE_PLAYER_POS: 
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  playerHp,
  playerPos,
})