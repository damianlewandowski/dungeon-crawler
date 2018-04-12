import React from 'react';
import PropTypes from 'prop-types';
import { PLAYER_VIEW_MODE } from '../constants/displayModes';
import { 
  WALL, 
  ROOM, 
  DUNGEON_CELL_DIMENSIONS,
  PLAYER_CELL_DIMENSIONS
} from '../constants/boardCell';

import dirtImg from '../images/grounds/dirt.png';
import winterGroundImg from '../images/grounds/ice.png';
import grassImg from '../images/grounds/grass.png';
import brickImg from '../images/grounds/brick.png';
import coldLavaImg from '../images/grounds/cold_lava.png';
import hotLavaImg from '../images/grounds/hot_lava.png';

import wallImg from '../images/wall.png';

const BoardCell = ({ letter, mode, dungeonLevel }) => {
  const determineColor = letter => {
    switch(letter) {
      case WALL:
        switch(dungeonLevel) {
          case 1:
            return {
              background: `url(${wallImg})`,
            }
          default:
            return {
              background: `url(${wallImg})`,
            }
        }
      case ROOM:
        switch(dungeonLevel) {
          case 1:
            return {
              background: `url(${dirtImg})`,              
              backgroundSize: "cover"
            }
            case 2:
              return {
                background: `url(${winterGroundImg})`,
                backgroundSize: "cover"              
              }
            case 3:
              return {
                background: `url(${grassImg})`,
                backgroundSize: "cover"              
              }
            case 4:
              return {
                background: `url(${brickImg})`,
                backgroundSize: "cover"              
              }
            case 5:
              return {
                background: `url(${coldLavaImg})`,
                backgroundSize: "cover"              
              }
            case 6:
              return {
                background: `url(${hotLavaImg})`,
                backgroundSize: "cover"              
              }
          default:
            return {
              background: `url(${dirtImg})`,
            }
        }
      default:
        return {
          background: `url(${dirtImg})`,
          backgroundSize: "cover",
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