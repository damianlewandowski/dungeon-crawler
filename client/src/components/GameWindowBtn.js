import React from 'react';
import PropTypes from 'prop-types';
import './GameWindowBtn.css';

const GameWindowBtn = ({ onClick, text, icon, iconSide = "left" }) => {
  return (
    <button
      className="show-menu-btn"
      onClick={onClick}
    >
      {iconSide === "left" ? <i className={icon}></i> : null}    
      <span>{text}</span>
      {iconSide === "right" ? <i className={icon}></i> : null}
    </button>
  );
};

GameWindowBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default GameWindowBtn;