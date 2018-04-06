import React from 'react';
import BoardCell from '../components/BoardCell';
import { DUNGEON_VIEW, PLAYER_VIEW } from '../constants/boardCells';
import { PLAYER_VIEW_MODE, DUNGEON_VIEW_MODE } from '../constants/displayModes';
import Player from '../containers/Player';

const styles = {
  position: "relative",
  display: "flex",
  flexWrap: "wrap",
  margin: "100px auto",
  background: "crimson",
}

const BoardCells = ({ cells, mode }) => (
  <ul 
    className="BoardCells"
    style={
      mode === PLAYER_VIEW_MODE
       ? {
         ...styles,
         ...PLAYER_VIEW
       }
       : {
         ...styles,
         ...DUNGEON_VIEW
       }
    }
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
                mode={mode}
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