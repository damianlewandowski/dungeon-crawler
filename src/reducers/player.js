import { combineReducers } from 'redux';
import {
  UPDATE_PLAYER_HP,
  UPDATE_PLAYER_MAX_HP,
  UPDATE_PLAYER_POS,
  UPDATE_PLAYER_LEVEL,
  UPDATE_PLAYER_EXP,
  UPDATE_PLAYER_WEAPON,
  UPDATE_PLAYER_ARMOR,
  KILL_PLAYER
} from '../actions';
import WEAPONS from '../constants/weapons';
import ARMORS from '../constants/armors';

const pos = (state = [], action) => {
  switch(action.type) {
    case UPDATE_PLAYER_POS: 
      return action.payload;
    default:
      return state;
  }
}

const hp = (state = 100, action) => {
  switch(action.type) {
    case UPDATE_PLAYER_HP:
      return action.payload;
    default:
      return state;
  }
}

const maxHp = (state = 100, action) => {
  switch(action.type) {
    case UPDATE_PLAYER_LEVEL:
      return action.payload * 10;
    default:
      return state;
  }
}

const level = (state = 1, action) => {
  switch(action.type) {
    case UPDATE_PLAYER_LEVEL: 
      return action.payload;
    default:
      return state;
  }
}

const exp = (state = 0, action) => {
  switch(action.type) {
    case UPDATE_PLAYER_EXP:
      return action.payload;
    default:
      return state;
  }
}

const weapon = (state = WEAPONS[0], action) => {
  switch(action.type) {
    case UPDATE_PLAYER_WEAPON: 
      return action.payload;
    default:
      return state;
  }
}

const armor = (state = ARMORS[0], action) => {
  switch(action.type) {
    case UPDATE_PLAYER_ARMOR: 
      return action.payload;
    default:
      return state;
  }
}

const alive = (state = true, action) => {
  switch(action.type) {
    case KILL_PLAYER:
      return action.payload;
    default:
      return state
  }
}

export default combineReducers({
  hp,
  maxHp,
  pos,
  level,
  exp,
  weapon,
  armor,
  alive
})