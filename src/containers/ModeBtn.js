import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeDisplayMode } from '../actions';
import { DUNGEON_VIEW_MODE, PLAYER_VIEW_MODE } from '../constants/displayModes';

const ModeBtn = ({ dispatch, mode }) => (
  <button onClick={() => 
    mode === PLAYER_VIEW_MODE
      ? dispatch(changeDisplayMode(DUNGEON_VIEW_MODE))
      : dispatch(changeDisplayMode(PLAYER_VIEW_MODE))
  }>
    Change View
  </button>
)

const mapStateToProps = state => ({
  mode: state.displayMode
})

export default connect(mapStateToProps)(ModeBtn);