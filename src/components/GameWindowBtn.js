import React from 'react';
import PropTypes from 'prop-types';
import './GameWindowBtn.css';

const GameWindowBtn = ({ onClick, children }) => {
  return (
    <button
      className="show-menu-btn"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

GameWindowBtn.propTypes = {
  onClick: PropTypes.func,
}

export default GameWindowBtn;