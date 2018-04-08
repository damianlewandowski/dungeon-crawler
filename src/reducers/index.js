import { combineReducers } from 'redux';
import { 
  UPDATE_BOARD, 
  UPDATE_ROOMS,
  UPDATE_PLAYER_HP,
  UPDATE_PLAYER_POS,
  CHANGE_DISPLAY_MODE,
  UPDATE_ENEMIES
} from '../actions';
import { PLAYER_VIEW_MODE } from '../constants/displayModes';

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

const displayMode = (state = PLAYER_VIEW_MODE, action) => {
  switch(action.type) {
    case CHANGE_DISPLAY_MODE:
      return action.payload;
    default:
      return state;
  }
}

const enemies = (state = [], action) => {
  switch(action.type) {
    case UPDATE_ENEMIES:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  board,
  rooms,
  playerPos,
  displayMode,
  enemies,
  playerHp
})