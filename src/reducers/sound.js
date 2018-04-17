import { combineReducers } from 'redux';
import {
  PLAY_SOUND,
  CHANGE_SOUND
} from '../actions';

const playSound = (state = false, action) => {
  switch(action.type) {
    case PLAY_SOUND:
      return action.payload;
    default:
      return state;
  }
}

const soundPath = (state = "", action) => {
  switch(action.type) {
    case CHANGE_SOUND:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  playSound,
  soundPath
})