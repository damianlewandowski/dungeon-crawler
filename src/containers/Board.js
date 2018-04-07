import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoardCells from '../components/BoardCells';
import { updateBoard, updateRooms } from '../actions';
import { BOARD_SIZE, ROOMS } from '../constants/board';
import { PLAYER_VIEW_MODE } from '../constants/displayModes';
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

  calculateCellsToRender(displayMode) {
    const { playerPos, cells } = this.props;
    const [x, y] = playerPos;
    // Display only a couple of blocks around the player    
    if(displayMode === PLAYER_VIEW_MODE) {
      return cells
        .slice(y - 5, y + 5)
        .map(row => row.slice(x - 5, x + 5))
    }

    return cells;
  }

  render() {
    const { displayMode } = this.props;
    const cellsToRender = this.calculateCellsToRender(displayMode)

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