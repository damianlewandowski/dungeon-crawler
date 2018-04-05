import React from 'react';
import BoardCell from '../components/BoardCell';
import './BoardCells.css';

const BoardCells = ({ cells }) => (
  <ul className="BoardCells">
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
  </ul>
)

export default BoardCells;