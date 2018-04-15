import { combineReducers } from 'redux';
import enemies from './enemies';
import player from './player';
import sound from './sound';
import groundArmor from './groundArmor';
import groundWeapon from './groundWeapon';
import {
  CLEAR_BOARD,
  UPDATE_BOARD, 
  UPDATE_ROOMS,
  UPDATE_DUNGEON_LEVEL,
  TOGGLE_DISPLAY_MODE,
  INITIALIZE_POTIONS,
  DESTROY_POTION,
  UPDATE_STAIRS,
} from '../actions';
import { PLAYER_VIEW_MODE, DUNGEON_VIEW_MODE } from '../constants/displayModes';

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
      return state + 1
    default:
      return state;
  }
}

const displayMode = (state = PLAYER_VIEW_MODE, action) => {
  switch(action.type) {
    case TOGGLE_DISPLAY_MODE:
      return state === PLAYER_VIEW_MODE ? DUNGEON_VIEW_MODE : PLAYER_VIEW_MODE;
    default:
      return state;
  }
}

const initialPotionsState = {
  shouldInitialize: true,
  items: []
}
const potions = (state = initialPotionsState, action) => {
  switch(action.type) {
    case INITIALIZE_POTIONS:
      return {
        shouldInitialize: false,
        items: action.payload
      }
        
    case DESTROY_POTION: {
      const id = action.payload;
      const newItems = state.items.filter(potion => potion.id !== id);
      return {
        ...state,
        items: newItems
      }
    }

    default:
      return state;
  }
}

const initialStairsState = {
  id: 1,
  show: true,
  coordinates: []
}
const stairs = (state = initialStairsState, action) => {
  switch(action.type) {
    case UPDATE_STAIRS:
      return {
        ...state,
        show: false,
        coordinates: action.payload,
      }
    default:
      return state;
  }
}

const appReducer = combineReducers({
  board,
  rooms,
  dungeonLevel,
  displayMode,
  player,
  enemies,
  potions,
  groundArmor,
  groundWeapon,
  stairs,
  sound
})

const initialState = appReducer({}, {});
const rootReducer = (state, action) => {
  if(action.type === CLEAR_BOARD) {
    state = initialState;
  }

  return appReducer(state, action);
}

export default rootReducer;