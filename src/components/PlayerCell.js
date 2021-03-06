import React from 'react';
import { DUNGEON_CELL_DIMENSIONS, PLAYER_CELL_DIMENSIONS } from '../constants/boardCell';
import { PLAYER_VIEW_MODE } from '../constants/displayModes';
import playerImg from '../images/player.png';

const style = { 
  background: `url(${playerImg})`,
  backgroundSize: "cover",  
  position: "absolute",
}

const Player = ({ positionStyles, mode }) => {
  return (
    <div
    style={
      mode === PLAYER_VIEW_MODE
        ? {
          width: `${PLAYER_CELL_DIMENSIONS.width}%`,
          height: `${PLAYER_CELL_DIMENSIONS.height}%`, 
          ...style,
          ...positionStyles
        }
        : {
          width: `${DUNGEON_CELL_DIMENSIONS.width}%`,
          height: `${DUNGEON_CELL_DIMENSIONS.height}%`, 
          ...style,
          ...positionStyles
        }
    }
  >
  </div>
  )
}


export default Player;