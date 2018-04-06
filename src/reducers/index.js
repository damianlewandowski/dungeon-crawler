import { combineReducers } from 'redux';
import { 
  UPDATE_BOARD, 
  UPDATE_ROOMS, 
  UPDATE_PLAYER_POS,
  CHANGE_DISPLAY_MODE,
} from '../actions';
import { PLAYER_VIEW_MODE, DUNGEON_VIEW_MODE } from '../constants/displayModes';
import { PLAYER } from '../constants/boardCell';

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

const playerPos = (state = [], action) => {
  switch(action.type) {
    case UPDATE_PLAYER_POS: 
      return action.payload;
    default:
      return state;
  }
}

const displayMode = (state = DUNGEON_VIEW_MODE, action) => {
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
  playerPos,
  displayMode
})