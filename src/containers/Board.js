import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoardCells from '../components/BoardCells';
import { initializeBoard } from '../actions';
import { BOARD_SIZE, ROOMS } from '../constants/board';
import Dungeon from '../util/Dungeon';

class Board extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const dungeon = new Dungeon(...BOARD_SIZE, ROOMS);
    const board = dungeon.generateRooms(dungeon.initializeBoard());
    dispatch(initializeBoard(board));
  }

  render() {
    return (
      <div>
        <BoardCells cells={this.props.cells} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cells: state.board
  }
}

export default connect(mapStateToProps)(Board);