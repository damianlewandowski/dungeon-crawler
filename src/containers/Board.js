import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoardCells from '../components/BoardCells';
import { updateBoard, updateRooms } from '../actions';
import { BOARD_SIZE, ROOMS } from '../constants/board';
import { PLAYER_VIEW_MODE } from '../constants/displayModes';
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
    const [rows, cols] = BOARD_SIZE;

    // Display only a couple of blocks around the player    
    if(displayMode === PLAYER_VIEW_MODE) {
      let xBorderAlignment = 0;
      if(x < 5) {
        xBorderAlignment = 5 - x;
      } else if(x > cols - 5) {
        xBorderAlignment = cols - x - 5;
      }
      
      let yBorderAlignment = 0;
      if(y < 5) {
        yBorderAlignment = 5 - y;
      } else if(y > rows - 5) {
        yBorderAlignment = rows - y - 5;
      }

      return cells
        .slice(y - 5 + yBorderAlignment, y + 5 + yBorderAlignment)
        .map(row => row.slice(x - 5 + xBorderAlignment, x + 5 + xBorderAlignment))
    }

    return cells;
  }

  calculateCellBrightness = (row, col) => {
    const { playerPos } = this.props;
    const [x, y] = playerPos;

    if(Math.abs(row - y) > 3 || Math.abs(col - x) > 3) {
      console.log("row - y", row - y);
      console.log("col - x", col - x);
      return 0.5;
    }
    console.log(0);
    return 0;
  }

  render() {
    const { displayMode } = this.props;
    const cellsToRender = this.calculateCellsToRender(displayMode)

    return (
      <div>
        <BoardCells 
          cells={cellsToRender} 
          mode={displayMode} 
          calculateCellBrightness={this.calculateCellBrightness}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cells: state.board,
    playerPos: state.player.pos,
    displayMode: state.displayMode
  }
}

export default connect(mapStateToProps)(Board);