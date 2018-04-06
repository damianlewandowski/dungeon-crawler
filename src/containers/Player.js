import React, { Component } from 'react';
import PlayerCell from '../components/PlayerCell';
import { connect } from 'react-redux';
import { CELL_DIMENSIONS, WALL } from '../constants/boardCell';
import { rand } from '../util/util';

class Player extends Component {
  state = {
    left: 0,
    top: 0,
  }

  componentDidMount() {
    document.addEventListener("keydown", e => {
      switch(e.keyCode) {
        case 37:
          if(this.canMove(e.keyCode)) {
            this.setState(prevProps => ({
              left: prevProps.left - CELL_DIMENSIONS.width
            }))
          }      
          e.preventDefault();
          break;
          case 38:
            if(this.canMove(e.keyCode)) {
              this.setState(prevProps => ({
                top: prevProps.top - CELL_DIMENSIONS.height
              }))
            }   
            e.preventDefault()
            break;
          case 39:
            if(this.canMove(e.keyCode)) {
              this.setState(prevProps => ({
                left: prevProps.left + CELL_DIMENSIONS.width
              }))
            }
            e.preventDefault();
            break;
          case 40:
            if(this.canMove(e.keyCode)) {
              this.setState(prevProps => ({
                top: prevProps.top + CELL_DIMENSIONS.height
              }))
            }
            e.preventDefault()
            break;
      }
    })
  }

  canMove = dir => {
    const { board } = this.props;
    const { top, left } = this.state;
    const row = top / CELL_DIMENSIONS.height;
    const col = left / CELL_DIMENSIONS.width;
    console.log(row, col);

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
    }
  }

  // Will run only when generating new dungeon
  componentWillReceiveProps(nextProps) {
    const { rooms } = nextProps;
    const room = rooms[rand(0, rooms.length - 1)];
    const randCoords = room.coords[rand(0, room.coords.length - 1)];
    this.setState({
      left: randCoords[0] * CELL_DIMENSIONS.width,
      top: randCoords[1] * CELL_DIMENSIONS.height,
    })
    console.log("eh");
  }

  render() {
    return (
      <div>
        <PlayerCell positionStyles={{
          left: `${this.state.left}%`,
          top: `${this.state.top}%`,
        }} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rooms: state.rooms,
  board: state.board,
})

export default connect(mapStateToProps)(Player);