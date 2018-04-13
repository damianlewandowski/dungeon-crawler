import React from 'react';
import { connect } from 'react-redux';
import { changeDisplayMode } from '../actions';
import { DUNGEON_VIEW_MODE, PLAYER_VIEW_MODE } from '../constants/displayModes';

const ModeBtn = ({ dispatch, mode }) => (
  <button onClick={() => 
    mode === PLAYER_VIEW_MODE
      ? dispatch(changeDisplayMode(DUNGEON_VIEW_MODE))
      : dispatch(changeDisplayMode(PLAYER_VIEW_MODE))
  }
    style={{
      padding: "6px 12px",
      background: "#fff",
      color: "#111",
      border: "1px solid #333",
      borderRadius: "4px",
    }}
  >
    Change View
  </button>
)

const mapStateToProps = state => ({
  mode: state.displayMode
})

export default connect(mapStateToProps)(ModeBtn);