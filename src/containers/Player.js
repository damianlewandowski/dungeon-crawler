import React, { Component } from 'react';
import PlayerCell from '../components/PlayerCell';
import { connect } from 'react-redux';
import { CELL_DIMENSIONS } from '../constants/boardCell';
import { rand } from '../util/util';

class Player extends Component {
  state = {
    left: 0,
    top: 0,
  }

  componentDidMount() {
    document.addEventListener("keydown", e => {
      e.preventDefault()
      switch(e.keyCode) {
        case 37:
          this.setState(prevProps => ({
            left: prevProps.left - CELL_DIMENSIONS.width
          }))
          break;
          case 38:
          this.setState(prevProps => ({
            top: prevProps.top - CELL_DIMENSIONS.height
          }))
          break;
          case 39:
          this.setState(prevProps => ({
            left: prevProps.left + CELL_DIMENSIONS.width
          }))
          break;
          case 40:
          this.setState(prevProps => ({
            top: prevProps.top + CELL_DIMENSIONS.height
          }))
          break;
      }
    })
  }

  componentWillReceiveProps(nextProps) {
    const { rooms } = nextProps;
    const room = rooms[rand(0, rooms.length - 1)];
    const randCoords = room.coords[rand(0, room.coords.length - 1)];
    this.setState({
      left: randCoords[0] * CELL_DIMENSIONS.width,
      top: randCoords[1] * CELL_DIMENSIONS.height,
    })
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
  rooms: state.rooms
})

export default connect(mapStateToProps)(Player);