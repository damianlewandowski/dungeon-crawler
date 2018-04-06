import React from 'react';
import { WALL, ROOM, PLAYER, CELL_DIMENSIONS } from '../constants/boardCell';

const BoardCell = ({ letter, FOR_DEBUGGING }) => {
  const determineStyle = letter => {
    switch(letter) {
      case WALL:
        return {
          background: "#555",
        }
      case ROOM:
        return {
          background: "#fff",
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

  // TODO
  // FOR DEBUGGING
  // REMOVE WHEN FINMISHED
  // I AM SERIOUS REMOVE IT!!
  const onClick = () => {
    console.log(FOR_DEBUGGING);
  }

  const style = determineStyle(letter);

  return (
    <li onClick={onClick} style={{
      width: `${CELL_DIMENSIONS.width}%`,
      height: `${CELL_DIMENSIONS.height}%`, 
      ...style}}></li>
  );
};

export default BoardCell;