import React from 'react';
import PropTypes from 'prop-types';
import { PLAYER_VIEW_MODE } from '../constants/displayModes';
import { 
  WALL, 
  ROOM, 
  PLAYER, 
  DUNGEON_CELL_DIMENSIONS,
  PLAYER_CELL_DIMENSIONS
} from '../constants/boardCell';
import groundImg from '../images/ground.png';
import wallImg from '../images/wall.png';

const BoardCell = ({ letter, mode }) => {
  const determineColor = letter => {
    switch(letter) {
      case WALL:
        return {
          background: `url(${wallImg})`,
        }
      case ROOM:
        return {
          background: `url(${groundImg})`,
          backgroundSize: "cover",
        }
      case PLAYER:
        return {
          background: "#1e90ff"
        }
      default:
        return {
          background: "#8b4513",
        }
    }
  }

  const style = determineColor(letter);

  return (
    <li 
      style={
        mode === PLAYER_VIEW_MODE
          ? {
            width: `${PLAYER_CELL_DIMENSIONS.width}%`,
            height: `${PLAYER_CELL_DIMENSIONS.height}%`, 
            ...style
          }
          : {
            width: `${DUNGEON_CELL_DIMENSIONS.width}%`,
            height: `${DUNGEON_CELL_DIMENSIONS.height}%`, 
            ...style
          }
      }
    >
    </li>
  );
};

BoardCell.propTypes = {
  letter: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
}

export default BoardCell;