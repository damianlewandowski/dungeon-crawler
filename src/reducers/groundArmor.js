import { combineReducers } from 'redux';
import {
  UPDATE_GROUND_ARMOR,
  SHOW_GROUND_ARMOR, 
} from '../actions';

const show = (state = true, action) => {
  switch(action.type) {
    case SHOW_GROUND_ARMOR:
      return action.payload;
    default:
      return state;
  }
}

const armor = (state = {}, action) => {
  switch(action.type) {
    case UPDATE_GROUND_ARMOR:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  show,
  armor
})