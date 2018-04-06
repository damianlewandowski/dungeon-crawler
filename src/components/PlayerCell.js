import React from 'react';
import { CELL_DIMENSIONS } from '../constants/boardCell';

const style = { 
  background: "#02cf99",
  position: "absolute",
}

const Player = ({ positionStyles }) => (
  <div style={{
    width: `${CELL_DIMENSIONS.width}%`,
    height: `${CELL_DIMENSIONS.height}%`,
    ...style,
    ...positionStyles}}>
  </div>
)

export default Player;