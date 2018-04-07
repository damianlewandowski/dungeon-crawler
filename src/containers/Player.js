import React, { Component } from 'react';
import PlayerCell from '../components/PlayerCell';
import { connect } from 'react-redux';
import { updatePlayerPos } from '../actions';
import { BOARD_SIZE } from '../constants/board';
import { 
  DUNGEON_CELL_DIMENSIONS,
  PLAYER_CELL_DIMENSIONS,
  WALL } from '../constants/boardCell';
import { PLAYER_VIEW_MODE } from '../constants/displayModes';
import { rand } from '../util/util';

class Player extends Component {
  state = {
    left: 0,
    top: 0,
  }

  componentDidMount() {
    document.addEventListener("keydown", e => {
      const { playerPos, dispatch } = this.props;
      const [x, y] = playerPos;

      switch(e.keyCode) {
        case 37:
          if(this.canMove(e.keyCode)) {
            dispatch(
              updatePlayerPos([x - 1, y])
            )
          }      
          e.preventDefault();
          break;
        case 38:
          if(this.canMove(e.keyCode)) {
            dispatch(
              updatePlayerPos([x, y - 1])
            )
          }   
          e.preventDefault()
          break;
        case 39:
          if(this.canMove(e.keyCode)) {
            dispatch(
              updatePlayerPos([x + 1, y])
            )
          }
          e.preventDefault();
          break;
        case 40:
          if(this.canMove(e.keyCode)) {
            dispatch(
              updatePlayerPos([x, y + 1])
            )
          }
          e.preventDefault()
          break;
        default:
          break;
      }
    })
  }

  canMove = dir => {
    const { board } = this.props;
    const [col, row] = this.props.playerPos

    switch(dir) {
      case 37:
        if(board[row][col - 1] === WALL) {
          return false;
        } 
        return true;
      case 38:
        if(board[row - 1][col] === WALL) {
          return false;
        } 
        return true;
      case 39:
        if(board[row][col + 1] === WALL) {
          return false;
        } 
        return true;
      case 40:
        if(board[row + 1][col] === WALL) {
          return false;
        } 
        return true;
      default:
        break;
    }
  }

  calculateDisplayedPos = (mode) => {
    const [x, y] = this.props.playerPos;
    const { width, height } = PLAYER_CELL_DIMENSIONS
    console.log(`x:${x}, y:${y}`);
    if(mode === PLAYER_VIEW_MODE) {
      const [rows, cols] = BOARD_SIZE;
      let left = 50;
      let top = 50;

      if(x < 5) {
        left = x * width;
      } else if(x > cols - 5) {
        left = 100 - (cols - x) * 10;
      }

      if(y < 5) {
        top = y * height;
      } else if(y > rows - 5) {
        top = 100 - (rows - y) * 10;
      }

      return [left, top]
    }

    return [
      x * DUNGEON_CELL_DIMENSIONS.width,
      y * DUNGEON_CELL_DIMENSIONS.height
    ]
  }

  // Will run only when generating new dungeon
  componentWillReceiveProps(nextProps) {
    if(nextProps.playerPos.length === 0) {
      const { rooms } = nextProps;
      const room = rooms[rand(0, rooms.length - 1)];
      const randCoords = room.coords[rand(0, room.coords.length - 1)];
      this.props.dispatch(updatePlayerPos(randCoords))
    }
  }

  render() {
    const { mode } = this.props;
    // const top = y * DUNGEON_CELL_DIMENSIONS.height;
    // const left = x * DUNGEON_CELL_DIMENSIONS.width;
    const [left, top] = this.calculateDisplayedPos(mode)

    return (
      <div>
        <PlayerCell
          mode={mode} 
          positionStyles={{
          left: `${left}%`,
          top: `${top}%`,
          }} 
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rooms: state.rooms,
  board: state.board,
  playerPos: state.playerPos,
  mode: state.displayMode
})

export default connect(mapStateToProps)(Player);