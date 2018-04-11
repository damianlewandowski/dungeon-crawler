import { combineReducers } from 'redux';
import {
  UPDATE_GROUND_WEAPON,
  SHOW_GROUND_WEAPON, 
} from '../actions';

const show = (state = true, action) => {
  switch(action.type) {
    case SHOW_GROUND_WEAPON:
      return action.payload;
    default:
      return state;
  }
}

const weapon = (state = {}, action) => {
  switch(action.type) {
    case UPDATE_GROUND_WEAPON:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  show,
  weapon
})