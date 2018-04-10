import { combineReducers } from 'redux';
import enemies from './enemies';
import player from './player';
import { 
  UPDATE_BOARD, 
  UPDATE_ROOMS,
  UPDATE_DUNGEON_LEVEL,
  CHANGE_DISPLAY_MODE,
  INITIALIZE_POTIONS,
  DESTROY_POTION
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

const dungeonLevel = (state = 1, action) => {
  switch(action.type) {
    case UPDATE_DUNGEON_LEVEL:
      return action.payload
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

const potions = (state = [], action) => {
  switch(action.type) {
    case INITIALIZE_POTIONS:
      return action.payload
    case DESTROY_POTION:
      const drunkPotionId = action.payload;
      return state
        .filter(potion => potion.id !== drunkPotionId)
    default:
      return state;
  }
}

export default combineReducers({
  board,
  rooms,
  dungeonLevel,
  displayMode,
  player,
  enemies,
  potions,
})