import { combineReducers } from 'redux';
import {
  UPDATE_PLAYER_HP,
  UPDATE_PLAYER_POS,
  UPDATE_PLAYER_LEVEL,
  UPDATE_PLAYER_EXP,
  UPDATE_PLAYER_WEAPON,
  UPDATE_PLAYER_ARMOR,
  KILL_PLAYER,
} from '../actions';
import WEAPONS from '../constants/weapons';
import ARMORS from '../constants/armors';
import fistsImg from '../images/weapons/fists.png';
import diaperImg from '../images/armors/clean_diaper.png';

const pos = (state = [], action) => {
  switch(action.type) {
    case UPDATE_PLAYER_POS:
      return action.payload;
    default:
      return state;
  }
}

const hp = (state = 150, action) => {
  switch(action.type) {
    case UPDATE_PLAYER_HP:
      return action.payload;
    default:
      return state;
  }
}

const maxHp = (state = 150, action) => {
  switch(action.type) {
    case UPDATE_PLAYER_LEVEL:
      return state + action.payload * 20;
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

const initialWeapon = {
  ...WEAPONS[0],
  img: fistsImg,
}
const weapon = (state = initialWeapon, action) => {
  switch(action.type) {
    case UPDATE_PLAYER_WEAPON: 
      return action.payload;
    default:
      return state;
  }
}

const initialArmor = {
  ...ARMORS[0],
  img: diaperImg,
}
const armor = (state = initialArmor, action) => {
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