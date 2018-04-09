import {
  UPDATE_ENEMY_HP,
  KILL_ENEMY,
  // UPDATE_ENEMY_LEVEL,
  // UPDATE_ENEMY_COORDS,
  INITIALIZE_ENEMIES  
} from '../actions';

export const enemies = (state = [], action) => {
  switch(action.type) {
    case INITIALIZE_ENEMIES:
      return action.payload;

    case UPDATE_ENEMY_HP: {
      const { id, hp } = action.payload;
      return state.map(enemy => {
        if(id === enemy.id) {
          return {
            ...enemy,
            hp: hp
          }
        }
        return enemy;
      })
    }
      
    case KILL_ENEMY: {
      const id = action.payload;
      return state.filter(enemy => enemy.id !== id)
    }

    default:
      return state;
  }
}