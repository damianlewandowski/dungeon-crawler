import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoardCells from '../components/BoardCells';
import { updateBoard, updateRooms } from '../actions';
import { BOARD_SIZE, ROOMS } from '../constants/board';
import { DUNGEON_VIEW_MODE } from '../constants/displayModes';
import { BORDER } from '../constants/boardCell'
import Dungeon from '../util/Dungeon';

class Board extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const dungeon = new Dungeon(...BOARD_SIZE, ROOMS);
    const board = dungeon.generateRooms(dungeon.initializeBoard());
    dispatch(updateBoard(board));
    const rooms = dungeon.getRooms();
    dispatch(updateRooms(rooms));
  }

  render() {
    // Display only a couple of blocks around the player
    const { playerPos, cells, displayMode } = this.props;
    const cellsToRender = displayMode === DUNGEON_VIEW_MODE
      ? cells
      : cells
        .slice(playerPos[1] - 5, playerPos[1] + 5)
        .map(row => row.slice(playerPos[0] - 5, playerPos[0] + 5))
  
    // Close to board's border
    if(cellsToRender.length < 10) {
      // Fill up the space with border
      for(let i = cellsToRender.length; i < 10; i++) {
        let row = []
        for(let j = 0; j < 10; j++) {
          row.push(BORDER)
        }
        cellsToRender.push(row)
      }
    }

    return (
      <div>
        <BoardCells cells={cellsToRender} mode={displayMode} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cells: state.board,
    playerPos: state.playerPos,
    displayMode: state.displayMode
  }
}

export default connect(mapStateToProps)(Board);