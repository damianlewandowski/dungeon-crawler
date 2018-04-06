import React, { Component } from 'react';
import PlayerCell from '../components/PlayerCell';
import { connect } from 'react-redux';
import { CELL_DIMENSIONS } from '../constants/boardCell';
import { rand } from '../util/util';

class Player extends Component {
  componentDidMount() {
    document.addEventListener("keydown", e => {
      // Add player movements
    })
  }

  componentWillReceiveProps(nextProps) {
    const { rooms } = nextProps;
    const room = rooms[rand(0, rooms.length - 1)];
    const randCoords = room.coords[rand(0, room.coords.length - 1)];
    this.positionStyles = {
      left: `${randCoords[0] * CELL_DIMENSIONS.width}%`,
      top: `${randCoords[1] * CELL_DIMENSIONS.height}%`,
    }
  }

  render() {
    return (
      <div>
        <PlayerCell positionStyles={this.positionStyles} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rooms: state.rooms
})

export default connect(mapStateToProps)(Player);