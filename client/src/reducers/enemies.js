import {
  UPDATE_ENEMY_HP,
  KILL_ENEMY,
  INITIALIZE_ENEMIES  
} from '../actions';

const initialState = {
  shouldInitialize: true,
  items: []
}
export default (state = initialState, action) => {
  switch(action.type) {
    case INITIALIZE_ENEMIES:
      return {
        shouldInitialize: false,
        items: action.payload,
      }

    case UPDATE_ENEMY_HP: {
      const { id, hp } = action.payload;
      const newItems = state.items.map(enemy => {
        if(id === enemy.id) {
          return {
            ...enemy,
            hp: hp
          }
        }
        return enemy;
      })

      return {
        ...state,
        items: newItems
      }
    }
      
    case KILL_ENEMY: {
      const id = action.payload;
      const newItems = state.items.filter(enemy => enemy.id !== id);
      return {
        ...state,
        items: newItems
      }
    }

    default:
      return state;
  }
}