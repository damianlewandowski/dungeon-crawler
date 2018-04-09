import { combineReducers } from 'redux';
import enemies from './enemies';
import player from './player';
import { 
  UPDATE_BOARD, 
  UPDATE_ROOMS,
  CHANGE_DISPLAY_MODE,
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

const displayMode = (state = PLAYER_VIEW_MODE, action) => {
  switch(action.type) {
    case CHANGE_DISPLAY_MODE:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  board,
  rooms,
  displayMode,
  player,
  enemies,
})