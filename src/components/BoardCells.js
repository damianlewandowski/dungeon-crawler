import React from 'react';
import BoardCell from '../components/BoardCell';
import { DIMENSIONS } from '../constants/boardCells';
import Player from '../containers/Player';

const styles = {
  position: "relative",
  display: "flex",
  flexWrap: "wrap",
  margin: "100px auto",
  background: "crimson",
}

const BoardCells = ({ cells }) => (
  <ul 
    className="BoardCells"
    style={{
      ...styles,
      ...DIMENSIONS
    }}
  >
    {
      cells.map(
        (row, rowi) => (
          row.map(
            (letter, coli) => (
              <BoardCell 
                key={`${rowi}${coli}`}
                FOR_DEBUGGING={`${rowi} ${coli}`}
                letter={letter}
              />
            )
          )
        )
      )
    }

    <li><Player /></li>
  </ul>
)

export default BoardCells;