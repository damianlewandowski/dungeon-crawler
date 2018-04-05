import React from 'react';
import { WALL, ROOM } from '../constants/boardCell';

const COMMON_STYLES = {
  width: "2%",
  height: "1%",
}

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
    <li onClick={onClick} style={{...COMMON_STYLES, ...style}}></li>
  );
};

export default BoardCell;